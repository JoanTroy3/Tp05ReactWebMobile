const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, '../..');

const config = getDefaultConfig(projectRoot);

// 1. Watch all files in the monorepo (so changes in packages/core are detected)
config.watchFolders = [workspaceRoot];

// 2. Resolve modules from both node_modules directories
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
];

// 3. Force Metro to resolve (sub)dependencies from the `nodeModulesPaths`
// config.resolver.disableHierarchicalLookup = true;

module.exports = config;

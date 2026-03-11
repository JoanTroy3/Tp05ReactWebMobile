# TP-06 : React Avancé (Web + Mobile)

Bienvenue dans le TP-06 ! Ce projet est un "monorepo" qui contient à la fois l'application Web et l'application Mobile, partageant la même logique métier.

## 📂 Structure du projet

- **`apps/web`** : L'application React (Vite). C'est ici que vous coderez `UserProfile.web.jsx`.
- **`apps/mobile`** : L'application React Native (Expo). C'est ici que vous coderez `UserProfile.native.js`.
- **`packages/core`** : La logique partagée (Hooks). C'est ici que vous coderez `useUserProfile.js`.

## 🚀 Installation

À la racine du projet, installez toutes les dépendances en une seule commande :

```bash
npm install
```

## 💻 Lancer le Web

Pour démarrer l'application Web en mode développement :

```bash
npm run dev -w apps/web
```

Ou simplement aller dans `apps/web` et faire `npm run dev`.

## 📱 Lancer le Mobile

Pour démarrer l'application Mobile avec Expo :

```bash
npm run start -w apps/mobile
```

Ou simplement aller dans `apps/mobile` et faire `npm start`. Appuyez sur `a` pour Android (si simulateur ouvert) ou `i` pour iOS (sur Mac), ou scannez le QR code avec Expo Go.

## 📝 Vos missions

Suivez les instructions du fichier `requirements.md` étape par étape :

1.  **Le Cerveau** : Complétez `packages/core/useUserProfile.js`.
2.  **Le Web** : Complétez `apps/web/src/UserProfile.web.jsx`.
3.  **Le Mobile** : Complétez `apps/mobile/UserProfile.native.js`.

Bon courage ! 🚀

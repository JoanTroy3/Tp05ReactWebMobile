# 📜 Contexte du projet

Vous travaillez pour "OmniProfile", une startup qui souhaite permettre à ses utilisateurs de consulter leur profil sur le web au bureau, et sur leur mobile en déplacement.

Le "Product Owner" est très strict :

1. L'interface Web doit ressembler à une "carte" CSS moderne.
2. L'interface Mobile doit utiliser les composants natifs pour une performance maximale.
3. **Le CTO impose :** Hors de question d'écrire deux fois le code qui récupère les données de l'API. Si on change l'URL de l'API, on ne doit modifier qu'un seul fichier.

## 🛠️ Prérequis techniques

- L'environnement de développement fourni contient déjà un dossier configuré pour le Web (ex: Vite/Next.js) et un pour le mobile (Expo).
- Nous utiliserons l'API publique gratuite : `https://randomuser.me/api/`

---

## Étape 1 : Le Cerveau (La logique partagée)

Nous allons créer un **Custom Hook** qui sera agnostique à la plateforme. Il ne doit contenir **aucune** balise HTML (`div`) ni aucun composant natif (`View`).

**Tâche :** Dans le dossier partagé (ex: `/src/hooks` ou `/packages/core`), créez le fichier `useUserProfile.js` (ou `.ts`).

**Ce hook doit :**

1. Gérer trois états avec `useState` :

- `user` (les données de l'utilisateur, initialement `null`).
- `loading` (booléen, initialement `true`).
- `error` (chaîne de caractères, initialement `null`).

2. Utiliser `useEffect` pour appeler l'API `https://randomuser.me/api/` au montage du composant.
3. Gérer le succès (mettre à jour `user`, passer `loading` à false).
4. Gérer l'échec (mettre à jour `error`, passer `loading` à false).
5. **Retourner** un objet contenant ces trois états : `{ user, loading, error }`.

> 💡 **Indice :** Un `fetch` classique suffit. N'oubliez pas de convertir la réponse en JSON. L'API renvoie un tableau `results`, prenez le premier élément `results[0]`.

---

## Étape 2 : Les Mains Web (L'interface React.js)

Maintenant que le cerveau est prêt, créons le corps pour le Web.

**Tâche :** Dans la partie Web du projet, créez le composant `UserProfile.web.js` (ou `.tsx`).

**Ce composant doit :**

1. Importer et utiliser le hook `useUserProfile`.
2. **Gérer les états de chargement et d'erreur :**

- Si `loading` est true, afficher un simple `<p>Chargement...</p>`.
- Si `error` existe, afficher un message d'erreur en rouge.

3. **Si les données sont là :**

- Afficher une belle carte profil en utilisant des balises HTML : `div` (pour le conteneur), `img` (pour l'avatar : `user.picture.large`), et `h2` ou `p` (pour le nom : `user.name.first` et l'email).
- Utilisez du CSS (ou CSS-in-JS) pour centrer la carte, lui donner une ombre et des coins arrondis.

---

## Étape 3 : Les Mains Mobiles (L'interface React Native)

C'est le moment de vérité. Créons le corps pour le Mobile en réutilisant exactement le même cerveau.

**Tâche :** Dans la partie Mobile du projet (Expo), créez le composant `UserProfile.native.js` (ou `.tsx`).

**Ce composant doit :**

1. Importer et utiliser **le même** hook `useUserProfile`.
2. Importer les primitives de React Native : `View`, `Text`, `Image`, `ActivityIndicator`, `StyleSheet`.
3. **Gérer les états :**

- Si `loading` est true, afficher un `<ActivityIndicator size="large" />`.
- Si `error` existe, afficher un `<Text>` rouge.

4. **Si les données sont là :**

- Construire l'interface. **Attention :** Interdiction d'utiliser `div` ou `img`.
- Utilisez `<View>` comme conteneur.
- Utilisez `<Image source={{ uri: user.picture.large }} />` pour l'avatar (n'oubliez pas de lui donner une largeur et hauteur dans les styles, sinon elle ne s'affichera pas !).
- Utilisez `<Text>` pour les informations.

5. Utilisez `StyleSheet.create({})` pour styliser votre carte avec Flexbox.

---

## ✅ Critères de succès

Votre TP est validé si :

1. Vous lancez l'app Web et l'app Mobile simultanément.
2. Les deux affichent les données d'un utilisateur (chargement -> affichage).
3. L'interface Web ressemble à une page Web standard (curseur souris, styles CSS).
4. L'interface Mobile ressemble à une app native (scroll fluide, éléments natifs).
5. **Le test ultime :** Modifiez une ligne dans le hook `useUserProfile` (par exemple, ajoutez un `console.log("Appel API")`). Rafraîchissez les deux applications : le log doit apparaître dans les deux consoles.

**🔥 Bonus pour les plus rapides :**
Ajoutez un bouton "Rafraîchir". Le hook devra exposer une fonction `refetch` en plus des états. Sur le Web, utilisez un `<button>`. Sur mobile, utilisez un `<TouchableOpacity>` ou un `<Button>` natif.

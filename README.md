# Local notes
- Run: `npm install` then `npm run dev` (use port 5174 if 5173 is busy).

# Assistant Modèles de Courriels v2

Une application React moderne pour la génération rapide de courriels professionnels à partir de modèles bilingues, avec un éditeur riche et des variables éditables inline.

## 🚀 Démarrer en local

```bash
<<<<<<< HEAD
# Pré-requis: Node 18+ (ou 20+ recommandé)
node -v

# Installer PNPM (Corepack)
corepack enable

# Installer les dépendances
pnpm install

# Lancer le serveur de dev
pnpm dev
# Ouvrir: http://localhost:5174/email-assistant-v2/

# Build de production
pnpm build
# Prévisualiser le build
pnpm preview
# Ouvrir: http://localhost:5174/email-assistant-v2/
=======
# Cloner le repository
git clone https://github.com/snarky1980/email-assistant-v2.git
cd email-assistant-v2

# Installer les dépendances (pnpm recommandé)
pnpm install
# ou avec npm
npm install --legacy-peer-deps

# Lancer en développement
pnpm run dev
# ou avec npm
npm run dev

# Construire pour production
pnpm run build
# ou avec npm
npm run build

# Prévisualiser la build de production
pnpm run preview:prod
>>>>>>> origin/main
```

Notes:
- La config Vite utilise `base: "/email-assistant-v2/"`. L'URL locale inclut donc ce chemin.
- Si le port 5174 est occupé, Vite peut en choisir un autre et l'affichera dans le terminal.

## 🎯 Fonctionnalités principales

- Éditeur riche avec variables en « pastilles » éditables inline (sans afficher le nom des variables)
- Prise en charge du français et de l’anglais pour l’interface et les modèles
- Remplacement des variables en temps réel, avec synchronisation entre l’éditeur et le panneau de variables
- Copie granulaire: Objet seul, Corps seul, ou Objet + Corps
- Sauvegarde automatique des préférences (dernière langue, modèle, etc.)

## ✍️ Éditeur riche et variables inline

L’éditeur du Sujet et du Corps est basé sur des zones contenteditable. Les jetons `<<NomDeVariable>>` des modèles sont rendus comme des pastilles éditables directement dans le texte.

- Chaque pastille affiche uniquement la VALEUR de la variable (le nom interne n’est pas visible)
- Cliquer ou tabuler dans une pastille permet de modifier la valeur directement
- La modification met à jour la variable correspondante et synchronise toutes les occurrences dans le sujet et le corps
- Supprimer le contenu d’une pastille laisse la pastille vide; la bordure subtile reste pour indiquer une valeur attendue
- Le panneau de variables (à droite) reste synchronisé en lecture/écriture avec ces pastilles

Conseils d’édition:
- Sujet: la touche Entrée est désactivée (ligne unique). Utilisez le Corps pour les retours à la ligne.
- Corps: Entrée crée un nouveau paragraphe (ligne). Le copier/coller garde le texte brut utile.

## 🧩 Modèles et variables

Les modèles sont définis dans `src/assets/complete_email_templates.json`.
- Les champs `subject` et `body` contiennent des jetons `<<Variable>>`.
- La section `variables` définit le type, la description et un exemple utilisé pour initialiser l’éditeur.

Exemple minimal:

```json
{
  "id": "suivi_devis",
  "category": "Devis",
  "title": { "fr": "Suivi de devis", "en": "Quote follow-up" },
  "subject": { "fr": "Suivi pour <<Client>>", "en": "Follow-up for <<Client>>" },
  "body": { "fr": "Bonjour <<Client>>, ...", "en": "Hello <<Client>>, ..." },
  "variables": ["Client"]
}
```

## 📋 Boutons de copie

- Copier Objet: copie uniquement le texte du sujet tel qu’affiché dans l’éditeur
- Copier Corps: copie uniquement le texte du corps tel qu’affiché
- Copier Tout: concatène Sujet + deux sauts de ligne + Corps
- Copier Lien: copie une URL partageable du modèle courant (avec langue et sélection)

<<<<<<< HEAD
Astuce: la copie lit le texte de l’éditeur riche (conversion en texte brut), donc ce que vous voyez est ce que vous copiez.

## 🔄 Réinitialiser

- Le bouton Réinitialiser recharge les exemples de variables du modèle sélectionné et reconstruit les pastilles dans l’éditeur
- Utile pour repartir d’un état « propre » si les variables ont été trop modifiées

## ⌨️ Raccourcis utiles

- Tab / Shift+Tab: naviguer entre les pastilles de variables
- Cmd/Ctrl+C: copie standard selon la sélection
- Cmd/Ctrl+A: sélectionner tout dans l’éditeur courant

## 🌐 Déploiement (GitHub Pages)

Le site est publié sur GitHub Pages à: https://snarky1980.github.io/email-assistant-v2/

- La base Vite est `"/email-assistant-v2/"`. Conservez-la pour un routage correct sur Pages.
- Un fallback 404 pour SPA est géré lors du déploiement.

## ❗ Dépannage

- Page locale vide ou 404: vérifiez l’URL inclut `/email-assistant-v2/` (ex: http://localhost:5174/email-assistant-v2/)
- Impossible d’éditer correctement: rafraîchissez la page; si besoin, cliquez dans une zone vide de l’éditeur pour replacer le curseur
- Variables non synchronisées: utilisez Réinitialiser pour régénérer les pastilles, puis réessayez

## 🛠️ Pile technique

- React + Vite
- Tailwind CSS
- Icônes Lucide
=======
### Configuration automatique
Chaque push sur la branche `main` déclenche automatiquement :
1. Installation des dépendances avec pnpm
2. Build de production optimisé
3. Déploiement sur GitHub Pages
>>>>>>> origin/main

### URL de déploiement
L'application sera accessible à l'adresse :
`https://snarky1980.github.io/email-assistant-v2/`

### Déploiement manuel
Pour déployer manuellement :
```bash
# Build de production
pnpm run build

# Les fichiers de production se trouvent dans le dossier 'dist/'
```

### Troubleshooting Déploiement

Si vous rencontrez des problèmes de déploiement :

1. **Erreurs de dépendances** : Assurez-vous d'utiliser pnpm v8+ et Node.js 18+
2. **Échec de build** : Vérifiez que toutes les dépendances sont compatibles avec React 19
3. **GitHub Pages non disponible** : Activez GitHub Pages dans les paramètres du repository et sélectionnez "GitHub Actions" comme source

```bash
# Installation correcte des dépendances
pnpm install --no-frozen-lockfile

# Test local
pnpm run lint  # Doit passer sans erreurs
pnpm run build # Doit créer le dossier dist/
```

### Configuration GitHub Pages
1. Aller dans Settings > Pages dans le repository GitHub
2. Sélectionner "GitHub Actions" comme source
3. Le workflow de déploiement sera automatiquement détecté

## 🔧 Dépannage

### Problèmes de dépendances
Si vous rencontrez des erreurs lors de l'installation :
```bash
# Utiliser pnpm (recommandé)
pnpm install --no-frozen-lockfile

# Ou avec npm et legacy peer deps
npm install --legacy-peer-deps

# Effacer le cache si nécessaire
npm cache clean --force
```

### Problèmes de build
Si le build échoue :
```bash
# Vérifier la version de Node.js (v18+ recommandé)
node --version

# Réinstaller les dépendances
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

## 📝 Licence

Projet destiné à un usage interne du Bureau de la traduction.

## 🤝 Contribution

- Créez une branche pour vos modifications
- Testez localement (`pnpm dev`)
- Ouvrez une Pull Request avec un résumé clair des changements

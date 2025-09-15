# Assistant Modèles de Courriels v2

Une application React moderne pour la gestion et la génération de modèles de courriels professionnels avec toutes les améliorations intégrées.

## 🎯 Fonctionnalités

### ✅ Interface Moderne
- Design élégant avec gradients et animations fluides
- Interface responsive et optimisée
- Navigation intuitive et ergonomique

### ✅ Gestion Multilingue
- **Interface bilingue** : Français/Anglais
- **Modèles bilingues** : Sélection indépendante de la langue des templates
- Commutation fluide entre les langues

### ✅ Badges de Catégorie Colorés
- **Devis et estimations** : Badge bleu
- **Gestion de projets** : Badge vert
- **Problèmes techniques** : Badge rouge
- **Services spécialisés** : Badge ambre
- **Communications générales** : Badge violet

### ✅ Validation des Variables
- Validation en temps réel des champs
- Codes couleur par type de variable
- Messages de validation avec "OK"
- Bordures colorées selon l'état

### ✅ Surlignement des Variables
- Variables surlignées avec couleurs distinctives
- Identification visuelle par type
- Aperçu avec variables remplacées

### ✅ Copie Granulaire
- **Copier le lien** : Partage direct du template
- **Copier Objet** : Copie uniquement l'objet
- **Copier Corps** : Copie uniquement le corps du message
- **Copier Tout** : Copie objet + corps complet
- **Réinitialiser** : Reset des variables

### ✅ Fonctionnalités Avancées
- Recherche en temps réel dans les templates
- Filtrage par catégorie
- Sauvegarde automatique des préférences
- Support des liens profonds pour partage
- Raccourcis clavier pour une utilisation rapide

## 🚀 Utilisation

1. **Sélectionnez** un modèle dans la liste de gauche
2. **Ajustez** les variables selon vos besoins
3. **Éditez** directement le contenu final
4. **Copiez** l'email vers votre client de messagerie

## 🛠️ Technologies

- **React** - Interface utilisateur
- **Vite** - Build tool moderne
- **Tailwind CSS** - Styles utilitaires
- **Lucide React** - Icônes modernes

## 📦 Installation Locale

```bash
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
```

## 🔧 Modification des Modèles

Les modèles d'email se trouvent dans `src/assets/complete_email_templates.json`.

### Ajouter un nouveau modèle :

```json
{
  "id": "mon_nouveau_modele",
  "category": "Ma Catégorie",
  "title": {
    "fr": "Titre en français",
    "en": "Title in English"
  },
  "description": {
    "fr": "Description en français",
    "en": "Description in English"
  },
  "subject": {
    "fr": "Objet: <<Variable>>",
    "en": "Subject: <<Variable>>"
  },
  "body": {
    "fr": "Corps du message en français...",
    "en": "Message body in English..."
  },
  "variables": ["Variable"]
}
```

## 🌐 Déploiement

Ce projet est configuré pour un déploiement automatique sur GitHub Pages via GitHub Actions.

### Configuration automatique
Chaque push sur la branche `main` déclenche automatiquement :
1. Installation des dépendances avec pnpm
2. Build de production optimisé
3. Déploiement sur GitHub Pages

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

Ce projet est destiné à un usage interne du Bureau de la traduction.

## 🤝 Contribution

Pour ajouter des modèles ou améliorer l'interface :
1. Forkez le repository
2. Créez une branche pour vos modifications
3. Testez vos changements localement
4. Soumettez une Pull Request

## 📞 Support

Pour toute question ou problème, contactez l'équipe de développement.

---

**Bureau de la traduction** - Assistant pour rédaction de courriels aux clients


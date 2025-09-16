# Local notes
- Run: `npm install` then `npm run dev` (use port 5174 if 5173 is busy).

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
git clone https://github.com/VOTRE-USERNAME/email-assistant.git
cd email-assistant

# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Construire pour production
npm run build
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

## 🌐 Déploiement (GitHub Pages)

Déploiement automatique sur GitHub Pages via GitHub Actions pour le dépôt
`snarky1980/email-assistant-v2`.

### URL du site
- https://snarky1980.github.io/email-assistant-v2/

### Prérequis
- Le dépôt doit être public (ou plan supportant Pages pour dépôt privé)
- Les GitHub Actions doivent être activées sur le dépôt
- La configuration Vite utilise la base: `/email-assistant-v2/`

### Déclencher un déploiement
1. Pousser sur la branche `main` (ou cliquer sur « Run workflow » depuis l’onglet Actions)
2. Le workflow « Deploy to GitHub Pages » va:
   - Installer les dépendances
   - Construire l’app (`pnpm build`)
   - Ajouter un fallback `404.html` pour SPA
   - Déployer sur Pages

### Vérifier le déploiement
- Onglet Actions → dernier run « Deploy to GitHub Pages »
- Ouvrir le job `deploy` et repérer `page_url`
- Tester l’URL: https://snarky1980.github.io/email-assistant-v2/

### Paramètres GitHub Pages
- Une fois le premier déploiement réussi, la page « Settings → Pages » affiche
  « Source: GitHub Actions ». L’environnement `github-pages` est créé
  automatiquement par `actions/deploy-pages`.

### Dépannage rapide
- 404 sur les routes internes: la fallback `404.html` est incluse par le workflow
- Page blanche après déploiement: vérifier que la base Vite est bien `/email-assistant-v2/`
- Rien ne se déploie: vérifier que vous avez poussé sur `main` et que le workflow a le statut « success »
- URL différente: vérifiez « Settings → Pages » pour l’URL exacte exposée par GitHub

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

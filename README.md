# Assistant Modèles de Courriels - Bureau de la traduction

## 🎯 OBJECTIF PRINCIPAL NON ATTEINT

### Ce qui est demandé exactement :
**SURLIGNER/COLORER les variables `<<variable>>` directement dans les champs d'édition (textarea)**

Comme dans un éditeur de code où la syntaxe est colorée en temps réel :
- Quand l'utilisateur tape `<<NuméroProjet>>` dans un textarea
- Cette variable doit apparaître **surlignée/colorée** (ex: fond jaune, texte orange)
- **Directement dans le champ d'édition**, pas dans un panneau séparé
- En temps réel pendant que l'utilisateur tape

### Exemple visuel souhaité :
```
Textarea contenant : "Projet <<NuméroProjet>> pour <<Client>>"
                              ^^^^^^^^^^^^^^^^     ^^^^^^^^^^
                              (surligné jaune)   (surligné jaune)
```

## 🚫 Ce qui NE fonctionne PAS actuellement

### Tentatives échouées :
1. **Composants complexes** → Page blanche en production
2. **Overlay/superposition** → Texte illisible, problèmes de synchronisation
3. **Panneaux latéraux** → Pas ce qui est demandé (variables pas dans le texte)
4. **Badges "Variables détectées"** → Inutile, ne montre pas QUELLES variables

### Problème technique principal :
- Les textareas HTML standards ne supportent pas le HTML/CSS à l'intérieur
- Les solutions `contenteditable` causent des problèmes de synchronisation
- Les overlays créent des problèmes de lisibilité

## ✅ État actuel de l'application

### Ce qui fonctionne :
- ✅ Interface complète (recherche, catégories, langues)
- ✅ 22 modèles de courriels disponibles
- ✅ Système de variables avec validation
- ✅ Remplacement automatique des variables
- ✅ Boutons de copie
- ✅ Police moderne (Inter)
- ✅ Interface responsive
- ✅ Pas de page blanche (version stable)

### Ce qui manque :
- ❌ **Surlignage des variables dans les champs d'édition**

## 🛠️ Structure technique

### Fichiers principaux :
- `src/App.jsx` - Application principale
- `src/components/VariableDetector.jsx` - Tentative actuelle (panneau latéral)
- `public/complete_email_templates.json` - Données des modèles

### Technologies utilisées :
- React 18
- Vite
- Tailwind CSS
- shadcn/ui components

## 💡 Solutions possibles à explorer

### Approche 1 : Éditeur riche (Monaco/CodeMirror)
```jsx
import { Editor } from '@monaco-editor/react'

// Configurer la coloration syntaxique pour les variables <<>>
```

### Approche 2 : Contenteditable avec gestion robuste
```jsx
// Div contenteditable avec regex pour colorer les variables
// Gérer la synchronisation curseur/sélection
```

### Approche 3 : Librairie spécialisée
```jsx
// react-highlight-words ou similaire
// Adapter pour les textareas
```

### Approche 4 : Canvas/WebGL overlay
```jsx
// Dessiner le highlighting par-dessus le textarea
// Synchroniser avec le scroll/position
```

## 🎯 Critères de succès

1. **Variables visibles** : `<<variable>>` colorées/surlignées dans le texte
2. **Temps réel** : Highlighting pendant la frappe
3. **Lisible** : Texte normal parfaitement lisible
4. **Stable** : Pas de page blanche en production
5. **Utilisable** : Édition normale (copier/coller, sélection, etc.)

## 🚀 Déploiement

```bash
npm run build
# Déployer le dossier dist/
```

## 📝 Notes pour la reprise du développement

- L'application de base fonctionne parfaitement
- Le seul problème est le highlighting des variables
- Toutes les tentatives précédentes sont dans l'historique Git
- La version actuelle utilise des textareas normaux (stable)
- Le composant VariableDetector peut être remplacé par la solution finale

---

**Objectif final :** Variables `<<>>` surlignées directement dans les champs d'édition, comme dans un éditeur de code.

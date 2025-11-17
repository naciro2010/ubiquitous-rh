# RH Manager - Système de Gestion RH Complet

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## 🎯 Description

RH Manager est une application web complète de gestion des ressources humaines, spécialement conçue pour les entreprises marocaines. Cette solution moderne offre tous les outils nécessaires pour gérer efficacement vos employés, congés, présences, paie et recrutement.

## ✨ Fonctionnalités Principales

### 📊 Tableau de Bord
- Vue d'ensemble des statistiques RH
- Indicateurs clés de performance (KPIs)
- Graphiques et visualisations
- Activités récentes

### 👥 Gestion des Employés
- Fiche employé complète avec champs personnalisables
- Import/Export Excel
- Recherche et filtres avancés
- Gestion des documents personnels
- Organigramme de l'entreprise

### 🌴 Gestion des Congés
- Workflow de demande/approbation
- Différents types de congés (payés, maladie, sans solde, etc.)
- Calendrier des congés
- Suivi des soldes de congés
- Notifications automatiques

### ⏰ Gestion des Présences
- Pointage quotidien
- Suivi des retards et absences
- Gestion des heures supplémentaires
- Rapports d'assiduité
- Statistiques hebdomadaires/mensuelles

### 💰 Gestion de la Paie
- Calcul automatique des salaires
- Cotisations sociales (CNSS) conformes au Maroc
- Calcul de l'IR (Impôt sur le Revenu)
- Génération de bulletins de paie
- Export pour comptabilité

### 🎯 Recrutement (ATS)
- Gestion des offres d'emploi
- Suivi des candidatures
- CVthèque
- Workflow de recrutement
- Tableau de bord recrutement

### ⭐ Évaluation de Performance
- Grilles d'évaluation personnalisables
- Objectifs et suivi
- Historique des évaluations
- Classement des performeurs
- Plans de développement

### 📄 Gestion des Documents
- Stockage centralisé
- Catégorisation par type
- Accès sécurisé
- Recherche et filtres

### ⚙️ Paramètres & Configuration
- Informations de l'entreprise
- Configuration des congés
- Horaires de travail
- Paramètres de paie
- Import/Export des données

## 🚀 Démo en Ligne

Visitez la démo: [https://naciro2010.github.io/ubiquitous-rh/](https://naciro2010.github.io/ubiquitous-rh/)

### Compte de Démonstration

**Administrateur:**
- Email: `admin@demo.com`
- Mot de passe: `demo123`

**Manager RH:**
- Email: `manager@demo.com`
- Mot de passe: `demo123`

## 💻 Technologies Utilisées

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Stockage:** LocalStorage (pour la démo)
- **Design:** CSS moderne avec variables CSS
- **Architecture:** Modulaire et orientée composants

## 🛠️ Installation

### Prérequis

Aucun prérequis particulier. L'application fonctionne directement dans le navigateur.

### Installation Locale

1. Clonez le repository:
```bash
git clone https://github.com/naciro2010/ubiquitous-rh.git
cd ubiquitous-rh
```

2. Ouvrez `index.html` dans votre navigateur

Ou utilisez un serveur local:
```bash
# Avec Python 3
python -m http.server 8000

# Avec Node.js
npx serve
```

3. Accédez à `http://localhost:8000`

## 📁 Structure du Projet

```
ubiquitous-rh/
├── index.html              # Page principale
├── css/
│   ├── main.css           # Styles principaux
│   └── components.css     # Styles des composants
├── js/
│   ├── app.js             # Application principale
│   ├── utils.js           # Fonctions utilitaires
│   ├── data-manager.js    # Gestion des données
│   └── modules/
│       ├── dashboard.js   # Module tableau de bord
│       ├── employees.js   # Module employés
│       ├── leaves.js      # Module congés
│       ├── attendance.js  # Module présences
│       ├── payroll.js     # Module paie
│       ├── recruitment.js # Module recrutement
│       ├── performance.js # Module performance
│       ├── documents.js   # Module documents
│       └── settings.js    # Module paramètres
├── assets/
│   ├── images/
│   └── icons/
└── README.md
```

## 🎨 Fonctionnalités Techniques

### Architecture Modulaire
- Chaque module est indépendant et réutilisable
- Séparation claire des responsabilités
- Code maintenable et extensible

### Gestion des Données
- Stockage local avec LocalStorage
- Export/Import JSON pour sauvegarde
- Export CSV pour rapports
- Données de démo préchargées

### Interface Utilisateur
- Design moderne et responsive
- Navigation intuitive
- Notifications en temps réel
- Formulaires avec validation

### Sécurité
- Authentification utilisateur
- Système de rôles et permissions (RBAC)
- Sanitization des données
- Protection XSS

## 📊 Données de Démonstration

L'application inclut des données de démo pour faciliter la découverte:
- 5 employés fictifs
- Demandes de congés
- Historique de présences (30 jours)
- Offres d'emploi
- Évaluations de performance
- Documents types

## 🌍 Conformité Marocaine

L'application est adaptée aux spécificités du Maroc:
- Calcul CNSS selon les taux marocains (4.48%)
- Calcul IR (Impôt sur le Revenu) progressif
- Types de congés conformes au Code du Travail
- Support du format de date DD/MM/YYYY
- Devise MAD (Dirham)

## 🔧 Personnalisation

### Ajouter un Nouveau Module

1. Créez un fichier dans `js/modules/`:
```javascript
const MonModule = {
    render() {
        return `<div>Mon contenu</div>`;
    },
    init() {
        console.log('Module initialisé');
    }
};
```

2. Ajoutez le module dans `index.html`:
```html
<script src="js/modules/mon-module.js"></script>
```

3. Ajoutez la navigation dans la sidebar

### Modifier les Couleurs

Éditez les variables CSS dans `css/main.css`:
```css
:root {
    --primary: #2563eb;
    --secondary: #10b981;
    --danger: #ef4444;
    /* ... */
}
```

## 📈 Roadmap

### Version 2.0 (À venir)
- [ ] Backend avec Node.js/Express
- [ ] Base de données (MongoDB/PostgreSQL)
- [ ] Authentification JWT
- [ ] API RESTful
- [ ] Upload réel de fichiers
- [ ] Génération PDF des bulletins
- [ ] Notifications par email
- [ ] Application mobile (React Native)
- [ ] Mode hors ligne (PWA)
- [ ] Intégration badgeuse
- [ ] Rapports avancés
- [ ] Dashboard analytique avancé

### Version 3.0 (Futur)
- [ ] Intelligence Artificielle pour recrutement
- [ ] Chatbot RH
- [ ] Prédiction de turnover
- [ ] Formation en ligne intégrée
- [ ] Réseau social d'entreprise

## 🤝 Contribution

Les contributions sont les bienvenues!

1. Fork le projet
2. Créez une branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📝 License

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👨‍💻 Auteur

**Naciro2010**
- GitHub: [@naciro2010](https://github.com/naciro2010)

## 🙏 Remerciements

- Design inspiré par les meilleures pratiques UX/UI modernes
- Adapté aux besoins spécifiques des entreprises marocaines
- Développé avec passion pour simplifier la gestion RH

## 📞 Support

Pour toute question ou problème:
- Ouvrez une [issue](https://github.com/naciro2010/ubiquitous-rh/issues)
- Consultez la [documentation](https://github.com/naciro2010/ubiquitous-rh/wiki)

---

**Note:** Cette application est un MVP (Minimum Viable Product) conçu pour démonstration. Pour une utilisation en production, il est recommandé d'implémenter un backend sécurisé et une base de données.

Développé avec ❤️ pour simplifier la gestion RH au Maroc

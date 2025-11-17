# RH Manager - Système de Gestion RH Complet

![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)
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

**Pour la version frontend seule:**
- Navigateur web moderne

**Pour la version 2.0 avec backend:**
- Node.js (>= 18.0.0)
- MongoDB (local ou Atlas)
- npm (>= 9.0.0)

### Installation Locale

#### Option 1: Frontend seul (Version démo)

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

#### Option 2: Version 2.0 avec Backend (Production)

1. Clonez le repository:
```bash
git clone https://github.com/naciro2010/ubiquitous-rh.git
cd ubiquitous-rh
```

2. Installez les dépendances:
```bash
npm install
```

3. Configurez les variables d'environnement:
```bash
cp .env.example .env
# Éditez .env avec vos configurations
```

4. Démarrez MongoDB (si local):
```bash
mongod
```

5. Lancez le serveur:
```bash
# Mode développement (avec nodemon)
npm run dev

# Mode production
npm start
```

6. Accédez à l'application:
- Frontend: `http://localhost:5000`
- API: `http://localhost:5000/api`
- Health check: `http://localhost:5000/api/health`

## 📁 Structure du Projet

```
ubiquitous-rh/
├── index.html              # Page principale
├── package.json            # Dependencies Node.js
├── .env.example            # Variables d'environnement exemple
├── .gitignore              # Fichiers ignorés par Git
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
├── server/                # Backend Node.js/Express (Version 2.0)
│   ├── index.js           # Point d'entrée du serveur
│   ├── config/
│   │   └── database.js    # Configuration MongoDB
│   ├── models/
│   │   ├── User.js        # Modèle utilisateur
│   │   ├── Employee.js    # Modèle employé
│   │   ├── Leave.js       # Modèle congés
│   │   └── Attendance.js  # Modèle présences
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── employeeController.js
│   │   ├── leaveController.js
│   │   └── attendanceController.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── employees.js
│   │   ├── leaves.js
│   │   └── attendance.js
│   ├── middleware/
│   │   ├── auth.js        # Middleware JWT
│   │   └── errorHandler.js
│   └── utils/
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions déploiement
└── README.md
```

## 🎨 Fonctionnalités Techniques

### Architecture Modulaire
- Chaque module est indépendant et réutilisable
- Séparation claire des responsabilités
- Code maintenable et extensible
- **Nouveau:** Architecture MVC côté serveur

### Gestion des Données
- **Version 1.0:** Stockage local avec LocalStorage
- **Version 2.0:** Base de données MongoDB
- Export/Import JSON pour sauvegarde
- Export CSV pour rapports
- Données de démo préchargées

### Interface Utilisateur
- Design moderne et responsive
- Navigation intuitive
- Notifications en temps réel
- Formulaires avec validation

### Sécurité
- Authentification utilisateur avec JWT
- Système de rôles et permissions (RBAC)
- Sanitization des données
- Protection XSS
- **Nouveau:** Helmet.js pour sécurité HTTP
- **Nouveau:** Rate limiting
- **Nouveau:** Hachage bcrypt pour mots de passe

## 🔌 API Documentation (Version 2.0)

### Authentification

**POST** `/api/auth/register`
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "employee"
}
```

**POST** `/api/auth/login`
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```
Response: `{ "success": true, "token": "jwt-token", "user": {...} }`

**GET** `/api/auth/me` (Protected)
Headers: `Authorization: Bearer {token}`

### Employés

**GET** `/api/employees` - Liste tous les employés (Protected)

**GET** `/api/employees/:id` - Détails d'un employé (Protected)

**POST** `/api/employees` - Créer un employé (Admin/Manager)
```json
{
  "firstName": "Jean",
  "lastName": "Dupont",
  "email": "jean.dupont@company.com",
  "department": "IT",
  "position": "Développeur",
  "hireDate": "2024-01-15",
  "salary": { "base": 8000, "currency": "MAD" }
}
```

**PUT** `/api/employees/:id` - Modifier un employé (Admin/Manager)

**DELETE** `/api/employees/:id` - Supprimer un employé (Admin)

### Congés

**GET** `/api/leaves` - Liste tous les congés (Protected)

**POST** `/api/leaves` - Créer une demande de congé
```json
{
  "employee": "employee_id",
  "leaveType": "Congé payé",
  "startDate": "2024-07-01",
  "endDate": "2024-07-10",
  "reason": "Vacances d'été"
}
```

**PUT** `/api/leaves/:id/approve` - Approuver un congé (Manager/Admin)

**PUT** `/api/leaves/:id/reject` - Refuser un congé (Manager/Admin)

### Présences

**GET** `/api/attendance` - Liste des présences (Protected)

**POST** `/api/attendance/checkin` - Pointer l'arrivée
```json
{
  "employeeId": "employee_id"
}
```

**PUT** `/api/attendance/checkout` - Pointer la sortie
```json
{
  "attendanceId": "attendance_id"
}
```

### Codes de Statut HTTP

- `200` - Succès
- `201` - Créé avec succès
- `400` - Requête invalide
- `401` - Non authentifié
- `403` - Non autorisé
- `404` - Ressource non trouvée
- `500` - Erreur serveur

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

### Version 2.0 (Implémentée ✅)
- [x] Backend avec Node.js/Express
- [x] Base de données MongoDB
- [x] Authentification JWT
- [x] API RESTful
- [x] Modèles de données (Employee, Leave, Attendance, User)
- [x] Contrôleurs et routes CRUD
- [x] Middleware de sécurité (Helmet, CORS, Rate Limiting)
- [x] Gestion des erreurs centralisée
- [x] Configuration environnement (.env)
- [ ] Upload réel de fichiers
- [ ] Génération PDF des bulletins
- [ ] Notifications par email
- [ ] Tests unitaires et d'intégration

### Version 2.1 (En cours)
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

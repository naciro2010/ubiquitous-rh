# RH Manager Backend API - Version 2.0

API RESTful pour le système de gestion RH Manager.

## 🚀 Technologies

- **Node.js** (>= 18.0.0)
- **Express.js** - Framework web
- **MongoDB** - Base de données NoSQL
- **Mongoose** - ODM pour MongoDB
- **JWT** - Authentification par token
- **bcryptjs** - Hachage des mots de passe
- **Helmet** - Sécurité HTTP
- **CORS** - Cross-Origin Resource Sharing
- **Morgan** - Logger HTTP

## 📦 Installation

1. Installez les dépendances:
```bash
npm install
```

2. Configurez les variables d'environnement:
```bash
cp ../.env.example ../.env
```

3. Démarrez MongoDB:
```bash
mongod
```

4. Lancez le serveur:
```bash
# Développement
npm run dev

# Production
npm start
```

## 🏗️ Architecture

```
server/
├── index.js              # Point d'entrée du serveur
├── config/
│   └── database.js       # Configuration MongoDB
├── models/               # Modèles Mongoose
│   ├── User.js
│   ├── Employee.js
│   ├── Leave.js
│   └── Attendance.js
├── controllers/          # Logique métier
│   ├── authController.js
│   ├── employeeController.js
│   ├── leaveController.js
│   └── attendanceController.js
├── routes/               # Routes API
│   ├── auth.js
│   ├── employees.js
│   ├── leaves.js
│   └── attendance.js
├── middleware/           # Middlewares personnalisés
│   ├── auth.js           # Authentification JWT
│   └── errorHandler.js   # Gestion des erreurs
└── utils/                # Utilitaires
```

## 🔐 Authentification

Toutes les routes protégées nécessitent un token JWT dans le header:

```
Authorization: Bearer {token}
```

### Rôles

- `admin` - Accès complet
- `manager` - Gestion RH
- `employee` - Accès lecture seule

## 📡 Endpoints API

### Authentification

| Méthode | Endpoint | Description | Accès |
|---------|----------|-------------|-------|
| POST | `/api/auth/register` | Inscription | Public |
| POST | `/api/auth/login` | Connexion | Public |
| GET | `/api/auth/me` | Profil utilisateur | Protected |
| PUT | `/api/auth/updatepassword` | Changer mot de passe | Protected |
| GET | `/api/auth/logout` | Déconnexion | Protected |

### Employés

| Méthode | Endpoint | Description | Accès |
|---------|----------|-------------|-------|
| GET | `/api/employees` | Liste employés | Protected |
| GET | `/api/employees/:id` | Détail employé | Protected |
| POST | `/api/employees` | Créer employé | Admin/Manager |
| PUT | `/api/employees/:id` | Modifier employé | Admin/Manager |
| DELETE | `/api/employees/:id` | Supprimer employé | Admin |

### Congés

| Méthode | Endpoint | Description | Accès |
|---------|----------|-------------|-------|
| GET | `/api/leaves` | Liste congés | Protected |
| GET | `/api/leaves/:id` | Détail congé | Protected |
| POST | `/api/leaves` | Créer demande | Protected |
| PUT | `/api/leaves/:id` | Modifier demande | Protected |
| PUT | `/api/leaves/:id/approve` | Approuver | Admin/Manager |
| PUT | `/api/leaves/:id/reject` | Refuser | Admin/Manager |

### Présences

| Méthode | Endpoint | Description | Accès |
|---------|----------|-------------|-------|
| GET | `/api/attendance` | Liste présences | Protected |
| GET | `/api/attendance/:id` | Détail présence | Protected |
| POST | `/api/attendance/checkin` | Pointer arrivée | Protected |
| PUT | `/api/attendance/checkout` | Pointer sortie | Protected |
| POST | `/api/attendance` | Créer présence | Admin/Manager |
| PUT | `/api/attendance/:id` | Modifier présence | Admin/Manager |

## 🔒 Sécurité

- **JWT** pour authentification stateless
- **bcryptjs** pour hachage des mots de passe (10 rounds)
- **Helmet** pour sécurité des headers HTTP
- **Rate Limiting** pour prévenir les abus
- **CORS** configuré pour origines autorisées
- **Validation** des données avec express-validator
- **Sanitization** des entrées utilisateur

## 🗄️ Modèles de Données

### User
```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  role: String (admin|manager|employee),
  department: String,
  position: String,
  isActive: Boolean
}
```

### Employee
```javascript
{
  employeeId: String (unique),
  firstName: String,
  lastName: String,
  email: String (unique),
  phone: String,
  department: String,
  position: String,
  hireDate: Date,
  salary: { base: Number, currency: String },
  status: String
}
```

### Leave
```javascript
{
  employee: ObjectId (ref: Employee),
  leaveType: String,
  startDate: Date,
  endDate: Date,
  days: Number,
  reason: String,
  status: String (En attente|Approuvé|Refusé),
  approvedBy: ObjectId (ref: User)
}
```

### Attendance
```javascript
{
  employee: ObjectId (ref: Employee),
  date: Date,
  checkIn: Date,
  checkOut: Date,
  status: String,
  workHours: Number,
  overtime: Number,
  lateMinutes: Number
}
```

## ⚡ Performance

- Compression Gzip activée
- Indexation MongoDB sur champs fréquemment requêtés
- Pagination implémentée sur toutes les listes
- Caching des requêtes fréquentes

## 🧪 Tests

```bash
# Tests unitaires
npm test

# Tests avec coverage
npm run test:coverage
```

## 📝 Logging

Les logs sont générés avec Morgan en développement:
- Requêtes HTTP
- Erreurs serveur
- Connexions base de données

## 🐛 Débogage

Mode développement avec Nodemon:
```bash
npm run dev
```

Variables d'environnement de débogage:
```bash
DEBUG=app:* npm run dev
```

## 🚀 Déploiement

1. Configurez les variables d'environnement production
2. Utilisez une base MongoDB Atlas pour production
3. Configurez HTTPS
4. Activez le rate limiting strict
5. Utilisez PM2 pour la gestion de processus

```bash
# Avec PM2
pm2 start server/index.js --name rh-manager
pm2 save
pm2 startup
```

## 📄 License

MIT - Voir LICENSE

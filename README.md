# RH Manager - Système de Gestion RH Moderne

![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Next.js](https://img.shields.io/badge/Next.js-15-black.svg)
![React](https://img.shields.io/badge/React-18-blue.svg)

Application complète de gestion des ressources humaines construite avec **Next.js 15**, **React 18**, **TypeScript**, et **TailwindCSS**.

## ✨ Fonctionnalités

- 🌍 **Multilingue** - Support Français, Arabe (RTL), Anglais
- 🎨 **Design Moderne** - Interface inspirée d'Anthropic avec mode clair/sombre
- 📱 **Responsive** - Optimisé pour desktop, tablette et mobile
- ⚡ **Performance** - Static export optimisé pour GitHub Pages
- 🔐 **Sécurisé** - Backend Express avec JWT et RBAC
- 📊 **Modules RH Complets** :
  - 👥 Gestion des employés
  - 🌴 Congés et absences
  - ⏰ Pointage et présences
  - 💰 Paie et avantages
  - 🎯 Recrutement (ATS)
  - ⭐ Évaluations de performance
  - 📄 Gestion documentaire
  - ⚙️ Paramètres et configuration

## 🚀 Démarrage Rapide

### Prérequis

- Node.js 18+
- npm 9+

### Installation

```bash
# Cloner le repository
git clone https://github.com/naciro2010/ubiquitous-rh.git
cd ubiquitous-rh

# Installer les dépendances
npm install

# Lancer en développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📦 Scripts Disponibles

### Frontend Next.js

```bash
npm run dev          # Développement local (port 3000)
npm run build        # Build production (génère ./out/)
npm start            # Serveur production Next.js
npm run lint         # Vérification ESLint
```

### Backend Express (Optionnel)

```bash
npm run server       # Lancer le serveur API
npm run server:dev   # Serveur API avec hot-reload
npm run migrate      # Exécuter les migrations DB
npm run seed         # Peupler la base de données
```

### Tests

```bash
npm test            # Exécuter les tests avec coverage
```

## 🏗️ Structure du Projet

```
ubiquitous-rh/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── [locale]/          # Routes internationalisées
│   │   │   ├── (app)/         # Pages application
│   │   │   └── page.tsx       # Landing page
│   │   └── layout.tsx         # Layout racine
│   ├── components/            # Composants React
│   │   ├── ui/               # Composants UI (shadcn/ui)
│   │   ├── landing/          # Composants landing page
│   │   ├── app/              # Composants application
│   │   └── patterns/         # Patterns réutilisables
│   ├── config/               # Configuration
│   ├── lib/                  # Utilitaires
│   └── styles/               # Styles globaux
├── messages/                  # Fichiers de traduction (i18n)
├── public/                    # Assets statiques
├── server/                    # Backend Express (optionnel)
└── .github/workflows/        # GitHub Actions CI/CD
```

## 🌐 Déploiement sur GitHub Pages

Le projet est **automatiquement déployé** sur GitHub Pages à chaque push.

### Configuration

1. **Activer GitHub Pages** dans les paramètres du repository :
   - Settings → Pages
   - Source: **GitHub Actions**

2. **Push sur main ou une branche claude/** :
   ```bash
   git push origin main
   ```

3. **GitHub Actions** va automatiquement :
   - ✅ Installer les dépendances
   - ✅ Builder l'application Next.js
   - ✅ Déployer sur GitHub Pages

4. Votre site sera accessible sur :
   ```
   https://naciro2010.github.io/ubiquitous-rh/
   ```

### Workflow CI/CD

Le workflow `.github/workflows/deploy.yml` :
- ✅ Build automatique sur push
- ✅ Export statique Next.js (`output: 'export'`)
- ✅ Déploiement sur GitHub Pages
- ✅ Support des branches `claude/**` pour tests

## 🎨 Design System

L'application utilise un design system moderne inspiré d'Anthropic :

- **Couleurs** : Palette chaleureuse avec tons neutres (#FDFCFB, #0080FF)
- **Typographie** : Système de tailles responsive avec letter-spacing optimisé
- **Ombres** : Subtiles et en couches (shadow-1, shadow-2, shadow-3)
- **Animations** : Fluides avec timing naturel (180ms, cubic-bezier)
- **Effets** : Glassmorphism (backdrop-blur)
- **Composants** : shadcn/ui + Radix UI
- **Icons** : Lucide React

Voir `DESIGN_SYSTEM_2025.md` pour plus de détails.

## 🌍 Internationalisation

Support complet pour 3 langues :

- 🇫🇷 **Français** (par défaut)
- 🇸🇦 **Arabe** (avec support RTL complet)
- 🇬🇧 **Anglais**

Les traductions sont dans `/messages/`:
- `fr.json` - Français
- `ar.json` - Arabe
- `en.json` - Anglais

Configuration dans `src/config/i18n.ts` avec **next-intl**.

## 🔧 Configuration

### Variables d'Environnement (Backend Optionnel)

Copier `.env.example` vers `.env` :

```bash
cp .env.example .env
```

Variables disponibles :
```env
NODE_ENV=development
PORT=3001
MONGODB_URI=mongodb://localhost:27017/rh-manager
JWT_SECRET=your-secret-key
```

### Personnalisation

- **Thème** : Modifier `src/styles/globals.css`
- **Couleurs** : Variables CSS dans `:root` (--ui-*)
- **Composants** : shadcn/ui dans `src/components/ui/`
- **Traductions** : Fichiers JSON dans `/messages/`

## 📚 Technologies Utilisées

### Frontend
- **Next.js 15** - Framework React avec App Router
- **React 18** - Bibliothèque UI
- **TypeScript 5.7** - Typage statique
- **TailwindCSS 3.4** - Styles utilitaires
- **next-intl** - Internationalisation i18n
- **Radix UI** - Composants accessibles (WCAG 2.2 AA)
- **Lucide React** - Icons modernes
- **class-variance-authority** - Variants de composants
- **tailwind-merge** - Merge de classes TailwindCSS

### Backend (Optionnel)
- **Express 4** - Serveur Node.js
- **MongoDB** - Base de données NoSQL
- **Mongoose** - ODM MongoDB
- **JWT** - Authentification sécurisée
- **bcryptjs** - Hashing de mots de passe
- **Helmet** - Sécurité HTTP headers

## 🤝 Contribution

Les contributions sont bienvenues ! Voir les guidelines :

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 License

MIT License - voir le fichier LICENSE pour plus de détails.

## 👨‍💻 Auteur

**Naciro2010**
- GitHub: [@naciro2010](https://github.com/naciro2010)

## 🔗 Liens Utiles

- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation TailwindCSS](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Radix UI](https://www.radix-ui.com)
- [next-intl](https://next-intl-docs.vercel.app)

## ⚡ Performance & Optimisations

- ✅ Export statique optimisé (`output: 'export'`)
- ✅ Images non optimisées pour compatibilité GitHub Pages
- ✅ Code splitting automatique par route
- ✅ Tree shaking activé
- ✅ Console logs supprimés en production
- ✅ Optimisation des imports (lucide-react, @radix-ui)
- ✅ TypeScript strict mode
- ✅ React strict mode

## 🐛 Support

Pour les bugs et questions :
- Ouvrir une [issue](https://github.com/naciro2010/ubiquitous-rh/issues)
- Consulter les [discussions](https://github.com/naciro2010/ubiquitous-rh/discussions)

## 📝 Documentation Complémentaire

- `DESIGN_SYSTEM_2025.md` - Guide complet du design system
- `INSTALLATION.md` - Instructions d'installation détaillées
- `DEPLOYMENT.md` - Guide de déploiement
- `REFONTE.md` - Notes de refonte UI/UX

---

Fait avec ❤️ par Naciro2010 | Powered by Next.js 15

# Guide de Déploiement GitHub Pages

## 📋 Étapes pour Activer GitHub Pages

### Option 1: Déploiement depuis la branche principale (Recommandé)

1. **Merger la branche de développement vers main:**
   ```bash
   git checkout main
   git merge claude/structure-develop-features-01Do24msfpvsjEVbfJmHs4Xb
   git push origin main
   ```

2. **Activer GitHub Pages:**
   - Allez sur votre repository GitHub: https://github.com/naciro2010/ubiquitous-rh
   - Cliquez sur **Settings** (Paramètres)
   - Dans le menu de gauche, cliquez sur **Pages**
   - Sous "Source", sélectionnez:
     - **Branch:** `main`
     - **Folder:** `/ (root)`
   - Cliquez sur **Save**

3. **Accéder à votre site:**
   - Après quelques minutes, votre site sera disponible à:
   - https://naciro2010.github.io/ubiquitous-rh/

### Option 2: Déploiement depuis la branche de développement

1. **Activer GitHub Pages:**
   - Allez sur votre repository GitHub
   - Cliquez sur **Settings** > **Pages**
   - Sous "Source", sélectionnez:
     - **Branch:** `claude/structure-develop-features-01Do24msfpvsjEVbfJmHs4Xb`
     - **Folder:** `/ (root)`
   - Cliquez sur **Save**

## ✅ Vérification

Une fois GitHub Pages activé, vous pouvez vérifier:

1. **Status du déploiement:**
   - Allez dans l'onglet **Actions** de votre repository
   - Vous verrez le workflow "pages build and deployment"

2. **Test de l'application:**
   - Visitez l'URL: https://naciro2010.github.io/ubiquitous-rh/
   - Vous devriez voir la landing page
   - Cliquez sur "Essayer la Démo" ou "Connexion"
   - Utilisez les identifiants:
     - Email: `admin@demo.com`
     - Mot de passe: `demo123`

## 🔧 Résolution de Problèmes

### Le site ne se charge pas
- Attendez 2-3 minutes après activation
- Vérifiez que le fichier `.nojekyll` existe
- Assurez-vous que `index.html` est à la racine

### Erreur 404
- Vérifiez que la branche sélectionnée contient bien le code
- Assurez-vous que le dossier est bien `/ (root)`

### Les fichiers CSS/JS ne se chargent pas
- Vérifiez la console du navigateur (F12)
- Assurez-vous que les chemins sont relatifs (pas de `/` au début)

## 🚀 Domaine Personnalisé (Optionnel)

Pour utiliser votre propre domaine:

1. Créez un fichier `CNAME` à la racine:
   ```
   votredomaine.com
   ```

2. Dans les paramètres DNS de votre domaine, ajoutez:
   ```
   Type: CNAME
   Name: www (ou @)
   Value: naciro2010.github.io
   ```

3. Dans GitHub Settings > Pages:
   - Entrez votre domaine dans "Custom domain"
   - Cochez "Enforce HTTPS"

## 📊 Monitoring

Une fois déployé, vous pouvez monitorer:
- Visites: Utilisez Google Analytics
- Erreurs: Console du navigateur
- Performance: Lighthouse (Chrome DevTools)

## 🔄 Mises à Jour

Pour mettre à jour l'application:

```bash
# Faire vos modifications
git add .
git commit -m "Update: description des changements"
git push

# Si sur main, GitHub Pages se met à jour automatiquement
# Si sur une autre branche, merger vers main
```

## 📝 Notes Importantes

- ✅ Le fichier `.nojekyll` désactive Jekyll (traitement par défaut)
- ✅ Tous les chemins de fichiers sont relatifs
- ✅ L'application fonctionne entièrement côté client (pas de serveur)
- ✅ Les données sont stockées dans LocalStorage du navigateur
- ⚠️ Pour une utilisation en production, considérez un backend sécurisé

## 📞 Support

En cas de problème:
1. Consultez la [documentation GitHub Pages](https://docs.github.com/en/pages)
2. Vérifiez les logs dans l'onglet Actions
3. Ouvrez une issue sur le repository

---

**Dernière mise à jour:** 2024
**Auteur:** Naciro2010

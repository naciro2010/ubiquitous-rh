// Main Application
const app = {
    currentUser: null,
    currentModule: null,

    // Initialize app
    init() {
        this.checkAuth();
        this.setupEventListeners();
    },

    // Check if user is authenticated
    checkAuth() {
        this.currentUser = DataManager.getCurrentUser();
        if (this.currentUser) {
            this.showApp();
        }
    },

    // Setup event listeners
    setupEventListeners() {
        // Navigation items
        document.querySelectorAll('.sidebar-nav .nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const module = item.dataset.module;
                this.loadModule(module);

                // Update active state
                document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
                item.classList.add('active');
            });
        });
    },

    // Show login modal
    showLogin() {
        document.getElementById('login-modal').classList.remove('hidden');
    },

    // Hide login modal
    hideLogin() {
        document.getElementById('login-modal').classList.add('hidden');
    },

    // Show demo
    showDemo() {
        // Auto-login with demo account
        const demoUser = DataManager.authenticate('admin@demo.com', 'demo123');
        if (demoUser) {
            DataManager.setCurrentUser(demoUser);
            this.currentUser = demoUser;
            this.showApp();
            Utils.showNotification('Bienvenue dans la démo!', 'success');
        }
    },

    // Login
    login(event) {
        event.preventDefault();

        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        const user = DataManager.authenticate(email, password);

        if (user) {
            DataManager.setCurrentUser(user);
            this.currentUser = user;
            this.hideLogin();
            this.showApp();
            Utils.showNotification(`Bienvenue ${user.name}!`, 'success');
        } else {
            Utils.showNotification('Email ou mot de passe incorrect', 'danger');
        }
    },

    // Logout
    logout() {
        if (Utils.confirm('Voulez-vous vraiment vous déconnecter?')) {
            DataManager.logout();
            this.currentUser = null;
            this.hideApp();
            Utils.showNotification('Déconnexion réussie', 'success');
        }
    },

    // Show app
    showApp() {
        // Hide landing page elements
        document.querySelector('.hero').style.display = 'none';
        document.querySelector('.features').style.display = 'none';
        document.querySelector('.footer').style.display = 'none';
        document.querySelector('.navbar').style.display = 'none';

        // Show app
        document.getElementById('app-container').classList.remove('hidden');
        document.getElementById('main-app').classList.remove('hidden');

        // Update user info
        document.getElementById('user-name').textContent = this.currentUser.name;
        document.getElementById('user-role').textContent = this.currentUser.role;

        // Load dashboard by default
        this.loadModule('dashboard');
    },

    // Hide app
    hideApp() {
        // Show landing page elements
        document.querySelector('.hero').style.display = 'flex';
        document.querySelector('.features').style.display = 'block';
        document.querySelector('.footer').style.display = 'block';
        document.querySelector('.navbar').style.display = 'block';

        // Hide app
        document.getElementById('app-container').classList.add('hidden');
        document.getElementById('main-app').classList.add('hidden');
    },

    // Load module
    loadModule(moduleName) {
        const moduleContent = document.getElementById('module-content');
        const pageTitle = document.getElementById('page-title');

        // Module titles
        const titles = {
            dashboard: 'Tableau de Bord',
            employees: 'Gestion des Employés',
            leaves: 'Gestion des Congés',
            attendance: 'Gestion des Présences',
            payroll: 'Gestion de la Paie',
            recruitment: 'Recrutement',
            performance: 'Évaluation de Performance',
            documents: 'Gestion des Documents',
            settings: 'Paramètres'
        };

        pageTitle.textContent = titles[moduleName] || moduleName;
        this.currentModule = moduleName;

        // Load module content
        switch (moduleName) {
            case 'dashboard':
                moduleContent.innerHTML = DashboardModule.render();
                DashboardModule.init();
                break;
            case 'employees':
                moduleContent.innerHTML = EmployeesModule.render();
                EmployeesModule.init();
                break;
            case 'leaves':
                moduleContent.innerHTML = LeavesModule.render();
                LeavesModule.init();
                break;
            case 'attendance':
                moduleContent.innerHTML = AttendanceModule.render();
                AttendanceModule.init();
                break;
            case 'payroll':
                moduleContent.innerHTML = PayrollModule.render();
                PayrollModule.init();
                break;
            case 'recruitment':
                moduleContent.innerHTML = RecruitmentModule.render();
                RecruitmentModule.init();
                break;
            case 'performance':
                moduleContent.innerHTML = PerformanceModule.render();
                PerformanceModule.init();
                break;
            case 'documents':
                moduleContent.innerHTML = DocumentsModule.render();
                DocumentsModule.init();
                break;
            case 'settings':
                moduleContent.innerHTML = SettingsModule.render();
                SettingsModule.init();
                break;
            default:
                moduleContent.innerHTML = '<div class="empty-state"><h3>Module non disponible</h3></div>';
        }
    },

    // Reload current module
    reloadModule() {
        if (this.currentModule) {
            this.loadModule(this.currentModule);
        }
    }
};

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});

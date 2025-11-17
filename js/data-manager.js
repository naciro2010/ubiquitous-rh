// Data Manager - Handles all data operations with localStorage
const DataManager = {
    // Storage keys
    KEYS: {
        EMPLOYEES: 'rh_employees',
        LEAVES: 'rh_leaves',
        ATTENDANCE: 'rh_attendance',
        PAYROLL: 'rh_payroll',
        RECRUITMENT: 'rh_recruitment',
        PERFORMANCE: 'rh_performance',
        DOCUMENTS: 'rh_documents',
        SETTINGS: 'rh_settings',
        USER: 'rh_current_user',
        USERS: 'rh_users'
    },

    // Initialize with demo data
    initialize() {
        if (!this.getData(this.KEYS.USERS)) {
            this.initializeDemoData();
        }
    },

    // Get data from localStorage
    getData(key) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error('Error getting data:', error);
            return null;
        }
    },

    // Save data to localStorage
    saveData(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
            return true;
        } catch (error) {
            console.error('Error saving data:', error);
            return false;
        }
    },

    // Clear all data
    clearAll() {
        Object.values(this.KEYS).forEach(key => {
            localStorage.removeItem(key);
        });
    },

    // Initialize demo data
    initializeDemoData() {
        // Users
        const users = [
            {
                id: 'user1',
                email: 'admin@demo.com',
                password: 'demo123',
                name: 'Admin User',
                role: 'Administrateur',
                permissions: ['all']
            },
            {
                id: 'user2',
                email: 'manager@demo.com',
                password: 'demo123',
                name: 'Manager User',
                role: 'Manager RH',
                permissions: ['employees', 'leaves', 'attendance']
            }
        ];
        this.saveData(this.KEYS.USERS, users);

        // Employees
        const employees = [
            {
                id: 'emp1',
                matricule: 'EMP001',
                firstName: 'Mohammed',
                lastName: 'Alami',
                email: 'mohammed.alami@company.ma',
                phone: '0612345678',
                birthDate: '1990-05-15',
                cin: 'AB123456',
                gender: 'M',
                address: '123 Rue Hassan II, Casablanca',
                department: 'Informatique',
                position: 'Développeur Senior',
                hireDate: '2020-01-15',
                contractType: 'CDI',
                salary: 15000,
                status: 'actif',
                manager: null,
                avatar: null
            },
            {
                id: 'emp2',
                matricule: 'EMP002',
                firstName: 'Fatima',
                lastName: 'Benali',
                email: 'fatima.benali@company.ma',
                phone: '0623456789',
                birthDate: '1992-08-22',
                cin: 'CD789012',
                gender: 'F',
                address: '456 Boulevard Zerktouni, Casablanca',
                department: 'Ressources Humaines',
                position: 'RH Manager',
                hireDate: '2019-03-10',
                contractType: 'CDI',
                salary: 18000,
                status: 'actif',
                manager: null,
                avatar: null
            },
            {
                id: 'emp3',
                matricule: 'EMP003',
                firstName: 'Youssef',
                lastName: 'El Idrissi',
                email: 'youssef.elidrissi@company.ma',
                phone: '0634567890',
                birthDate: '1995-12-03',
                cin: 'EF345678',
                gender: 'M',
                address: '789 Avenue Mohammed V, Rabat',
                department: 'Marketing',
                position: 'Chef de Projet',
                hireDate: '2021-06-20',
                contractType: 'CDI',
                salary: 12000,
                status: 'actif',
                manager: 'emp1',
                avatar: null
            },
            {
                id: 'emp4',
                matricule: 'EMP004',
                firstName: 'Amina',
                lastName: 'Chakir',
                email: 'amina.chakir@company.ma',
                phone: '0645678901',
                birthDate: '1993-04-18',
                cin: 'GH901234',
                gender: 'F',
                address: '321 Rue Allal Ben Abdellah, Rabat',
                department: 'Finance',
                position: 'Comptable',
                hireDate: '2020-09-01',
                contractType: 'CDI',
                salary: 10000,
                status: 'actif',
                manager: 'emp2',
                avatar: null
            },
            {
                id: 'emp5',
                matricule: 'EMP005',
                firstName: 'Karim',
                lastName: 'Tazi',
                email: 'karim.tazi@company.ma',
                phone: '0656789012',
                birthDate: '1994-07-25',
                cin: 'IJ567890',
                gender: 'M',
                address: '654 Avenue Hassan II, Marrakech',
                department: 'Commercial',
                position: 'Commercial',
                hireDate: '2022-01-15',
                contractType: 'CDD',
                salary: 8000,
                status: 'actif',
                manager: 'emp1',
                avatar: null
            }
        ];
        this.saveData(this.KEYS.EMPLOYEES, employees);

        // Leaves
        const leaves = [
            {
                id: 'leave1',
                employeeId: 'emp1',
                type: 'Congé payé',
                startDate: '2024-12-01',
                endDate: '2024-12-10',
                days: 10,
                reason: 'Vacances annuelles',
                status: 'approuvé',
                requestDate: '2024-11-01',
                approvedBy: 'user1',
                approvedDate: '2024-11-02'
            },
            {
                id: 'leave2',
                employeeId: 'emp2',
                type: 'Congé maladie',
                startDate: '2024-11-20',
                endDate: '2024-11-22',
                days: 3,
                reason: 'Grippe',
                status: 'en_attente',
                requestDate: '2024-11-19',
                approvedBy: null,
                approvedDate: null
            },
            {
                id: 'leave3',
                employeeId: 'emp3',
                type: 'Congé sans solde',
                startDate: '2025-01-15',
                endDate: '2025-01-20',
                days: 6,
                reason: 'Raisons personnelles',
                status: 'rejeté',
                requestDate: '2024-11-15',
                approvedBy: 'user1',
                approvedDate: '2024-11-16'
            }
        ];
        this.saveData(this.KEYS.LEAVES, leaves);

        // Attendance records
        const today = new Date();
        const attendance = [];
        for (let i = 0; i < 30; i++) {
            const date = new Date(today);
            date.setDate(date.getDate() - i);

            employees.forEach(emp => {
                const random = Math.random();
                let status = 'present';
                let checkIn = '09:00';
                let checkOut = '18:00';

                if (random < 0.05) {
                    status = 'absent';
                    checkIn = null;
                    checkOut = null;
                } else if (random < 0.15) {
                    status = 'retard';
                    checkIn = '09:30';
                }

                attendance.push({
                    id: Utils.generateId(),
                    employeeId: emp.id,
                    date: date.toISOString().split('T')[0],
                    status: status,
                    checkIn: checkIn,
                    checkOut: checkOut,
                    overtimeHours: random > 0.7 ? 2 : 0
                });
            });
        }
        this.saveData(this.KEYS.ATTENDANCE, attendance);

        // Recruitment
        const recruitment = [
            {
                id: 'job1',
                title: 'Développeur Full Stack',
                department: 'Informatique',
                type: 'CDI',
                location: 'Casablanca',
                salary: '12000-18000 MAD',
                description: 'Nous recherchons un développeur Full Stack expérimenté...',
                requirements: ['5 ans d\'expérience', 'React', 'Node.js', 'MongoDB'],
                status: 'ouvert',
                postedDate: '2024-11-01',
                applications: [
                    {
                        id: 'app1',
                        candidateName: 'Ahmed Bennani',
                        email: 'ahmed.bennani@email.com',
                        phone: '0667890123',
                        cv: 'cv_ahmed.pdf',
                        status: 'en_cours',
                        appliedDate: '2024-11-05'
                    }
                ]
            },
            {
                id: 'job2',
                title: 'Responsable Marketing',
                department: 'Marketing',
                type: 'CDI',
                location: 'Rabat',
                salary: '15000-20000 MAD',
                description: 'Nous recherchons un responsable marketing créatif...',
                requirements: ['7 ans d\'expérience', 'Marketing digital', 'Management'],
                status: 'ouvert',
                postedDate: '2024-10-15',
                applications: []
            }
        ];
        this.saveData(this.KEYS.RECRUITMENT, recruitment);

        // Performance reviews
        const performance = [
            {
                id: 'perf1',
                employeeId: 'emp1',
                reviewDate: '2024-06-01',
                period: 'S1 2024',
                reviewer: 'user1',
                scores: {
                    technical: 4.5,
                    communication: 4.0,
                    teamwork: 4.5,
                    initiative: 4.0
                },
                overallScore: 4.25,
                comments: 'Excellent travail, continue comme ça!',
                objectives: ['Apprendre une nouvelle technologie', 'Mentorer les juniors'],
                status: 'complété'
            }
        ];
        this.saveData(this.KEYS.PERFORMANCE, performance);

        // Documents
        const documents = [
            {
                id: 'doc1',
                employeeId: 'emp1',
                name: 'Contrat de travail',
                type: 'Contrat',
                uploadDate: '2020-01-15',
                fileUrl: null
            },
            {
                id: 'doc2',
                employeeId: 'emp1',
                name: 'Bulletin de paie Janvier 2024',
                type: 'Bulletin',
                uploadDate: '2024-02-01',
                fileUrl: null
            }
        ];
        this.saveData(this.KEYS.DOCUMENTS, documents);

        // Settings
        const settings = {
            company: {
                name: 'Ma Société SARL',
                address: '123 Boulevard Mohammed V, Casablanca',
                phone: '0522123456',
                email: 'contact@masociete.ma',
                ice: '000123456789012',
                rc: 'RC123456',
                cnss: 'CNSS123456',
                logo: null
            },
            leave: {
                annualDays: 22,
                sickDays: 15,
                unpaidAllowed: true
            },
            workSchedule: {
                startTime: '09:00',
                endTime: '18:00',
                workDays: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'],
                breakDuration: 60
            },
            payroll: {
                currency: 'MAD',
                paymentDay: 28,
                taxRates: {
                    cnss: 4.48,
                    ir: 'progressive'
                }
            }
        };
        this.saveData(this.KEYS.SETTINGS, settings);
    },

    // CRUD operations for each entity

    // Employees
    getEmployees() {
        return this.getData(this.KEYS.EMPLOYEES) || [];
    },

    getEmployee(id) {
        const employees = this.getEmployees();
        return employees.find(emp => emp.id === id);
    },

    addEmployee(employee) {
        const employees = this.getEmployees();
        employee.id = Utils.generateId();
        employee.status = employee.status || 'actif';
        employees.push(employee);
        return this.saveData(this.KEYS.EMPLOYEES, employees);
    },

    updateEmployee(id, data) {
        const employees = this.getEmployees();
        const index = employees.findIndex(emp => emp.id === id);
        if (index !== -1) {
            employees[index] = { ...employees[index], ...data };
            return this.saveData(this.KEYS.EMPLOYEES, employees);
        }
        return false;
    },

    deleteEmployee(id) {
        const employees = this.getEmployees();
        const filtered = employees.filter(emp => emp.id !== id);
        return this.saveData(this.KEYS.EMPLOYEES, filtered);
    },

    // Leaves
    getLeaves() {
        return this.getData(this.KEYS.LEAVES) || [];
    },

    addLeave(leave) {
        const leaves = this.getLeaves();
        leave.id = Utils.generateId();
        leave.status = leave.status || 'en_attente';
        leaves.push(leave);
        return this.saveData(this.KEYS.LEAVES, leaves);
    },

    updateLeave(id, data) {
        const leaves = this.getLeaves();
        const index = leaves.findIndex(leave => leave.id === id);
        if (index !== -1) {
            leaves[index] = { ...leaves[index], ...data };
            return this.saveData(this.KEYS.LEAVES, leaves);
        }
        return false;
    },

    deleteLeave(id) {
        const leaves = this.getLeaves();
        const filtered = leaves.filter(leave => leave.id !== id);
        return this.saveData(this.KEYS.LEAVES, filtered);
    },

    // Attendance
    getAttendance() {
        return this.getData(this.KEYS.ATTENDANCE) || [];
    },

    addAttendance(record) {
        const attendance = this.getAttendance();
        record.id = Utils.generateId();
        attendance.push(record);
        return this.saveData(this.KEYS.ATTENDANCE, attendance);
    },

    // Settings
    getSettings() {
        return this.getData(this.KEYS.SETTINGS) || {};
    },

    updateSettings(settings) {
        return this.saveData(this.KEYS.SETTINGS, settings);
    },

    // Current User
    getCurrentUser() {
        return this.getData(this.KEYS.USER);
    },

    setCurrentUser(user) {
        return this.saveData(this.KEYS.USER, user);
    },

    logout() {
        localStorage.removeItem(this.KEYS.USER);
    },

    // Authentication
    authenticate(email, password) {
        const users = this.getData(this.KEYS.USERS) || [];
        return users.find(user => user.email === email && user.password === password);
    }
};

// Initialize data on load
DataManager.initialize();

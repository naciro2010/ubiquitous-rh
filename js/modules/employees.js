// Employees Module
const EmployeesModule = {
    currentView: 'list', // 'list' or 'form'
    editingEmployee: null,

    render() {
        return `
            <div class="employees-module">
                <div id="employees-view">
                    ${this.renderList()}
                </div>
            </div>
        `;
    },

    renderList() {
        const employees = DataManager.getEmployees();

        return `
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Liste des Employés</h3>
                    <div class="card-actions">
                        <button class="btn-success" onclick="EmployeesModule.showForm()">
                            <span>➕</span> Nouvel Employé
                        </button>
                        <button class="btn-primary" onclick="EmployeesModule.exportEmployees()">
                            <span>📥</span> Exporter
                        </button>
                    </div>
                </div>

                <!-- Search and Filters -->
                <div style="padding: 1rem;">
                    <div class="search-bar">
                        <input type="text" class="search-input" id="employee-search"
                               placeholder="Rechercher un employé..."
                               onkeyup="EmployeesModule.search()">
                        <select class="filter-select" id="department-filter" onchange="EmployeesModule.filter()">
                            <option value="">Tous les départements</option>
                            ${this.getDepartmentOptions(employees)}
                        </select>
                        <select class="filter-select" id="status-filter" onchange="EmployeesModule.filter()">
                            <option value="">Tous les statuts</option>
                            <option value="actif">Actif</option>
                            <option value="inactif">Inactif</option>
                        </select>
                    </div>
                </div>

                <!-- Employees Table -->
                <div class="table-container">
                    <table id="employees-table">
                        <thead>
                            <tr>
                                <th>Matricule</th>
                                <th>Nom Complet</th>
                                <th>Email</th>
                                <th>Téléphone</th>
                                <th>Département</th>
                                <th>Poste</th>
                                <th>Statut</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${this.renderEmployeeRows(employees)}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    },

    getDepartmentOptions(employees) {
        const departments = [...new Set(employees.map(e => e.department))];
        return departments.map(dept => `<option value="${dept}">${dept}</option>`).join('');
    },

    renderEmployeeRows(employees) {
        if (employees.length === 0) {
            return '<tr><td colspan="8" style="text-align: center; padding: 2rem;">Aucun employé trouvé</td></tr>';
        }

        return employees.map(emp => `
            <tr>
                <td><strong>${emp.matricule}</strong></td>
                <td>
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <div style="width: 40px; height: 40px; border-radius: 50%; background: var(--primary); color: white; display: flex; align-items: center; justify-content: center; font-weight: bold;">
                            ${Utils.getInitials(`${emp.firstName} ${emp.lastName}`)}
                        </div>
                        <span>${emp.firstName} ${emp.lastName}</span>
                    </div>
                </td>
                <td>${emp.email}</td>
                <td>${emp.phone}</td>
                <td>${emp.department}</td>
                <td>${emp.position}</td>
                <td>${Utils.getStatusBadge(emp.status)}</td>
                <td>
                    <button class="btn-icon" onclick="EmployeesModule.viewEmployee('${emp.id}')" title="Voir">
                        👁️
                    </button>
                    <button class="btn-icon" onclick="EmployeesModule.editEmployee('${emp.id}')" title="Modifier">
                        ✏️
                    </button>
                    <button class="btn-icon" onclick="EmployeesModule.deleteEmployee('${emp.id}')" title="Supprimer">
                        🗑️
                    </button>
                </td>
            </tr>
        `).join('');
    },

    renderForm(employee = null) {
        const isEdit = employee !== null;
        const emp = employee || {
            matricule: '',
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            birthDate: '',
            cin: '',
            gender: 'M',
            address: '',
            department: '',
            position: '',
            hireDate: '',
            contractType: 'CDI',
            salary: '',
            status: 'actif'
        };

        return `
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">${isEdit ? 'Modifier' : 'Ajouter'} un Employé</h3>
                    <button class="btn-outline" onclick="EmployeesModule.cancelForm()">
                        Retour
                    </button>
                </div>

                <form id="employee-form" onsubmit="EmployeesModule.saveEmployee(event)" style="padding: 1.5rem;">
                    <div class="grid-2">
                        <div class="form-group">
                            <label>Matricule *</label>
                            <input type="text" name="matricule" value="${emp.matricule}" required>
                        </div>

                        <div class="form-group">
                            <label>CIN *</label>
                            <input type="text" name="cin" value="${emp.cin}" required>
                        </div>

                        <div class="form-group">
                            <label>Prénom *</label>
                            <input type="text" name="firstName" value="${emp.firstName}" required>
                        </div>

                        <div class="form-group">
                            <label>Nom *</label>
                            <input type="text" name="lastName" value="${emp.lastName}" required>
                        </div>

                        <div class="form-group">
                            <label>Email *</label>
                            <input type="email" name="email" value="${emp.email}" required>
                        </div>

                        <div class="form-group">
                            <label>Téléphone *</label>
                            <input type="tel" name="phone" value="${emp.phone}" required>
                        </div>

                        <div class="form-group">
                            <label>Date de Naissance *</label>
                            <input type="date" name="birthDate" value="${emp.birthDate}" required>
                        </div>

                        <div class="form-group">
                            <label>Genre *</label>
                            <select name="gender" required>
                                <option value="M" ${emp.gender === 'M' ? 'selected' : ''}>Masculin</option>
                                <option value="F" ${emp.gender === 'F' ? 'selected' : ''}>Féminin</option>
                            </select>
                        </div>

                        <div class="form-group" style="grid-column: 1 / -1;">
                            <label>Adresse *</label>
                            <input type="text" name="address" value="${emp.address}" required>
                        </div>

                        <div class="form-group">
                            <label>Département *</label>
                            <input type="text" name="department" value="${emp.department}" list="departments" required>
                            <datalist id="departments">
                                <option value="Informatique">
                                <option value="Ressources Humaines">
                                <option value="Finance">
                                <option value="Marketing">
                                <option value="Commercial">
                                <option value="Production">
                            </datalist>
                        </div>

                        <div class="form-group">
                            <label>Poste *</label>
                            <input type="text" name="position" value="${emp.position}" required>
                        </div>

                        <div class="form-group">
                            <label>Date d'Embauche *</label>
                            <input type="date" name="hireDate" value="${emp.hireDate}" required>
                        </div>

                        <div class="form-group">
                            <label>Type de Contrat *</label>
                            <select name="contractType" required>
                                <option value="CDI" ${emp.contractType === 'CDI' ? 'selected' : ''}>CDI</option>
                                <option value="CDD" ${emp.contractType === 'CDD' ? 'selected' : ''}>CDD</option>
                                <option value="Stage" ${emp.contractType === 'Stage' ? 'selected' : ''}>Stage</option>
                                <option value="Freelance" ${emp.contractType === 'Freelance' ? 'selected' : ''}>Freelance</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label>Salaire (MAD) *</label>
                            <input type="number" name="salary" value="${emp.salary}" required>
                        </div>

                        <div class="form-group">
                            <label>Statut *</label>
                            <select name="status" required>
                                <option value="actif" ${emp.status === 'actif' ? 'selected' : ''}>Actif</option>
                                <option value="inactif" ${emp.status === 'inactif' ? 'selected' : ''}>Inactif</option>
                            </select>
                        </div>
                    </div>

                    <div style="margin-top: 1.5rem; display: flex; gap: 1rem;">
                        <button type="submit" class="btn-success">
                            ${isEdit ? '💾 Enregistrer' : '➕ Ajouter'}
                        </button>
                        <button type="button" class="btn-outline" onclick="EmployeesModule.cancelForm()">
                            Annuler
                        </button>
                    </div>
                </form>
            </div>
        `;
    },

    init() {
        this.currentView = 'list';
        this.editingEmployee = null;
    },

    showForm() {
        this.editingEmployee = null;
        const view = document.getElementById('employees-view');
        view.innerHTML = this.renderForm();
    },

    editEmployee(id) {
        const employee = DataManager.getEmployee(id);
        if (employee) {
            this.editingEmployee = employee;
            const view = document.getElementById('employees-view');
            view.innerHTML = this.renderForm(employee);
        }
    },

    viewEmployee(id) {
        const employee = DataManager.getEmployee(id);
        if (employee) {
            alert(`Détails de ${employee.firstName} ${employee.lastName}\n\n` +
                  `Matricule: ${employee.matricule}\n` +
                  `Email: ${employee.email}\n` +
                  `Département: ${employee.department}\n` +
                  `Poste: ${employee.position}\n` +
                  `Salaire: ${Utils.formatCurrency(employee.salary)}`);
        }
    },

    deleteEmployee(id) {
        const employee = DataManager.getEmployee(id);
        if (employee && Utils.confirm(`Voulez-vous vraiment supprimer ${employee.firstName} ${employee.lastName}?`)) {
            if (DataManager.deleteEmployee(id)) {
                Utils.showNotification('Employé supprimé avec succès', 'success');
                app.reloadModule();
            } else {
                Utils.showNotification('Erreur lors de la suppression', 'danger');
            }
        }
    },

    saveEmployee(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        // Validate
        if (!Utils.isValidEmail(data.email)) {
            Utils.showNotification('Email invalide', 'danger');
            return;
        }

        if (this.editingEmployee) {
            // Update
            if (DataManager.updateEmployee(this.editingEmployee.id, data)) {
                Utils.showNotification('Employé modifié avec succès', 'success');
                this.cancelForm();
            } else {
                Utils.showNotification('Erreur lors de la modification', 'danger');
            }
        } else {
            // Create
            if (DataManager.addEmployee(data)) {
                Utils.showNotification('Employé ajouté avec succès', 'success');
                this.cancelForm();
            } else {
                Utils.showNotification('Erreur lors de l\'ajout', 'danger');
            }
        }
    },

    cancelForm() {
        this.editingEmployee = null;
        const view = document.getElementById('employees-view');
        view.innerHTML = this.renderList();
    },

    search() {
        const searchTerm = document.getElementById('employee-search').value.toLowerCase();
        this.applyFilters(searchTerm);
    },

    filter() {
        const searchTerm = document.getElementById('employee-search')?.value.toLowerCase() || '';
        this.applyFilters(searchTerm);
    },

    applyFilters(searchTerm = '') {
        const deptFilter = document.getElementById('department-filter').value;
        const statusFilter = document.getElementById('status-filter').value;

        let employees = DataManager.getEmployees();

        // Apply search
        if (searchTerm) {
            employees = employees.filter(emp =>
                emp.firstName.toLowerCase().includes(searchTerm) ||
                emp.lastName.toLowerCase().includes(searchTerm) ||
                emp.email.toLowerCase().includes(searchTerm) ||
                emp.matricule.toLowerCase().includes(searchTerm)
            );
        }

        // Apply filters
        if (deptFilter) {
            employees = employees.filter(emp => emp.department === deptFilter);
        }
        if (statusFilter) {
            employees = employees.filter(emp => emp.status === statusFilter);
        }

        // Update table
        const tbody = document.querySelector('#employees-table tbody');
        if (tbody) {
            tbody.innerHTML = this.renderEmployeeRows(employees);
        }
    },

    exportEmployees() {
        const employees = DataManager.getEmployees();
        const exportData = employees.map(emp => ({
            Matricule: emp.matricule,
            Prénom: emp.firstName,
            Nom: emp.lastName,
            Email: emp.email,
            Téléphone: emp.phone,
            Département: emp.department,
            Poste: emp.position,
            'Date Embauche': emp.hireDate,
            'Type Contrat': emp.contractType,
            Salaire: emp.salary,
            Statut: emp.status
        }));

        Utils.exportToCSV(exportData, 'employes_' + Utils.getCurrentDate());
    }
};

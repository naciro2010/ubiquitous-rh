// Leaves Module
const LeavesModule = {
    render() {
        const leaves = DataManager.getLeaves();
        const employees = DataManager.getEmployees();

        return `
            <div class="leaves-module">
                <!-- Stats -->
                <div class="dashboard-stats">
                    <div class="stat-card">
                        <div class="stat-card-icon warning">
                            <span>⏳</span>
                        </div>
                        <div class="stat-card-content">
                            <h3>${leaves.filter(l => l.status === 'en_attente').length}</h3>
                            <p>En Attente</p>
                        </div>
                    </div>

                    <div class="stat-card">
                        <div class="stat-card-icon success">
                            <span>✓</span>
                        </div>
                        <div class="stat-card-content">
                            <h3>${leaves.filter(l => l.status === 'approuvé').length}</h3>
                            <p>Approuvés</p>
                        </div>
                    </div>

                    <div class="stat-card">
                        <div class="stat-card-icon danger">
                            <span>✗</span>
                        </div>
                        <div class="stat-card-content">
                            <h3>${leaves.filter(l => l.status === 'rejeté').length}</h3>
                            <p>Rejetés</p>
                        </div>
                    </div>

                    <div class="stat-card">
                        <div class="stat-card-icon primary">
                            <span>🌴</span>
                        </div>
                        <div class="stat-card-content">
                            <h3>${leaves.reduce((sum, l) => sum + (l.status === 'approuvé' ? l.days : 0), 0)}</h3>
                            <p>Total Jours Pris</p>
                        </div>
                    </div>
                </div>

                <!-- Leaves Table -->
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Demandes de Congés</h3>
                        <div class="card-actions">
                            <button class="btn-success" onclick="LeavesModule.showAddForm()">
                                <span>➕</span> Nouvelle Demande
                            </button>
                        </div>
                    </div>

                    <!-- Filters -->
                    <div style="padding: 1rem;">
                        <div class="filters">
                            <select class="filter-select" id="leave-status-filter" onchange="LeavesModule.filter()">
                                <option value="">Tous les statuts</option>
                                <option value="en_attente">En Attente</option>
                                <option value="approuvé">Approuvé</option>
                                <option value="rejeté">Rejeté</option>
                            </select>
                            <select class="filter-select" id="leave-type-filter" onchange="LeavesModule.filter()">
                                <option value="">Tous les types</option>
                                <option value="Congé payé">Congé payé</option>
                                <option value="Congé maladie">Congé maladie</option>
                                <option value="Congé sans solde">Congé sans solde</option>
                                <option value="Congé maternité">Congé maternité</option>
                                <option value="Congé paternité">Congé paternité</option>
                            </select>
                        </div>
                    </div>

                    <div class="table-container">
                        <table id="leaves-table">
                            <thead>
                                <tr>
                                    <th>Employé</th>
                                    <th>Type</th>
                                    <th>Début</th>
                                    <th>Fin</th>
                                    <th>Jours</th>
                                    <th>Raison</th>
                                    <th>Statut</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${this.renderLeaveRows(leaves, employees)}
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Leave Balance Card -->
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Soldes de Congés par Employé</h3>
                    </div>
                    <div style="padding: 1rem;">
                        ${this.renderLeaveBalances(employees, leaves)}
                    </div>
                </div>
            </div>

            <!-- Add Leave Modal -->
            <div id="add-leave-modal" class="modal hidden">
                <div class="modal-content">
                    <span class="close" onclick="LeavesModule.hideAddForm()">&times;</span>
                    <h2>Nouvelle Demande de Congé</h2>
                    <form id="leave-form" onsubmit="LeavesModule.saveLeave(event)">
                        <div class="form-group">
                            <label>Employé *</label>
                            <select name="employeeId" required>
                                <option value="">Sélectionner un employé</option>
                                ${employees.map(emp => `
                                    <option value="${emp.id}">${emp.firstName} ${emp.lastName}</option>
                                `).join('')}
                            </select>
                        </div>

                        <div class="form-group">
                            <label>Type de Congé *</label>
                            <select name="type" required>
                                <option value="Congé payé">Congé payé</option>
                                <option value="Congé maladie">Congé maladie</option>
                                <option value="Congé sans solde">Congé sans solde</option>
                                <option value="Congé maternité">Congé maternité</option>
                                <option value="Congé paternité">Congé paternité</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label>Date de Début *</label>
                            <input type="date" name="startDate" id="leave-start-date" required onchange="LeavesModule.calculateDays()">
                        </div>

                        <div class="form-group">
                            <label>Date de Fin *</label>
                            <input type="date" name="endDate" id="leave-end-date" required onchange="LeavesModule.calculateDays()">
                        </div>

                        <div class="form-group">
                            <label>Nombre de Jours</label>
                            <input type="number" name="days" id="leave-days" readonly>
                        </div>

                        <div class="form-group">
                            <label>Raison *</label>
                            <textarea name="reason" rows="3" required></textarea>
                        </div>

                        <button type="submit" class="btn-primary btn-block">Soumettre la Demande</button>
                    </form>
                </div>
            </div>
        `;
    },

    renderLeaveRows(leaves, employees) {
        if (leaves.length === 0) {
            return '<tr><td colspan="8" style="text-align: center; padding: 2rem;">Aucune demande de congé</td></tr>';
        }

        return leaves.map(leave => {
            const employee = employees.find(e => e.id === leave.employeeId);
            const employeeName = employee ? `${employee.firstName} ${employee.lastName}` : 'Inconnu';

            return `
                <tr>
                    <td><strong>${employeeName}</strong></td>
                    <td>${leave.type}</td>
                    <td>${Utils.formatDate(leave.startDate)}</td>
                    <td>${Utils.formatDate(leave.endDate)}</td>
                    <td><strong>${leave.days}</strong></td>
                    <td>${leave.reason}</td>
                    <td>${Utils.getStatusBadge(leave.status)}</td>
                    <td>
                        ${leave.status === 'en_attente' ? `
                            <button class="btn-success btn-sm" onclick="LeavesModule.approveLeave('${leave.id}')">
                                ✓
                            </button>
                            <button class="btn-danger btn-sm" onclick="LeavesModule.rejectLeave('${leave.id}')">
                                ✗
                            </button>
                        ` : ''}
                        <button class="btn-icon" onclick="LeavesModule.deleteLeave('${leave.id}')" title="Supprimer">
                            🗑️
                        </button>
                    </td>
                </tr>
            `;
        }).join('');
    },

    renderLeaveBalances(employees, leaves) {
        const settings = DataManager.getSettings();
        const annualDays = settings.leave?.annualDays || 22;

        let html = '<div class="grid-2" style="gap: 1rem;">';

        employees.forEach(emp => {
            const empLeaves = leaves.filter(l => l.employeeId === emp.id && l.status === 'approuvé');
            const takenDays = empLeaves.reduce((sum, l) => sum + l.days, 0);
            const remainingDays = annualDays - takenDays;
            const percentage = Math.round((takenDays / annualDays) * 100);

            html += `
                <div style="padding: 1rem; background: var(--white); border-radius: var(--radius-md); box-shadow: var(--shadow-sm);">
                    <div style="margin-bottom: 0.5rem;">
                        <strong>${emp.firstName} ${emp.lastName}</strong>
                    </div>
                    <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                        <span>Pris: ${takenDays} jours</span>
                        <span>Reste: ${remainingDays} jours</span>
                    </div>
                    <div class="progress">
                        <div class="progress-bar ${percentage > 80 ? 'danger' : percentage > 60 ? 'warning' : ''}"
                             style="width: ${percentage}%"></div>
                    </div>
                </div>
            `;
        });

        html += '</div>';
        return html;
    },

    init() {
        console.log('Leaves module loaded');
    },

    showAddForm() {
        document.getElementById('add-leave-modal').classList.remove('hidden');
    },

    hideAddForm() {
        document.getElementById('add-leave-modal').classList.add('hidden');
        document.getElementById('leave-form').reset();
    },

    calculateDays() {
        const startDate = document.getElementById('leave-start-date').value;
        const endDate = document.getElementById('leave-end-date').value;

        if (startDate && endDate) {
            const days = Utils.daysBetween(startDate, endDate) + 1; // Include both start and end
            document.getElementById('leave-days').value = days;
        }
    },

    saveLeave(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        data.requestDate = Utils.getCurrentDate();
        data.status = 'en_attente';
        data.approvedBy = null;
        data.approvedDate = null;
        data.days = parseInt(data.days);

        if (DataManager.addLeave(data)) {
            Utils.showNotification('Demande de congé créée avec succès', 'success');
            this.hideAddForm();
            app.reloadModule();
        } else {
            Utils.showNotification('Erreur lors de la création', 'danger');
        }
    },

    approveLeave(id) {
        if (Utils.confirm('Approuver cette demande de congé?')) {
            const currentUser = DataManager.getCurrentUser();
            DataManager.updateLeave(id, {
                status: 'approuvé',
                approvedBy: currentUser.id,
                approvedDate: Utils.getCurrentDate()
            });
            Utils.showNotification('Congé approuvé', 'success');
            app.reloadModule();
        }
    },

    rejectLeave(id) {
        if (Utils.confirm('Rejeter cette demande de congé?')) {
            const currentUser = DataManager.getCurrentUser();
            DataManager.updateLeave(id, {
                status: 'rejeté',
                approvedBy: currentUser.id,
                approvedDate: Utils.getCurrentDate()
            });
            Utils.showNotification('Congé rejeté', 'danger');
            app.reloadModule();
        }
    },

    deleteLeave(id) {
        if (Utils.confirm('Supprimer cette demande de congé?')) {
            if (DataManager.deleteLeave(id)) {
                Utils.showNotification('Demande supprimée', 'success');
                app.reloadModule();
            }
        }
    },

    filter() {
        const statusFilter = document.getElementById('leave-status-filter').value;
        const typeFilter = document.getElementById('leave-type-filter').value;

        let leaves = DataManager.getLeaves();
        const employees = DataManager.getEmployees();

        if (statusFilter) {
            leaves = leaves.filter(l => l.status === statusFilter);
        }
        if (typeFilter) {
            leaves = leaves.filter(l => l.type === typeFilter);
        }

        const tbody = document.querySelector('#leaves-table tbody');
        if (tbody) {
            tbody.innerHTML = this.renderLeaveRows(leaves, employees);
        }
    }
};

// Attendance Module
const AttendanceModule = {
    render() {
        const attendance = DataManager.getAttendance();
        const employees = DataManager.getEmployees();
        const today = Utils.getCurrentDate();
        const todayAttendance = attendance.filter(a => a.date === today);

        return `
            <div class="attendance-module">
                <!-- Quick Stats -->
                <div class="dashboard-stats">
                    <div class="stat-card">
                        <div class="stat-card-icon success">
                            <span>✓</span>
                        </div>
                        <div class="stat-card-content">
                            <h3>${todayAttendance.filter(a => a.status === 'present').length}</h3>
                            <p>Présents Aujourd'hui</p>
                        </div>
                    </div>

                    <div class="stat-card">
                        <div class="stat-card-icon warning">
                            <span>⚠️</span>
                        </div>
                        <div class="stat-card-content">
                            <h3>${todayAttendance.filter(a => a.status === 'retard').length}</h3>
                            <p>En Retard</p>
                        </div>
                    </div>

                    <div class="stat-card">
                        <div class="stat-card-icon danger">
                            <span>✗</span>
                        </div>
                        <div class="stat-card-content">
                            <h3>${todayAttendance.filter(a => a.status === 'absent').length}</h3>
                            <p>Absents</p>
                        </div>
                    </div>

                    <div class="stat-card">
                        <div class="stat-card-icon primary">
                            <span>⏰</span>
                        </div>
                        <div class="stat-card-content">
                            <h3>${attendance.reduce((sum, a) => sum + a.overtimeHours, 0)}</h3>
                            <p>Heures Supplémentaires</p>
                        </div>
                    </div>
                </div>

                <!-- Today's Attendance -->
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Présence du Jour</h3>
                        <div class="card-actions">
                            <button class="btn-success" onclick="AttendanceModule.showMarkAttendance()">
                                <span>➕</span> Pointer
                            </button>
                        </div>
                    </div>

                    <div class="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>Employé</th>
                                    <th>Arrivée</th>
                                    <th>Départ</th>
                                    <th>Heures Sup.</th>
                                    <th>Statut</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${this.renderTodayAttendance(employees, todayAttendance)}
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Attendance History -->
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Historique des Présences</h3>
                    </div>

                    <div style="padding: 1rem;">
                        <div class="filters">
                            <input type="date" class="filter-select" id="attendance-date"
                                   value="${today}" onchange="AttendanceModule.filterByDate()">
                            <select class="filter-select" id="attendance-employee" onchange="AttendanceModule.filterByEmployee()">
                                <option value="">Tous les employés</option>
                                ${employees.map(emp => `
                                    <option value="${emp.id}">${emp.firstName} ${emp.lastName}</option>
                                `).join('')}
                            </select>
                        </div>
                    </div>

                    <div id="attendance-history">
                        ${this.renderAttendanceHistory(attendance.slice(-50).reverse(), employees)}
                    </div>
                </div>
            </div>

            <!-- Mark Attendance Modal -->
            <div id="mark-attendance-modal" class="modal hidden">
                <div class="modal-content">
                    <span class="close" onclick="AttendanceModule.hideMarkAttendance()">&times;</span>
                    <h2>Pointer Présence</h2>
                    <form id="attendance-form" onsubmit="AttendanceModule.saveAttendance(event)">
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
                            <label>Date *</label>
                            <input type="date" name="date" value="${today}" required>
                        </div>

                        <div class="form-group">
                            <label>Statut *</label>
                            <select name="status" required onchange="AttendanceModule.toggleTimeFields(this)">
                                <option value="present">Présent</option>
                                <option value="retard">Retard</option>
                                <option value="absent">Absent</option>
                            </select>
                        </div>

                        <div class="form-group" id="checkin-group">
                            <label>Heure d'Arrivée</label>
                            <input type="time" name="checkIn" value="09:00">
                        </div>

                        <div class="form-group" id="checkout-group">
                            <label>Heure de Départ</label>
                            <input type="time" name="checkOut" value="18:00">
                        </div>

                        <div class="form-group">
                            <label>Heures Supplémentaires</label>
                            <input type="number" name="overtimeHours" value="0" min="0" step="0.5">
                        </div>

                        <button type="submit" class="btn-primary btn-block">Enregistrer</button>
                    </form>
                </div>
            </div>
        `;
    },

    renderTodayAttendance(employees, todayAttendance) {
        return employees.map(emp => {
            const record = todayAttendance.find(a => a.employeeId === emp.id);

            if (!record) {
                return `
                    <tr>
                        <td>${emp.firstName} ${emp.lastName}</td>
                        <td colspan="4" style="text-align: center; color: var(--gray);">Non pointé</td>
                        <td>
                            <button class="btn-success btn-sm" onclick="AttendanceModule.quickMark('${emp.id}', 'present')">
                                Présent
                            </button>
                        </td>
                    </tr>
                `;
            }

            return `
                <tr>
                    <td>${emp.firstName} ${emp.lastName}</td>
                    <td>${record.checkIn || '-'}</td>
                    <td>${record.checkOut || '-'}</td>
                    <td>${record.overtimeHours}h</td>
                    <td>${Utils.getStatusBadge(record.status)}</td>
                    <td>
                        <button class="btn-icon" onclick="AttendanceModule.editAttendance('${record.id}')">
                            ✏️
                        </button>
                    </td>
                </tr>
            `;
        }).join('');
    },

    renderAttendanceHistory(records, employees) {
        if (records.length === 0) {
            return '<div class="empty-state"><p>Aucun enregistrement</p></div>';
        }

        let html = '<div class="table-container"><table><thead><tr>';
        html += '<th>Date</th><th>Employé</th><th>Arrivée</th><th>Départ</th><th>Heures Sup.</th><th>Statut</th>';
        html += '</tr></thead><tbody>';

        records.forEach(record => {
            const employee = employees.find(e => e.id === record.employeeId);
            const empName = employee ? `${employee.firstName} ${employee.lastName}` : 'Inconnu';

            html += `
                <tr>
                    <td>${Utils.formatDate(record.date)}</td>
                    <td>${empName}</td>
                    <td>${record.checkIn || '-'}</td>
                    <td>${record.checkOut || '-'}</td>
                    <td>${record.overtimeHours}h</td>
                    <td>${Utils.getStatusBadge(record.status)}</td>
                </tr>
            `;
        });

        html += '</tbody></table></div>';
        return html;
    },

    init() {
        console.log('Attendance module loaded');
    },

    showMarkAttendance() {
        document.getElementById('mark-attendance-modal').classList.remove('hidden');
    },

    hideMarkAttendance() {
        document.getElementById('mark-attendance-modal').classList.add('hidden');
        document.getElementById('attendance-form').reset();
    },

    toggleTimeFields(select) {
        const checkinGroup = document.getElementById('checkin-group');
        const checkoutGroup = document.getElementById('checkout-group');

        if (select.value === 'absent') {
            checkinGroup.style.display = 'none';
            checkoutGroup.style.display = 'none';
        } else {
            checkinGroup.style.display = 'block';
            checkoutGroup.style.display = 'block';
        }
    },

    saveAttendance(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        if (data.status === 'absent') {
            data.checkIn = null;
            data.checkOut = null;
        }

        data.overtimeHours = parseFloat(data.overtimeHours) || 0;

        if (DataManager.addAttendance(data)) {
            Utils.showNotification('Présence enregistrée', 'success');
            this.hideMarkAttendance();
            app.reloadModule();
        } else {
            Utils.showNotification('Erreur lors de l\'enregistrement', 'danger');
        }
    },

    quickMark(employeeId, status) {
        const data = {
            employeeId,
            date: Utils.getCurrentDate(),
            status,
            checkIn: status !== 'absent' ? '09:00' : null,
            checkOut: status !== 'absent' ? '18:00' : null,
            overtimeHours: 0
        };

        if (DataManager.addAttendance(data)) {
            Utils.showNotification('Présence enregistrée', 'success');
            app.reloadModule();
        }
    },

    filterByDate() {
        const date = document.getElementById('attendance-date').value;
        const employeeId = document.getElementById('attendance-employee').value;

        let attendance = DataManager.getAttendance();
        const employees = DataManager.getEmployees();

        if (date) {
            attendance = attendance.filter(a => a.date === date);
        }
        if (employeeId) {
            attendance = attendance.filter(a => a.employeeId === employeeId);
        }

        const historyDiv = document.getElementById('attendance-history');
        historyDiv.innerHTML = this.renderAttendanceHistory(attendance, employees);
    },

    filterByEmployee() {
        this.filterByDate();
    }
};

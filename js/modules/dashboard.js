// Dashboard Module
const DashboardModule = {
    render() {
        const employees = DataManager.getEmployees();
        const leaves = DataManager.getLeaves();
        const attendance = DataManager.getAttendance();

        // Calculate stats
        const totalEmployees = employees.length;
        const activeEmployees = employees.filter(e => e.status === 'actif').length;
        const pendingLeaves = leaves.filter(l => l.status === 'en_attente').length;

        // Calculate today's attendance
        const today = Utils.getCurrentDate();
        const todayAttendance = attendance.filter(a => a.date === today);
        const presentToday = todayAttendance.filter(a => a.status === 'present' || a.status === 'retard').length;
        const attendanceRate = totalEmployees > 0 ? Math.round((presentToday / totalEmployees) * 100) : 0;

        // Get recent activities
        const recentLeaves = leaves.slice(-5).reverse();

        return `
            <div class="dashboard">
                <!-- Stats Cards -->
                <div class="dashboard-stats">
                    <div class="stat-card">
                        <div class="stat-card-icon primary">
                            <span>👥</span>
                        </div>
                        <div class="stat-card-content">
                            <h3>${totalEmployees}</h3>
                            <p>Total Employés</p>
                        </div>
                    </div>

                    <div class="stat-card">
                        <div class="stat-card-icon success">
                            <span>✓</span>
                        </div>
                        <div class="stat-card-content">
                            <h3>${activeEmployees}</h3>
                            <p>Employés Actifs</p>
                        </div>
                    </div>

                    <div class="stat-card">
                        <div class="stat-card-icon warning">
                            <span>🌴</span>
                        </div>
                        <div class="stat-card-content">
                            <h3>${pendingLeaves}</h3>
                            <p>Congés en Attente</p>
                        </div>
                    </div>

                    <div class="stat-card">
                        <div class="stat-card-icon success">
                            <span>⏰</span>
                        </div>
                        <div class="stat-card-content">
                            <h3>${attendanceRate}%</h3>
                            <p>Taux de Présence</p>
                        </div>
                    </div>
                </div>

                <!-- Charts and Recent Activity -->
                <div class="grid-2">
                    <!-- Department Distribution -->
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Répartition par Département</h3>
                        </div>
                        ${this.renderDepartmentChart(employees)}
                    </div>

                    <!-- Recent Leave Requests -->
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Demandes de Congés Récentes</h3>
                        </div>
                        ${this.renderRecentLeaves(recentLeaves, employees)}
                    </div>
                </div>

                <!-- Attendance Overview -->
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Présences de la Semaine</h3>
                    </div>
                    ${this.renderWeeklyAttendance(attendance)}
                </div>

                <!-- Quick Actions -->
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Actions Rapides</h3>
                    </div>
                    <div class="grid-3" style="gap: 1rem;">
                        <button class="btn-primary" onclick="app.loadModule('employees')">
                            <span>👥</span> Ajouter un Employé
                        </button>
                        <button class="btn-primary" onclick="app.loadModule('leaves')">
                            <span>🌴</span> Gérer les Congés
                        </button>
                        <button class="btn-primary" onclick="app.loadModule('attendance')">
                            <span>⏰</span> Pointer Présence
                        </button>
                    </div>
                </div>
            </div>
        `;
    },

    renderDepartmentChart(employees) {
        const departments = {};
        employees.forEach(emp => {
            departments[emp.department] = (departments[emp.department] || 0) + 1;
        });

        let html = '<div style="padding: 1rem;">';
        Object.entries(departments).forEach(([dept, count]) => {
            const percentage = Math.round((count / employees.length) * 100);
            html += `
                <div style="margin-bottom: 1rem;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                        <span>${dept}</span>
                        <span><strong>${count}</strong> (${percentage}%)</span>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" style="width: ${percentage}%"></div>
                    </div>
                </div>
            `;
        });
        html += '</div>';
        return html;
    },

    renderRecentLeaves(leaves, employees) {
        if (leaves.length === 0) {
            return '<div class="empty-state"><p>Aucune demande récente</p></div>';
        }

        let html = '<div class="timeline">';
        leaves.forEach(leave => {
            const employee = employees.find(e => e.id === leave.employeeId);
            const employeeName = employee ? `${employee.firstName} ${employee.lastName}` : 'Inconnu';

            html += `
                <div class="timeline-item">
                    <div class="timeline-date">${Utils.formatDate(leave.requestDate)}</div>
                    <div class="timeline-content">
                        <strong>${employeeName}</strong> - ${leave.type}
                        <br>
                        <small>${Utils.formatDate(leave.startDate)} au ${Utils.formatDate(leave.endDate)} (${leave.days} jours)</small>
                        <br>
                        ${Utils.getStatusBadge(leave.status)}
                    </div>
                </div>
            `;
        });
        html += '</div>';
        return html;
    },

    renderWeeklyAttendance(attendance) {
        const today = new Date();
        const weekData = [];

        for (let i = 6; i >= 0; i--) {
            const date = new Date(today);
            date.setDate(date.getDate() - i);
            const dateStr = date.toISOString().split('T')[0];

            const dayAttendance = attendance.filter(a => a.date === dateStr);
            const present = dayAttendance.filter(a => a.status === 'present' || a.status === 'retard').length;
            const absent = dayAttendance.filter(a => a.status === 'absent').length;

            weekData.push({
                date: dateStr,
                day: date.toLocaleDateString('fr-FR', { weekday: 'short' }),
                present,
                absent,
                total: dayAttendance.length
            });
        }

        let html = '<div style="padding: 1rem;"><div style="display: flex; gap: 1rem; justify-content: space-around;">';
        weekData.forEach(day => {
            const rate = day.total > 0 ? Math.round((day.present / day.total) * 100) : 0;
            html += `
                <div style="text-align: center; flex: 1;">
                    <div style="font-weight: bold; margin-bottom: 0.5rem;">${day.day}</div>
                    <div style="font-size: 2rem; color: ${rate > 80 ? 'var(--secondary)' : 'var(--warning)'};">
                        ${rate}%
                    </div>
                    <div style="font-size: 0.875rem; color: var(--gray);">
                        ${day.present}/${day.total}
                    </div>
                </div>
            `;
        });
        html += '</div></div>';
        return html;
    },

    init() {
        // Dashboard initialized
        console.log('Dashboard module loaded');
    }
};

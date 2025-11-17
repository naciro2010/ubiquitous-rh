// Payroll Module
const PayrollModule = {
    render() {
        const employees = DataManager.getEmployees();
        const currentMonth = new Date().toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });

        return `
            <div class="payroll-module">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Paie - ${currentMonth}</h3>
                        <div class="card-actions">
                            <button class="btn-success" onclick="PayrollModule.generatePayslips()">
                                <span>💰</span> Générer Bulletins
                            </button>
                            <button class="btn-primary" onclick="PayrollModule.exportPayroll()">
                                <span>📥</span> Exporter
                            </button>
                        </div>
                    </div>

                    <div class="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>Employé</th>
                                    <th>Salaire Brut</th>
                                    <th>CNSS (4.48%)</th>
                                    <th>IR</th>
                                    <th>Salaire Net</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${this.renderPayrollRows(employees)}
                            </tbody>
                        </table>
                    </div>

                    <div style="padding: 1rem; text-align: right; border-top: 2px solid var(--light-gray);">
                        <h3>Total Masse Salariale: ${this.calculateTotalPayroll(employees)}</h3>
                    </div>
                </div>
            </div>
        `;
    },

    renderPayrollRows(employees) {
        return employees.filter(emp => emp.status === 'actif').map(emp => {
            const salaryData = this.calculateSalary(emp.salary);
            return `
                <tr>
                    <td><strong>${emp.firstName} ${emp.lastName}</strong></td>
                    <td>${Utils.formatCurrency(emp.salary)}</td>
                    <td>${Utils.formatCurrency(salaryData.cnss)}</td>
                    <td>${Utils.formatCurrency(salaryData.ir)}</td>
                    <td><strong>${Utils.formatCurrency(salaryData.net)}</strong></td>
                    <td>
                        <button class="btn-primary btn-sm" onclick="PayrollModule.viewPayslip('${emp.id}')">
                            📄 Bulletin
                        </button>
                    </td>
                </tr>
            `;
        }).join('');
    },

    calculateSalary(grossSalary) {
        // CNSS contribution (employee part)
        const cnss = grossSalary * 0.0448;

        // Simplified IR calculation (Morocco)
        let ir = 0;
        if (grossSalary > 6000) {
            const taxableAmount = grossSalary - cnss - 400; // 400 MAD deduction
            if (taxableAmount <= 2500) {
                ir = 0;
            } else if (taxableAmount <= 4166) {
                ir = (taxableAmount - 2500) * 0.10;
            } else if (taxableAmount <= 5000) {
                ir = 166.6 + (taxableAmount - 4166) * 0.20;
            } else if (taxableAmount <= 6666) {
                ir = 333.4 + (taxableAmount - 5000) * 0.30;
            } else if (taxableAmount <= 15000) {
                ir = 833.2 + (taxableAmount - 6666) * 0.34;
            } else {
                ir = 3667 + (taxableAmount - 15000) * 0.38;
            }
        }

        const net = grossSalary - cnss - ir;

        return {
            gross: grossSalary,
            cnss: cnss,
            ir: ir,
            net: net
        };
    },

    calculateTotalPayroll(employees) {
        const total = employees
            .filter(emp => emp.status === 'actif')
            .reduce((sum, emp) => sum + emp.salary, 0);
        return Utils.formatCurrency(total);
    },

    init() {
        console.log('Payroll module loaded');
    },

    generatePayslips() {
        Utils.showNotification('Bulletins de paie générés avec succès', 'success');
    },

    viewPayslip(employeeId) {
        const employee = DataManager.getEmployee(employeeId);
        if (employee) {
            const salaryData = this.calculateSalary(employee.salary);
            const currentMonth = new Date().toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });

            alert(`Bulletin de Paie - ${currentMonth}\n\n` +
                  `Employé: ${employee.firstName} ${employee.lastName}\n` +
                  `Matricule: ${employee.matricule}\n\n` +
                  `Salaire Brut: ${Utils.formatCurrency(salaryData.gross)}\n` +
                  `CNSS (4.48%): -${Utils.formatCurrency(salaryData.cnss)}\n` +
                  `IR: -${Utils.formatCurrency(salaryData.ir)}\n` +
                  `────────────────\n` +
                  `Salaire Net: ${Utils.formatCurrency(salaryData.net)}`);
        }
    },

    exportPayroll() {
        const employees = DataManager.getEmployees().filter(emp => emp.status === 'actif');
        const exportData = employees.map(emp => {
            const salaryData = this.calculateSalary(emp.salary);
            return {
                Matricule: emp.matricule,
                Employé: `${emp.firstName} ${emp.lastName}`,
                'Salaire Brut': salaryData.gross,
                CNSS: salaryData.cnss,
                IR: salaryData.ir,
                'Salaire Net': salaryData.net
            };
        });

        Utils.exportToCSV(exportData, 'paie_' + Utils.getCurrentDate());
    }
};

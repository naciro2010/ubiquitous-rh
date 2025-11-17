// Settings Module
const SettingsModule = {
    render() {
        const settings = DataManager.getSettings();

        return `
            <div class="settings-module">
                <!-- Company Settings -->
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Informations de l'Entreprise</h3>
                    </div>
                    <form id="company-form" onsubmit="SettingsModule.saveCompanySettings(event)" style="padding: 1.5rem;">
                        <div class="grid-2">
                            <div class="form-group">
                                <label>Nom de l'Entreprise *</label>
                                <input type="text" name="name" value="${settings.company?.name || ''}" required>
                            </div>

                            <div class="form-group">
                                <label>Email</label>
                                <input type="email" name="email" value="${settings.company?.email || ''}">
                            </div>

                            <div class="form-group">
                                <label>Téléphone</label>
                                <input type="tel" name="phone" value="${settings.company?.phone || ''}">
                            </div>

                            <div class="form-group">
                                <label>ICE</label>
                                <input type="text" name="ice" value="${settings.company?.ice || ''}">
                            </div>

                            <div class="form-group">
                                <label>RC</label>
                                <input type="text" name="rc" value="${settings.company?.rc || ''}">
                            </div>

                            <div class="form-group">
                                <label>N° CNSS</label>
                                <input type="text" name="cnss" value="${settings.company?.cnss || ''}">
                            </div>

                            <div class="form-group" style="grid-column: 1 / -1;">
                                <label>Adresse</label>
                                <input type="text" name="address" value="${settings.company?.address || ''}">
                            </div>
                        </div>

                        <button type="submit" class="btn-success">💾 Enregistrer</button>
                    </form>
                </div>

                <!-- Leave Settings -->
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Paramètres des Congés</h3>
                    </div>
                    <form id="leave-form" onsubmit="SettingsModule.saveLeaveSettings(event)" style="padding: 1.5rem;">
                        <div class="grid-3">
                            <div class="form-group">
                                <label>Jours de Congé Annuel</label>
                                <input type="number" name="annualDays" value="${settings.leave?.annualDays || 22}" min="0">
                            </div>

                            <div class="form-group">
                                <label>Jours de Congé Maladie</label>
                                <input type="number" name="sickDays" value="${settings.leave?.sickDays || 15}" min="0">
                            </div>

                            <div class="form-group">
                                <label>Congé Sans Solde</label>
                                <select name="unpaidAllowed">
                                    <option value="true" ${settings.leave?.unpaidAllowed ? 'selected' : ''}>Autorisé</option>
                                    <option value="false" ${!settings.leave?.unpaidAllowed ? 'selected' : ''}>Non Autorisé</option>
                                </select>
                            </div>
                        </div>

                        <button type="submit" class="btn-success">💾 Enregistrer</button>
                    </form>
                </div>

                <!-- Work Schedule Settings -->
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Horaires de Travail</h3>
                    </div>
                    <form id="schedule-form" onsubmit="SettingsModule.saveScheduleSettings(event)" style="padding: 1.5rem;">
                        <div class="grid-3">
                            <div class="form-group">
                                <label>Heure de Début</label>
                                <input type="time" name="startTime" value="${settings.workSchedule?.startTime || '09:00'}">
                            </div>

                            <div class="form-group">
                                <label>Heure de Fin</label>
                                <input type="time" name="endTime" value="${settings.workSchedule?.endTime || '18:00'}">
                            </div>

                            <div class="form-group">
                                <label>Pause (minutes)</label>
                                <input type="number" name="breakDuration" value="${settings.workSchedule?.breakDuration || 60}" min="0">
                            </div>
                        </div>

                        <div class="form-group">
                            <label>Jours de Travail</label>
                            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                                ${['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'].map(day => {
                                    const checked = settings.workSchedule?.workDays?.includes(day) ? 'checked' : '';
                                    return `
                                        <label style="display: flex; align-items: center; gap: 0.5rem;">
                                            <input type="checkbox" name="workDays" value="${day}" ${checked}>
                                            <span>${day}</span>
                                        </label>
                                    `;
                                }).join('')}
                            </div>
                        </div>

                        <button type="submit" class="btn-success">💾 Enregistrer</button>
                    </form>
                </div>

                <!-- Payroll Settings -->
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Paramètres de Paie</h3>
                    </div>
                    <form id="payroll-form" onsubmit="SettingsModule.savePayrollSettings(event)" style="padding: 1.5rem;">
                        <div class="grid-2">
                            <div class="form-group">
                                <label>Devise</label>
                                <select name="currency">
                                    <option value="MAD" ${settings.payroll?.currency === 'MAD' ? 'selected' : ''}>MAD (Dirham)</option>
                                    <option value="EUR" ${settings.payroll?.currency === 'EUR' ? 'selected' : ''}>EUR (Euro)</option>
                                    <option value="USD" ${settings.payroll?.currency === 'USD' ? 'selected' : ''}>USD (Dollar)</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label>Jour de Paiement</label>
                                <input type="number" name="paymentDay" value="${settings.payroll?.paymentDay || 28}" min="1" max="31">
                            </div>
                        </div>

                        <button type="submit" class="btn-success">💾 Enregistrer</button>
                    </form>
                </div>

                <!-- Data Management -->
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Gestion des Données</h3>
                    </div>
                    <div style="padding: 1.5rem;">
                        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                            <button class="btn-primary" onclick="SettingsModule.exportAllData()">
                                📥 Exporter Toutes les Données
                            </button>
                            <button class="btn-warning" onclick="SettingsModule.importData()">
                                📤 Importer des Données
                            </button>
                            <button class="btn-danger" onclick="SettingsModule.resetData()">
                                🔄 Réinitialiser les Données
                            </button>
                        </div>

                        <div class="alert alert-info" style="margin-top: 1rem;">
                            <strong>Note:</strong> L'export vous permet de sauvegarder toutes vos données.
                            La réinitialisation supprimera toutes les données et rechargera les données de démo.
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    init() {
        console.log('Settings module loaded');
    },

    saveCompanySettings(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        const settings = DataManager.getSettings();
        settings.company = data;
        DataManager.updateSettings(settings);

        Utils.showNotification('Informations de l\'entreprise enregistrées', 'success');
    },

    saveLeaveSettings(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        const settings = DataManager.getSettings();
        settings.leave = {
            annualDays: parseInt(data.annualDays),
            sickDays: parseInt(data.sickDays),
            unpaidAllowed: data.unpaidAllowed === 'true'
        };
        DataManager.updateSettings(settings);

        Utils.showNotification('Paramètres des congés enregistrés', 'success');
    },

    saveScheduleSettings(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        const workDays = [];
        formData.getAll('workDays').forEach(day => workDays.push(day));

        const settings = DataManager.getSettings();
        settings.workSchedule = {
            startTime: formData.get('startTime'),
            endTime: formData.get('endTime'),
            breakDuration: parseInt(formData.get('breakDuration')),
            workDays: workDays
        };
        DataManager.updateSettings(settings);

        Utils.showNotification('Horaires de travail enregistrés', 'success');
    },

    savePayrollSettings(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        const settings = DataManager.getSettings();
        settings.payroll = settings.payroll || {};
        settings.payroll.currency = data.currency;
        settings.payroll.paymentDay = parseInt(data.paymentDay);
        DataManager.updateSettings(settings);

        Utils.showNotification('Paramètres de paie enregistrés', 'success');
    },

    exportAllData() {
        const allData = {
            employees: DataManager.getEmployees(),
            leaves: DataManager.getLeaves(),
            attendance: DataManager.getAttendance(),
            recruitment: DataManager.getData(DataManager.KEYS.RECRUITMENT),
            performance: DataManager.getData(DataManager.KEYS.PERFORMANCE),
            documents: DataManager.getData(DataManager.KEYS.DOCUMENTS),
            settings: DataManager.getSettings(),
            exportDate: Utils.getCurrentDate()
        };

        const dataStr = JSON.stringify(allData, null, 2);
        const blob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `rh_data_export_${Utils.getCurrentDate()}.json`;
        link.click();

        Utils.showNotification('Export réussi!', 'success');
    },

    importData() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';

        input.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                Utils.importFromJSON(file, (data) => {
                    if (data.employees) DataManager.saveData(DataManager.KEYS.EMPLOYEES, data.employees);
                    if (data.leaves) DataManager.saveData(DataManager.KEYS.LEAVES, data.leaves);
                    if (data.attendance) DataManager.saveData(DataManager.KEYS.ATTENDANCE, data.attendance);
                    if (data.recruitment) DataManager.saveData(DataManager.KEYS.RECRUITMENT, data.recruitment);
                    if (data.performance) DataManager.saveData(DataManager.KEYS.PERFORMANCE, data.performance);
                    if (data.documents) DataManager.saveData(DataManager.KEYS.DOCUMENTS, data.documents);
                    if (data.settings) DataManager.updateSettings(data.settings);

                    app.reloadModule();
                });
            }
        };

        input.click();
    },

    resetData() {
        if (Utils.confirm('ATTENTION: Ceci supprimera toutes les données et rechargera les données de démo. Continuer?')) {
            DataManager.clearAll();
            DataManager.initialize();
            Utils.showNotification('Données réinitialisées', 'success');
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        }
    }
};

// Recruitment Module
const RecruitmentModule = {
    render() {
        const jobs = DataManager.getData(DataManager.KEYS.RECRUITMENT) || [];

        return `
            <div class="recruitment-module">
                <!-- Stats -->
                <div class="dashboard-stats">
                    <div class="stat-card">
                        <div class="stat-card-icon primary">
                            <span>📋</span>
                        </div>
                        <div class="stat-card-content">
                            <h3>${jobs.filter(j => j.status === 'ouvert').length}</h3>
                            <p>Postes Ouverts</p>
                        </div>
                    </div>

                    <div class="stat-card">
                        <div class="stat-card-icon success">
                            <span>👤</span>
                        </div>
                        <div class="stat-card-content">
                            <h3>${jobs.reduce((sum, j) => sum + (j.applications?.length || 0), 0)}</h3>
                            <p>Candidatures</p>
                        </div>
                    </div>

                    <div class="stat-card">
                        <div class="stat-card-icon warning">
                            <span>🔄</span>
                        </div>
                        <div class="stat-card-content">
                            <h3>${jobs.reduce((sum, j) => sum + (j.applications?.filter(a => a.status === 'en_cours').length || 0), 0)}</h3>
                            <p>En Cours</p>
                        </div>
                    </div>

                    <div class="stat-card">
                        <div class="stat-card-icon danger">
                            <span>🎯</span>
                        </div>
                        <div class="stat-card-content">
                            <h3>${jobs.filter(j => j.status === 'fermé').length}</h3>
                            <p>Postes Pourvus</p>
                        </div>
                    </div>
                </div>

                <!-- Job Listings -->
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Offres d'Emploi</h3>
                        <div class="card-actions">
                            <button class="btn-success" onclick="RecruitmentModule.showAddJob()">
                                <span>➕</span> Nouvelle Offre
                            </button>
                        </div>
                    </div>

                    <div id="jobs-list">
                        ${this.renderJobsList(jobs)}
                    </div>
                </div>
            </div>

            <!-- Add Job Modal -->
            <div id="add-job-modal" class="modal hidden">
                <div class="modal-content" style="max-width: 700px;">
                    <span class="close" onclick="RecruitmentModule.hideAddJob()">&times;</span>
                    <h2>Nouvelle Offre d'Emploi</h2>
                    <form id="job-form" onsubmit="RecruitmentModule.saveJob(event)">
                        <div class="form-group">
                            <label>Titre du Poste *</label>
                            <input type="text" name="title" required>
                        </div>

                        <div class="grid-2">
                            <div class="form-group">
                                <label>Département *</label>
                                <input type="text" name="department" required>
                            </div>

                            <div class="form-group">
                                <label>Type de Contrat *</label>
                                <select name="type" required>
                                    <option value="CDI">CDI</option>
                                    <option value="CDD">CDD</option>
                                    <option value="Stage">Stage</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label>Localisation *</label>
                                <input type="text" name="location" required>
                            </div>

                            <div class="form-group">
                                <label>Fourchette Salariale</label>
                                <input type="text" name="salary" placeholder="ex: 10000-15000 MAD">
                            </div>
                        </div>

                        <div class="form-group">
                            <label>Description *</label>
                            <textarea name="description" rows="4" required></textarea>
                        </div>

                        <div class="form-group">
                            <label>Compétences Requises (séparées par des virgules)</label>
                            <textarea name="requirements" rows="3"></textarea>
                        </div>

                        <button type="submit" class="btn-primary btn-block">Publier l'Offre</button>
                    </form>
                </div>
            </div>
        `;
    },

    renderJobsList(jobs) {
        if (jobs.length === 0) {
            return '<div class="empty-state"><div class="empty-state-icon">📋</div><h3>Aucune offre d\'emploi</h3></div>';
        }

        let html = '<div style="padding: 1rem;">';
        jobs.forEach(job => {
            html += `
                <div class="card" style="margin-bottom: 1rem;">
                    <div style="padding: 1rem;">
                        <div style="display: flex; justify-content: space-between; align-items: start;">
                            <div style="flex: 1;">
                                <h3 style="margin-bottom: 0.5rem;">${job.title}</h3>
                                <div style="color: var(--gray); margin-bottom: 1rem;">
                                    <span>📍 ${job.location}</span> •
                                    <span>💼 ${job.type}</span> •
                                    <span>🏢 ${job.department}</span> •
                                    <span>💰 ${job.salary}</span>
                                </div>
                                <p style="margin-bottom: 1rem;">${job.description.substring(0, 200)}...</p>
                                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1rem;">
                                    ${(job.requirements || []).map(req => `
                                        <span class="badge badge-primary">${req}</span>
                                    `).join('')}
                                </div>
                                <div>
                                    <span class="badge ${job.status === 'ouvert' ? 'badge-success' : 'badge-danger'}">
                                        ${job.status === 'ouvert' ? 'Ouvert' : 'Fermé'}
                                    </span>
                                    <span class="badge badge-primary">
                                        ${(job.applications || []).length} candidature(s)
                                    </span>
                                </div>
                            </div>
                            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                                <button class="btn-primary btn-sm" onclick="RecruitmentModule.viewApplications('${job.id}')">
                                    👥 Candidatures
                                </button>
                                <button class="btn-outline btn-sm" onclick="RecruitmentModule.toggleStatus('${job.id}')">
                                    ${job.status === 'ouvert' ? '🔒 Fermer' : '🔓 Ouvrir'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
        html += '</div>';
        return html;
    },

    init() {
        console.log('Recruitment module loaded');
    },

    showAddJob() {
        document.getElementById('add-job-modal').classList.remove('hidden');
    },

    hideAddJob() {
        document.getElementById('add-job-modal').classList.add('hidden');
        document.getElementById('job-form').reset();
    },

    saveJob(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        data.id = Utils.generateId();
        data.status = 'ouvert';
        data.postedDate = Utils.getCurrentDate();
        data.applications = [];

        // Parse requirements
        if (data.requirements) {
            data.requirements = data.requirements.split(',').map(r => r.trim());
        } else {
            data.requirements = [];
        }

        const jobs = DataManager.getData(DataManager.KEYS.RECRUITMENT) || [];
        jobs.push(data);
        DataManager.saveData(DataManager.KEYS.RECRUITMENT, jobs);

        Utils.showNotification('Offre d\'emploi créée avec succès', 'success');
        this.hideAddJob();
        app.reloadModule();
    },

    viewApplications(jobId) {
        const jobs = DataManager.getData(DataManager.KEYS.RECRUITMENT) || [];
        const job = jobs.find(j => j.id === jobId);

        if (job) {
            const applications = job.applications || [];
            if (applications.length === 0) {
                alert('Aucune candidature pour ce poste');
            } else {
                let message = `Candidatures pour: ${job.title}\n\n`;
                applications.forEach((app, index) => {
                    message += `${index + 1}. ${app.candidateName}\n`;
                    message += `   Email: ${app.email}\n`;
                    message += `   Téléphone: ${app.phone}\n`;
                    message += `   Statut: ${app.status}\n`;
                    message += `   Postulé le: ${Utils.formatDate(app.appliedDate)}\n\n`;
                });
                alert(message);
            }
        }
    },

    toggleStatus(jobId) {
        const jobs = DataManager.getData(DataManager.KEYS.RECRUITMENT) || [];
        const job = jobs.find(j => j.id === jobId);

        if (job) {
            job.status = job.status === 'ouvert' ? 'fermé' : 'ouvert';
            DataManager.saveData(DataManager.KEYS.RECRUITMENT, jobs);
            Utils.showNotification(`Offre ${job.status === 'ouvert' ? 'ouverte' : 'fermée'}`, 'success');
            app.reloadModule();
        }
    }
};

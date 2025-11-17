// Performance Module
const PerformanceModule = {
    render() {
        const employees = DataManager.getEmployees();
        const performance = DataManager.getData(DataManager.KEYS.PERFORMANCE) || [];

        return `
            <div class="performance-module">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Évaluations de Performance</h3>
                        <div class="card-actions">
                            <button class="btn-success" onclick="PerformanceModule.showAddReview()">
                                <span>➕</span> Nouvelle Évaluation
                            </button>
                        </div>
                    </div>

                    <div class="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>Employé</th>
                                    <th>Période</th>
                                    <th>Date</th>
                                    <th>Score Global</th>
                                    <th>Statut</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${this.renderPerformanceRows(performance, employees)}
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Top Performers -->
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Meilleurs Performeurs</h3>
                    </div>
                    <div style="padding: 1rem;">
                        ${this.renderTopPerformers(performance, employees)}
                    </div>
                </div>
            </div>

            <!-- Add Review Modal -->
            <div id="add-review-modal" class="modal hidden">
                <div class="modal-content" style="max-width: 700px;">
                    <span class="close" onclick="PerformanceModule.hideAddReview()">&times;</span>
                    <h2>Nouvelle Évaluation</h2>
                    <form id="review-form" onsubmit="PerformanceModule.saveReview(event)">
                        <div class="grid-2">
                            <div class="form-group">
                                <label>Employé *</label>
                                <select name="employeeId" required>
                                    <option value="">Sélectionner</option>
                                    ${employees.map(emp => `
                                        <option value="${emp.id}">${emp.firstName} ${emp.lastName}</option>
                                    `).join('')}
                                </select>
                            </div>

                            <div class="form-group">
                                <label>Période *</label>
                                <input type="text" name="period" placeholder="ex: S1 2024" required>
                            </div>
                        </div>

                        <h4 style="margin: 1.5rem 0 1rem;">Scores (sur 5)</h4>

                        <div class="grid-2">
                            <div class="form-group">
                                <label>Compétences Techniques</label>
                                <input type="number" name="technical" min="0" max="5" step="0.5" value="3.0" required>
                            </div>

                            <div class="form-group">
                                <label>Communication</label>
                                <input type="number" name="communication" min="0" max="5" step="0.5" value="3.0" required>
                            </div>

                            <div class="form-group">
                                <label>Travail d'Équipe</label>
                                <input type="number" name="teamwork" min="0" max="5" step="0.5" value="3.0" required>
                            </div>

                            <div class="form-group">
                                <label>Initiative</label>
                                <input type="number" name="initiative" min="0" max="5" step="0.5" value="3.0" required>
                            </div>
                        </div>

                        <div class="form-group">
                            <label>Commentaires</label>
                            <textarea name="comments" rows="4"></textarea>
                        </div>

                        <div class="form-group">
                            <label>Objectifs</label>
                            <textarea name="objectives" rows="3" placeholder="Un objectif par ligne"></textarea>
                        </div>

                        <button type="submit" class="btn-primary btn-block">Enregistrer l'Évaluation</button>
                    </form>
                </div>
            </div>
        `;
    },

    renderPerformanceRows(reviews, employees) {
        if (reviews.length === 0) {
            return '<tr><td colspan="6" style="text-align: center; padding: 2rem;">Aucune évaluation</td></tr>';
        }

        return reviews.map(review => {
            const employee = employees.find(e => e.id === review.employeeId);
            const empName = employee ? `${employee.firstName} ${employee.lastName}` : 'Inconnu';

            return `
                <tr>
                    <td><strong>${empName}</strong></td>
                    <td>${review.period}</td>
                    <td>${Utils.formatDate(review.reviewDate)}</td>
                    <td>
                        <strong style="font-size: 1.2rem; color: ${this.getScoreColor(review.overallScore)};">
                            ${review.overallScore.toFixed(2)}/5
                        </strong>
                    </td>
                    <td>${Utils.getStatusBadge(review.status || 'complété')}</td>
                    <td>
                        <button class="btn-icon" onclick="PerformanceModule.viewReview('${review.id}')">
                            👁️
                        </button>
                    </td>
                </tr>
            `;
        }).join('');
    },

    renderTopPerformers(reviews, employees) {
        const avgScores = {};

        reviews.forEach(review => {
            if (!avgScores[review.employeeId]) {
                avgScores[review.employeeId] = [];
            }
            avgScores[review.employeeId].push(review.overallScore);
        });

        const topPerformers = Object.entries(avgScores)
            .map(([empId, scores]) => ({
                employeeId: empId,
                avgScore: scores.reduce((a, b) => a + b, 0) / scores.length
            }))
            .sort((a, b) => b.avgScore - a.avgScore)
            .slice(0, 5);

        if (topPerformers.length === 0) {
            return '<div class="empty-state"><p>Aucune donnée disponible</p></div>';
        }

        let html = '<div style="display: flex; flex-direction: column; gap: 1rem;">';
        topPerformers.forEach((performer, index) => {
            const employee = employees.find(e => e.id === performer.employeeId);
            if (employee) {
                const medals = ['🥇', '🥈', '🥉'];
                const medal = medals[index] || '⭐';

                html += `
                    <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem; background: var(--light-gray); border-radius: var(--radius-md);">
                        <span style="font-size: 2rem;">${medal}</span>
                        <div style="flex: 1;">
                            <strong>${employee.firstName} ${employee.lastName}</strong>
                            <div style="color: var(--gray); font-size: 0.875rem;">${employee.position}</div>
                        </div>
                        <div style="font-size: 1.5rem; font-weight: bold; color: ${this.getScoreColor(performer.avgScore)};">
                            ${performer.avgScore.toFixed(2)}/5
                        </div>
                    </div>
                `;
            }
        });
        html += '</div>';
        return html;
    },

    getScoreColor(score) {
        if (score >= 4.5) return 'var(--secondary)';
        if (score >= 3.5) return 'var(--primary)';
        if (score >= 2.5) return 'var(--warning)';
        return 'var(--danger)';
    },

    init() {
        console.log('Performance module loaded');
    },

    showAddReview() {
        document.getElementById('add-review-modal').classList.remove('hidden');
    },

    hideAddReview() {
        document.getElementById('add-review-modal').classList.add('hidden');
        document.getElementById('review-form').reset();
    },

    saveReview(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        const scores = {
            technical: parseFloat(data.technical),
            communication: parseFloat(data.communication),
            teamwork: parseFloat(data.teamwork),
            initiative: parseFloat(data.initiative)
        };

        const overallScore = (scores.technical + scores.communication + scores.teamwork + scores.initiative) / 4;

        const review = {
            id: Utils.generateId(),
            employeeId: data.employeeId,
            reviewDate: Utils.getCurrentDate(),
            period: data.period,
            reviewer: DataManager.getCurrentUser().id,
            scores: scores,
            overallScore: overallScore,
            comments: data.comments,
            objectives: data.objectives ? data.objectives.split('\n').filter(o => o.trim()) : [],
            status: 'complété'
        };

        const reviews = DataManager.getData(DataManager.KEYS.PERFORMANCE) || [];
        reviews.push(review);
        DataManager.saveData(DataManager.KEYS.PERFORMANCE, reviews);

        Utils.showNotification('Évaluation enregistrée avec succès', 'success');
        this.hideAddReview();
        app.reloadModule();
    },

    viewReview(reviewId) {
        const reviews = DataManager.getData(DataManager.KEYS.PERFORMANCE) || [];
        const review = reviews.find(r => r.id === reviewId);

        if (review) {
            const employees = DataManager.getEmployees();
            const employee = employees.find(e => e.id === review.employeeId);

            alert(`Évaluation de ${employee.firstName} ${employee.lastName}\n` +
                  `Période: ${review.period}\n\n` +
                  `Scores:\n` +
                  `- Technique: ${review.scores.technical}/5\n` +
                  `- Communication: ${review.scores.communication}/5\n` +
                  `- Travail d'équipe: ${review.scores.teamwork}/5\n` +
                  `- Initiative: ${review.scores.initiative}/5\n\n` +
                  `Score Global: ${review.overallScore.toFixed(2)}/5\n\n` +
                  `Commentaires: ${review.comments}`);
        }
    }
};

// Documents Module
const DocumentsModule = {
    render() {
        const documents = DataManager.getData(DataManager.KEYS.DOCUMENTS) || [];
        const employees = DataManager.getEmployees();

        return `
            <div class="documents-module">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Gestion des Documents</h3>
                        <div class="card-actions">
                            <button class="btn-success" onclick="DocumentsModule.showUploadForm()">
                                <span>➕</span> Ajouter un Document
                            </button>
                        </div>
                    </div>

                    <!-- Filters -->
                    <div style="padding: 1rem;">
                        <div class="filters">
                            <select class="filter-select" id="doc-employee-filter" onchange="DocumentsModule.filter()">
                                <option value="">Tous les employés</option>
                                ${employees.map(emp => `
                                    <option value="${emp.id}">${emp.firstName} ${emp.lastName}</option>
                                `).join('')}
                            </select>
                            <select class="filter-select" id="doc-type-filter" onchange="DocumentsModule.filter()">
                                <option value="">Tous les types</option>
                                <option value="Contrat">Contrat</option>
                                <option value="Bulletin">Bulletin de paie</option>
                                <option value="Attestation">Attestation</option>
                                <option value="Formation">Formation</option>
                                <option value="Autre">Autre</option>
                            </select>
                        </div>
                    </div>

                    <div class="table-container">
                        <table id="documents-table">
                            <thead>
                                <tr>
                                    <th>Nom du Document</th>
                                    <th>Type</th>
                                    <th>Employé</th>
                                    <th>Date d'Upload</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${this.renderDocumentRows(documents, employees)}
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Document Categories -->
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Documents par Catégorie</h3>
                    </div>
                    <div style="padding: 1rem;">
                        ${this.renderDocumentCategories(documents)}
                    </div>
                </div>
            </div>

            <!-- Upload Modal -->
            <div id="upload-doc-modal" class="modal hidden">
                <div class="modal-content">
                    <span class="close" onclick="DocumentsModule.hideUploadForm()">&times;</span>
                    <h2>Ajouter un Document</h2>
                    <form id="document-form" onsubmit="DocumentsModule.saveDocument(event)">
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
                            <label>Nom du Document *</label>
                            <input type="text" name="name" required>
                        </div>

                        <div class="form-group">
                            <label>Type de Document *</label>
                            <select name="type" required>
                                <option value="Contrat">Contrat</option>
                                <option value="Bulletin">Bulletin de paie</option>
                                <option value="Attestation">Attestation</option>
                                <option value="Formation">Formation</option>
                                <option value="Autre">Autre</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label>Fichier</label>
                            <input type="file" name="file" accept=".pdf,.doc,.docx,.jpg,.png">
                            <small style="color: var(--gray);">Note: Dans cette démo, le fichier ne sera pas réellement uploadé</small>
                        </div>

                        <button type="submit" class="btn-primary btn-block">Ajouter le Document</button>
                    </form>
                </div>
            </div>
        `;
    },

    renderDocumentRows(documents, employees) {
        if (documents.length === 0) {
            return '<tr><td colspan="5" style="text-align: center; padding: 2rem;">Aucun document</td></tr>';
        }

        return documents.map(doc => {
            const employee = employees.find(e => e.id === doc.employeeId);
            const empName = employee ? `${employee.firstName} ${employee.lastName}` : 'Inconnu';

            return `
                <tr>
                    <td>
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                            <span style="font-size: 1.5rem;">📄</span>
                            <strong>${doc.name}</strong>
                        </div>
                    </td>
                    <td><span class="badge badge-primary">${doc.type}</span></td>
                    <td>${empName}</td>
                    <td>${Utils.formatDate(doc.uploadDate)}</td>
                    <td>
                        <button class="btn-icon" onclick="DocumentsModule.viewDocument('${doc.id}')" title="Voir">
                            👁️
                        </button>
                        <button class="btn-icon" onclick="DocumentsModule.downloadDocument('${doc.id}')" title="Télécharger">
                            📥
                        </button>
                        <button class="btn-icon" onclick="DocumentsModule.deleteDocument('${doc.id}')" title="Supprimer">
                            🗑️
                        </button>
                    </td>
                </tr>
            `;
        }).join('');
    },

    renderDocumentCategories(documents) {
        const categories = {};

        documents.forEach(doc => {
            if (!categories[doc.type]) {
                categories[doc.type] = 0;
            }
            categories[doc.type]++;
        });

        let html = '<div class="grid-3" style="gap: 1rem;">';
        Object.entries(categories).forEach(([type, count]) => {
            const icons = {
                'Contrat': '📋',
                'Bulletin': '💰',
                'Attestation': '✓',
                'Formation': '🎓',
                'Autre': '📄'
            };

            html += `
                <div style="text-align: center; padding: 1.5rem; background: var(--light-gray); border-radius: var(--radius-md);">
                    <div style="font-size: 3rem; margin-bottom: 0.5rem;">${icons[type] || '📄'}</div>
                    <div style="font-size: 2rem; font-weight: bold; margin-bottom: 0.5rem;">${count}</div>
                    <div style="color: var(--gray);">${type}</div>
                </div>
            `;
        });
        html += '</div>';
        return html || '<div class="empty-state"><p>Aucun document</p></div>';
    },

    init() {
        console.log('Documents module loaded');
    },

    showUploadForm() {
        document.getElementById('upload-doc-modal').classList.remove('hidden');
    },

    hideUploadForm() {
        document.getElementById('upload-doc-modal').classList.add('hidden');
        document.getElementById('document-form').reset();
    },

    saveDocument(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        const document = {
            id: Utils.generateId(),
            employeeId: data.employeeId,
            name: data.name,
            type: data.type,
            uploadDate: Utils.getCurrentDate(),
            fileUrl: null // In a real app, this would be the uploaded file URL
        };

        const documents = DataManager.getData(DataManager.KEYS.DOCUMENTS) || [];
        documents.push(document);
        DataManager.saveData(DataManager.KEYS.DOCUMENTS, documents);

        Utils.showNotification('Document ajouté avec succès', 'success');
        this.hideUploadForm();
        app.reloadModule();
    },

    viewDocument(docId) {
        const documents = DataManager.getData(DataManager.KEYS.DOCUMENTS) || [];
        const doc = documents.find(d => d.id === docId);

        if (doc) {
            alert(`Document: ${doc.name}\nType: ${doc.type}\nDate: ${Utils.formatDate(doc.uploadDate)}\n\nNote: Dans cette démo, le document ne peut pas être affiché.`);
        }
    },

    downloadDocument(docId) {
        Utils.showNotification('Téléchargement du document...', 'info');
    },

    deleteDocument(docId) {
        if (Utils.confirm('Supprimer ce document?')) {
            const documents = DataManager.getData(DataManager.KEYS.DOCUMENTS) || [];
            const filtered = documents.filter(d => d.id !== docId);
            DataManager.saveData(DataManager.KEYS.DOCUMENTS, filtered);
            Utils.showNotification('Document supprimé', 'success');
            app.reloadModule();
        }
    },

    filter() {
        const empFilter = document.getElementById('doc-employee-filter').value;
        const typeFilter = document.getElementById('doc-type-filter').value;

        let documents = DataManager.getData(DataManager.KEYS.DOCUMENTS) || [];
        const employees = DataManager.getEmployees();

        if (empFilter) {
            documents = documents.filter(d => d.employeeId === empFilter);
        }
        if (typeFilter) {
            documents = documents.filter(d => d.type === typeFilter);
        }

        const tbody = document.querySelector('#documents-table tbody');
        if (tbody) {
            tbody.innerHTML = this.renderDocumentRows(documents, employees);
        }
    }
};

const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  employeeId: {
    type: String,
    required: true,
    unique: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  firstName: {
    type: String,
    required: [true, 'Le prénom est requis'],
    trim: true
  },
  lastName: {
    type: String,
    required: [true, 'Le nom est requis'],
    trim: true
  },
  email: {
    type: String,
    required: [true, "L'email est requis"],
    unique: true,
    lowercase: true
  },
  phone: {
    type: String,
    trim: true
  },
  dateOfBirth: {
    type: Date
  },
  gender: {
    type: String,
    enum: ['Homme', 'Femme', 'Autre']
  },
  address: {
    street: String,
    city: String,
    postalCode: String,
    country: { type: String, default: 'Maroc' }
  },
  department: {
    type: String,
    required: [true, 'Le département est requis']
  },
  position: {
    type: String,
    required: [true, 'Le poste est requis']
  },
  manager: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee'
  },
  employmentType: {
    type: String,
    enum: ['CDI', 'CDD', 'Stage', 'Freelance'],
    default: 'CDI'
  },
  hireDate: {
    type: Date,
    required: [true, "La date d'embauche est requise"]
  },
  salary: {
    base: {
      type: Number,
      required: [true, 'Le salaire de base est requis']
    },
    currency: {
      type: String,
      default: 'MAD'
    },
    bonuses: [{
      type: {
        type: String
      },
      amount: Number,
      date: Date
    }]
  },
  leave: {
    annual: {
      type: Number,
      default: 22
    },
    sick: {
      type: Number,
      default: 0
    },
    used: {
      type: Number,
      default: 0
    }
  },
  documents: [{
    name: String,
    type: String,
    url: String,
    uploadDate: {
      type: Date,
      default: Date.now
    }
  }],
  status: {
    type: String,
    enum: ['Actif', 'Inactif', 'Congé', 'Suspendu'],
    default: 'Actif'
  },
  notes: {
    type: String
  }
}, {
  timestamps: true
});

// Virtual for full name
EmployeeSchema.virtual('fullName').get(function() {
  return `${this.firstName} ${this.lastName}`;
});

// Ensure virtuals are included in JSON
EmployeeSchema.set('toJSON', { virtuals: true });
EmployeeSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('Employee', EmployeeSchema);

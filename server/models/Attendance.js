const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  checkIn: {
    type: Date,
    required: [true, "L'heure d'arrivée est requise"]
  },
  checkOut: {
    type: Date
  },
  status: {
    type: String,
    enum: ['Présent', 'Absent', 'Retard', 'Congé', 'Télétravail'],
    default: 'Présent'
  },
  workHours: {
    type: Number,
    default: 0
  },
  overtime: {
    type: Number,
    default: 0
  },
  lateMinutes: {
    type: Number,
    default: 0
  },
  notes: {
    type: String,
    trim: true
  },
  location: {
    type: String,
    enum: ['Bureau', 'Télétravail', 'Déplacement'],
    default: 'Bureau'
  },
  ipAddress: {
    type: String
  }
}, {
  timestamps: true
});

// Calculate work hours when checkout is set
AttendanceSchema.pre('save', function(next) {
  if (this.checkIn && this.checkOut) {
    const diffMs = this.checkOut - this.checkIn;
    this.workHours = Math.round((diffMs / (1000 * 60 * 60)) * 100) / 100;

    // Calculate overtime (more than 8 hours)
    if (this.workHours > 8) {
      this.overtime = this.workHours - 8;
    }

    // Calculate late minutes (after 9:00 AM)
    const expectedStart = new Date(this.checkIn);
    expectedStart.setHours(9, 0, 0, 0);

    if (this.checkIn > expectedStart) {
      const lateDiff = this.checkIn - expectedStart;
      this.lateMinutes = Math.round(lateDiff / (1000 * 60));
      if (this.lateMinutes > 15) {
        this.status = 'Retard';
      }
    }
  }
  next();
});

// Index for faster queries
AttendanceSchema.index({ employee: 1, date: 1 });

module.exports = mongoose.model('Attendance', AttendanceSchema);

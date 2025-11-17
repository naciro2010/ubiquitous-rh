const Attendance = require('../models/Attendance');

exports.getAttendances = async (req, res) => {
  try {
    const { employeeId, startDate, endDate } = req.query;
    let query = {};

    if (employeeId) query.employee = employeeId;
    if (startDate && endDate) {
      query.date = { $gte: new Date(startDate), $lte: new Date(endDate) };
    }

    const attendances = await Attendance.find(query)
      .populate('employee', 'firstName lastName department')
      .sort('-date');

    res.status(200).json({ success: true, count: attendances.length, data: attendances });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.getAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.findById(req.params.id)
      .populate('employee', 'firstName lastName department');

    if (!attendance) {
      return res.status(404).json({ success: false, error: 'Présence non trouvée' });
    }

    res.status(200).json({ success: true, data: attendance });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.checkIn = async (req, res) => {
  try {
    const { employeeId } = req.body;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Check if already checked in today
    const existing = await Attendance.findOne({
      employee: employeeId,
      date: { $gte: today }
    });

    if (existing) {
      return res.status(400).json({ success: false, error: 'Déjà pointé aujourd\'hui' });
    }

    const attendance = await Attendance.create({
      employee: employeeId,
      date: new Date(),
      checkIn: new Date(),
      ipAddress: req.ip
    });

    res.status(201).json({ success: true, data: attendance });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

exports.checkOut = async (req, res) => {
  try {
    const { attendanceId } = req.body;

    const attendance = await Attendance.findById(attendanceId);

    if (!attendance) {
      return res.status(404).json({ success: false, error: 'Présence non trouvée' });
    }

    if (attendance.checkOut) {
      return res.status(400).json({ success: false, error: 'Déjà pointé en sortie' });
    }

    attendance.checkOut = new Date();
    await attendance.save();

    res.status(200).json({ success: true, data: attendance });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

exports.createAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.create(req.body);
    res.status(201).json({ success: true, data: attendance });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

exports.updateAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!attendance) {
      return res.status(404).json({ success: false, error: 'Présence non trouvée' });
    }

    res.status(200).json({ success: true, data: attendance });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

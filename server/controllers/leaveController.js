const Leave = require('../models/Leave');
const Employee = require('../models/Employee');

exports.getLeaves = async (req, res) => {
  try {
    const leaves = await Leave.find()
      .populate('employee', 'firstName lastName department')
      .populate('approvedBy', 'name')
      .sort('-createdAt');

    res.status(200).json({
      success: true,
      count: leaves.length,
      data: leaves
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.getLeave = async (req, res) => {
  try {
    const leave = await Leave.findById(req.params.id)
      .populate('employee', 'firstName lastName department')
      .populate('approvedBy', 'name');

    if (!leave) {
      return res.status(404).json({ success: false, error: 'Congé non trouvé' });
    }

    res.status(200).json({ success: true, data: leave });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.createLeave = async (req, res) => {
  try {
    req.body.createdBy = req.user.id;
    const leave = await Leave.create(req.body);

    res.status(201).json({ success: true, data: leave });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

exports.updateLeave = async (req, res) => {
  try {
    const leave = await Leave.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!leave) {
      return res.status(404).json({ success: false, error: 'Congé non trouvé' });
    }

    res.status(200).json({ success: true, data: leave });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

exports.approveLeave = async (req, res) => {
  try {
    const leave = await Leave.findById(req.params.id);

    if (!leave) {
      return res.status(404).json({ success: false, error: 'Congé non trouvé' });
    }

    leave.status = 'Approuvé';
    leave.approvedBy = req.user.id;
    leave.approvalDate = Date.now();

    await leave.save();

    res.status(200).json({ success: true, data: leave });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

exports.rejectLeave = async (req, res) => {
  try {
    const leave = await Leave.findById(req.params.id);

    if (!leave) {
      return res.status(404).json({ success: false, error: 'Congé non trouvé' });
    }

    leave.status = 'Refusé';
    leave.approvedBy = req.user.id;
    leave.approvalDate = Date.now();
    leave.rejectionReason = req.body.reason;

    await leave.save();

    res.status(200).json({ success: true, data: leave });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

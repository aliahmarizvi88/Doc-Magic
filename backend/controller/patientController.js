const PATIENT = require('../models/patients');

const submitPatient = async (req, res) => {
  try {
    const { name, DOB, syntoms, dignosis } = req.body;

    if (!name || isNaN(new Date(DOB).getTime())) {
      return res
        .status(400)
        .json({ error: 'Patient name and age is Required' });
    }

    await PATIENT.create({
      name,
      DOB,
      syntoms,
      dignosis,
    });

    return res.status(200).json({ error: 'Patient Submitted Sucessfully' });
  } catch (err) {
    return res
      .status(500)
      .json({ error: 'Server error. Could not submit Patient Details' });
  }
};

const displayPatient = async (req, res) => {
  try {
    const allPatients = await PATIENT.find({});
    return res.json(allPatients);
  } catch (error) {
    return res.status(500).json({ error: 'FAILED TO FETCH DATA' });
  }
};

const deletePatient = async (req, res) => {
  try {
    const result = await PATIENT.findOneAndDelete({ name: req.body.param });
    if (!result) {
      return res.status(404).json({ message: 'PATIENT NOT FOUND' });
    }
    return res.status(200).json({ message: 'PATIENT DELETED' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatePatient = async (req, res) => {
  try {
    const { name, DOB, syntoms, dignosis } = req.body;

    const updated = await PATIENT.findOneAndUpdate(
      { name: req.body.param },
      { name, DOB, syntoms, dignosis },
      { new: true }
    );
    if (!updated) {
      return res.status(404).json({ message: 'PATIENT NOT FOUND' });
    }

    return res.status(200).json({ message: 'PATIENT UPDATE' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  submitPatient,
  displayPatient,
  deletePatient,
  updatePatient,
};

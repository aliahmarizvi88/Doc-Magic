const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  DOB: {
    type: Date,
    required: true,
  },
  syntoms: {
    type: String,
  },
  dignosis: {
    type: String,
  },
});

const PATIENT = mongoose.model('patient', patientSchema);
module.exports = PATIENT;

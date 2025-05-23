const express = require('express');
const {
  submitPatient,
  displayPatient,
  deletePatient,
  updatePatient,
} = require('../controller/patientController');

const router = express.Router();

router.get('/display', displayPatient);
router.post('/submit', submitPatient);
router.delete('/delete', deletePatient);
router.put('/update', updatePatient);

module.exports = router;

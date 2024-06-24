const express = require('express');
const router = express.Router();
const visitController = require('../controllers/visitcontroller');
const departmentController = require('../controllers/departmentcontroller');
const doctorController = require('../controllers/doctorcontroller');

// Define an API endpoint
router.get('/patient', (req, res) => {
  res.json({ message: 'Patients endpoint!' });
});

router.post('/visit', visitController.createNewVisit);
router.get('/department', departmentController.getDepartments);
router.get('/doctor', doctorController.getDoctors);

module.exports = router;

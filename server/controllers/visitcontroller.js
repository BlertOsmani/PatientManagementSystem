const { now } = require('sequelize/lib/utils');
const {Patient, Visit} = require('../models');

exports.createNewVisit = async (req, res) => {
    const {patientData, visitData} = req.body;

    try{
        let patient = null;

        if (patientData.id) {
            patient = await Patient.findOne({ where: { id: patientData.id } });
        }

        // Check by personal number if no ID match
        if (!patient && patientData.personal_no) {
            patient = await Patient.findOne({ where: { personal_no: patientData.personal_no } });
        }

        // Check by other personal details if no ID or personal number match
        if (!patient) {
            patient = await Patient.findOne({
                where: {
                    first_name: patientData.first_name,
                    last_name: patientData.last_name,
                    date_of_birth: patientData.date_of_birth,
                    contact_number: patientData.contact_number,
                }
            });
        }

        if(!patient){
            patient = await Patient.create(patientData);
        }
        else{
            await patient.update(patientData);
        }


        visitData.patient_id = patient.id;

        //Add the visit_date and visit_time because they dont have a default value in the db
        const now = new Date();
        const visitDate = now.toISOString().split('T')[0]; // Extracts the date part
        const visitTime = now.toTimeString().split(' ')[0]; // Extracts the time part in HH:MM:SS format
        
        visitData.visit_date = visitDate;
        visitData.visit_time = visitTime;

        const visit = await Visit.create(visitData);

        res.status(201).json({
            patientMessage: "Patient saved successfully", 
            visitMessage: "Visit saved successfully",
        });
        
    } catch(error){
        res.status(500).json({message: "An error occurred", error});
    }
}
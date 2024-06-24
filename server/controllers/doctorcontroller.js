const {Doctor, User} = require('../models');

exports.getDoctors = async (req,res) => {
    try{
        const doctors = await Doctor.findAll({
            include: [{
                model: User,
                attributes: ['id', 'first_name', 'last_name']
            }]
        })

        const result = doctors.map(doctor => ({
            id: doctor.User.id,
            name: doctor.User.first_name + ' ' + doctor.User.last_name
        }));

        res.status(200).json(result);

    }catch(error){
        res.status(500).json({message: "An error occurred", error});
    }
}
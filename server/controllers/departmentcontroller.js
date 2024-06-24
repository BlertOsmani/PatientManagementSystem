const {Department} = require('../models');

exports.getDepartments = async (req,res) => {
    try{
        const departments = await Department.findAll({
            attributes : ['id', 'name']
        });

        res.status(200).json(departments);

    }catch(error){
        res.status(500).json({message: "An error occurred", error});
    }
}
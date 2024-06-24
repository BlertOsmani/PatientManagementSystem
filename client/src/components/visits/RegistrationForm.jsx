import { Dropdown } from 'primereact/dropdown';
import {InputTextarea} from 'primereact/inputtextarea';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import axios from 'axios';

function RegistrationForm({values,errors,touched, handleChange, setFieldValue}) {
    const [departments, setDepartments] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [departmentError, setDepartmentError] = useState(null);
    const [doctorError, setDoctorError] = useState(null);

    useEffect(() => {
        const fetchDepartments = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/department");
                setDepartments(response.data);
            } catch (error) {
                setDepartmentError('Failed to fetch departments. Please try again later.');
            }
        }
        const fetchDoctors = async () => {
            try{
                const response = await axios.get("http://localhost:8000/api/doctor");
                setDoctors(response.data);
            } catch(error) {
                setDoctorError('Failed to fetch doctors. Please try again later.');
            }
        }

        fetchDepartments();
        fetchDoctors();
    }, []);
    return (
        <div className='mt-3 flex justify-content-end'>
                <div className='flex gap-3 flex-wrap'>
                    <h4 className='wide-form-field border-none border-bottom-1 surface-border'>Visit information</h4>
                    <div className="flex flex-column wide-form-field">
                        <label htmlFor="reason_for_visit">Reason for visit</label>
                        <InputTextarea rows={3} type="text" name="reason_for_visit" onChange={handleChange} value={values.reason_for_visit}/>
                        {errors.reason_for_visit && touched.reason_for_visit && (
                            <span className="text-xs text-red-500">{errors.reason_for_visit}</span>
                        )}
                    </div>
                    <div className="flex flex-column small-form-field">
                        <label htmlFor="department">Department</label>
                        <Dropdown value={values.department} 
                            filter
                            onChange={(e) => setFieldValue('department', e.value)}
                            options={departments} placeholder="Select department"
                            optionLabel="name"
                            checkmark={true}
                            name="department" 
                        />
                        {errors.department && touched.department && (
                            <span className="text-xs text-red-500">{errors.department}</span>
                        )}
                        {departmentError && (
                            <span className='text-xs text-red-500'>{departmentError}</span>
                        )}
                    </div>
                    <div className="flex flex-column small-form-field">
                        <label htmlFor="doctor">Doctor</label>
                        <Dropdown value={values.doctor} 
                            filter
                            onChange={(e) => setFieldValue('doctor', e.value)}
                            options={doctors} placeholder="Select doctor"
                            optionLabel="name"
                            checkmark={true}
                            name="doctor" 
                        />
                        {errors.doctor && touched.doctor && (
                            <span className="text-xs text-red-500">{errors.doctor}</span>
                        )}
                        {doctorError && (
                            <span className='text-xs text-red-500'>{doctorError}</span>
                        )}
                    </div>
                    <div className="flex flex-column wide-form-field">
                        <label className='flex align-items-center gap-1' htmlFor="notes">Additional notes <span className='text-xs text-400'>(Optional)</span></label>
                        <InputTextarea rows={3} type="text" name="notes" onChange={handleChange} value={values.notes}/>
                    </div>
                </div>
        </div>
    );
}

RegistrationForm.propTypes = {
    values : PropTypes.any.isRequired,
    errors : PropTypes.any.isRequired,
    touched : PropTypes.any.isRequired,
    handleChange : PropTypes.any.isRequired,
    setFieldValue : PropTypes.any.isRequired
}

export default RegistrationForm;
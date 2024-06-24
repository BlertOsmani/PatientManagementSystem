import {Dialog} from 'primereact/dialog';
import { useModal } from '../../contextproviders/ModalContext';
import './registration.css';
import PatientRegistrationForm from '../patients/RegistrationForm';
import { Formik } from 'formik';
import VisitRegistrationForm from './RegistrationForm';
import PatientList from '../patients/List';
import { Button } from 'primereact/button';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Toast } from 'primereact/toast';
import { useRef } from 'react';

const newVisitRegistration = async (values) => {
    const data = {
        patientData:{
            personal_no: values.personal_no,
            first_name: values.first_name,
            parent: values.parent,
            last_name: values.last_name,
            date_of_birth: values.date_of_birth,
            gender: values.gender.name,
            contact_number: values.contact_number,
            address: values.address,
            emergency_contact: values.emergency_contact,
            medical_history: values.medical_history,
            insurance_provider: values.insurance_provider,
            insurance_number: values.insurance_number,
            updated_by: values.updated_by
        },
        visitData: {
            reason_for_visit: values.reason_for_visit,
            appointment_id: null,
            department_id: values.department.id,
            doctor_id: values.doctor.id,
            status: values.status,
            notes: values.notes,
            updated_by: values.updated_by
        }
    };

    try{
        const response = await axios.post('http://localhost:8000/api/visit', data, {
            headers: {
                'Content-Type': 'application/json'
            },
        })
        return response;

    }catch(error){
        console.log("Error registering visit", error);
    }
}


function Registration() {
    const {modals, closeModal} = useModal();
    const toast = useRef(null);

    return ( 
        <div>
            <Toast ref={toast} />
            <Dialog className="w-11" header="Add new visit" visible={modals.visitRegistration} onHide={() => closeModal('visitRegistration')}>
                <div className='w-12 flex gap-1 justify-content-between relative'>
                    <div className='w-3 flex'>
                        <PatientList/>
                    </div>
                    <div className='w-9'>
                        <Formik
                            initialValues={{
                                patient_id: '',
                                personal_no: '',
                                first_name: '', 
                                parent: '', 
                                last_name: '', 
                                date_of_birth:'',
                                gender: '', 
                                contact_number: '',
                                address: '', 
                                emergency_contact: '', 
                                medical_history: '',
                                insurance_provider: '', 
                                insurance_number: '',
                                reason_for_visit: '',
                                appointment_id: '',
                                department: '',
                                doctor: '',
                                status: 'Checked-In',
                                notes: '',
                                updated_by: '1'
                            }}
                            validate={values => {
                                const errors = {};
                                if(values.personal_no && !/^\d{10}$/.test(values.personal_no)){
                                    errors.personal_no = "Personal no. must be 10 digits";
                                }
                                if(!values.first_name){
                                    errors.first_name = 'First name is required';
                                }
                                if(!values.last_name){
                                    errors.last_name = 'Last name is required';
                                }
                                if(!values.date_of_birth){
                                    errors.date_of_birth = "Date of birth is required";
                                }
                                if(!values.gender){
                                    errors.gender = "Please select a gender";
                                }
                                if(!values.contact_number){
                                    errors.contact_number = "Contact number is required";
                                }
                                else if(!/^\(\+\d{1,3}\) \d{2} \d{3} \d{3}$/.test(values.contact_number)){
                                    errors.contact_number = "Contact number must be in the format (+999) 99 999 999."
                                }
                                if(!values.address){
                                    errors.address = "Address is required";
                                }
                                if(!values.emergency_contact){
                                    errors.emergency_contact = "Emergency contact is required";
                                }
                                else if(!/^\(\+\d{1,3}\) \d{2} \d{3} \d{3}$/.test(values.emergency_contact)){
                                    errors.emergency_contact = "Emergency contact must be in the format (+999) 99 999 999."
                                }
                                if(!values.reason_for_visit){
                                    errors.reason_for_visit = "Please provide a reason for the visit";
                                }
                                if(!values.department){
                                    errors.department = "Please select a department";
                                }
                                if(!values.doctor){
                                    errors.doctor = "Please select a doctor";
                                }

                                return errors;
                            }}
                            onSubmit={async (values, { setSubmitting }) => {
                                setSubmitting(true);
                                try {
                                    const response = await newVisitRegistration(values);
                                    if(response.status === 201){
                                        toast.current.show({ severity:'success', summary: "Success", detail: response.data.patientMessage, life: 3000});
                                        toast.current.show({severity: 'success', summary: "Success", detail: response.data.visitMessage, life:3000});
                                        closeModal('visitRegistration');
                                    }
                                    else{
                                        toast.current.show({ severity: 'danger', summary:"Error", detail: response.error });
                                    }
                                    
                                } catch (error) {
                                    alert('Failed to register visit. Please try again.');
                                } finally {
                                    setSubmitting(false);
                                }
                            }}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                setFieldValue,
                                handleSubmit,
                                isSubmitting
                            }) => (
                                <div className='flex gap-4'>
                                    <form onSubmit={handleSubmit} className='w-8'>
                                            <PatientRegistrationForm handleBlur={handleBlur} touched={touched}  errors={errors} values={values} handleChange={handleChange} setFieldValue={setFieldValue}/>
                                            <VisitRegistrationForm touched={touched} errors={errors} values={values} handleChange={handleChange} setFieldValue={setFieldValue}/>
                                            <div className='wide-form-field mt-6 flex gap-2 justify-content-end'>
                                                <Button type="reset" label="Cancel" severity="secondary" outlined/>
                                                <Button label='Save' type="submit" loading={isSubmitting}/>
                                            </div>
                                    </form>
                                    <div className='w-5 flex'>
                                        <Summary values={values}/>
                                    </div>
                                </div>
                            )}
                        </Formik>
                    </div>
                </div>
            </Dialog>
        </div>
    );
}

function Summary({values}){
    return(
        <div style={{height: 'calc(100% - 90px)', marginRight:'1.5rem'}} className='px-3 pb-3 fixed surface-100 border-round-lg overflow-auto'>
            <h4>Summary</h4>
            <div className='w-12 flex justify-content-between flex-wrap' style={{gap:'1.5rem 0'}}>
                    <div className='flex flex-column w-6'>
                            <span className='text-sm text-600 font-medium'>Personal no.</span> 
                            {values.personal_no ? (
                                <span className='text-sm text-500'>{values.personal_no}</span>
                            ) : (
                                <span className='text-sm text-500'>N/A</span>
                            )}
                    </div>
                    <div className='flex flex-column w-6'>
                            <span className='text-sm text-600 font-medium'>Full name</span> 
                            {values.first_name && values.last_name ? (
                                <span className='text-sm text-500'>{values.first_name} {values.last_name}</span>
                            ) : (
                                <span className='text-sm text-500'>N/A</span>
                            )}
                    </div>
                    <div className='flex flex-column w-6'>
                            <span className='text-sm text-600 font-medium'>Parent</span> 
                            {values.parent && values.last_name ? (
                                <span className='text-sm text-500'>{values.parent} {values.last_name}</span>
                            ) : (
                                <span className='text-sm text-500'>N/A</span>
                            )}
                    </div>
                    <div className='flex flex-column w-6'>
                            <span className='text-sm text-600 font-medium'>Date of birth</span> 
                            {values.date_of_birth ? (
                                <span className='text-500 text-sm'>
                                    {typeof values.date_of_birth === 'string' 
                                        ? values.date_of_birth 
                                        : new Date(values.date_of_birth).toLocaleDateString('en-GB', {
                                            day: '2-digit', 
                                            month: '2-digit', 
                                            year: 'numeric'
                                            })
                                        }
                                </span>
                            ) : (
                                <span className='text-sm text-500'>N/A</span>
                            )}
                    </div>
                    <div className='flex flex-column w-6'>
                            <span className='text-sm text-600 font-medium'>Gender</span> 
                            {values.gender ? (
                                <span className='text-sm text-500'>{values.gender.name}</span>
                            ) : (
                                <span className='text-sm text-500'>N/A</span>
                            )}
                    </div>
                    <div className='flex flex-column w-6'>
                            <span className='text-sm text-600 font-medium'>Contact no.</span> 
                            {values.contact_number ? (
                                <span className='text-sm text-500'>{values.contact_number}</span>
                            ) : (
                                <span className='text-sm text-500'>N/A</span>
                            )}
                    </div>
                    <div className='flex flex-column w-12'>
                            <span className='text-sm text-600 font-medium'>Address</span> 
                            {values.address ? (
                                <span className='text-sm text-500'>{values.address}</span>
                            ) : (
                                <span className='text-sm text-500'>N/A</span>
                            )}
                    </div>
                    <div className='flex flex-column w-12'>
                            <span className='text-sm text-600 font-medium'>Medical history</span> 
                            {values.medical_history ? (
                                <span className='text-sm text-500'>{values.medical_history}</span>
                            ) : (
                                <span className='text-sm text-500'>N/A</span>
                            )}
                    </div>
                    <div className='flex flex-column w-6'>
                            <span className='text-sm text-600 font-medium'>Emergency contact</span> 
                            {values.emergency_contact ? (
                                <span className='text-sm text-500'>{values.emergency_contact}</span>
                            ) : (
                                <span className='text-sm text-500'>N/A</span>
                            )}
                    </div>
                    <div className='flex flex-column w-6'>
                            <span className='text-sm text-600 font-medium'>Insurance provider</span> 
                            {values.insurance_provider ? (
                                <span className='text-sm text-500'>{values.insurance_provider}</span>
                            ) : (
                                <span className='text-sm text-500'>N/A</span>
                            )}
                    </div>
                    <div className='flex flex-column w-6'>
                            <span className='text-sm text-600 font-medium'>Insurance no.</span> 
                            {values.insurance_number ? (
                                <span className='text-sm text-500'>{values.insurance_number}</span>
                            ) : (
                                <span className='text-sm text-500'>N/A</span>
                            )}
                    </div>
                    <div className='flex flex-column w-12'>
                            <span className='text-sm text-600 font-medium'>Reason for visit</span> 
                            {values.reason_for_visit ? (
                                <span className='text-sm text-500'>{values.reason_for_visit}</span>
                            ) : (
                                <span className='text-sm text-500'>N/A</span>
                            )}
                    </div>
                    <div className='flex flex-column w-6'>
                            <span className='text-sm text-600 font-medium'>Department</span> 
                            {values.department ? (
                                <span className='text-sm text-500'>{values.department.name}</span>
                            ) : (
                                <span className='text-sm text-500'>N/A</span>
                            )}
                    </div>
                    <div className='flex flex-column w-6'>
                            <span className='text-sm text-600 font-medium'>Doctor</span> 
                            {values.doctor ? (
                                <span className='text-sm text-500'>{values.doctor.name}</span>
                            ) : (
                                <span className='text-sm text-500'>N/A</span>
                            )}
                    </div>
                    <div className='flex flex-column w-12'>
                            <span className='text-sm text-600 font-medium'>Additional notes</span> 
                            {values.notes ? (
                                <span className='text-sm text-500'>{values.notes}</span>
                            ) : (
                                <span className='text-sm text-500'>N/A</span>
                            )}
                    </div>
            </div>
        </div>
    );
}

Summary.propTypes = {
    values: PropTypes.any
}

export default Registration;
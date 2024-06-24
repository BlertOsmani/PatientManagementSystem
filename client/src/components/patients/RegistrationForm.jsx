import {InputText} from 'primereact/inputtext';
import {Calendar} from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { PiCalendarBlank } from 'react-icons/pi';
import { InputMask } from 'primereact/inputmask';  
import { Editor } from 'primereact/editor';
import PropTypes from 'prop-types';
import { InputNumber } from 'primereact/inputnumber';

function RegistrationForm({values, errors, touched, handleChange,handleBlur, setFieldValue}) {

    const genders = [
        {name: 'Male', id: 1},
        {name: 'Female', id: 2}
    ]
    return (
        <div className='flex justify-content-end'>
            <div className="flex gap-3 flex-wrap">
                <h4 className="w-12 border-none border-bottom-1 surface-border">Patient information</h4>
                <div className="hidden">
                    <InputText 
                        name="patient_id" 
                        onChange={handleChange}
                        value={values.patient_id}
                        readOnly={true}
                    />
                </div>
                <div className="flex flex-column small-form-field ">
                    <label htmlFor="personal_no">Personal no.</label>
                    <InputNumber type="text" name="personal_no" useGrouping={false} onBlur={handleBlur} onValueChange={(e) => setFieldValue('personal_no', e.value)} value={values.personal_no}/>
                    {errors.personal_no && touched.personal_no && (
                        <span className="text-xs text-red-500">{errors.personal_no}</span>
                    )}
                </div>
                <div className="flex flex-column small-form-field ">
                    <label htmlFor="first_name">First name</label>
                    <InputText type="text" name="first_name" onChange={handleChange} value={values.first_name}/>
                    {errors.first_name && touched.first_name && (
                        <span className="text-xs text-red-500">{errors.first_name}</span>
                    )}
                </div>
                <div className="flex flex-column small-form-field">
                    <label className='flex align-items-center gap-1' htmlFor="parent">Parent name <span className='text-xs text-400'>(Optional)</span></label>
                    <InputText type="text" name="parent" onChange={handleChange} value={values.parent}/>
                </div>
                <div className="flex flex-column small-form-field">
                    <label htmlFor="last_name">Last name</label>
                    <InputText type="text" name="last_name" onChange={handleChange} value={values.last_name}/>
                    {errors.last_name && touched.last_name &&(
                        <span className="text-xs text-red-500">{errors.last_name}</span>
                    )}
                </div>
                <div className="flex flex-column small-form-field">
                    <label htmlFor="date_of_birth">Date of birth</label>
                    <div className="relative w-12">
                        <Calendar 
                            dateFormat='dd/mm/yy'
                            className="w-12"
                            onChange={(e) => setFieldValue('date_of_birth', e.value)} 
                            name="date_of_birth" 
                            value={values.date_of_birth}
                        />
                        <PiCalendarBlank className="text-lg absolute absolute-icon"/>
                        {errors.date_of_birth && touched.date_of_birth &&(
                        <span className="text-xs text-red-500">{errors.date_of_birth}</span>
                        )}
                    </div>
                </div>
                <div className="flex flex-column small-form-field">
                    <label htmlFor="gender">Gender</label>
                    <Dropdown value={values.gender} 
                        onChange={(e) => setFieldValue('gender', e.value)}
                        options={genders} placeholder="Select gender"
                        optionLabel="name"
                        checkmark={true}    
                        name="gender" 
                    />
                    {errors.gender && touched.gender &&(
                        <span className="text-xs text-red-500">{errors.gender}</span>
                    )}
                </div>
                <div className="flex flex-column small-form-field">
                    <label htmlFor="contact_number">Contact no.</label>
                        <InputMask 
                            value={values.contact_number}
                            onChange={(e) => setFieldValue('contact_number', e.value)}
                            mask="(+999) 99 999 999"
                            name="contact_number"
                            onBlur={handleBlur}
                        />
                        {errors.contact_number && touched.contact_number &&(
                            <span className="text-xs text-red-500">{errors.contact_number}</span>
                        )}
                </div>
                <div className="flex flex-column wide-form-field">
                    <label htmlFor="address">Address</label>
                    <InputText type="text" name="address" onChange={handleChange} value={values.address}/>
                    {errors.address && touched.address &&(
                        <span className="text-xs text-red-500">{errors.address}</span>
                    )}
                </div>
                <div className="flex flex-column wide-form-field">
                    <label className='flex align-items-center gap-1' htmlFor="medical_history">Medical history <span className='text-xs text-400'>(Optional)</span></label>
                    <Editor 
                        type="text" 
                        name="medical_history" 
                        onTextChange={(e) => setFieldValue('medical_history', e.textValue)} 
                        value={values.medical_history}
                        rows={5}
                        style={{height: '150px'}}
                        placeholder="Include chronic disease, previous surgeries, allergies, medications..."
                    />
                </div>
                <div className="flex flex-column small-form-field">
                    <label htmlFor="emergency_contact">Emergency contact</label>
                    <InputMask 
                            value={values.emergency_contact}
                            onChange={(e) => setFieldValue('emergency_contact', e.target.value)}
                            mask="(+999) 99 999 999"
                            name="emergency_contact"
                            onBlur={handleBlur}
                        />
                    {errors.emergency_contact && touched.emergency_contact &&(
                        <span className="text-xs text-red-500">{errors.emergency_contact}</span>
                    )}
                </div>
                <div className="flex flex-column small-form-field">
                    <label className='flex align-items-center gap-1' htmlFor="insurance_provider">Incurance provider <span className='text-xs text-400'>(Optional)</span></label>
                    <InputText type="text" name="insurance_provider" onChange={handleChange} value={values.insurance_provider}/>
                </div>
                <div className="flex flex-column small-form-field">
                    <label className='flex align-items-center gap-1' htmlFor="insurance_number">Incurance no. <span className='text-xs text-400'>(Optional)</span></label>
                    <InputText type="text" name="insurance_number" onChange={handleChange} value={values.insurance_number}/>
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
    handleBlur : PropTypes.any.isRequired,
    setFieldValue : PropTypes.any.isRequired
}

export default RegistrationForm;
import React from 'react';
import './form-input.style.css';

const FormInput =({ handleChange, label, ...otherProps }) => (
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherProps} />
       
        <label className={`${otherProps.value.length ? 'shrink' : ''} labelText`}>
            {label}
        </label>
            
        
    </div>
);

export default FormInput;
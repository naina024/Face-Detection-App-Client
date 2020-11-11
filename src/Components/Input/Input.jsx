import React from 'react';
import { useFormikContext } from 'formik';


const Input = ({ ...props }) => {
    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
    } = useFormikContext();

    const errorBorder = {
        borderColor: '#b83132',
    };

    return (
        <div>
            <label 
            style={{'fontFamily': 'Poppins'}}
            htmlFor={props.name} 
            className={'capitalize font-bold text-sm'}>
                {props.label}
            </label>

            <input
                style={
                    touched[props.name] && errors[props.name] ? errorBorder : undefined
                }
                className={'bg-transparent border-b-2 w-full p-1 focus:outline-none'}
                name={props.name}
                type={props.type}
                value={values[props.name]}
                placeholder={props.placeholder}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <p className={'text-xs capitalize text-red-700 font-semibold'}>
                {touched[props.name] && errors[props.name]
                    ? errors[props.name]
                    : undefined}
            </p>
        </div>
    );
};

Input.defaultProps = {
    type: 'text',
};

export default Input;

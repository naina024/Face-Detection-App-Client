import React from 'react';

const Button = ({ ...props }) => {
    return (
        <div>
            <button
                type={props.type}
                className={
                    'font-display font-bold text-lg py-1 px-3 bg-blue-700 hover:bg-blue-600 text-white rounded focus:outline-none w-full tracking-wider'
                }
                onSubmit={props.onButtonSubmit}
            >
                {props.btn_name}
            </button>
        </div>
    );
};

Button.defaultProps = {
    type: 'submit',
};

export default Button;

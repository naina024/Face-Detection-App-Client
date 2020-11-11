import React from 'react';

const Logout = ({onRouteChange}) => {
    return (
            <p 
            style={{'fontFamily': 'Poppins'}}
            className={'cursor-pointer text-md font-bold'}
                onClick={() => onRouteChange('signout')}
            >
                Logout
            </p>
    );
};

export default Logout;

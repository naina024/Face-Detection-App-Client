import React from 'react';
import Logout from '../Logout/Logout';
import Logo from '../Logo/Logo';

const Navbar = ({isSignedIn, onRouteChange}) => {
    return (
        <div
            className={
                'flex justify-between items-center py-3 px-16 border border-black-700 mb-16'
            }
        >
            <Logo />
            <div 
            style={{'fontFamily': 'Poppins'}}
            className={'cursor-default uppercase font-black text-4xl text-blue-800 tracking-wider'}>
                Face detection app
            </div>
            
            {isSignedIn && <Logout onRouteChange={onRouteChange}/>}
            
        </div>
    );
};

export default Navbar;

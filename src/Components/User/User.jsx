import React from 'react';

const User = ({ name, entries }) => {
    return (
        <div className='w-full max-w-md mx-auto flex flex-col items-center'>
        <div 
        style={{'fontFamily': 'Poppins'}}
        className='text-xl font-bold'>
            {`${name}, your current count is...`}
        </div>
        <div 
        style={{'fontFamily': 'Poppins'}}
        className='text-4xl font-bold'>
            {entries}
        </div>
        </div>
    );
}

export default User;
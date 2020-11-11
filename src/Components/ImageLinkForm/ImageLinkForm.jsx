import React, {useState, useEffect} from 'react';
import {TiDelete} from 'react-icons/ti';

const ImageLinkForm = ({ onInputChange, onSubmit }) => {

	const [clearUrl, setClearUrl] = useState(false);

	useEffect(() => {
		setClearUrl(false);
	}, [clearUrl]);

    return (
        <div className={'border-2 w-full p-3 bg-gray-100 flex items-center'}>
            <input
				className={'bg-transparent border-b-2 w-auto p-1 mx-4 focus:outline-none'}
				type='text'
				placeholder='enter image url'
				onChange={onInputChange}
				value = {clearUrl ? '' : undefined}
			/>
			<TiDelete 
				className={'cursor-pointer'}
				onClick={() => setClearUrl(true)}/>
			<button
				style={{'fontFamily': 'Poppins'}}
				className={
                    'font-bold text-sm py-1 px-3 mx-4 bg-blue-700 hover:bg-blue-600 text-white rounded focus:outline-none w-auto tracking-wider'
                }
				type='submit'
				onClick={onSubmit}
			>
				Detect Face
			</button>
        </div>
    );
};

export default ImageLinkForm;

import React from 'react';

const ImageBox = ({url, box}) => {
    return (
        <>
            {url ?
            
            <div className={'flex justify-center'}>
                    <div className={'absolute mt-2 '}>
                        <img id={"input_image"} src={url} alt={'image'} width={500}
                        />
                        {
                        box.map((face, index) =>  
                                <div 
                                key={index}
                                    className={"absolute pointer border-4 border-blue-600 justify-center flex flex-wrap"}
                                    style={{top: face.topRow, 
                                        right: face.rightCol, 
                                        bottom: face.bottomRow, 
                                        left: face.leftCol
                                    }}
                                >
                                </div> 
                        )}
                    </div>      
            </div>       
                : null
            }
        </>
    );
};

export default ImageBox;

import { useState } from 'react';
import './App.css';

import DropFileInput from './components/drop-file-input/DropFileInput';

function DropZone() {
    const[img , setImg ]=useState('')
    const onFileChange = (files) => {
        console.log(files);
    }

    return (
        <div className="box ">
            <div className='row mb-3'>
                <div className='col-6'>
                    <input type="radio" name="img" id="" />
                    <label className=" ms-2"> upload image  </label>  
                </div>
                <div className='col-6'>
                    <input type="radio" name="img" id="" />
                    <label className=" ms-2">Using url image </label>
                </div>
            </div>
           
            <DropFileInput onFileChange={(files) => onFileChange(files)}
            />
        </div>
    );
}

export default DropZone;

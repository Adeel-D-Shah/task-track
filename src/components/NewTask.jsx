import './NewTask.css';
import React, { useState }  from 'react';

function NewTask(props){

    const [message, setMessage] = useState('');


    const handleChange = (event) => {setMessage(event.target.value);};
    
                return   (
                    <div className='newtask_cnt'>

                    <input  
                    type='text' 
                    className='newtask ' 
                    placeholder='Do this Task ...' 
                    onChange={handleChange}/>

                    <button className='newtask_btn' 
                    onClick={()=>{props.newtsk(message)}}
                    >add</button>

                    </div>
                    );
                
}
 
export default NewTask;
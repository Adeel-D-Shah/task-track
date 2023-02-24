
import React,{Component} from 'react';
import './Cat_Buttons.css'
class CatBtns extends Component {
    state = {  } 
    render() { 
        return (
            <div className='main_cat'>
            
            <a href='https://google.com' className='cat_txt'>All</a>
            <a href='https://google.com' className='cat_txt'>Completed</a>
            <a href='https://google.com' className='cat_txt'>Active</a>
            <a href='https://google.com' className='cat_txt'>Dropped</a>
            </div>

        );
    }
}
 
export default CatBtns;
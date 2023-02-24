import React, { Component } from 'react';


import './task_List.css'

const data = ['1','2','3','4','5','6','1','2','3','4','5','6','1','2','3','4','5','6','1','2','3','4','5','6','1','2','3','4','5','6','1','2','3','4','5','6','1','2','3','4','5','6']
class TaskList extends Component {
    state = {  } 
    render() { 
        return (
            <div className='List_cnt'>
            {data.map((d)=><Task task={d}/> )}
            </div>          
        );
    }
}
 


function Task(props) {


        return(
        <div className='task-cnt'>
        <p>{props.task}</p>
        </div>
        )


}


export default TaskList;
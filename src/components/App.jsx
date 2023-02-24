import React, { useEffect, useState} from 'react';
import axios from 'axios';
import CatBtns from './Cat_Buttons';
import TaskList from './Task_List';
import LogOut from './Logout';
import NewTask from './NewTask';
import './App.css'

const url='http://localhost:3000';
function APP(){

      

        //States
        const [newTask,setnewTask] = useState('');
        const [Tasks,setTasks] = useState('');
        const [user,setuser] = useState('adeel');
        //Callbacks
        const getnewtask = (task)=>{setnewTask(task);}
        //Refresh or Rerenders
        useEffect(()=>{
            //async function get(){await Get_Notes(user)}
            //console.log('Page Refreshing');
           // const data = `note=${newTask}&user=${user}`
          //  Post_new_Note(data)
            //get();
        },[newTask])

        useEffect(()=>{
         
            const uri ='http://localhost:3000/Notes/adeel';
            const x =axios.get(uri)
            console.log(x)

         
        },[])

        return (
            <div className='main'>
          
            <div className='Div_L'>

            <div className='Profile'>
            <div>
            <div className='ProfilePic'></div>
            </div>
            <div className='ProfileData'>
            <p className='UserName' >User Name</p>
            <p className='UserEmail'>Email@gmail.com</p>
            </div>
            </div>
            
            <CatBtns/>

            <LogOut/>

            </div>


            <div className='Div_R'>
            <TaskList/>
            <NewTask newtsk={getnewtask}/>
            </div>
            </div>
        );
    }

    //API_Calls
    function Post_new_Note(data){
        console.log('posting new note');
        fetch(url+'/new_note',{
            method:'POST',
            headers:{
                'Content-Type':'application/x-www-form-urlencoded'
            },
            body:data
        })
        .then(res=>{})
        .then(err=>{console.log(err)})
    }
    
    function Get_Notes(data){
        
        console.log('getting all notes')
        const uri = url+'/Notes/'+data;
      console.log(uri);

       fetch(uri,{method:'GET'})
       .then(res=>{ 
        res.json().then(data=>{console.log(data)})   
       })     
       .catch(err=>{console.log(err)})
       
    }
export default APP;
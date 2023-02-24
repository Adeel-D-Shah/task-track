import React, { Component } from 'react';

class  Profile extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
            <div
            style={{
                width:'100%',
                height:'20%',
            }}>


            <div
            style={{
                display:'flex',
                flexDirection:'row',
                backgroundColor:'green',
                justifyContent:'center',
                alignItems:'center',
                        }}
            >
            <div
            style={{
                width:'20%',
                height:'40%',
                borderRadius:10,
                backgroundColor:'red'

            }}>

            </div>
            <div>
            <text>Full Name</text>
            <text>Email@gmail.com</text>
            </div>
            </div>

            <div></div>

        


            </div>
            </React.Fragment>

        );
    }
}
 
export default Profile;
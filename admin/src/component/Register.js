import React from 'react'
import { useState } from 'react'
import Login_Form from '../component/Login_Form'
import {useNavigate} from "react-router-dom"
const axios = require('axios')


export default function Register() {

  const[fullName,setFullName]=useState ('');
  const[email,setEmail]=useState('');
  const[password,setPassWord]=useState('');
  const[regirster,setregister]=useState(false);

  var data =" ";
  const nav =useNavigate();
  const btnhandler = ()=>{
    axios.post('http://localhost:5000/userRegister', {
    name: fullName,
    email:email,
    password:password,
    
    })
    .then(function(response){
       data=response.data 

       if(data._id!='')
       {
          setregister(true)
       }
       console.log(response);
    })
    .catch(function(error){
      console.log(error);
    });

  }
  // eslint-disable-next-line no-lone-blocks
  {
    if(regirster)
    {
      return(
       nav("/Login")
      )
    }
    else
    {
      
    
  return (
      <div  class="hold-transition register-page">
    <div>
<div className="register-box">
  <div className="register-logo">
    <a href="/Register"><b>Admin</b>LTE</a>
  </div>
  <div className="card">
    <div className="card-body register-card-body">
      <p className="login-box-msg">Register a new membership</p>
      <form  method="post">
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Full name" onChange={(a)=>{ setFullName(a.target.value)}} />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-user" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Email" onChange={(b)=>{ setEmail(b.target.value)}} />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Password" onChange={(c)=>{ setPassWord(c.target.value)}} />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
      
        <div className="row">
          
          <div className="col-4">
  
          <input type="button" onClick={()=>{btnhandler()}} value="Register"></input>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

     </div>
    </div> 
  )
}
}

}

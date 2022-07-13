import React from 'react'
import Header from './Header'
import Dashboard from '../component/Dashboard'
import { useState } from 'react'
import {useNavigate} from "react-router-dom"
import axios from 'axios'
import Main from './Main'

export default function Login_Form() {

const[email,setEmail]=useState('');
const[Password,setPassWord]=useState('');
const[isLogin,setLogin]=useState(false);

  var data="";
  const nav=useNavigate();
  const btnhandler = ()=>{
    axios.post('http://localhost:5000/userLogin ', {
    email:email,
    password:Password
    
    })
    .then(function(response){
       data=response.data 

       if(data._id!='')
       {
          setLogin(true)
       }
       console.log(response);
    })
    .catch(function(error){
      console.log(error);
    });

  }
  // eslint-disable-next-line no-lone-blocks
  {
    if(isLogin)
    {
      return(
       nav("/admin")
      )
    }
    else
    {
      
  

  return (
    <div class="hold-transition login-page">
    <div className="login-box">
  <div className="login-logo">
    <a href="../../index2.html"><b>Admin</b>LTE</a>
  </div>
  {/* /.login-logo */}
  <div className="card">
    <div className="card-body login-card-body">
      <p className="login-box-msg">Sign in to start your session</p>
      <form action="../../index3.html" method="post">
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Email" onChange={(a)=>{setEmail(a.target.value)}} />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Password" onChange={(a)=>{setPassWord(a.target.value)}} />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <div className="icheck-primary">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">
                Remember Me
              </label>
            </div>
          </div>
          {/* /.col */}
          <div className="col-4">
            <input type="button" onClick={()=>{btnhandler()}} value="Login"></input>
          </div>
          {/* /.col */}
        </div>
      </form>
      {/* <div className="social-auth-links text-center mb-3">
        <p>- OR -</p>
        <a href="#" className="btn btn-block btn-primary">
          <i className="fab fa-facebook mr-2" /> Sign in using Facebook
        </a>
        <a href="#" className="btn btn-block btn-danger">
          <i className="fab fa-google-plus mr-2" /> Sign in using Google+
        </a>
      </div> */}
      {/* /.social-auth-links */}
      {/* <p className="mb-1">
        <a href="/Forgetpassword">I forgot my password</a>
      </p> */}
      <p className="mb-0">
        <a href="/register" className="text-center">Register a new membership</a>
      </p>
    </div>
    {/* /.login-card-body */}
  </div>
</div>
</div>

  )
}
}

}


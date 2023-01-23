import './style.css'
import {MdOutlineLock} from "react-icons/md";
import React, {useRef} from 'react';
import Button from '../Button/button';
import { useNavigate } from 'react-router-dom';


function Input(){

  const emailRef = useRef()
  const passwordRef = useRef()
  const emailStorage = localStorage.getItem("email");
  const passwordStorage = localStorage.getItem("confirm");

  const godash=useNavigate()

  function submit(){
    console.log(emailRef.current.value)

    if(
      emailRef.current.value === emailStorage &&
          passwordRef.current.value === passwordStorage
  ) {
    godash("/dashboard")
  }
  }





  return(
    <div className='textbox'>
        <h1 className='login'>Login</h1>
        <div className='space'>
            <input className='username' placeholder='user name' type="text" ref={emailRef}></input>
            <i className='lock'>
            </i>
        </div>
        <div className='space'>
            <input className='password' placeholder='password' type="text" ref={passwordRef}></input>
            <MdOutlineLock className='people'/>
        </div>
        <button onClick={submit} >login</button>
    </div>
  )
}


export default Input
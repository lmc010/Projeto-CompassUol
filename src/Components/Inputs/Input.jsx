import './style.css'
import {MdOutlineLock} from "react-icons/md";
import React from 'react';
import Button from '../Button/button';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';



/*  
  const emailRef = useRef()
  const passwordRef = useRef()
 
  const emailStorage = localStorage.getItem("email");
  const passwordStorage = localStorage.getItem("confirm");
*/
/* function submit(){
    console.log(emailRef.current.value)

    if(
      emailRef.current.value === emailStorage &&
          passwordRef.current.value === passwordStorage
  ) 
  */

  function Input(){

     const [username,setUsername]=useState("")
     const [password,setPassword]=useState("")
     const godash=useNavigate()

 
    const loginArm = {
    email: username,
    password: password,
    
    }

    const armlogin=()=>{

    fetch("https://latam-challenge-2.deta.dev/api/v1/users/sign-in",
    {
     method:"POST",
     body:JSON.stringify(loginArm),
     headers:{"Content-type":"application/json;charset=UTF-8"},
     
     
    })
    .then((res)=>{
      console.log(res)
      return res.json()
      
    })


    .then((data)=>{
    console.log(data)
    localStorage.setItem("token",data.token)

    if(data.token){godash("/dashboard")}


     // godash("/dashboard")

    }).catch(erro => {console.log(erro)})

    }
    

  return(
    <div className='textbox'>
        <h1 className='login'>Login</h1>
        <div className='space'>
            <input className='username' placeholder='user name' type="text" value={username} onChange={(e)=>setUsername(e.target.value)}></input>
            <i className='lock'>
            </i>
        </div>
        <div className='space'>
            <input className='password' placeholder='password' type="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
            <MdOutlineLock className='people'/>
        </div>
        <button className='loginsubmit' onClick={armlogin} >Login</button>
    </div>
  )

}

export default Input
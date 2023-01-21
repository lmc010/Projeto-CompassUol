import './style.css'
import {MdOutlineLock} from "react-icons/md";


function Input(){
  return(
    <div className='textbox'>
        <h1 className='login'>Login</h1>
        <div className='space'>
            <input className='username' placeholder='user name' type="text"></input>
            <i className='lock'>
            </i>
        </div>
        <div className='space'>
            <input className='password' placeholder='password' type="text"></input>
            <MdOutlineLock className='people'/>
        </div>
    </div>
  )
}


export default Input
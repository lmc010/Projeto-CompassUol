import './style.css'
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

function Usernamespace() {

        const [firstname,setFirstname]=useState("")
        const [lastname,setLastname]=useState("")
        const [data,setData]=useState("")
        const [country,setCountry]=useState("")
        const [city,setCity]=useState("")
        const [email,setEmail]=useState("")
        const [password,setPassword]=useState("")
        const [confirm,setConfirm]=useState("")

        /* const armazenar=()=>{
            localStorage.setItem("firstname",firstname)
            localStorage.setItem("lastname",lastname)
            localStorage.setItem("data",data)
            localStorage.setItem("country",country)
            localStorage.setItem("city",city)
            localStorage.setItem("email",email)
            localStorage.setItem("password",password)
            localStorage.setItem("confirm",confirm)
        } */
           

        const formArm={
                firstName: firstname,
                lastName : lastname,
                birthDate: data,
                city: country,
                country: city,
                email: email,
                password: password,
                confirmPassword: confirm,
            }

            const armazenar=()=>{

            fetch("https://latam-challenge-2.deta.dev/api/v1/users/sign-up",
            {
                method:"POST",
                body:JSON.stringify(formArm),
                headers:{"Content-type":"application/json;charset=UTF-8"},
            })
            .then((res)=>{
                console.log(res)
                return res.json()
            })


            .then((data)=>{
                console.log(data)
            })




         }



    return(
    <div className='textboxcad'>
        <div className="spacecad">
        <input className='firstname' placeholder='Your first name' type="text" value={firstname} onChange={(e)=>setFirstname(e.target.value)}></input>
        <p className='Firstnamep'>First name</p>
        </div>
        <div className='spacecad'>
            <input className='lastname' placeholder='Your last name' type="text" value={lastname} onChange={(e)=>setLastname(e.target.value)}></input>
            <p className='Firstnamep'>Last name</p>
        </div>
        <div className='spacecad'>
            <input className='data' placeholder='MM/DD/YY' type="text" value={data} onChange={(e)=>setData(e.target.value)}></input>
            <p className='Firstnamep'>Birth Date</p>
        </div>
        <div className='spacecad'>
            <input className='country' placeholder='Your Country' type="text" value={country} onChange={(e)=>setCountry(e.target.value)}></input>
            <p className='Firstnamep'>Country</p>
        </div>   
        <div className='spacecad'>
            <input className='city' placeholder='Your City' type="text" value={city} onChange={(e)=>setCity(e.target.value)}></input>
            <p className='Firstnamep'>City</p>
        </div>
        <div className='spacecad'>
            <input className='validemail' placeholder='A valid e-mail here' type="text" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            <p className='Firstnamep'>E-mail</p>
        </div>
        <div className='spacecad'>
            <input className='yourpassowrd' placeholder='Your Password' type="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
            <p className='Firstnamep'>Password</p>
        </div>
        <div className='spacecad'>
            <input className='confirmpassword' placeholder='Confirm your passowrd' type="password"  value={confirm}  onChange={(e)=>setConfirm(e.target.value)}></input>
            <p className='Firstnamep'>Password</p>

         <button className='buttonregister' onClick={armazenar}
         >Register Now</button>

        </div>

    </div>

    )

}

export default Usernamespace
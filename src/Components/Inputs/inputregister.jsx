import './style.css'

function Usernamespace() {
    return(
    <div className='textboxcad'>
        <div className="spacecad">
        <input className='firstname' placeholder='Your first name' type="text"></input>
        <p className='Firstnamep'>First name</p>
        </div>
        <div className='spacecad'>
            <input className='lastname' placeholder='Your last name' type="text"></input>
            <p className='Firstnamep'>Last name</p>
        </div>
        <div className='spacecad'>
            <input className='data' placeholder='MMDDYY' type="text"></input>
            <p className='Firstnamep'>Birth Date</p>
        </div>
        <div className='spacecad'>
            <input className='country' placeholder='Your Country' type="text"></input>
            <p className='Firstnamep'>Country</p>
        </div>   
        <div className='spacecad'>
            <input className='city' placeholder='Your City' type="text"></input>
            <p className='Firstnamep'>City</p>
        </div>
        <div className='spacecad'>
            <input className='validemail' placeholder='A valid e-mail here' type="text"></input>
            <p className='Firstnamep'>E-mail</p>
        </div>
        <div className='spacecad'>
            <input className='yourpassowrd' placeholder='Your Password' type="text"></input>
            <p className='Firstnamep'>Password</p>
        </div>
        <div className='spacecad'>
            <input className='confirmpassword' placeholder='Confirm your passowrd' type="text"></input>
            <p className='Firstnamep'>Password</p>
        </div>

    </div>

    )

}

export default Usernamespace
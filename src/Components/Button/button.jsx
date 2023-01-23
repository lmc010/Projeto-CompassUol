import './style.css'

function Button(props){
    return(
        <button className='redbutton' onClick={props.onClick}>Log In</button>
    
    )


}

export default Button
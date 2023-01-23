import './style.css'
import { Link } from 'react-router-dom'

function Logout(){
    return(
    <a className='logouthome'>
       <Link to="/login"> <p className='logout'>Logout</p> </Link>
    </a>

    )


}

export default Logout
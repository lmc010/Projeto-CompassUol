import './style.css'
import { Link } from 'react-router-dom'

function Cadastrar(){
    return(
    <a className='cadastro'>
        <p className='criar'>Don't have an account?</p> <Link to="/home" ><p className='criar2'> Sign up.</p> </Link>
    </a>

    )


}

export default Cadastrar
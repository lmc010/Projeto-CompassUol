import './style.css'
import { Link } from 'react-router-dom'

function Cadastrar(){
    return(
    <a className='cadastro'>
        <Link to="/" ><p className='criar'>Criar Conta</p> </Link>
    </a>

    )


}

export default Cadastrar
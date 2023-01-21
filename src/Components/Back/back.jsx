import './style.css'
import { Link } from 'react-router-dom'

function Retornar(){
    return(
    <a className='retorne'>
        <Link to="Login" ><p className='retorno'>Voltar</p></Link>
    </a>

    )


}

export default Retornar
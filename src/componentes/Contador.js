import '../hojas-de-estilos/Contador.css'

function Contador({ numeroClic}){
    return(
        <div className='contador'>
            {numeroClic}
        </div>
    )    
}

export default Contador
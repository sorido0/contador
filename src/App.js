import { useState } from 'react';
import './App.css';
import Boton from './componentes/boton';
import Contador from './componentes/Contador';
import miLogo from './imagenes/yo1.png';

function App() {

  const [ numeroClis, setNumClics ] = useState(0);


  const manejarClick = () => {
    setNumClics(numeroClis + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className='contenedor-LogoaClick'>
        <img className='imagenLogoclick'
        src={miLogo}
        alt='Logoclick'/>
      </div>
      <div className='contedenor-de-la-aplicacion'>
        <Contador numeroClic= {numeroClis}
        />
        
        <Boton 
        texto='Clic'
        esBotonDeClick={true}
        manejarClick={manejarClick}
        />

        <Boton
         texto='Reiniciar'
         esBotonDeClick={false}
         manejarClick={reiniciarContador}
         />

      </div>
    </div>
  );
}

export default App;

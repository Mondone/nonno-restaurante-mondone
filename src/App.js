import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main'; 
import { useState } from 'react';

function App() {

  //Creamos nuestro primer hook
  const [servicios, agregarServicio] = useState(
    [
      { id:1, nombre:"Consulta", precio:2500 },
      { id:2, nombre:"Royal Canin 1kg", precio:2000 }
    ]
  );

  return (
    <div>
      <Header/>
      <Main/>
      <Footer/>
   
      <div id="copy">
        <p>© Copyright - Desarrollado por <a href="https://github.com/Mondone" target="_blank">Mondone design</a></p>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
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
      <h1>Nonno-Restaurante</h1>
      {
        servicios.map( servicio => (
            <p>{servicio.id} | {servicio.nombre} | {servicio.precio} </p>
          ))
      }
      <Footer 
        redsocial={"@facebook"}
      />
    </div>
  );
}

export default App;

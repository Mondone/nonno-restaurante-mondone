import React from 'react';

const Header = () => {
    return (
        /* Solo admite una sola etiqueta en este caso un div*/
      
        <div className="header">
            <nav id="navegador">
              <div id="volver-inicio">INICIO</div>
              <div id="menu">MENU</div>
              <div id="detalle">MENU DETALLADO</div>
              <div id="contacto">CONTACTO</div>
              <div><img id="modo" src="img/modo.png" alt="cambiar modo"></img>MODO</div> 
            </nav>
            <img id="logo" src="img/logo-nonno.png"></img>
        </div>
    );
}

export default Header;
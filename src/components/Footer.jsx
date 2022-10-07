import React from "react";

const Footer = ({ redsocial }) => {

    //Aca pongo el código js que necesito
    //Calculamos el año corriente

    const Fecha = new Date().getFullYear();

    return (
        <div>
            <p>Esto es un footer</p>
            <p>Año {Fecha}</p>
            <p>Visita nuestra red social: {redsocial}</p>
        </div>
    );
}

export default Footer;




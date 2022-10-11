import React from "react";

const Main = () => {
    return (
        /* Solo admite una sola etiqueta en este caso un div*/
      
    <div id="main">
      <section>
        <article id="intro">
            <h1 className="titulo">Nonno lo mejor de la gastronomía italiana...</h1>
            <p>
              Nonno sigue siendo fiel al estilo de la comida italina. Productos frescos, 
              calidad y una esmerada atención, manteniendo intacta la esencia a lo largo de la historia y logrando distinguir
              el verdadero sabor de la cocina italiana. 
              Ubicado en la zona más antigua del centro de Hurlingham, un lugar único por su encanto, su historia y su magia.
            </p>
        </article>
      
        <article id="bootstrap">
          <div id="carousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="img/img-01.jpg" className="d-block w-100" alt="..."></img>
              </div>
              <div className="carousel-item">
                <img src="img/img-02.jpg" className="d-block w-100" alt="..."></img>
              </div>
              <div className="carousel-item">
                <img src="img/img-03.jpg" className="d-block w-100" alt="..."></img>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </article>

      </section>
    </div>
    );
}

export default Main;
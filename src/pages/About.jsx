import React from 'react';

const About = () => {
  return (
    <div className="container">
    
      <div id="carouselExampleIndicators" className="carousel slide mb-5">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner rounded shadow">
          <div className="carousel-item active">
            <img src="/actividadII/1.jpg" className="d-block w-100" alt="Carrusel 1" />
          </div>
          <div className="carousel-item">
            <img src="/actividadII/2.jpg" className="d-block w-100" alt="Carrusel 2" />
          </div>
          <div className="carousel-item">
            <img src="/actividadII/3.jpg" className="d-block w-100" alt="Carrusel 3" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>

      
      <div className="text-center mb-5">
        <h3 className="fw-semibold">Explora. Disfruta. Repite.</h3>
        <p className="text-muted">Tu próximo plan perfecto está a solo un clic de distancia.</p>
      </div>

     
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src="/actividadII/2.jpg"
            alt="Actividades de ocio"
            width="90%"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h2 className="fw-bold mb-3">¿Quiénes somos?</h2>
          <p className="lead">
            Somos una plataforma dedicada a ayudarte a descubrir y planear actividades de ocio, diversión y entretenimiento cerca de ti.
          </p>
          <p>
            Nuestro objetivo es que aproveches tu tiempo libre al máximo con experiencias únicas: desde escapadas espontáneas, talleres creativos, hasta aventuras al aire libre o planes tranquilos para recargar energías.
          </p>
          <p>
            Con nuestra app puedes explorar opciones según tus intereses, ubicación y tiempo disponible. ¡Haz que cada momento cuente!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

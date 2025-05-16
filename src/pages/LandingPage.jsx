import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [storeData, setStoreData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStoreData = async () => {
      try {
        const response = await fetch(
          "https://mock.apidog.com/m1/914149-896526-default/store"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setStoreData(data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("No se pudo cargar la información de la tienda.");
      } finally {
        setLoading(false);
      }
    };

    fetchStoreData();
  }, []);

  if (loading) return <p>Cargando datos ...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      {/* Hero Section */}
      <header className="hero-section bg-cream mt-5">
        <div className="container">
          <div className="row align-items-center py-5 g-5">
            <div className="col-12 col-md-6">
              <div className="text-center text-md-start">
                <h1 className="display-4 fw-bold text-dark pb-2">
                  <span className="text">Aventura y diversión</span>
                </h1>
                <p className="lead">
                  Creamos experiencias inolvidables para que te diviertas, te
                  desconectes y compartas momentos únicos con quienes más
                  quieres.
                </p>
                <Link to="/about" className="btn btn-primary">
                  Ver más
                </Link>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <img src="/actividadII/personas.png" className="img-fluid" alt="tortuga" />
            </div>
          </div>
        </div>
      </header>

      <div className="container">
        <div className="row align-items-center gx-5 gy-3 py-5">
          <div className="col-12 col-lg-5">
            <img
              src={storeData.image}
              alt="Imagen"
              className="img-fluid mb-3"
            />
          </div>
          <div className="col-12 col-lg-7 text-lg-start">
            <h3 className="fw-bold text-primary fs-1 pb-3">
              Activa tu mente mientras te diviertes
            </h3>
            <p className="about-text">
              Desde juegos de lógica hasta actividades al aire libre con retos
              estratégicos, mantener tu mente en forma puede ser tan divertido
              como beneficioso. Participa en escape rooms, resuelve acertijos en
              equipo, explora rutas de orientación o sumérgete en dinámicas
              creativas como improvisación teatral o talleres de construcción.
              Estas experiencias no solo entretienen, sino que mejoran tu
              concentración, memoria y capacidad para resolver problemas de
              forma ágil. ¡Convierte cada momento en una oportunidad para
              pensar, jugar y crecer!
            </p>
            <p className="about-text">
              Si eres alguien que resuelve problemas y está dispuesto a hacer lo
              que sea necesario para eliminar el plástico de los océanos del
              mundo, te queremos en Activarte.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-light py-5">
        <div className="text-center mb-4">
          <h1>Datos</h1>
        </div>
        <div className="row text-center">
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <img
              src="/actividadII/Location.png"
              alt="Dirección"
              width="40"
              height="40"
              className="mb-2"
            />
            <p>
              <strong>Dirección:</strong>
              <br /> {storeData.address.street}, {storeData.address.city}
            </p>
          </div>

          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <img
              src="/actividadII/call.png"
              alt="Contacto"
              width="40"
              height="40"
              className="mb-2"
            />
            <p>
              <strong>Contacto:</strong>
              <br /> {storeData.contact.phone} <br /> {storeData.contact.email}
            </p>
          </div>

          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <img
              src="/actividadII/Calendar.png"
              alt="Horario"
              width="40"
              height="40"
              className="mb-2"
            />
            <p>
              <strong>Horario viernes:</strong>
              <br /> {storeData.hours.friday}
            </p>
          </div>

          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <img
              src="/actividadII/Text.png"
              alt="Descripción"
              width="40"
              height="40"
              className="mb-2"
            />
            <p>
              <strong>Descripción:</strong>
              <br /> {storeData.additional_info.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;

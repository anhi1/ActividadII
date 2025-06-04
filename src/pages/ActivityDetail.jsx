import React from 'react';
import { useParams } from 'react-router-dom';
import { useActivities } from '../hooks/useActivities';

const ActivityDetail = () => {
  const { id } = useParams();
  const { activities, loading, error } = useActivities();

  if (loading) return <p>Cargando...</p>;
  if (error) return <p className="text-danger">Error: {error.message || error}</p>;

  // Busca la actividad por activity_id
  const activity = activities.find(item => item.activity_id === parseInt(id));

  if (!activity) return <p>Actividad no encontrada</p>;

  return (
  <div className="container mt-4">
    <h1 className="mb-4">{activity.name}</h1>

    <div className="mb-4">
      <p><strong>Tipo:</strong> {activity.type}</p>
      <p><strong>Precio:</strong> ${activity.price}</p>
      <p>{activity.long_description}</p>
    </div>

    <div className="row g-3">
      <div className="col-md-6 col-lg-4">
        <div className="card h-100 shadow-sm">
          <div className="card-body">
            <h5 className="card-title">Instructor</h5>
            <p className="card-text">{activity.instructor}</p>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-lg-4">
        <div className="card h-100 shadow-sm">
          <div className="card-body">
            <h5 className="card-title">Cupo máximo</h5>
            <p className="card-text">{activity.limit} personas</p>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-lg-4">
        <div className="card h-100 shadow-sm">
          <div className="card-body">
            <h5 className="card-title">Duración</h5>
            <p className="card-text">{activity.duration} minutos</p>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-lg-4">
        <div className="card h-100 shadow-sm">
          <div className="card-body">
            <h5 className="card-title">Idioma</h5>
            <p className="card-text">{activity.language}</p>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-lg-4">
        <div className="card h-100 shadow-sm">
          <div className="card-body">
            <h5 className="card-title">Categoría</h5>
            <p className="card-text">{activity.category}</p>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-lg-4">
        <div className="card h-100 shadow-sm">
          <div className="card-body">
            <h5 className="card-title">Material incluido</h5>
            <p className="card-text">{activity.includes_material ? 'Sí' : 'No'}</p>
          </div>
        </div>
      </div>
    </div>

    {/* Fechas disponibles */}
    <div className="mt-4">
      <h5>Fechas disponibles:</h5>
      <ul className="list-group">
        {activity.available_dates && activity.available_dates.map((date, i) => (
          <li key={i} className="list-group-item">
            {new Date(date).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
    {/* Botón de reserva */}
      <div className="text-center mt-5">
        <button
          className="btn btn-success btn-lg"
        >
          Reservar
        </button>
      </div>

    {/* Imágenes */}
    <div className="row mt-5">
      {activity.images.map((img, idx) => (
        <div className="col-md-6 col-lg-4 mb-3" key={idx}>
          <img src={img} alt={activity.name} className="img-fluid rounded shadow-sm" />
        </div>
      ))}
    </div>
    
  </div>
);

};

export default ActivityDetail;

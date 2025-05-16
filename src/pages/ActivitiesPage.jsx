// src/pages/ActivitiesPage.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ActivitiesPage = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:3658/m1/914149-896526-default/activities')
      .then((res) => res.json())
      .then((data) => setActivities(data))
      .catch((err) => console.error('Error fetching activities:', err));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Actividades</h1>
      <div className="row">
        {activities.map((activity) => (
          <div className="col-md-4 mb-4" key={activity.activity_id}>
            <div className="card h-100">
              <img
                src={activity.images[0]}
                className="card-img-top"
                alt={activity.name}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{activity.name}</h5>
                <p className="card-text">
                  <strong>Tipo:</strong> {activity.type}
                </p>
                <p className="card-text">
                  <strong>Precio:</strong> ${activity.price}
                </p>
                <p className="card-text">{activity.short_description}</p>
              </div>
              <div className="card-footer">
                <Link
                  to={`/activities/${activity.activity_id}`}
                  className="btn btn-primary"
                >
                  Ver más
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivitiesPage;
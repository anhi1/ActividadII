import { useEffect, useState } from "react";

const MyReservations = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3658/m1/914149-896526-default/reservations")
      .then(res => res.json())
      .then(data => {
        const userReservations = data.filter(r => r.user_id === 1); 
        setReservations(userReservations);
      })
      .catch(err => console.error("Error al obtener las reservas:", err));
  }, []);

  return (
    <div className="tabla container mt-4 mb-5">
      <h2 className="mb-4">Mis Reservaciones</h2>
      {reservations.length === 0 ? (
        <p>No tienes reservaciones.</p>
      ) : (
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>ID Reserva</th>
              <th>ID Actividad</th>
              <th>Número de Personas</th>
              <th>Fecha Seleccionada</th>
              <th>Comentarios</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map(r => (
              <tr key={r.reservation_id}>
                <td>{r.reservation_id}</td>
                <td>{r.activity_id}</td>
                <td>{r.number_of_people}</td>
                <td>{r.selected_date}</td>
                <td>{r.reservation_comments}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyReservations;

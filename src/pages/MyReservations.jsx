import useReservations from "../hooks/useReservations";
import { useAuth } from "../context/AuthContext";
import { useActivities } from "../hooks/useActivities";

const MyReservations = () => {
  const { user } = useAuth();
  const userId = user?.user_id; // Usa user_id si así está en tu objeto usuario
  const { reservations, loading, error } = useReservations(userId);
  const { activities, loading: loadingActivities } = useActivities();

  if (loading || loadingActivities) return <p>Cargando reservaciones...</p>;
  if (error) return <p>Error al obtener las reservaciones.</p>;

  // Relaciona cada reserva con su actividad
  const getActivity = (activity_id) =>
    activities.find((a) => a.activity_id === activity_id);

  return (
    <div className="tabla container mt-4 mb-5">
      <h2 className="mb-4">Mis Reservaciones</h2>
      {reservations.length === 0 ? (
        <p>No tienes reservaciones.</p>
      ) : (
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Actividad</th>
              <th>Imagen</th>
              <th>Fecha Seleccionada</th>
              <th>Número de Personas</th>
              <th>Comentarios</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((r) => {
              const activity = getActivity(r.activity_id);
              return (
                <tr key={r.reservation_id}>
                  <td>{activity?.name || "Sin nombre"}</td>
                  <td>
                    {activity?.images?.[0] ? (
                      <img
                        src={activity.images[0]}
                        alt={activity.name}
                        style={{ width: 80, height: 50, objectFit: "cover" }}
                      />
                    ) : (
                      "Sin imagen"
                    )}
                  </td>
                  <td>{new Date(r.selected_date).toLocaleDateString()}</td>
                  <td>{r.number_of_people}</td>
                  <td>{r.reservation_comments}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyReservations;

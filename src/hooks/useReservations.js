import { useEffect, useState } from "react";

const useReservations = (userId) => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (userId == null) {
      setReservations([]);
      setLoading(false);
      return;
    }
    fetch("http://127.0.0.1:3658/m1/914149-896526-default/reservations")
      .then(res => res.json())
      .then(data => {
        // Depuración temporal
        // console.log("userId:", userId, "reservations:", data);
        const userReservations = data.filter(r => r.user_id == userId);
        setReservations(userReservations);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [userId]);

  return { reservations, loading, error };
};

export default useReservations;

import { useState, useEffect } from "react";

export function useActivities() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:3658/m1/914149-896526-default/activities")
      .then((res) => res.json())
      .then((data) => {
        setActivities(data);
        setLoading(false);
      })
      .catch((err) => {
        setActivities([]);
        setError(err);
        setLoading(false);
      });
  }, []);

  return { activities, loading, error };
}

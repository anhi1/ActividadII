import { useState, useEffect } from "react";

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:3658/m1/914149-896526-default/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setUsers([]);
        setError(err);
        setLoading(false);
      });
  }, []);

  return { users, loading, error };
}

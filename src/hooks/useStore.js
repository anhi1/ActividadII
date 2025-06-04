import { useState, useEffect } from "react";

export function useStore() {
  const [storeData, setStoreData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://mock.apidog.com/m1/914149-896526-default/store")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setStoreData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("No se pudo cargar la información de la tienda.");
        setLoading(false);
      });
  }, []);

  return { storeData, loading, error };
}

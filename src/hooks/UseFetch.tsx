/* Importación de React */
import { useEffect, useState } from "react"

/**
 * @description Hook personalizado para controlar realizar un fetch.
 * @param {string} url - Contiene la dirección de donde se obtendrán los datos.
 * @returns Datos obtenidos de la consulta.
 */
export default function useFetch(url: string) {

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Ha ocurrido un error en la consulta, estatus del error: ${response.status}`);
        };
        return response.json();
      })
      .then((data) => {
        setResponseData(data.results);
        setLoading(false);
      })
      .catch((error) => {
        setErrorMessage('Ha ocurrido un error en la consulta. Revise la consola para más detalles.');
        console.log(error);
        setLoading(false);
      });
  }, [url]);

  return { responseData, loading, errorMessage };
};

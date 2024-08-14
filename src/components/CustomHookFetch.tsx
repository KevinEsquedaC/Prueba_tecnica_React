/* Importación de componentes MUI */
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

/* Importación de hooks */
import useFetch from "../hooks/UseFetch"

/**
 * @description Componente que utiliza el hook customizado que realiza la consulta a una api por medio de Fetch.
 * @returns Renderiza el estatus y el resultado de la constulta.
 */
export default function CustomHookFetch() {

  const { errorMessage, loading, responseData } = useFetch('https://pokeapi.co/api/v2/pokemon/');

  return (
    <>
      {
        loading
          ? <CircularProgress />
          : errorMessage !== ''
            ? <Typography color='error'>{errorMessage}</Typography>
            : responseData
              ? responseData.map((item: any, index) =>
                <Typography key={index}>{item.name}</Typography>)
              : <Typography color='error'>Sin datos</Typography>
      }
    </>
  );
};
/* Importación de componentes MUI */
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

/* Importación de hooks */
import useCount from "../hooks/UseCount";

/**
 * @description Renderiza los botones que controlan el contador por medio de un hook customizado.
 * @returns Devuelve los botones que controlan el contador.
 */
export default function CustomHookCount() {

  const { count, addCount, resetCount } = useCount(0);

  return (
    <>
      <Typography>Valor del contador: {count}</Typography>
      <Button onClick={addCount}>Agregar valor al contador</Button>
      <Button onClick={resetCount}>Resetear el valor del contador</Button>
    </>
  );
};

/* Importación de componentes MUI */
import Button from "@mui/material/Button";

/* Importación del contexto */
import { useTheme } from "../context/DarkModeContext";

/* Importación de componentes */
import ComponentsInDarkMode from "./ComponentsInDarkMode";

/**
 * @description Renderiza y hace uso del modo oscuro.
 * @returns Un botón controlador del tema y los componentes que serán afectados por el tema oscuro.
 */
export default function DarkMode() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <>
      <Button onClick={toggleTheme}>Cambiar a tema {isDarkMode ? 'claro' : 'oscuro'}</Button>
      <ComponentsInDarkMode isDarkMode={isDarkMode} />
    </>
  );
};
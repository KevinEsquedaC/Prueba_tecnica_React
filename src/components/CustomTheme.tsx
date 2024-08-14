/* Importación de componentes MUI */
import Typography from "@mui/material/Typography";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

/* Importación del tema customizado */
import { NewTheme } from "../theme/NewTheme";

/**
 * @description Renderiza componentes utilizando el tema creado.
 * @returns Componentes con el nuevo tema creado.
 */
export default function CustomTheme() {
  return (
    <ThemeProvider theme={NewTheme}>
      <Typography color="primary">Color primario editado</Typography>
      <Typography color="secondary">Color secundario editado</Typography>
    </ThemeProvider>
  );
};

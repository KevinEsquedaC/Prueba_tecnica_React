/* Importación de React y componentes MUI */
import { StrictMode } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/* Importación de contextos */
import { ThemeProvider } from './context/DarkModeContext';

/* Importación de componentes */
import CustomCard from './components/CustomCard';
import Count from './components/Count';
import UseEffectList from './components/UseEffectList';
import CustomHookCount from './components/CustomHookCount';
import CustomHookFetch from './components/CustomHookFetch';
import CustomTheme from './components/CustomTheme';
import DarkMode from './components/DarkMode';

/**
 * 
 * @returns Devuelve todos los componentes de la App
 */
function App() {
  return (
    <Box sx={{ p: 5 }}>
      <Typography>1.</Typography>
      <CustomHookCount />
      <Typography>2.</Typography>
      <UseEffectList />
      <Typography>3.</Typography>
      <CustomCard />
      <Typography>4.</Typography>
      <Count />
      <Typography>5.</Typography>
      <CustomHookFetch />
      <Typography>6.</Typography>
      <CustomTheme />
      <Typography>7.</Typography>
      <StrictMode>
        <ThemeProvider>
          <DarkMode />
        </ThemeProvider>
      </StrictMode>
    </Box>
  );
};

export default App

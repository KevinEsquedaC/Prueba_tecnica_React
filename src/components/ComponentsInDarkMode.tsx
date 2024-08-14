/* Importación de componentes MUI */
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

/**
 * @description Componentes que utilizan el tema oscuro.
 * @param {boolean} isDarkMode - Indica sí se encuentra en uso el tema oscuro.
 * @returns Varios componentes que hacen uso del tema oscuro.
 */
export default function ComponentsInDarkMode({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <div style={{
      padding: '8px',
      backgroundColor: isDarkMode ? '#262626' : '#FFFFFF',
      color: isDarkMode ? '#FFFFFF' : '#000000'
    }}>
      <Typography>Aquí se aplica el modo oscuro</Typography>
      <Button color={isDarkMode ? 'info' : 'success'} variant='contained'>
        Botón que no realiza acciones
      </Button>
      <Typography>Aquí se aplica el modo oscuro</Typography>
      <Card sx={{ height: '100px', bgcolor: isDarkMode ? '#3b3b3b' : '#ededed' }}>
        <CardContent>
          <Typography variant='h5' sx={{ color: isDarkMode ? '#FFFFFF' : '#000000' }}>
            Card en modo {isDarkMode ? 'oscuro' : 'claro'}
          </Typography>
          <Divider />
          <Typography variant='body1' sx={{ color: isDarkMode ? '#FFFFFF' : '#000000' }}>
            Esta card se ve afectada según sea el tema seleccionado
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
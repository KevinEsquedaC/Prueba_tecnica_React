/* Importación de componentes MUI */
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

/* Importación de imágen */
import warrior from "../statics/warrior.jpg";

/**
 * @description Componente que renderiza una Card estilizada con imágen.
 * @returns Regresa la card con una imagen, título y descripción.
 */
export default function CustomCard() {
  const cardTitle = "Título de la card"; // Puede ser cualquier otro título.
  const cardDescription = "Descripción que se encontrará dentro de la card."; // Puede ser cualquier otra descripción.
  return (
    <Card sx={{ height: "300px", width: '300px' }}>
      <CardMedia sx={{ height: "200px", width: 'auto' }} image={warrior} title="imagen.jpg" />
      <CardContent>
        <Typography variant="h5">{cardTitle}</Typography>
        <Typography variant="body1">{cardDescription}</Typography>
      </CardContent>
    </Card>
  );
};
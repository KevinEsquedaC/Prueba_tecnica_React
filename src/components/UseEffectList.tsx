/* Importación de React y componentes MUI */
import Alert from '@mui/material/Alert';
import { useEffect, useState } from 'react';
import AlertTitle from '@mui/material/AlertTitle';

/**
 * @description Componente que renderiza una lista no ordenada de los pokemon obtenidos por una API.
 * @returns Devuelve una lista no ordenada con los pokemon de la API
 */
export default function UseEffectList() {

  const [pokemonData, setPokemonData] = useState([]); // Variable donde se guardarán los resultados de la API.

  useEffect(() => {
    try {
      fetch('https://pokeapi.co/api/v2/pokemon')
        .then(response => response.json())
        .then(data => setPokemonData(data.results));
    } catch {
      <Alert severity='error'>
        <AlertTitle>Error en PokeApi</AlertTitle>
        Ha ocurrido un error al tratar de obtener los pokemon
      </Alert>
    };
  }, []);

  return (
    <ul>
      {pokemonData.map((pokemon: any, index) =>
        <li key={index}>
          {pokemon.name}
        </li>
      )}
    </ul>
  );
};
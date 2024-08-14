/* Importación de React y componentes MUI */
import { useState } from 'react';
import Button from '@mui/material/Button';

/**
 * @description Componente que renderiza los botones que controlan el contador.
 * @returns Devuelve los botones mostrados en la interfaz.
 */
export default function Count() {

  const [count, setCount] = useState(0); // Varriable global

  /**
   * @function handleAddCount
   * @description Realiza la suma +1 del contador.
   */
  function handleAddCount() {
    setCount(count + 1);
  };

  return (
    <>
      <CountButton count={count} handleAddCount={handleAddCount} />
      <CountButton count={count} handleAddCount={handleAddCount} />
    </>
  );
};

/**
 * @description Función que renderiza un botón controlador del contador.
 * @param {number} count - Contiene el valor del contador .
 * @param {handleAddCount(): void} count - Función que realiza la suma del contador. 
 * @returns 
 */
export function CountButton({ count, handleAddCount }: { count: number, handleAddCount: any }) {
  return (
    <Button onClick={handleAddCount}>Valor del contador {count}</Button>
  );
};
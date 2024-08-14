/* Importación de React */
import { useState } from 'react'

/**
 * @description Hook personalizado para controlar un contador.
 * @returns Las acciones creadas en el hook.
 */
export default function useCount(iniitalCountValue = 0) {

  const [count, setCount] = useState(iniitalCountValue); // Variable que controla el contador.

  /**
   * @description Función que añade una unidad al valor del contador.
   */
  function addCount() {
    setCount(count + 1);
  };

  /**
   * @description Función que vuelve a colocar el valor inicial del contador.
   */
  function resetCount() {
    setCount(iniitalCountValue);
  };

  return {
    count,
    addCount,
    resetCount
  };
};

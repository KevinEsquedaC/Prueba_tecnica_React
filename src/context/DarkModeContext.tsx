/* Importación de React */
import { createContext, ReactNode, useContext, useState } from "react";

/* Importación de tipos */
import { ThemeContextType } from "../types/ThemeContextType";

// Se crea el contexto que será utilizado
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * @description Verifica que el contexto se este utilizando de manera correcta.
 * @returns Contexto utilizado
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('Debe ser utilizado dentro del componente que utiliza themeProvider');
  };
  return context;
};

/**
 * @description Crea el contenedor que es afectado por el tema creado.
 * @param {ReactNode} cildren - Componentes que afectados por el tema.
 * @returns El tema aplicado a los componentes dentro de el.
 */
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  /**
   * @description Función que realiza el cambio de tema.
   */
  function toggleTheme() {
    setIsDarkMode((prevState) => !prevState);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
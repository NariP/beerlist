import React, { createContext, useState } from 'react';
import { light, dark } from './styles';
import { ThemeProvider } from 'styled-components';

export const ThemeContext = createContext({});
const RootTheme = ({ children }) => {
  const [theme, setTheme] = useState(true);
  const themeMode = theme ? light : dark;
  const toggleTheme = mode => setTheme(!mode);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={themeMode}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default RootTheme;

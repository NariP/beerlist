import React, { createContext, useState } from 'react';
import { light, dark } from 'styles';
import { ThemeProvider } from 'styled-components';
import { localWorker } from 'utils';
import { LS_KEY, THEME_MODE } from 'utils/constatns';

export const ThemeContext = createContext({});
const RootTheme = ({ children }) => {
  const localThemeMode = localWorker.getItem(LS_KEY.theme);
  const [theme, setTheme] = useState(localThemeMode || THEME_MODE.LIGHT);
  const themeMode = theme === THEME_MODE.LIGHT ? light : dark;

  const toggleTheme = mode => {
    const { LIGHT, DARK } = THEME_MODE;
    const changed = mode === LIGHT ? DARK : LIGHT;
    setTheme(changed);
    localWorker.setItem(LS_KEY.theme, changed);
  };

  return (
    <ThemeContext.Provider value={{ themeName: theme, toggleTheme }}>
      <ThemeProvider theme={themeMode}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default RootTheme;

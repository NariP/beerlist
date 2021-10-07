import React, { useState } from 'react';
import { light, dark } from './styles';
import { ThemeProvider } from 'styled-components';

const RootTheme = ({ children }) => {
  const [theme, setTheme] = useState(true);

  return <ThemeProvider theme={theme ? light : dark}>{children}</ThemeProvider>;
};

export default RootTheme;

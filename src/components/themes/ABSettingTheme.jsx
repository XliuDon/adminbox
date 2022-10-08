import React from 'react';
import { useTheme, createTheme } from '@mui/material/styles';

const baseTheme = createTheme({
})

const darkTheme = createTheme({
  ...baseTheme,
  palette: {    
    primary: {
      main: "#1A2034"
    },
    secondary: {
      main: "#344767"
    },
    background: {
      default: '#1A2034',
      paper: '#1A2034'          
    },
  },
})

const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: "light",
    primary: {
      main: "#F0F2F5"
    },
    secondary: {
      main: "#000"
    },
    background: {
      default: '#fff',
      paper: '#fff'          
    },     
  },
})

const ABSettingTheme = (mode) => {
  return mode==='dark'? darkTheme: lightTheme;
}

export { darkTheme, lightTheme, ABSettingTheme }

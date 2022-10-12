import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import {ABMainTheme} from './components/themes/ABMainTheme';
import CssBaseline from "@mui/material/CssBaseline";
import {SettingTool, SettingBar, SideBar, NavBar} from './components';
import { styled, alpha } from '@mui/material/styles';
import './App.css';
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';

import { useStateContext } from './contexts/ContextProvider';

function App() {
  const { activeMenu, currentMode} = useStateContext();
  const modeTheme = ABMainTheme(currentMode);

  const NavBarWrapper = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2, 2, 2, 0),
    // vertical padding + font size from searchIcon
    // paddingLeft: `calc(17em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    // [theme.breakpoints.up('md')]: {
    //   width: '20ch',
    // },
    opacity: 1,
    position: 'relative',
    marginLeft: theme.spacing(0),
    [theme.breakpoints.up('md')]: {
      marginLeft: activeMenu? `calc(17rem )`:theme.spacing(14)
    },
  
}));

  return (
    <ThemeProvider theme={modeTheme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          bgcolor: 'background.default',
          color: 'text.primary',
          borderRadius: 1,
          
        }}
      >
          <SettingTool />
          <SettingBar />
          
          <NavBarWrapper >
            <NavBar />      
          </NavBarWrapper>     
          <SideBar />
        </Box>
    </ThemeProvider>
  );
}

export default App;

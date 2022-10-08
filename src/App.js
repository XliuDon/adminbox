import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import {ABMainTheme} from './components/themes/ABMainTheme';
import CssBaseline from "@mui/material/CssBaseline";
import {SettingTool, SettingBar, SideBar, NavBar} from './components';
import './App.css';
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';

import { useStateContext } from './contexts/ContextProvider';

function App() {
  const { activeMenu, currentMode} = useStateContext();
  const modeTheme = ABMainTheme(currentMode);
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
          
          <Box  sx={{ 
            opacity: 1,
            boxShadow: "none",
            padding: "20px",
            position: 'relative',
            margin: { xs: '0', sm: activeMenu? "0 0 0 17.125rem":"0" }
          }} width={'100%'}>
            <NavBar />      
          </Box>     
          <SideBar />
        </Box>
    </ThemeProvider>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import {SettingTool, SettingBar, SideBar, NavBar,useMode} from './components';
import { styled, alpha } from '@mui/material/styles';

import './App.css';
import { MyProfile,Footer } from './pages';
import AccountSetting from './pages/account/Setting';
import Analytics from './pages/dashboards/Analytics';
import Sales from './pages/dashboards/Sales';
import { useStateContext } from './contexts/ContextProvider';

function App() {
  const { activeMenu} = useStateContext();
  const [modeTheme,colorMode] = useMode();


  const ContentWrapper = styled(Box)(({ theme }) => ({
    padding: theme.spacing(3),
    // vertical padding + font size from searchIcon
    // paddingLeft: `calc(17em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    opacity: 1,
    position: 'relative',
    marginLeft: theme.spacing(0),
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0'
    },

    [theme.breakpoints.between('sm','md')]: {
      marginLeft: activeMenu? theme.spacing(14):'0'
    },

    [theme.breakpoints.up('md')]: {
      marginLeft: activeMenu? `calc(17rem )`:theme.spacing(14)
    },   
}));

  return (
    <ThemeProvider theme={modeTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            bgcolor: 'background.default',
            color: 'text.primary',
            borderRadius: 1,
            flexWrap: 'wrap'
          }} 
        >
            <SettingTool />
            <SettingBar />
            
            <ContentWrapper >
              <NavBar />
              <Box>                
                  <Routes>                                       
                    <Route path='/' element={<MyProfile />} />
                    <Route path='/profile' element={<MyProfile />} />
                    <Route path='/account' element={<AccountSetting />} />         
                    <Route path='/account/setting' element={<AccountSetting />} />             
                    <Route path='/dashboards' element={<Analytics />} />   
                    <Route path='/dashboards/analytics' element={<Analytics />} />      
                    <Route path='/dashboards/sales' element={<Sales />} />      
                              
                  </Routes>
              </Box>      
              <Footer />
            </ContentWrapper>     

            <SideBar />            
          </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

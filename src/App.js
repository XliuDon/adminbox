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
import AllProjects from './pages/projects/AllProjects';
import NewUser from './pages/users/NewUser';
import HomeLayout from './pages/home';
import Pricing from './pages/Pricing'
import Widgets from './pages/widgets/Widgets'
import AddEditVehicle from './pages/vehicles/AddEditVehicle'
import VehicleList from './pages/vehicles/VehicleList'
import { useStateContext } from './contexts/ContextProvider';

function App() {
  const { activeMenu} = useStateContext();
  const [modeTheme,colorMode] = useMode();


  const ContentWrapper = styled(Box)(({ theme }) => ({
    padding: theme.spacing(3),
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
          <Routes>  
            <Route element={<HomeLayout />}>
                <Route path='/' element={<MyProfile />} />
                <Route path='/profile' element={<MyProfile />} />
                <Route path='/account' element={<AccountSetting />} />         
                <Route path='/account/setting' element={<AccountSetting />} />             
                <Route path='/dashboards' element={<Analytics />} />   
                <Route path='/dashboards/analytics' element={<Analytics />} />      
                <Route path='/dashboards/sales' element={<Sales />} />      
                <Route path='/pages' element={<AllProjects />} /> 
                <Route path='/pages/projects' element={<AllProjects />} /> 
                <Route path='/pages/projects/allprojects' element={<AllProjects />} />                      
                <Route path='/pages/users' element={<NewUser />} />   
                <Route path='/pages/users/newuser' element={<NewUser />} />   
                <Route path='/pages/widgets' element={<Widgets />} />    
                <Route path='/applications/vehicles' element={<AddEditVehicle />} />   
                <Route path='/applications/vehicle-list' element={<VehicleList />} />   
            </Route>    
            <Route path="/pages/price" element={<Pricing />} />            
          </Routes>    
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

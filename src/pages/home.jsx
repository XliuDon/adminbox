import React from 'react';
import { Outlet } from "react-router-dom";
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import {SettingTool, SettingBar, SideBar, NavBar} from '../components';
import { useStateContext } from '../contexts/ContextProvider';

export default function HomeLayout() {
  const { activeMenu} = useStateContext();
 
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
                    <Outlet />          
                </Box>
            </ContentWrapper >
            <SideBar />
        </Box>
        
    )
}
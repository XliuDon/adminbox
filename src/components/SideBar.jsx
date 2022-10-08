import * as React from 'react';
import { SiShopware } from 'react-icons/si';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { links,customersData } from '../data/dummy';
import Menus from './Menus'
import { useStateContext } from '../contexts/ContextProvider';
import ABDivider from './ABDivider';



const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

export default function SideBar(){
    const {activeMenu, currentColor, currentMode, sideBarBg} = useStateContext();
    let darkBg = '';
    let lightBg = '';
    
    if(sideBarBg !== 'dark'){
        darkBg = sideBarBg;   
        lightBg = sideBarBg;   
    }
    if(sideBarBg === 'dark'){
        lightBg = 'linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))';
    }

    return (
        <Drawer
            sx={{
              display: { sm: 'block', xs: activeMenu?'block':'none' },
                // '& .MuiDrawer-docked': {background:' rgb(240, 242, 245)'},
                '& .MuiDrawer-paper': { 
                    boxSizing: 'border-box', 
                    width: { sm: 250, xs: 200 }, 
                    borderRadius: 2,
                    margin: '1rem',
                    height: 'calc(100vh - 2rem)',
                    boxShadow: 1,    
                    background: currentMode === 'dark'?darkBg:lightBg
                 },                
            }}
            variant="persistent"
            anchor="left"
            open={activeMenu}
          >
            <Box sx={{
                display: 'flex',
                width: '100%',
                color: 'text.primary',
                pt: 2,
                alignItems: 'center',
                justifyContent: 'center',
                
            }}>
                <Link href="#" underline="none"  sx={{
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                    <Box  sx={{
                        display: 'flex',
                        width: '100%',
                        alignItems: 'center',
                        gap:1
                    }}>
                        <Box><SiShopware /></Box>
                        <Box><Typography variant="h6" sx={{
                            ml: '4px',
                        }}>RemoCareer</Typography></Box>
                    </Box>
                </Link>
            </Box>
            <ABDivider />

            <Menus menus={links} customersData={customersData}/>
          </Drawer>          
    )
}
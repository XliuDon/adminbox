import * as React from 'react';
import { SiShopware } from 'react-icons/si';
// import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider, styled,useTheme,alpha  } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import { menus,customersData } from '../data/dummy';
import Menus from './Menus'
import { useStateContext } from '../contexts/ContextProvider';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import ABDivider from './ABDivider';
import Tooltip from '@mui/material/Tooltip';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import IconButton from '@mui/material/IconButton';

import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';


const drawerWidth = 250;


export default function SideBar(){
    const {activeMenu, setActiveMenu,  sideBarBg} = useStateContext();
    const [open, setOpen] = React.useState(true);

    const openedMixin = (theme) => ({
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      overflowX: 'hidden',
      borderRadius: 10,
      margin: '1rem',
      height: 'calc(100vh - 2rem)',
      boxShadow: `rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem`,
      position: "fixed",
      [theme.breakpoints.down('md')]: {
        display: activeMenu?'block': "none",
       },
    });
    
    const closedMixin = (theme) => ({
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',  
      width: { lg: `calc(${theme.spacing(11)} + 1px)`, md:'none' },
      [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(12)} + 1px)`,
      },
      borderRadius: 10,
      margin: '1rem',
      height: 'calc(100vh - 2rem)',
      boxShadow: `rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem`,
      position: "fixed",
      [theme.breakpoints.down('md')]: {
        display: activeMenu?'block': "none",
       },
    });
    
    const DrawerHeader = styled('div')(({ theme }) => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    }));
        
    const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
      ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        zIndex: 1000,
        ...(open && {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        }),
      }),
    );
    
    const ClosedButtonWrapper = styled(IconButton, {shouldForwardProp: (prop) => true})(
      ({ theme, open }) => ({
        ...(activeMenu && {
          display: 'block',
          [theme.breakpoints.up('md')]: {
           display:"none",
          },
        }),
        ...(!activeMenu && {
          display: 'none',     
        }),
      }));

      
    React.useEffect(() => {
        setOpen(activeMenu)
    })
    
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {        
        console.log('open',open)
        if(open){
            setOpen(false);
            console.log('call close')
        }
    };

    const isMiniMenu = !(!activeMenu);
    let darkBg = '';
    let lightBg = '';
    const logoName = "RemoCareer";
    
    if(sideBarBg !== 'dark'){
        darkBg = sideBarBg;   
        lightBg = sideBarBg;   
    }
    if(sideBarBg === 'dark'){
        lightBg = 'linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))';
    }

    return (      
    // <ClickAwayListener onClickAway={handleDrawerClose}>    
      <Drawer variant="permanent" 
        open={open} 
        transitionDuration={5000}
        sx={{
                //  display: { sm: 'block',  }
            }} 
        anchor="left">
            <DrawerHeader>
            {/* <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton> */}
              <Box><SiShopware /></Box>
              <Fade 
                          sx={{m:0,p:0,display: open?'flex':'none', justifyContent: 'center'}}
                          in={isMiniMenu}>  
                  <Box> 
                      <Typography variant="h6" sx={{
                          ml: 1, 
                      }}>{logoName}</Typography>   
                  </Box>                
              </Fade>
                            
              <ClosedButtonWrapper color="inherit" aria-label="setting" size="large"               
                onClick={()=>setActiveMenu((prevActiveMenu) => !prevActiveMenu)} >
                    <HighlightOffIcon sx={{ 
                        color: 'text.secondary'
                    }} />
              </ClosedButtonWrapper>
            
            </DrawerHeader>
            <ABDivider />
            <Menus menus={menus} customersData={customersData} />
        </Drawer>
      // </ClickAwayListener>
    )
}
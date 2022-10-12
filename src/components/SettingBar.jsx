import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import CheckIcon from '@mui/icons-material/Check';
import {themeColors} from '../data/dummy';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import { alpha, styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useStateContext } from '../contexts/ContextProvider';
import ABDivider from './ABDivider'

export default function SettingBar(){
    const {themeSettings, currentColor, currentMode,setThemeSettings,setColor,sideBarBg,activeMenu, setCurrentActiveMenu,
        setSideBarBg, setMode} = useStateContext();
    console.log('activeMenu',activeMenu)
    const sideBarBgHanlder = (bgType)=>{
        setSideBarBg(bgType);
    }    

    const GreenSwitch = styled(Switch)(({ theme }) => ({
        '& .MuiSwitch-switchBase': {
            '&.Mui-checked': {
              '& .MuiSwitch-thumb': {
                  backgroundColor: theme.palette.mode === 'dark' ? '#fff' : '#fff ' +' !important',
                  border: theme.palette.mode === 'dark' ?'':`1px solid #000 !important`,
                },
              '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#323A54' : '#000',
              },
              '&:hover': {
                backgroundColor: alpha(grey[900], theme.palette.action.hoverOpacity),
              },
            },
          },
        '& .MuiSwitch-thumb': {
            backgroundColor: theme.palette.mode === 'dark' ? '#fff' : theme.palette.primary,
            borderColor: '#42424A !important',
          },
          '& .MuiSwitch-track': {
            opacity: 1,
            backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
          },
      }));

    return (
            <Drawer
                sx={{              
                    display: 'inline-flex',
                    '& .MuiDrawer-paper': {                         
                        boxShadow: 1,   
                        padding: '0 0.625rem',                
                    },
                    color: 'text.primary',                
                }}
                variant="persistent"
                anchor="right"
                open={themeSettings}
            >
                <Box sx={{
                        display: 'flex',
                        width: '100%',
                        justifyContent:'left',
                        pl:2,
                        pr:2,
                        pt:2,
                    }}>
                    <Box sx={{
                                display: 'block',
                                width: '100%',
                                justifyContent:'left',
                                pt:2,
                            }}>
                            <Typography variant="h5">Material UI Configurator</Typography>
                            <Typography variant="body2">See our dashboard options.</Typography>                
                        </Box>
                        <Box sx={{
                                display: 'static',
                                pt:2
                            }}>
                            <IconButton color="inherit" aria-label="setting" size="large" onClick={()=>setThemeSettings(false)}>
                                <HighlightOffIcon sx={{ 
                                    color: 'text.secondary'
                                }} />
                            </IconButton>
                        </Box>
                </Box>
                <ABDivider />
                <Box sx={{
                        display: 'block',
                        width: '100%',
                        justifyContent:'left',
                        pl:2,
                        pr:2
                    }}>
                    <Box sx={{
                                display: 'block',
                                width: '100%',
                            }}>
                        <Typography variant="h6">Sidenav Colors</Typography>            
                    </Box>
                    <Box sx={{
                                display: 'flex',
                                width: '100%',
                            }}>    
                            {themeColors.map((item, index)=>(
                                <IconButton  key={index} onClick={()=>setColor(item.color)}
                                sx={{
                                    background: item.color,
                                    borderRadius: '50%',
                                    width: '24px',
                                    height: '24px',
                                    minWidth: '24px',
                                    minHeight: '24px',
                                    m:1,    
                                    boxShadow:3,                            
                                }}>
                                    {item.color===currentColor && <CheckIcon sx={{
                                        color: grey[400]
                                    }}/>}
                                </IconButton >
                            ))}       
                    </Box>  

                    <Box sx={{
                        display: 'block',
                        width: '100%',
                        justifyContent:'left',
                        mt:2
                    }}>
                        <Box sx={{
                                    display: 'block',
                                    width: '100%',                                
                                }}>
                            <Typography variant="h6"sx={{
                                    mt: 2,                               
                                }}>Sidenav Type</Typography>     
                            <Typography variant="body2" >Choose between different sidenav types.</Typography>       
                        </Box>
                        <Box sx={{
                                    display: 'flex',
                                    width: '100%',
                                    mt:2,
                                    gap:1                                
                                }}>    
                                <Button variant="outlined" color={sideBarBg==='dark'?"secondary":"primary"} sx={{
                                    boxShadow:3,
                                    }}
                                    onClick={()=>sideBarBgHanlder('dark')}
                                    >DARK</Button>   
                                <Button variant="outlined" color={sideBarBg==='transparent'?"secondary":"primary"} sx={{              
                                    boxShadow:3,
                                    }}
                                    onClick={()=>sideBarBgHanlder('transparent')}
                                    >TRANSPARENT</Button>   
                                <Button variant="outlined" color={sideBarBg==='white'?"secondary":"primary"} sx={{
                                    boxShadow:3,
                                    }}
                                    onClick={()=>sideBarBgHanlder('white')}
                                    >WHITE</Button>   
                        </Box>   
                    </Box>        

                    <Box sx={{
                        display: 'flex',
                        width: '100%',
                        mt:4,
                        alignItems:'center',
                        justifyContent: 'space-between',
                    }}>
                            <Typography variant="h6"sx={{
                                                               
                                }}>Navbar Fixed</Typography>    
                            <GreenSwitch defaultChecked sx={{
                                    display: 'inline-flex',
                                    position: 'relative',
                                    left:0,                                
                                }} />  
                    </Box>  

                    <ABDivider />
                    <Box sx={{
                        display: 'flex',
                        width: '100%',
                        mt:2,
                        alignItems:'center',
                        justifyContent: 'space-between',
                    }}>
                            <Typography variant="h6"sx={{
                                                               
                                }}>Sidenav Mini</Typography>    
                            <GreenSwitch  sx={{
                                    display: 'inline-flex',
                                    position: 'relative',
                                    left:0,                                
                                }} 
                                checked={!activeMenu}
                                onChange={(e)=>setCurrentActiveMenu(!e.target.checked)}
                                />  
                    </Box>  
                    <ABDivider />
                    <Box sx={{
                        display: 'flex',
                        width: '100%',
                        mt:2,
                        alignItems:'center',
                        justifyContent: 'space-between',
                    }}>
                            <Typography variant="h6"sx={{
                                                               
                                }}>Light / Dark</Typography>    
                            <GreenSwitch sx={{
                                    display: 'inline-flex',
                                    position: 'relative',
                                    left:0,                                                                    
                                }} 
                                inputProps={{ 'aria-label': 'controlled' }}
                                checked={currentMode==='dark'? true : false}
                                onChange={(e)=>setMode(e.target.checked?'dark':'light')}
                                />  
                    </Box>  
                </Box>
            </Drawer>     
    )
}
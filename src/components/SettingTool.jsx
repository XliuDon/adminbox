import React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import IconButton from '@mui/material/IconButton';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

import { useStateContext } from '../contexts/ContextProvider';

export default function SettingTool(){
    const {currentColor,currentMode,setThemeSettings} = useStateContext();
    const bgColor =  currentMode == 'Dark'?'white': currentColor
    const color = bgColor !== 'white' && bgColor !== '#fff'?'white': 'rgb(52, 71, 103)'
    return (
        // <Box component="div" sx={{ 
        //         background: bgColor, 
        //         borderRadius: '50%',
        //         width: '3.25rem',
        //         height: '3.25rem',
        //         position: 'fixed',
        //         right: '2rem',
        //         bottom: '2rem',
        //         zIndex: 1500,
        //         opacity: 1,
        //         color: color,
        //         boxShadow: 3,
        //         cursor: 'pointer',
        //          }}
        //          onClick={()=>setThemeSettings((prevStatus) => !prevStatus)}
        //         >                     
        //     <IconButton color="inherit" aria-label="setting" size="large">
        //         <SettingsRoundedIcon fontSize="inherit"/>
        //     </IconButton>
        // </Box>
        <Box sx={{ '& > :not(style)': { m: 1 }, position: 'fixed', zIndex: 1500, right: '2rem', bottom: '2rem'}}
            onClick={()=>setThemeSettings((prevStatus) => !prevStatus)}>
            <Fab color="secondary" aria-label="add" sx={{background: bgColor}} size="large">
                <SettingsRoundedIcon size="large" />
            </Fab>
        </Box>
    )
}
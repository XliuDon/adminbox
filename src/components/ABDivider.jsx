import * as React from 'react';
import Divider from '@mui/material/Divider';
import { useStateContext } from '../contexts/ContextProvider';

export default function ABDivider({orientation='horizontal', variant='fullWidth', textAlign='center'}){    
    const {currentMode} = useStateContext();
    
    return (       
        currentMode==='dark'?
            <Divider 
                sx={{
                    borderTop: '0px solid rgba(0, 0, 0, 0.12)',
                    borderRight: '0px solid rgba(0, 0, 0, 0.12)',
                    borderLeft: '0px solid rgba(0, 0, 0, 0.12)',
                    height: '0.0625rem',
                    margin: '1rem 0px',
                    borderBottom: 'none',
                    opacity: '0.25',
                    backgroundColor: 'transparent',
                    backgroundImage: 'linear-gradient(to right, rgba(52, 71, 103, 0), rgb(255, 255, 255), rgba(52, 71, 103, 0)) !important',
                }}
                orientation={orientation}
                variant={variant}
                textAlign={textAlign}
            />
            :
            <Divider 
                sx={{
                    borderTop: '0px solid rgba(0, 0, 0, 0.08)',
                    borderRight: '0px solid rgba(0, 0, 0, 0.08)',
                    borderLeft: '0px solid rgba(0, 0, 0, 0.08)',
                    height: '0.0625rem',
                    margin: '1rem 0px',
                    borderBottom: 'none',
                    opacity: '0.25',
                    backgroundColor: 'transparent',
                    backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0), rgba(52, 71, 103, 0.4), rgba(255, 255, 255, 0)) !important',
                }}
                orientation={orientation}
                variant={variant}
                textAlign={textAlign}
            />
    )
}
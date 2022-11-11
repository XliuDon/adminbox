import * as React from 'react';
import Divider from '@mui/material/Divider';
import { useStateContext } from '../contexts/ContextProvider';

export default function ABDivider({orientation='horizontal', variant='fullWidth', textAlign='center',...props}){    
    const {currentMode} = useStateContext();
    return (       
        currentMode==='dark'?
            <Divider 
                sx={{
                    ...props.sx,
                    borderTop: '0px solid rgba(0, 0, 0, 0.12)',
                    borderRight: '0px solid rgba(0, 0, 0, 0.12)',
                    borderLeft: '0px solid rgba(0, 0, 0, 0.12)',
                    height: orientation ==='vertical'?"100%":'0.0625rem',
                    margin: '1rem 0px',
                    borderBottom: 'none',
                    opacity: '0.25',
                    backgroundColor: 'transparent',
                    width: orientation ==='vertical'?"1px":'100%',
                    backgroundImage: `linear-gradient(to ${orientation ==='vertical'?'bottom':'right'}, rgba(52, 71, 103, 0), rgb(255, 255, 255), rgba(52, 71, 103, 0)) !important`,
                }}
                orientation={orientation}
                variant={variant}
                textAlign={textAlign}
                flexItem
            />
            :
            <Divider 
                sx={{
                    ...props.sx,
                    borderTop: '0px solid rgba(0, 0, 0, 0.08)',
                    borderRight: '0px solid rgba(0, 0, 0, 0.08)',
                    borderLeft: '0px solid rgba(0, 0, 0, 0.08)',
                    height:  orientation ==='vertical'?"100%":'0.0625rem',
                    margin: '1rem 0px',
                    borderBottom: 'none',
                    opacity: '0.25',
                    backgroundColor: 'transparent',
                    width: orientation ==='vertical'?"1px":'100%',
                    backgroundImage: `linear-gradient(to ${orientation ==='vertical'?'bottom':'right'}, rgba(255, 255, 255, 0), rgba(52, 71, 103, 0.4), rgba(255, 255, 255, 0)) !important`,
                }}
                orientation={orientation}
                variant={variant}
                textAlign={textAlign}
                flexItem
            />
    )
}
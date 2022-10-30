import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import Switch from '@mui/material/Switch';

const BlockSwitch = styled(Switch)(({ theme }) => ({
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

export default function ABBlockSwitch(props){
  const {checked, defaultChecked} = props;    
  const childProps = { ...props };
  delete childProps.defaultChecked;
  const [state, setState] = React.useState(checked??(defaultChecked??false));

  const handleChange = (event) => {    
    setState(event.target.checked);        
  };

    return (
        <BlockSwitch sx={{
            display: 'inline-flex',
            position: 'relative',
            left:0,                                                                    
        }} 
        {...childProps}
        checked={state}
        onChange={handleChange}
        />  
    )
}
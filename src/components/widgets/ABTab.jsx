import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {AbIcon} from '../icons/DynamicIcon';

  const StyledTabs = styled((props) => (
    <Tabs
      {...props}
      TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
  ))(({ theme }) => (
    {
        '&.MuiTabs-root': {
            //backgroundColor: theme.palette.primary.main,
            padding: theme.spacing(0.5, 0.5),
            borderRadius: '0.5rem',
            minHeight:'unset',
            display: 'flex',
        },
        '& .MuiTabs-scroller': {
            overflow: 'unset !important',
        },

        '& .MuiTabs-indicator': {
            display: 'flex',
            justifyContent: 'center',
            zIndex: 99,
            width: '100%',
            height: '100%',
            padding: theme.spacing(0, 0),
            borderRadius: '0.5rem',
            backgroundColor:theme.palette.background.paper,
            boxShadow: theme.palette.tab.boxShadow, //theme.shadows[2],
            transition: 'all 500ms ease 0s',
        },
        '& .MuiTabs-indicatorSpan': {
            maxWidth: 40,
            width: '100%',
            height: '100%',
            backgroundColor: '#transparent',
        },
    }
  ));
  
  const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
      textTransform: 'none',
      minHeight:'unset',
      maxWidth: 'unset',      
      color: `${theme.palette.secondary.main} !important`,
      padding: "0.25rem 1rem",
      margin: theme.spacing(0,0.25),
      //paddingBottom: "2px",
    //   fontWeight: theme.typography.fontWeightRegular,
    //   fontSize: theme.typography.pxToRem(15),rgb(52, 71, 103) 
    //   marginRight: theme.spacing(1),
    //   color: 'rgba(255, 255, 255, 0.7)',
      '&.Mui-selected': {
        backgroundColor: '#transparent',
        zIndex: 100,
        // borderRadius: '0.75rem',
        // boxShadow: 3,
        // margin: 3,
      },
      '&.Mui-focusVisible': {
        // backgroundColor: 'rgba(100, 95, 228, 0.32)',
      },
    }),
  );

export default function ABIconTabs(props) {
  const [value, setValue] = React.useState(0);
  const {tabs } = props;
  let data ={...props};
  delete data.tabs;
  const theme = useTheme();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const sm = useMediaQuery(theme.breakpoints.down('sm'));
  let orientation = 'horizontal';
  if(sm){
    orientation = 'vertical';
  }else{
    orientation = 'horizontal';
  }

  return (
    <StyledTabs 
      {...data}
      orientation={orientation}
      value={value}
      onChange={handleChange}
      aria-label="icon position tabs example"
      sx={{mt:2, width: {xs: '100%',sm:'100%', md:'unset'}}}
    >
        {tabs.map((item, index) => (
            <StyledTab sx={{ }} icon={<AbIcon iconName={item.icon} />} iconPosition={item.position??"start"} label={item.label} key={index}/>      
        ))}
    </StyledTabs>
  );
}

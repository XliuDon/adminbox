import React from "react";
import Icon from '@mui/material/Icon';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import IconButton  from '@mui/material/IconButton';
import MUITooltip,{ tooltipClasses } from '@mui/material/Tooltip';

import {
    Chart as ChartJS,
    ArcElement, 
    Tooltip, 
    Legend
  } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Button } from "@mui/material";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
  );

  const BootstrapTooltip = styled(({ className, ...props }) => (
    <MUITooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
    },
  }));
  
 export default function  ABPieChart ({...props }) {
    const {title, information, description, data, options} = props;

    return (
        <Box>
            <Box sx={{display:'flex', justifyContent:'space-between'}}> 
                <Typography variant="h6">{title}</Typography>
                <BootstrapTooltip title={information} >
                    <IconButton  variant="outlined" color="primary" size="small"
                    sx={{border:'1px solid rgb(123, 128, 154)', color:'rgb(123, 128, 154)', minwidth:'24px',minheight:'24px',width:'24px',height:'24px'}}>
                        <Icon sx={{fontSize:'12px'}}>priority_high</Icon>
                    </IconButton >
                </BootstrapTooltip>                
            </Box>
            <Box>
                <Pie data={data} options={options}/>
            </Box>
            <Box sx={{display:'flex'}} gap={2}>
                <Box sx={{width:'60%'}}>
                    <Typography variant="body2">{description}</Typography>
                </Box>
                <Box sx={{width:'40%',mt:'auto', display:'flex',justifyContent:'flex-end'}}>
                    <Button variant="contained">read more</Button>
                </Box>
            </Box>
        </Box>
);
 }


import React from "react";
import Icon from '@mui/material/Icon';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import IconButton  from '@mui/material/IconButton';
import MUITooltip,{ tooltipClasses } from '@mui/material/Tooltip';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import { Button } from "@mui/material";

const plugin = {

  id: "increase-legend-spacing", 
  beforeInit(chart) {
    // Get reference to the original fit function
    const originalFit = chart.legend.fit;

    // Override the fit function
    chart.legend.fit = function fit() {
      // Call original function and bind scope in order to use `this` correctly inside it
      originalFit.bind(chart.legend)();
      // Change the height as suggested in another answers
      this.height += 20;
    }
  }
}; 

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  plugin
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
  
 export default function  ABLineChart ({...props }) {
    const {title, information, data, options} = props;

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
                <Line data={data} options={options}/>
            </Box>
        </Box>
);
 }


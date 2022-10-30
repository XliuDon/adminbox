import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
  );

  
 export default function  ABBarChart ({...props }) {
    const {title,  data, options} = props;

    return (
        <Box>
            <Box sx={{display:'flex', justifyContent:'space-between'}}> 
                <Typography variant="h6">{title}</Typography>
            </Box>
            <Box>
                <Bar data={data} options={options}/>
            </Box>
        </Box>
);
 }


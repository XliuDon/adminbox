import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import {ABIcon} from '../icons/ABIcon';
import ABLinearProgressWithLabel from './ABLinearProgressWithLabel'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  );
  

export default function ABTaskChart({task}) {
  return (    
    <Paper elevation={3} 
        sx={{
            borderRadius:3,
            height: '100%'
        }} >
        <Box sx={{padding:"16px 16px 0 16px", display:'flex', alignItems:'center'}}>
            <Box sx={{  display:'flex' }}>
                <Box sx={{
                    display: 'flex',
                    background: "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))",
                    color: '#fff',
                    borderRadius: 3,
                    width: '48px',
                    height: '48px',
                    justifyContent:'center',
                    alignItems: 'center',
                    mr: 2,
                    boxShadow:2
                }}>
                    <ABIcon iconName={task.icon}/>
                </Box>                        
            </Box>
            <Box sx={{display:'block'}}>
                <Box >
                    <Typography variant='button'>{task.title}</Typography>
                </Box>
                <Box >
                    <Typography variant='h5'>{task.description}</Typography>
                </Box>
            </Box>
            <Box sx={{display:'block', ml:"auto", width:'25%', justifyContent:'center', alignItems:'center'}}>
                <ABLinearProgressWithLabel value={60}/>
            </Box>
        </Box>
        <Box sx={{ p:2,height:'230px'}}>
            <Line options={task.options} data={task.data} id={task.title}/>
        </Box>
    </Paper>
  );
}

import React from "react";
import Icon from '@mui/material/Icon';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
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
import { Chart } from 'react-chartjs-2';
import Paper from '@mui/material/Paper';
import ABDivider from '../ABDivider';

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
  
 export default function  ABViewCard ({...props }) {
    const {type, title, label, bgcolor, boxShadow, message, options, data} = props;

    return (
        <Box>
            <Paper elevatio={3} sx={{borderRadius:2}}> 
                <Box
                    sx={{
                        p:2
                    }}
                >
                    <Box sx={{
                        background: bgcolor,//'linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))',
                        boxShadow: boxShadow??2,//'rgb(0 0 0 / 14%) 0rem 0.25rem 1.25rem 0rem, rgb(0 187 212 / 40%) 0rem 0.4375rem 0.625rem -0.3125rem',
                        borderRadius: 2,
                        mt:-5,
                        pt:2,
                        pb:2,
                        pr:0.5,
                        height:'198px',
                    }}>
                        <Chart type={type} options={options} data={data} id={title}/>
                    </Box>
                    <Box sx={{mt:2, p:2 , display:'block'}}>
                        <Typography variant="h6">{title}</Typography>
                        <Typography variant="body1">{label}</Typography>
                        <ABDivider />
                        <Box sx={{display: 'flex', alignContent:'center'}} gap={1} >
                            <Icon fontSize="small">schedule</Icon>
                            <Typography variant="body1">{message}</Typography>
                        </Box>
                    </Box>
                </Box>
            </Paper>
        </Box>
);
 }


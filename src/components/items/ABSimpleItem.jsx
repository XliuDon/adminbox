import React from "react";
import Icon from '@mui/material/Icon';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

 export default function  ABSimpleItem ({...props }) {
    const { title, lable, value, message} = props;
    
    return (
        <Paper
            {...props}
            sx={{
                display:'block',
                borderRadius:3
            }}
        >
            <Box
                sx={{
                    p:2
                }}
            >
                <Box
                    sx={{display:'flex', justifyContent:'space-between'}}
                >
                    <Typography variant='button' >{title}</Typography>
                    <Typography variant='body2' >{lable} </Typography>
                </Box>

                <Box
                    sx={{display:'flex', pt:0.5}}
                >
                    <Typography variant='h5' color='sencondary' >{value}</Typography>
                </Box>
                <Box
                    sx={{display:'flex', pt:0.5}}
                >
                    <Typography variant='body1'>{message}</Typography>
                </Box>
            </Box>
        </Paper>
    );
 }


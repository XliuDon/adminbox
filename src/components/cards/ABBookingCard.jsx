import React from "react";
import Icon from '@mui/material/Icon';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import ABDivider from '../ABDivider';



 export default function  ABBookingCard ({...props }) {
    const {image, title, description, price, location, action} = props;

    return (
        <Box>
            <Paper elevatio={3} sx={{
                borderRadius:2,
                transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                "& :hover .card-header":{                      
                    transform: 'translate3d(0px, -50px, 0px)',
                }
            }}> 
                <Box
                    sx={{
                        p:2
                    }}
                >
                    <Box className={'card-header'} sx={{
                        borderRadius: 2,
                        mt:-5,
                        pb:2,
                        pr:0.5,
                        position: 'relative',
                        zIndex: 1,  
                        transition: "transform 300ms cubic-bezier(0.34, 1.61, 0.7, 1) 0s",                        
                    }} >
                        <Box component={'img'} src={image}
                            sx={{
                                borderRadius:2,
                                boxShadow: 'rgb(0 0 0 / 10%) 0rem 0.25rem 0.375rem -0.0625rem, rgb(0 0 0 / 6%) 0rem 0.125rem 0.25rem -0.0625rem',
                                width: '100%',
                                height: '100%',
                                position: "relative",
                                zIndex: 1,
                            }}
                        ></Box>
                        <Box sx={{
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            boxShadow: 2,
                            transform: 'scale(0.94)',
                            borderRadius: 2,
                            filter: 'blur(12px)',
                            background: `url(${image}) 0% 0% / cover transparent`,

                        }}/>
                    </Box>
                    
                    <Box sx={{p:2 , display:'block', textAlign:'center'}}>                        
                        <Box sx={{width:'100%',justifyContent:'center', display:'flex', mt: -8}} gap={5}>
                            {action}
                        </Box>
                        <Typography variant="h5" sx={{mt:4}}>{title}</Typography>
                        <Typography variant="body2" sx={{mt:2}}>{description}</Typography>
                    </Box>
                    <ABDivider />
                    <Box sx={{p:2 , display:'flex', justifyContent:'space-between', alignItems:'center'}} gap={1}>
                        <Typography variant="caption" >$899/night</Typography> 
                        <Box sx={{display:'flex'}}>
                            <Icon>place</Icon>
                            <Typography variant="button">Barcelona, Spain</Typography> 
                        </Box>
                    </Box>
                </Box>
            </Paper>
        </Box>
);
 }


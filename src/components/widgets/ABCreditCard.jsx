import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import {ABIcon} from '../icons/ABIcon';
import { display } from '@mui/system';

export default function ABCreditCard({card}) {
  return (    
    <Paper elevation={3} 
            sx={{
                color: "rgba(0, 0, 0, 0.87)",
                borderRadius:3,
                flexDirection: "column",
                boxShadow:2,
                background: "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))",
                position: "relative",
            }} >
        <Box sx={{
            p:0,
        }}>
            <Box sx={{
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "100%",
                height: "100%",
                opacity: "0.2",
                color: "rgb(52, 71, 103)",
                boxShadow: "none",
                background: "url(/static/images/creditcard-bg.svg) 0% 0% / cover transparent",
            }}>                
            </Box>
            <Box sx={{
                position: "relative",
                zIndex: 2,
                padding: "16px",
                background: "transparent",
                color: "rgb(52, 71, 103)",
                boxShadow: "none",
            }}>
               <Box sx={{color: "#fff", padding:1}}>
                <ABIcon iconName={"wifi"}/>
               </Box>
               <Typography variant='h5' sx={{
                mt: 3,
                mb: 5,
                color: "#fff",
                pb: 1
               }}>{card.number}</Typography>
               <Box sx={{
                        display:'flex',
                        color: "#fff",
                        justifyContent:'space-between',
                    }}>
                    <Box sx={{
                        display: 'flex',                        
                        alignItems:'center',
                    }}>
                        <Box sx={{
                            mr:3,
                            }}>
                                <Typography variant='button' sx={{                                
                                    lineHeight:1.5,
                                    fontSize:'0.875rem',
                                    fontWeight: 400,
                                }}>Card Holder</Typography>
                                <Typography variant='h6' sx={{                                
                                    lineHeight:1.6,
                                }}>{card.holder}</Typography>
                        </Box>
                        <Box sx={{alignItems:'center',}}>
                                <Typography variant='button' sx={{                                
                                    lineHeight:1.5,
                                    fontSize:'0.875rem',
                                    fontWeight: 400,
                                }}>Expires</Typography>
                                <Typography variant='h6' sx={{                                
                                    lineHeight:1.6,
                                }}>{card.expires}</Typography>
                        </Box>
                    </Box>
                    <Box sx={{
                        justifyContent:'flex-end',
                        display:'flex',
                        alignItems:'center',
                        width: '20%'
                    }}>
                        <Box component={'img'} src="/static/images/mastercard.png" sx={{
                            width: '60%'
                        }}></Box>
                    </Box>
               </Box>
            </Box>
            
        </Box>
    </Paper>
  );
}

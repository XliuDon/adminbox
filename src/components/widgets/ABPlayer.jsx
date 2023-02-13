import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import {ABIcon} from '../icons/ABIcon';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

export default function ABPlayer({music}) {
  return (    
    <Paper elevation={3} 
            sx={{
                borderRadius:3,
                backgroundImage:'linear-gradient(195deg, rgba(66, 66, 74, 0.85), rgba(25, 25, 25, 0.85)), url(/static/images/bg-player.jpeg);',
                backgroundSize:'cover',
                overflow:'visible',
                backgroundPosition:'center center'
            }} >
        <Box sx={{p:3,
            boxShadow: 0,
            display:'block'
        }}>
            <Typography variant='h5' color="white">{music.name}</Typography>
            <Typography color="white">{music.subtitle}</Typography>
            <Box sx={{
                display:'flex',
                mt:3,
                pd:1,                
            }}>
                <Box sx={{
                    display:'flex',
                    alignItems:'center'             ,
                    justifyContent:'center'
                }}>
                     <Stack direction="row" spacing={1}>
                        <IconButton aria-label="pre" variant="outlined" sx={{
                            width:'16px',
                            height: '16px',
                            minWidth:'16px',
                            minHeight:'16px',
                            p:3,
                            borderRadius: 7,
                            color: '#fff',
                            border: '1px solid rgba(255, 255, 255, 0.75)',
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            "&:hover":{
                                opacity: 0.75
                            }
                        }}>
                            <ABIcon iconName={'skip_previous'} />
                        </IconButton>
                        <IconButton aria-label="play" variant="outlined" sx={{
                            width:'16px',
                            height: '16px',
                            minWidth:'16px',
                            minHeight:'16px',
                            p:3,
                            borderRadius: 7,
                            color: '#fff',
                            border: '1px solid rgba(255, 255, 255, 0.75)',
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            "&:hover":{
                                opacity: 0.75
                            }
                        }}>
                            <ABIcon iconName={'play_arrow'} />
                        </IconButton>
                        <IconButton aria-label="next" variant="outlined" sx={{
                            width:'16px',
                            height: '16px',
                            minWidth:'16px',
                            minHeight:'16px',
                            p:3,
                            borderRadius: 7,
                            color: '#fff',
                            border: '1px solid rgba(255, 255, 255, 0.75)',
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            "&:hover":{
                                opacity: 0.75
                            }
                        }}>
                            <ABIcon iconName={'skip_next'} />
                        </IconButton>
                     </Stack>
                </Box>
            </Box>
        </Box>        
    </Paper>
  );
}

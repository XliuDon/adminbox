import React from "react";
import Icon from '@mui/material/Icon';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import { ABIcon } from "../icons/ABIcon";

  
 export default function  ABPriceCard ({...props }) {
    const {label, price, unit, currency, primary, action, data} = props;
    const isPrimary = Boolean(primary);

    return (
        <Box>
            <Paper sx={{borderRadius:3, 
                boxShadow: isPrimary? 2:0,
                background: isPrimary?'linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))':'unset',
                color: isPrimary? '#fff':'inherit'
            }}> 
                <Box
                    sx={{
                        p:2,
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'center'                        
                    }}
                >
                    <Box sx={{display:'inherit',justifyContent:'inherit',mt:-2}}>
                        <Chip sx={{position: 'relative',
                            padding: '0 32px',
                            color:isPrimary?'#fff':'inherit',
                            background: isPrimary?'rgb(26, 115, 232)':'rgb(240, 242, 245)',
                        mt:-2}} label={<Typography variant="caption">{label}</Typography>} />
                    </Box>
                    <Box sx={{display:'inherit',justifyContent:'inherit', pt:4}}>
                        <Typography variant="h1" >
                            <Typography variant="h5" component='small' sx={{verticalAlign:'top'}}>{currency}</Typography>
                            {price}
                            <Typography variant="h5" component='small'>/{unit}</Typography>
                        </Typography>
                    </Box>
                    <Box sx={{flexDirection:'inherit', alignItems:'center', pt:2, pl:3}}>
                        {data.map((item,index)=>(
                            <Box key={index} sx={{display:'flex', pt:2, justifyContent:'left'}}>
                                <Typography variant="body1" sx={{display:'flex', alignItems:'center',mr:2}}>
                                    <ABIcon iconName={item.status} />
                                </Typography>
                                <Typography variant="body2" >{item.label}</Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>

                <Box sx={{flexDirection:'inherit', alignItems:'center', p:2}}>
                    <Button variant="contained" endIcon={<ABIcon iconName='arrow_forward'/>}                     
                    onClick={action}
                    sx={{                        
                        minHeight: '40px',
                        height: '40px',
                        borderRadius: 3,
                        background: isPrimary?'rgb(26, 115, 232)':'linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))',
                        width:'100%'}}>
                        <Typography variant="caption">{isPrimary?"try premium":"Join"}</Typography>
                    </Button>
                </Box>
                
            </Paper>
        </Box>
);
 }


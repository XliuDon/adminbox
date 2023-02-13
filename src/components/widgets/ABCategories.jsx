import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import {ABIcon} from '../icons/ABIcon';
import Icon from '@mui/material/Icon';
import { width } from '@mui/system';

export default function ABCategories({categories}) {
  return (    
    <Paper elevation={3} 
            sx={{
                borderRadius:3,
            }} >
        <Box sx={{padding:"16px 16px 0 16px"}}>
            <Typography variant='h6' color="primary">{categories.title}</Typography>
        </Box>
        <Box>
            <List sx={{ width: '100%' }}>
            {categories.cates.map((item,index)=>(
                <ListItem key={index}>
                    <Box sx={{
                        display:'flex',
                        alignItems:'center',
                        justifyContent: 'space-between',
                        width:'100%'
                    }}>
                        <Box sx={{display: 'flex', alignItems:'center'}}>
                            <Box sx={{
                                display: 'flex',
                                background: "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))",
                                color: '#fff',
                                borderRadius: 3,
                                width: '36px',
                                height: '36px',
                                justifyContent:'center',
                                alignItems: 'center',
                                mr: 2
                            }}>
                                <ABIcon iconName={item.icon}/>
                            </Box>
                            <Box sx={{
                                display:'block'
                            }}>
                                <Typography variant='h6' color="primary" sx={{fontWeight:600, fontSize: '14px'}}>{item.title}</Typography>
                                <Typography >{item.description}</Typography>
                            </Box>                            
                        </Box>                        
                        <Box sx={{
                            textAlign:'right',
                            display:'flex',
                            justifyContent:'flex-end'
                        }}>
                            <Link href={item.link} underline="none" color="primary" sx={{display:'flex', alignItems: 'center',
                                    "& .material-icons":{
                                        transform: 'translateX(0px)',
                                    },
                                    "&:hover":{
                                        "& .material-icons":{                                                            
                                            transform: 'translateX(4px)',
                                            transition: "all 200ms cubic-bezier(0.34, 1.61, 0.7, 1.3)",                                                            
                                        }
                                    }
                                }}>                                                        
                                <Icon sx={{w:1, h:1}}>{'chevron_right'}</Icon>
                            </Link>
                        </Box>
                    </Box>
                </ListItem>
            ))}
            </List>            
        </Box>
    </Paper>
  );
}

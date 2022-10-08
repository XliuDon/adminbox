import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Collapse from '@mui/material/Collapse';
import ABDivider from './ABDivider';
import {AccountBoxIcon,ExpandLess, ExpandMore } from './icons/index'

export default function Menus(props){
    const {menus,customersData} = props;
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => () => {        
        console.log(panel)
      setExpanded(expanded===panel?'': panel);
    };

    const menuBuilder = (menuList,parentKey)=>{
        const id = `_${parentKey}`
        return (
            <List component="div" disablePadding>
                {menuList.map((item, pindex) => (
                    <Box  key={item.title}  sx={{ 
                        m:0,
                        pt:'8px',
                        pb:'8px',
                        pl:'16px',
                        pr:'16px',
                    }}>           
                        {typeof item.title !== 'undefined' && <ABDivider />}
                        {typeof item.title !== 'undefined' && <Typography variant='caption' sx={{m:1}}>{item.title}</Typography>}

                        {typeof item.name !== 'undefined' 
                        && <ListItemButton
                            sx={{ m:0, p:0}} 
                            >
                                <ListItemIcon sx={{ with:'20%', minWidth:0, mr:2, p:0 }} >                                
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.name}/>
                        </ListItemButton> 
                        }

                        {item.links && item.links.map((link, index)=>(
                            <Box key={index}>
                                <ListItemButton  onClick={handleChange(`${id}_${pindex}_${index}`)}
                                    sx={{background: expanded === `${id}_${pindex}_${index}`?'#background.default':''}} 
                                    >
                                        <ListItemIcon sx={{ with:'20%', minWidth:0, mr:2, p:0 }} >                                
                                            {link.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={link.name}/>
                                        {console.log('link',link.links)}
                                        {typeof link.links !== 'undefined' && (expanded === `${id}_${pindex}_${index}` ? <ExpandLess /> : <ExpandMore />)}
                                </ListItemButton>    
                                
                                {typeof link.links !== 'undefined' && (<Collapse in={expanded === `${id}_${pindex}_${index}`} timeout="auto" unmountOnExit>
                                    {menuBuilder(link.links,`${id}_${pindex}_${index}`)} 
                                </Collapse>)}
                            </Box>
                        ))}
                    </Box>))            
                }
            </List>
        );
    }

    return(
        <List sx={{ width: '100%', maxWidth: 250, bgcolor: 'background.paper' }} disablePadding
                component="nav">
            <ListItemButton  onClick={handleChange(`panel_a`)} sx={{ 
                    mr:'16px',}}>
                <ListItemAvatar sx={{  flexShrink: 0, }}>                                
                    <Avatar src={customersData[0].CustomerImage} />
                </ListItemAvatar>
                <ListItemText primary="Amy Christina" />
                {expanded === `panel_a` ? <ExpandLess /> : <ExpandMore />}                 
            </ListItemButton> 
            <Collapse in={expanded === `panel_a`} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton>
                        <ListItemIcon sx={{ with:'20%', minWidth:0, ml:2, mr:1, p:0 }}>
                            <AccountBoxIcon />
                        </ListItemIcon>
                        <ListItemText primary="My Profile" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon sx={{ with:'20%', minWidth:0, ml:2, mr:1, p:0 }}>
                            <AccountBoxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Account" />
                    </ListItemButton>
                </List>
            </Collapse>
            {menuBuilder(menus,'panel')}
        </List>
    )
}
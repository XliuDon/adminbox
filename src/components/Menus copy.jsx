import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Collapse from '@mui/material/Collapse';
import ABDivider from './ABDivider';

import { useStateContext } from '../contexts/ContextProvider';
import {AccountBoxIcon,ExpandLess, ExpandMore } from './icons/index'

export default function Menus(props){
    const {menus,customersData} = props;
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => () => { 
      setExpanded(expanded===panel?'': panel);
    };
    const { activeMenu } = useStateContext();  

    const menuBuilder = (menuList,parentKey)=>{
       // console.log('menus',menuList)
        const id = `${parentKey}`
        return (
            <List sx={{ width: '100%'}} disablePadding
                    component="nav">
                {menuList.map((item, index) => (
                    <Box key={ `${id}_${index}`}  sx={{ 
                        m:0, p:0
                    }}>         
                        {typeof item.title !== 'undefined' && <ABDivider />}
                        {typeof item.title !== 'undefined' && <Typography variant='caption' sx={{m:2}}>{item.title}</Typography>}                        
                        {typeof item.name !== 'undefined' 
                        && <ListItem disablePadding sx={{ display: 'flex',width: '100%' }}>    
                                <ListItemButton
                                    sx={{ mr:'1rem',ml:'1rem', p:0, borderRadius:2}} 
                                    onClick={handleChange(`${id}_${index}`)} 
                                >
                                    <ListItemIcon sx={{ with:'20%', minWidth:0,mr:'1rem', p:0 }} >                                
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.name}/>
                                    {typeof item.links !== 'undefined' && (expanded === `${id}_${index}` ? <ExpandLess /> : <ExpandMore />)}
                                </ListItemButton> 
                            </ListItem>
                        }
                        {(typeof item.links !== 'undefined') &&  (typeof item.title !== 'undefined'?
                            menuBuilder(item.links,`${id}_${index}`)
                            :(
                                <Collapse in={expanded === `${id}_${index}`} timeout="auto" unmountOnExit>
                                    {menuBuilder(item.links,`${id}_${index}`)}
                                </Collapse>)                            
                            )
                        }
                    </Box>))            
                }
            </List>
        );
    }

    const builderMenuItem = (menuList,parentKey)=>{
        // console.log('menus',menuList)
         const id = `${parentKey}`
         return (
             <List sx={{ width: '100%'}} disablePadding
                     component="ul">
                 {menuList.map((item, index) => (
                     <Box key={ `${id}_${index}`}  sx={{ 
                         m:0, p:0
                     }}>  
                        <ListItem disablePadding sx={{ display: 'flex',width: '100%' }}>    
                            <ListItemButton
                                sx={{ mr:'1rem',ml:'1rem', p:0, borderRadius:2}} 
                                onClick={handleChange(`${id}_${index}`)} 
                            >
                                <ListItemIcon sx={{ with:'20%', minWidth:0,mr:'1rem', p:0 }} >                                
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.name}/>
                                {typeof item.links !== 'undefined' && (expanded === `${id}_${index}` ? <ExpandLess /> : <ExpandMore />)}
                            </ListItemButton> 
                        </ListItem>
                         
                         {(typeof item.links !== 'undefined') &&  (typeof item.title !== 'undefined'?
                             menuBuilder(item.links,`${id}_${index}`)
                             :(
                                 <Collapse in={expanded === `${id}_${index}`} timeout="auto" unmountOnExit>
                                     {menuBuilder(item.links,`${id}_${index}`)}
                                 </Collapse>)                            
                             )
                         }
                     </Box>))            
                 }
             </List>
         );
     }

    return(
        <Box>
            <List sx={{ width: '100%', maxWidth: 250, bgcolor: 'background.paper' }} disablePadding
                    component="nav">
                <ListItem disablePadding sx={{ display: 'flex',width: '100%' }}>        
                    <ListItemButton  onClick={handleChange(`panel_a`)} sx={{ borderRadius:2,
                            mr:'1rem',ml:'1rem',}}>
                        <ListItemAvatar sx={{  flexShrink: 0, }}>                                
                            <Avatar src={customersData[0].CustomerImage} />
                        </ListItemAvatar>
                        <ListItemText primary="Amy Christina" />
                        {expanded === `panel_a` ? <ExpandLess /> : <ExpandMore />}                 
                    </ListItemButton> 
                </ListItem>    
                <Collapse in={expanded === `panel_a`} timeout="auto" unmountOnExit>                
                    <List component="div" disablePadding>
                        <ListItem>        
                            <ListItemButton sx={{ mr:'1rem',ml:'1rem', p:0 }}>
                                <ListItemIcon sx={{ with:'20%', minWidth:0, ml:1, mr:1, p:0 }}>
                                    <AccountBoxIcon />
                                </ListItemIcon>
                                <ListItemText primary="My Profile" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem sx={{ mr:'1rem',ml:'1rem', p:0 }}> 
                            <ListItemButton>
                                <ListItemIcon sx={{ with:'20%', minWidth:0, ml:1, mr:1, p:0 }}>
                                    <AccountBoxIcon />
                                </ListItemIcon>
                                <ListItemText primary="Account" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Collapse>
            </List>
            
            {/* {menuBuilder(menus,'panel')} */}
            <List sx={{ width: '100%'}} disablePadding
                    component="nav">
                {menus.map((item, index) => (
                    <Box key={ `menuitem_${index}`}  sx={{ 
                        m:0, p:0
                    }}>         
                        <ABDivider />
                        <Typography variant='caption' sx={{m:2}}>{item.title}</Typography>                     
                        <ListItem disablePadding sx={{ display: 'flex',width: '100%' }}>    
                            <ListItemButton
                                sx={{ mr:'1rem',ml:'1rem', p:0, borderRadius:2}} 
                                onClick={handleChange(`menuitem_${index}`)} 
                            >
                                <ListItemIcon sx={{ with:'20%', minWidth:0,mr:'1rem', p:0 }} >                                
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.name}/>
                                {typeof item.links !== 'undefined' && (expanded === `menuitem_${index}` ? <ExpandLess /> : <ExpandMore />)}
                            </ListItemButton> 
                        </ListItem>
                        {typeof item.links !== 'undefined' &&
                            <Collapse in={expanded === `menuitem_${index}`} timeout="auto" unmountOnExit>
                                {menuBuilder(item.links,`menuitem_${index}`)}
                            </Collapse>
                        }
                    </Box>))            
                }
            </List>

            <Box sx={{mt:3}}/>
        </Box>
    )
}
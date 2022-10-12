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
import Fade from '@mui/material/Fade';
import ABDivider from './ABDivider';
import { styled, alpha } from '@mui/material/styles';

import { useStateContext } from '../contexts/ContextProvider';
import {AccountBoxIcon,ExpandLess, ExpandMore } from './icons/index'

const ListItemButtonWrapper = styled(ListItemButton)(({ theme }) => ({
    padding: '0.5rem 1rem',
    margin:'0.09375rem 1rem',
    borderRadius:'0.375rem',
    dense:true,
    alignItems:'left',
    color: 'rgb(52, 71, 103)',
  }));

const ListItemIconWrapper = styled(ListItemIcon)(({ theme }) => ({
    ...{padding:'0',
        minWidth: '2rem',
        minHeight: '2rem',    
        borderRadius: '0.375rem',
        display: 'grid',
        placeItems: 'center',
        transition: 'margin 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        fontSize:'24px',
        color:'inherit'
    }
 }));

 const ListItemTextWrapper = styled(ListItemText)(({ theme }) => ({
    '& .MuiListItemText-primary': {
        color:'#344767',
        fontSize: '0.875rem',
        marginLeft:'0.625rem',
        textTransform: 'capitalize',
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
        maxWidth: theme.spacing(12),
        display:'block',
    }
  }));
 
  const TypographyWrapper = styled(Typography)(({ theme }) => ({
    ...{
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
        maxWidth: theme.spacing(10),
        display:'block',
    }
  }));
  

export default function Menus(props){
    const {menus,customersData} = props;
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => () => { 
      setExpanded(expanded===panel?'': panel);
    };
    const { activeMenu } = useStateContext();  
    const isMiniMenu = !(!activeMenu);
  
    const builderCollapse= (subMenus,parentKey)=>{
        // console.log('menus',menuList)
         const id = `${parentKey}`
         return (
            <Collapse in={expanded === parentKey} timeout="auto" unmountOnExit>                
                {builrMenuItem(subMenus,parentKey)}
            </Collapse>
         );
    }

    const builrMenuItem = (menuList,parentKey)=>{
        // console.log('menus',menuList)
         const id = `${parentKey}`
         return (
             <List disablePadding
                     component="div">
                 {menuList.map((item, index) => (
                     <Box key={ `${id}_${index}`}  sx={{ 
                         m:0, p:0
                     }}>  
                     
                        <ListItem disablePadding sx={{ display: 'flex',width: '100%' }} >    
                            <ListItemButtonWrapper sx={{minWidth:'0',
                            ...(typeof item.icon === 'undefined' && {
                            '&::before': {
                                content: `"${item.name.substring(0,1)}"`,
                                display: 'flex',
                                position: 'absolute',
                                fontWeight: 400,
                                top: '50%',
                                transform: 'translateY(-50%)',
                                textTransform: 'capitalize',
                              },
                              paddingLeft: 3.5,
                            })
                        }}
                                onClick={handleChange(`${id}_${index}`)} 
                            >
                                {typeof item.icon !== 'undefined' ?(
                                    <ListItemIconWrapper>                                
                                        {item.icon}
                                    </ListItemIconWrapper>)
                                    :(
                                        ""
                                    )
                                }
                                <Fade 
                                sx={{m:0,p:0,display: 'flex',width: '100%'}}
                                in={isMiniMenu}>
                                    <Box sx={{m:0,p:0,display: 'flex',width: '100%'
                                }}>
                                        <ListItemTextWrapper primary={item.name} sx={{
                                            ...(typeof item.icon === 'undefined' && {
                                                ml: '1.5rem',
                                                })}}/>
                                        {typeof item.links !== 'undefined' && (expanded === `${id}_${index}` ? <ExpandLess  /> : <ExpandMore  color="disabled" />)}
                                    </Box>
                                </Fade>    
                            </ListItemButtonWrapper> 
                        </ListItem>
                        {typeof item.links !== 'undefined' && builderCollapse(item.links, `${id}_${index}`)}
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
                    <ListItemButtonWrapper  onClick={handleChange(`panel_a`)} >
                        <ListItemAvatar sx={{  flexShrink: 0, minWidth:0}}>                                
                            <Avatar src={customersData[0].CustomerImage} />
                        </ListItemAvatar>
                        <Fade 
                            sx={{m:0,p:0,display: 'flex',width: '100%'}}
                            in={isMiniMenu}>
                            <Box sx={{m:0,p:0,display: 'flex',width: '100%'}}>
                                <ListItemTextWrapper primary="Amy Christina" />    
                                  
                                {expanded === `panel_a` ? <ExpandLess /> : <ExpandMore color="disabled"/>}        
                                </Box>    
                        </Fade>   
                    </ListItemButtonWrapper> 
                </ListItem>    
                <Collapse in={expanded === `panel_a`} timeout="auto" unmountOnExit>                
                    <List component="div" disablePadding>
                        <ListItem disablePadding>        
                            <ListItemButtonWrapper>
                                <ListItemIconWrapper>
                                    <AccountBoxIcon />
                                </ListItemIconWrapper>
                                <Fade 
                                    sx={{m:0,p:0,display: 'flex',width: '100%'}}
                                    in={isMiniMenu}>                            
                                    <ListItemTextWrapper primary="My Profile" />
                                </Fade>
                            </ListItemButtonWrapper>
                        </ListItem>
                        <ListItem disablePadding> 
                            <ListItemButtonWrapper>
                                <ListItemIconWrapper >
                                    <AccountBoxIcon />
                                </ListItemIconWrapper>
                                <Fade 
                                    sx={{m:0,p:0,display: 'flex',width: '100%'}}
                                    in={isMiniMenu}>  
                                    <ListItemTextWrapper primary="Account" />
                                </Fade>
                            </ListItemButtonWrapper>
                        </ListItem>
                    </List>
                </Collapse>
            </List>
            
            {/* {menuBuilder(menus,'panel')} */}
            <List sx={{ width: '100%'}} disablePadding
                    component="nav">
                {menus.map((item, index) => (
                    <Box key={ `menuitem_${index}`}  sx={{ 
                        m:0, pl:0,pr:0
                    }}>         
                        <ABDivider />
                        <TypographyWrapper variant='caption' sx={{pl:3,mt:2,mb:1,ml:1}}>{item.title}</TypographyWrapper>
                        
                        {typeof item.links !== 'undefined' &&
                            builrMenuItem(item.links,`menuitem_${index}`)
                        }
                    </Box>))            
                }
            </List>

            <Box sx={{mt:3}}/>
        </Box>
    )
}
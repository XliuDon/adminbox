import React from "react";
import Icon from '@mui/material/Icon';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import ABDivider from '../ABDivider';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
    },
  }));


export default function  ABProjectInfoCard ({...props }) {
    const {image, boxShadow, title, description, lable, menus, participants} = props;

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const renderMenu = (<Menu
        id= {menus.id}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {menus.items.map((item,index)=>(
            <MenuItem onClick={()=>{item.action(); handleClose()}} key={index}>{item.text}</MenuItem>
        ))}
      </Menu>);

    return (
    <Box sx={{mt:4}}>
        <Paper sx={{borderRadius:3, pl:1}}>
            <Box sx={{display: 'flex',pt:1, pr:2, pl:1, justifyContent:'space-between'}}>
                <Box  sx={{display: 'flex'}}>
                    <Box sx={{
                        mt: -3,
                        display:'flex', 
                        alignItems:'center', 
                        justifyContent:'center', 
                        width:'60px', 
                        height:'60px', 
                        background: 'linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))',
                        color: '#fff',
                        borderRadius: 2,
                        boxShadow:boxShadow??2,

                    }}>
                        <Box component='img' src={image} sx={{width:'24px', height:'24px'}} />
                    </Box>
                    <Box sx={{display: 'block',pl:2}}>
                        <Typography variant='h6' >{title}</Typography>
                        <Box sx={{display:'flex'}}>
                            <AvatarGroup max={4} spacing={'medium'}>
                                {participants.map((item, index)=>(
                                    <BootstrapTooltip title={item.name} key={index}>                            
                                        <Avatar  alt={item.name} 
                                        sx={{
                                            width:'25px',
                                            height:'25px',
                                            
                                            "&:hover": {
                                                width:'40px',
                                                height:'40px',
                                            }
                                            
                                        }} 
                                        src={item.image} />
                                    </BootstrapTooltip>
                                ))}
                            </AvatarGroup>  
                        </Box>
                    </Box>
                </Box>
                <Box sx={{display: 'flex', alignItems:'center'}}>
                    <Typography variant="p" sx={{padding:'-8px 0px 0px auto',}}>
                        <Icon sx={{cursor: "pointer",fontWeight: "700", fontSize:'24px'}} onClick={handleClick}>more_vert</Icon>
                    </Typography>
                </Box>                
            </Box>
            <Box sx={{padding:'24px 16px 0 16px'}}>
                <Typography variant="body1">{description}</Typography>
            </Box>
            <ABDivider />
            <Box sx={{padding:'0 16px 16px', display:'flex', justifyContent:'space-between'}}>
                <Box sx={{display:'flex', flexDirection:'column'}}>
                    <Typography variant="caption">{participants.length}</Typography>
                    <Typography variant="body1">Participants</Typography>
                </Box>
                <Box>
                   {lable}
                </Box>                
            </Box>
        </Paper>
        {renderMenu}
    </Box>
     )
}
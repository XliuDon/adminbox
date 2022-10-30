import * as React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

export default function ABProjectCard(props) {    
  const {image, label, title, description, action, authors } = props;

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
  
  return (    
    <Paper elevation={0} sx={{background:'transparent'}}>
        <Box component={'img'} 
            sx={{
                borderRadius:3,
                boxShadow:2
            }}
            src={image}/>
        <Box sx={{
            display:'block',
            mt:2,
        }}>
            <Typography variant='body'>{label}</Typography>
            <Box sx={{mt:1}}>
                <Typography variant='h6'>{title}</Typography>
            </Box>
            <Box sx={{mt:1}}>
                <Typography variant='text'>{description}</Typography>
            </Box>
            <Box sx={{
                justifyContent:'space-between',
                display:'flex', 
                alignItems:'center',
                mt:2}}>
                <Button variant="outlined"
                    sx={{
                        textTransform:'uppercase',
                        borderRadius:3,
                    }}
                    color='info'
                    >view project</Button>
                <AvatarGroup max={4} spacing={'medium'}>
                    {authors.map((item, index)=>(
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
    </Paper>
  );
}

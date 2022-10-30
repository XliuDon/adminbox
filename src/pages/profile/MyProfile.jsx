import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Link from '@mui/material/Link';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import useMediaQuery from '@mui/material/useMediaQuery';
import {profile_bg, avatar_image,switchGroupsA,switchGroupsB } from '../../data/dummy';
import {ABIconTabs,ABDivider, ABSwitchesGroup,AbIcon, ABProjectCard} from '../../components/index';

import avatar from '../../data/avatar.jpg';
import avatar2 from '../../data/avatar2.jpg';
import avatar3 from '../../data/avatar3.png';
import avatar4 from '../../data/avatar4.jpg';

  const tabs =[
        {
            label: "App",
            icon: "home",
        },
        {
            label: "Message",
            icon: "email",
        },
        {
            label: "Settings",
            icon: "settings",
        },
  ];

  const projects =[
    {
        image : 'https://bit.ly/3MGJQYO',
        label : 'Project #1',
        title : 'Modern',
        description: 'As Uber works through a huge amount of internal management turmoil.',
        action:{},
        authors:[
            {
                name:'user 1',
                image: avatar
            },
            {
                name:'user 2',
                image: avatar2
            },
            {
                name:'user 3',
                image: avatar3
            },
            {
                name:'user 4',
                image: avatar4
            },
        ]
    },
    {
        image : 'https://bit.ly/3MGJQYO',
        label : 'Project #2',
        title : 'Scandinavian',
        description: 'Music is something that everyone has their own specific opinion about.',
        action:{},
        authors:[
            {
                name:'user 1',
                image: avatar
            },
            {
                name:'user 2',
                image: avatar2
            },
            {
                name:'user 3',
                image: avatar3
            },
            {
                name:'user 4',
                image: avatar4
            },
        ]
    },
    {
        image : 'https://bit.ly/3MGJQYO',
        label : 'Project #3',
        title : 'Minimalist',
        description: 'Different people have different taste, and various types of music.',
        action:{},
        authors:[
            {
                name:'user 1',
                image: avatar
            },
            {
                name:'user 2',
                image: avatar2
            },
            {
                name:'user 3',
                image: avatar3
            },
            {
                name:'user 4',
                image: avatar4
            },
        ]
    },
    {
        image : 'https://bit.ly/3MGJQYO',
        label : 'Project #4',
        title : 'Gothic',
        description: 'Why would anyone pick blue over pink? Pink is obviously a better color.',
        action:{},
        authors:[
            {
                name:'user 1',
                image: avatar
            },
            {
                name:'user 2',
                image: avatar2
            },
            {
                name:'user 3',
                image: avatar3
            },
            {
                name:'user 4',
                image: avatar4
            },
        ]
    }
  ]

  export default function MyProfile() {
    const theme = useTheme();
    const md = useMediaQuery(theme.breakpoints.down('md'));
    let orientation = 'vertical';
    if(md){
        orientation = 'horizontal';
    }else{
        orientation = 'vertical';
    }
console.log('orientation',orientation)
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Box
                // component="img"
                sx={{
                    alignItems:'center', 
                    minHeight:'18.75rem',
                    maxHeight:'18.75rem',
                    width: '100%',
                    borderRadius:2,
                    background: `linear-gradient(195deg, rgba(73, 163, 241, 0.6), rgba(26, 115, 232, 0.6)) 50% center / cover, url(${profile_bg}) transparent`,
                    backgroundPosition: '10% center',
                    overflow:'hidden',                
                 }}
                //  src ={profile_bg}
            ></Box>
            
            <Paper 
                sx={{
                    mt:-8,
                    mr: 3,
                    ml: 3,
                    p: 2,
                    display: 'flex',
                    borderRadius:2,
                    flexDirection: 'column'
                }}
            >
                <Grid container spacing={2} >                    
                    <Grid item xs={4} sm={2} md={2} lg={1}>
                        <Avatar src={avatar_image} sx={{ width: '4.625rem', height:  '4.625rem' }}/>
                    </Grid>
                    <Grid item xs={8} sm={6} md={3} lg={3}>
                        <Box sx={{pt:2}}>
                            <Typography variant='h5' sx={{ ml:1, flexShrink: 0}}>Michael Harper</Typography>                        
                            <Typography variant='body2'  sx={{ ml:1, flexShrink: 0}}>CEO / Co-Founder</Typography>                        
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={7} lg={8}>
                        <Box sx={{display:'flex', justifyContent: 'flex-end', width: {xs:'100%',sm:'100%'}}}>
                            <ABIconTabs tabs={tabs}/>
                        </Box>
                    </Grid>
                </Grid>

                <Box sx={{mt:5,mb:3}}>
                    <Grid container spacing={2} >                    
                        <Grid item sm={12} md={6} lg={4} sx={{ justifyContent: 'space-between', display:{sm:'block',md:'flex'},flexDirection: {sm:'column',md:'row'}}}>
                            <Paper
                                sx={{boxShadow:0}}
                            > 
                                <Box sx={{pt:2,pl:2, flexShrink: 0}}>
                                    <Typography variant='h6' >platform settings</Typography>
                                </Box>
                                <Box sx={{p:2}}>
                                    <ABSwitchesGroup groups={switchGroupsA}/>
                                    <ABSwitchesGroup groups={switchGroupsB}/>
                                </Box>
                            </Paper>
                            <ABDivider orientation={orientation}/>
                        </Grid>
                        
                        <Grid item sm={12} md={6} lg={4} sx={{display:{sm:'block',md:'flex'},flexDirection: {sm:'column',md:'row'}}}>
                            <Paper
                                sx={{boxShadow:0}}
                            > 
                                <Box>
                                    <Typography variant='h6' sx={{ pt:2,pl:2, flexShrink: 0}}>Profile Information</Typography>
                                </Box>
                                <Box sx={{p:2}}>
                                    <Box sx={{mt:2, mb:4}}>
                                        <Typography variant='body' color='text'>
                                        Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).
                                        </Typography>
                                    </Box>

                                    <Box sx={{display:'flex',mt:2, alignItems:'center', gap:2}}>
                                        <Typography variant='h6' color='primary'>Full Name:</Typography>
                                        <Typography variant='body' color='text' >Alec M. Thompson</Typography>
                                    </Box>

                                    <Box sx={{display:'flex',mt:2, alignItems:'center', gap:2}}>
                                        <Typography variant='h6' color='primary'>Mobile:</Typography>
                                        <Typography variant='body' color='text' >(44) 123 1234 123</Typography>
                                    </Box>

                                    <Box sx={{display:'flex',mt:2, alignItems:'center', gap:2}}>
                                        <Typography variant='h6' color='primary'>Email:</Typography>
                                        <Typography variant='body' color='text' >don@mail.com</Typography>
                                    </Box>

                                    <Box sx={{display:'flex',mt:2, alignItems:'center', gap:2}}>
                                        <Typography variant='h6' color='primary'>Location:</Typography>
                                        <Typography variant='body' color='text'>Canada</Typography>
                                    </Box>

                                    <Box sx={{display:'flex',mt:2, alignItems:'center', gap:2}}>
                                        <Typography variant='h6' color='primary'>Social:</Typography>
                                        <Link href="#" underline="none">
                                            <TwitterIcon color='secondary.main'  sx={{color:'secondary.main'}}          
                                                fontSize={'small' }/> 
                                        </Link>
                                        <Link href="#" underline="none">
                                            <InstagramIcon              
                                                fontSize={'small' }/> 
                                        </Link>  
                                        <Link href="#" underline="none">
                                            <FacebookIcon              
                                                fontSize={'small' }/> 
                                        </Link>  
                                                                           
                                    </Box>
                                </Box>
                            </Paper>
                            <ABDivider orientation={orientation}/>
                        </Grid>
                        
                        <Grid item sm={12} md={12} lg={4}>
                            <Paper
                                sx={{boxShadow:0}}
                            > 
                                <Box>
                                    <Typography variant='h6' sx={{ pt:2,pl:2, flexShrink: 0}}>Conversations</Typography>
                                </Box>
                                <Box sx={{pt:2, pl:2 ,width:'100%'}}>
                                    <List sx={{ width: '100%',  }}>
                                        <ListItem>
                                            <ListItemAvatar sx={{mr:2}}>
                                                <Avatar src={avatar_image} sx={{ width: 56, height: 56}}>
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary="Photos" secondary="Hi! I need more information information information information " 
                                               sx={{
                                                maxWidth:{xs: '50px', sm:'100px',md:'160px'},
                                                overflow: 'hidden',
                                                whiteSpace: "nowrap",
                                                ...{'& .MuiListItemText-secondary':{
                                                    textOverflow: "ellipsis",
                                                    overflow: 'hidden',
                                                }}
                                            }}/>
                                            <ListItemButton sx={{justifyContent:'right' }}>
                                                <Link href="#" underline="none" variant='caption' sx={{
                                                    color:'secondary.main',
                                                    textTransform: 'uppercase'}}>Reply</Link>
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemAvatar sx={{mr:2}}>
                                                <Avatar src={avatar_image} sx={{ width: 56, height: 56}}>
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary="Work" secondary="Awesome work, can you help me" 
                                                sx={{
                                                    maxWidth:{xs: '50px', sm:'100px',md:'160px'},
                                                    overflow: 'hidden',
                                                    whiteSpace: "nowrap",
                                                    ...{'& .MuiListItemText-secondary':{
                                                        textOverflow: "ellipsis",
                                                        overflow: 'hidden',
                                                    }}
                                                }}/>
                                            <ListItemButton sx={{justifyContent:'right'}}>
                                                <Link href="#" underline="none" variant='caption' sx={{
                                                    color:'secondary.main',
                                                    textTransform: 'uppercase'}}>Reply</Link>
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemAvatar sx={{mr:2}}>
                                                <Avatar src={avatar_image} sx={{ width: 56, height: 56}}>
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary="Vacation" secondary="About files I can help work on it test test test test test"  
                                             sx={{
                                                maxWidth:{xs: '50px', sm:'100px',md:'160px'},
                                                overflow: 'hidden',
                                                whiteSpace: "nowrap",
                                                ...{'& .MuiListItemText-secondary':{
                                                    textOverflow: "ellipsis",
                                                    overflow: 'hidden',
                                                }}
                                            }}/>
                                            <ListItemButton sx={{justifyContent:'right'}}>
                                                <Link href="#" underline="none" variant='caption' sx={{
                                                    color:'secondary.main',
                                                    textTransform: 'uppercase'}}>Reply</Link>
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemAvatar sx={{mr:2}}>
                                                <Avatar src={avatar_image} sx={{ width: 56, height: 56}}>
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary="Vacation" secondary="About files I can help work on it test test test test test"  
                                             sx={{
                                                maxWidth:{xs: '50px', sm:'100px',md:'160px'},
                                                overflow: 'hidden',
                                                whiteSpace: "nowrap",
                                                ...{'& .MuiListItemText-secondary':{
                                                    textOverflow: "ellipsis",
                                                    overflow: 'hidden',
                                                }}
                                            }}/>
                                            <ListItemButton sx={{justifyContent:'right'}}>
                                                <Link href="#" underline="none" variant='caption' sx={{
                                                    color:'secondary.main',
                                                    textTransform: 'uppercase'}}>Reply</Link>
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemAvatar sx={{mr:2}}>
                                                <Avatar src={avatar_image} sx={{ width: 56, height: 56}} >
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary="Vacation" secondary="About files I can help work on it test test test test test"  
                                             sx={{
                                                maxWidth:{xs: '50px', sm:'100px',md:'160px'},
                                                overflow: 'hidden',
                                                whiteSpace: "nowrap",
                                                ...{'& .MuiListItemText-secondary':{
                                                    textOverflow: "ellipsis",
                                                    overflow: 'hidden',
                                                }}
                                            }}/>
                                            <ListItemButton sx={{justifyContent:'right'}}>
                                                <Link href="#" underline="none" variant='caption' sx={{
                                                    color:'secondary.main',
                                                    textTransform: 'uppercase'}}>Reply</Link>
                                            </ListItemButton>
                                        </ListItem>
                                    </List>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>

                </Box>
                <Box sx={{mt:5,mb:3, pl:2}}>
                    <Typography variant='h6' >Projects</Typography>
                    <Typography variant='body'>Architects design houses</Typography>
                </Box>
                <Box sx={{mt:1,mb:3, pl:2}}>
                    <Grid container spacing={2} >                    
                        <Grid item xs={12} md={6} lg={3} sx={{ display:'flex'}}>
                           <ABProjectCard {...projects[0]}/>                         
                        </Grid>
                        <Grid item xs={12} md={6} lg={3} sx={{ display:'flex'}}>
                            <ABProjectCard {...projects[1]}/> 
                        </Grid>
                        <Grid item xs={12} md={6} lg={3} sx={{ display:'flex'}}>
                            <ABProjectCard {...projects[2]}/> 
                        </Grid>
                        <Grid item xs={12} md={6} lg={3} sx={{ display:'flex'}}>
                            <ABProjectCard {...projects[3]}/> 
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Box>
    )
}
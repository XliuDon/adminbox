import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import {profile_bg, avatar_image, } from '../../data/dummy';
import {ABIconTabs,ABProjectInfoCard} from '../../components/index';

import {ParticipantsData} from '../../data/fakerData'

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

  const contenxt_menus={
    id:'context_menus',
    items:[
        {
            text: 'Action',
            action: ()=>{console.log('action test')},
        },
        {
            text: 'Another action',
            action: ()=>{console.log('Another action test')},
        },
        {
            text: 'Something elese here',
            action: ()=>{console.log('Something action test')},
        },
    ]
  } 

  export default function AllProjects() {
    const theme = useTheme();
    const md = useMediaQuery(theme.breakpoints.down('md'));
    let orientation = 'vertical';
    if(md){
        orientation = 'horizontal';
    }else{
        orientation = 'vertical';
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Box
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
            </Paper>

            <Box sx={{mt:4, ml:2}}>
                <Grid container spacing={2} >                    
                    <Grid item xs={12} md={7}>
                        <Box sx={{display:'block'}}>
                            <Typography variant='h5'>Some of Our Awesome Projects</Typography>
                            <Typography variant='body1' sx={{pt:2}}>This is the paragraph where you can write more details about your projects. Keep you user engaged by providing meaningful information.</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={5} sx={{display:'flex',justifyContent:'right',alignItems:'center'}}>
                        <Button variant="contained" startIcon={<AddIcon />} 
                            sx={{
                                backgroundImage:'linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))',
                                borderRadius: 2,                                
                                padding: '8px 32px',
                            }}
                            >
                            Add New
                        </Button>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{mt:4, ml:2}}>
                <Grid container spacing={2} >                    
                    <Grid item xs={12} md={6} lg={4}>
                        <ABProjectInfoCard 
                            image="/static/images/slack-logo.png" 
                            title="Slack Bot" 
                            description="If everything I did failed - which it doesn't, I think that it actually succeeds." 
                            lable="02.03.22" 
                            menus={contenxt_menus}
                            participants={ParticipantsData}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <ABProjectInfoCard 
                            image="/static/images/spotify.png" 
                            title="Premium Support" 
                            description="Pink is obviously a better color. Everyone’s born confident, and everything’s taken away from you." 
                            lable="02.03.22" 
                            menus={contenxt_menus}
                            participants={ParticipantsData}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <ABProjectInfoCard 
                            image="/static/images/design.png" 
                            title="Design Tools" 
                            description="Constantly growing. We’re constantly making mistakes from which we learn and improve." 
                            lable="02.03.22" 
                            menus={contenxt_menus}
                            participants={ParticipantsData}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <ABProjectInfoCard 
                            image="/static/images/asana.png" 
                            title="Looking Great" 
                            description="You have the opportunity to play this game of life you need to appreciate every moment." 
                            lable="02.03.22" 
                            menus={contenxt_menus}
                            participants={ParticipantsData}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <ABProjectInfoCard 
                            image="/static/images/atlassian.png" 
                            title="Developer First" 
                            description="For standing out. But the time is now to be okay to be the greatest you." 
                            lable="02.03.22" 
                            menus={contenxt_menus}
                            participants={ParticipantsData}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <ABProjectInfoCard 
                            image="/static/images/instagram.png" 
                            title="Product Development" 
                            description="We strive to embrace and drive change in our industry. We are happy to work at such a project." 
                            lable={
                                <Box sx={{display:'flex', flexDirection:'column'}}>
                                    <Typography variant='caption' color={'error'}>04.01.22</Typography>
                                    <Typography variant='caption'>Due Date</Typography>
                                </Box>
                            }
                            menus={contenxt_menus}
                            participants={ParticipantsData}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Icon from '@mui/material/Icon';

import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

import {ABIconTabs, AbIcon, ABBlockSwitch, ABDivider, ABSwitchItem, ABTable, ABDefaultItem} from '../../components/index';

import avatar from '../../data/avatar.jpg';

const tabs =[
    {
        label: "Message",
        icon: "email",
    },
    {
        label: "Social",
        icon: "share",
    },
    {
        label: "Notifications",
        icon: "notifications",
    },
    {
        label: "Backup",
        icon: "backup",
    },
];

const genders = [
    {
      value: 'male',
      label: 'Male',
    },
    {
      value: 'female',
      label: 'Female',
    }
  ];

const basicInfo ={
    gender: 'male',
    birth_m: 'march',
    birth_d: '1',
    birth_y: '2022',
};

const brith_m = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" 
]

const skills =[
    "react","javascript","c#",".Net","Java"
]

  export default function AccountSetting() {
    const [basicInfoState, setBasicInfoState] = React.useState(basicInfo);
    
    const handleChange = (event) => {
        basicInfoState[event.target.name] = event.target.value;
        setBasicInfoState(basicInfoState);
    };

    return (
        <Box >
            <Grid container spacing={2} >                    
                <Grid item sm={12} sx={{width:'100%'}}>
                    <ABIconTabs tabs={tabs} sx={{
                         '&.MuiTabs-root': {
                            backgroundColor: 'neutral.main',
                         }
                    }}/>
                </Grid>
            </Grid>

            <Box sx={{mt:4}}>
                <Grid container spacing={3} >                    
                    <Grid item xs={12} sm={12} md={3}>
                        <Paper elevation={3} 
                            sx={{
                                borderRadius:3,
                                position: 'sticky',
                                top: '1%',
                            }} >
                            <MenuList>
                                <MenuItem sx={{mt:2, mr:2, ml:2}}>                                    
                                    <ListItemIcon>
                                        <AbIcon  iconName="person"/>
                                    </ListItemIcon>
                                    <Typography variant="inherit" noWrap><Link href="#profile" underline="none">Profile</Link></Typography>                                    
                                </MenuItem>
                                <MenuItem  sx={{mt:2, mr:2, ml:2}}>
                                    <ListItemIcon>
                                        <AbIcon  iconName={"receipt_long"}/>
                                    </ListItemIcon>
                                    <Typography variant="inherit" noWrap><Link href="#basic_info" underline="none">Basic Info</Link></Typography>
                                </MenuItem>
                                <MenuItem  sx={{mt:2, mr:2, ml:2}}>
                                    <ListItemIcon>
                                        <AbIcon  iconName="lock"/>
                                    </ListItemIcon>
                                    <Typography variant="inherit" noWrap>                                        
                                        <Link href="#basic_info" underline="none">Change Password</Link>
                                    </Typography>
                                </MenuItem>
                                <MenuItem  sx={{mt:2, mr:2, ml:2}}>
                                    <ListItemIcon>
                                        <AbIcon  iconName="security"/>
                                    </ListItemIcon>
                                    <Typography variant="inherit" noWrap>                                        
                                        <Link href="#2fa" underline="none">2FA</Link>
                                    </Typography>
                                </MenuItem>
                                <MenuItem  sx={{mt:2, mr:2, ml:2}}>
                                    <ListItemIcon>
                                        <AbIcon iconName="badge"/>
                                    </ListItemIcon>
                                    <Typography variant="inherit" noWrap>
                                        <Link href="#accounts" underline="none">Accounts</Link>                                        
                                    </Typography>
                                </MenuItem>
                                <MenuItem  sx={{mt:2, mr:2, ml:2}}>
                                    <ListItemIcon>
                                        <AbIcon iconName="campaign"/>
                                    </ListItemIcon>
                                    <Typography variant="inherit" noWrap>                                        
                                        <Link href="#notifications" underline="none">Notifications</Link>              
                                    </Typography>
                                </MenuItem>
                                <MenuItem  sx={{mt:2, mr:2, ml:2}}>
                                    <ListItemIcon>
                                        <AbIcon iconName="settings_applications"/>
                                    </ListItemIcon>
                                    <Typography variant="inherit" noWrap>                                        
                                        <Link href="#sessions" underline="none">Sessions</Link>  
                                    </Typography>
                                </MenuItem>
                                <MenuItem  sx={{m:2}}>
                                    <ListItemIcon>
                                        <AbIcon iconName="delete"/>
                                    </ListItemIcon>
                                    <Typography variant="inherit" noWrap>
                                        <Link href="#delete_account" underline="none">Delete Account</Link>                                         
                                    </Typography>
                                </MenuItem>
                            </MenuList>
                        </Paper>
                    </Grid>
                    <Grid item sm={12} md={9}>
                        <Box>
                            <Grid container spacing={3} >                    
                                {/* Profile */}
                                <Grid item sm={12} id="profile">
                                    <Paper  elevation={3} sx={{borderRadius:3}}>
                                        <Box sx={{p:2}}>
                                            <Grid container>                    
                                                <Grid item xs={2} md={2} lg={1}>
                                                    <Avatar src={avatar} sx={{ width: '4.625rem', height:  '4.625rem' }}/>
                                                </Grid>
                                                <Grid item xs={10} md={4} lg={2}>
                                                    <Box sx={{pt:2}}>
                                                        <Typography variant='h5' sx={{ ml:1, flexShrink: 0}}>Michael Harper</Typography>                        
                                                        <Typography variant='body2'  sx={{ ml:1, flexShrink: 0}}>CEO / Co-Founder</Typography>                        
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={12} md={6} lg={9} 
                                                    sx={{
                                                        display:'flex',
                                                        justifyContent:'flex-end',
                                                        alignItems:'center',
                                                    }}>
                                                        <Box sx={{display:'flex',alignItems:'center',}}>
                                                            <Typography variant='body2'  sx={{ ml:1, flexShrink: 0}}>Switch to invisible</Typography>                        
                                                            <ABBlockSwitch  name={"Switch to invisible"} defaultChecked/>
                                                        </Box>                                                    
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Paper>
                                </Grid>

                                {/* Basic Info */}
                                <Grid item sm={12} id="basic_info">
                                    <Paper  elevation={3} sx={{borderRadius:3}}>
                                        <Box sx={{p:3}}>
                                            <Typography variant='h5' color='secondary'>Basic Info</Typography>
                                        </Box>
                                    
                                        <Box
                                            component="form"
                                            sx={{
                                                pl:3,pr:3,pb:3
                                            }}
                                            noValidate
                                            autoComplete="on"
                                            >
                                            <Grid container spacing={2} >                    
                                                <Grid item xs={12} sm={6}>
                                                    <TextField                                                
                                                        id="firstName"
                                                        label="First Name"
                                                        placeholder="Michael"
                                                        variant="standard"
                                                        fullWidth= {true}
                                                        InputLabelProps={{ shrink: true, style: { fontSize: "1rem" }, }}
                                                        />
                                                </Grid>                                              
                                                <Grid item xs={12} sm={6}>
                                                    <TextField                                                
                                                        id="lastName"
                                                        label="Last Name"
                                                        fullWidth= {true}
                                                        placeholder="Steven"
                                                        variant="standard"
                                                        InputLabelProps={{ shrink: true, style: { fontSize: "1rem" }, }}
                                                        />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Grid container spacing={3} >                    
                                                        <Grid item xs={12} sm={4}>
                                                            <Autocomplete
                                                                id="gender"
                                                                options={genders}
                                                                getOptionLabel={(option) => option.label}
                                                                defaultValue={genders[0]}
                                                                renderInput={(params) => (
                                                                <TextField
                                                                    {...params}
                                                                    variant="standard"
                                                                    label="I'm"
                                                                    fullWidth= {true}
                                                                    InputLabelProps={{ shrink: true, style: { fontSize: "1rem" }, }}
                                                                />
                                                                )}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12} sm={8}>
                                                            <Grid container spacing={3} >                    
                                                                <Grid item xs={4} >
                                                                    <Autocomplete
                                                                        id="birth_m"
                                                                        options={brith_m}
                                                                        getOptionLabel={(option) => option}
                                                                        defaultValue={brith_m[0]}
                                                                        renderInput={(params) => (
                                                                        <TextField
                                                                            {...params}
                                                                            variant="standard"
                                                                            label="Birth Date"
                                                                            fullWidth= {true}
                                                                            InputLabelProps={{ shrink: true, style: { fontSize: "1rem" }, }}
                                                                        />
                                                                        )}
                                                                    />
                                                                </Grid>
                                                                <Grid item xs={4} >
                                                                    <Autocomplete
                                                                        id="birth_d"
                                                                        options={Array.from({length: 30}, (_, i) => i + 1)}
                                                                        getOptionLabel={(option) => option.toString()}
                                                                        defaultValue={1}
                                                                        renderInput={(params) => (
                                                                        <TextField
                                                                            {...params}
                                                                            variant="standard"
                                                                            label=" "
                                                                            fullWidth= {true}
                                                                            InputLabelProps={{ shrink: true, style: { fontSize: "1rem" }, }}
                                                                        />
                                                                        )}
                                                                    />
                                                                </Grid>
                                                                <Grid item xs={4} >
                                                                    <Autocomplete
                                                                        id="birth_d"
                                                                        options={Array.from({length: 80}, (_, i) => i + 1950)}
                                                                        getOptionLabel={(option) => option.toString()}
                                                                        defaultValue={2021}
                                                                        renderInput={(params) => (
                                                                        <TextField
                                                                            {...params}
                                                                            variant="standard"
                                                                            label=" "
                                                                            fullWidth= {true}
                                                                            InputLabelProps={{ shrink: true, style: { fontSize: "1rem" }, }}
                                                                        />
                                                                        )}
                                                                    />
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <TextField                                                
                                                        id="email"
                                                        label="Email"
                                                        placeholder="example@gmail.com"
                                                        variant="standard"
                                                        fullWidth= {true}
                                                        InputLabelProps={{ shrink: true, style: { fontSize: "1rem" }, }}
                                                        />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <TextField                                                
                                                        id="email_confirmation"
                                                        label="Confirmation Email"
                                                        placeholder="example@gmail.com"
                                                        variant="standard"
                                                        fullWidth= {true}
                                                        InputLabelProps={{ shrink: true, style: { fontSize: "1rem" }, }}
                                                        />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <TextField                                                
                                                        id="location"
                                                        label="You location"
                                                        placeholder="BC, Canada"
                                                        variant="standard"
                                                        fullWidth= {true}
                                                        InputLabelProps={{ shrink: true, style: { fontSize: "1rem" }, }}
                                                        />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <TextField                                                
                                                        id="phone"
                                                        label="Phone Number"
                                                        type="number"
                                                        placeholder="+1 888 999 6666"
                                                        InputLabelProps={{ shrink: true, style: { fontSize: "1rem" }, }}
                                                        variant="standard"
                                                        fullWidth= {true}
                                                        />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <TextField                                                
                                                        id="language"
                                                        label="Language"
                                                        placeholder="English"
                                                        variant="standard"
                                                        fullWidth= {true}
                                                        InputLabelProps={{ shrink: true, style: { fontSize: "1rem" }, }}
                                                        />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <Autocomplete
                                                        multiple
                                                        id="skills"
                                                        options={skills}
                                                        getOptionLabel={(option) => option}
                                                        defaultValue={[skills[0],skills[3]]}
                                                        renderInput={(params) => (
                                                            <TextField
                                                                {...params}
                                                                variant="standard"
                                                                label="Skills"
                                                                fullWidth= {true}
                                                                InputLabelProps={{ shrink: true, style: { fontSize: "1rem" }, }}
                                                            />
                                                        )}
                                                        sx={{
                                                            ["& .MuiChip-root"]:{
                                                                backgroundColor: 'common.black',
                                                                color: 'common.white',
                                                                height: 'auto'
                                                            },
                                                            ["& .MuiAutocomplete-tag .MuiSvgIcon-root"]:{
                                                                color: 'common.white',
                                                                height: 'auto',
                                                                
                                                                ["&:hover"]: {
                                                                    color:  'common.white',
                                                                }
                                                            }
                                                        }}
                                                    />
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Paper>
                                </Grid>

                                {/* Change Password */}
                                <Grid item sm={12} id="change_password">
                                    <Paper  elevation={3} sx={{borderRadius:3}}>
                                        <Box sx={{p:3}}>
                                            <Typography variant='h5' color='secondary'>Change Password</Typography>
                                        </Box>
                                    
                                        <Box
                                            component="form"
                                            sx={{
                                                pl:3,pr:3,pb:3
                                            }}
                                            noValidate
                                            autoComplete="on"
                                            >
                                            <Grid container spacing={2} >                    
                                                <Grid item xs={12}>
                                                    <TextField                                                
                                                        id="current_password"
                                                        placeholder="Current Password"
                                                        variant="outlined"
                                                        fullWidth= {true}
                                                        inputProps={{
                                                            sx:{p:1.5}
                                                        }}
                                                        />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField                                                
                                                        id="new_password"
                                                        placeholder="New Password"
                                                        variant="outlined"
                                                        fullWidth= {true}
                                                        inputProps={{
                                                            sx:{p:1.5}
                                                        }}
                                                        />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField                                                
                                                        id="confirm_new_password"
                                                        placeholder="Confirm New Password"
                                                        variant="outlined"
                                                        fullWidth= {true}
                                                        inputProps={{
                                                            sx:{p:1.5}
                                                        }}
                                                        />
                                                </Grid>
                                            </Grid>     

                                            <Box sx={{pt:3}}>
                                                <Typography variant='h5' color='secondary'>Password Requirements</Typography>
                                            </Box>
                                            <Box sx={{pt:2}}>
                                                <Typography variant='body2'>Please follow this guide for a strong password</Typography>
                                            </Box>
                                            <Box sx={{pt:2,display:'flex', justifyContent:'space-between', alignItems:'flex-end'}}>
                                                <List disablePadding={true} 
                                                    sx={{
                                                        listStyleType:"disc",
                                                        "& .MuiListItem-root":{
                                                            padding: "0px",
                                                            marginLeft: "16px",
                                                            display: 'list-item',
                                                        }
                                                    }}>
                                                    <ListItem>
                                                        <ListItemText primary="One special characters"/>
                                                    </ListItem>
                                                    <ListItem>
                                                        <ListItemText primary="Min 6 characters"/>
                                                    </ListItem>
                                                    <ListItem>
                                                        <ListItemText primary="One number (2 are recommended)"/>
                                                    </ListItem>
                                                    <ListItem>
                                                        <ListItemText primary="Change it often"/>
                                                    </ListItem>
                                                </List>
                                                <Box>
                                                    <Button variant="contained" sx={{borderRadius:3, boxShadow:2}}>UPDATE PASSWORD</Button>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Paper>
                                </Grid>

                                {/* Two-factor authentication */}
                                <Grid item sm={12} id="2fa">
                                    <Paper  elevation={3} sx={{borderRadius:3}}>
                                        <Box sx={{p:3}}>
                                            <Typography variant='h5' color='secondary'>Two-factor authentication</Typography>
                                        </Box>
                                    
                                        <Box                                            
                                            sx={{
                                                pl:3,pr:3,pb:3
                                            }}
                                            >
                                            <Box
                                                sx={{display:'flex', justifyContent:"space-between"}}
                                            >
                                                 <Typography variant='body1'>Security keys</Typography>
                                                 <Box sx={{display:'flex', alignItems:'center'}}>
                                                    <Typography variant='body2'>No Security keys</Typography>
                                                    <Button sx={{borderRadius:3, ml:2}} variant="outlined">Add</Button>
                                                 </Box>
                                            </Box>
                                            <ABDivider />
                                            <Box
                                                sx={{display:'flex', justifyContent:"space-between"}}
                                            >
                                                 <Typography variant='body1'>SMS number</Typography>
                                                 <Box sx={{display:'flex', alignItems:'center'}}>
                                                    <Typography variant='body2'>+1123456789</Typography>
                                                    <Button sx={{borderRadius:3, ml:2}} variant="outlined">EDIT</Button>
                                                 </Box>
                                            </Box>
                                            <ABDivider />
                                            <Box
                                                sx={{display:'flex', justifyContent:"space-between"}}
                                            >
                                                 <Typography variant='body1'>Authenticator app</Typography>
                                                 <Box sx={{display:'flex', alignItems:'center'}}>
                                                    <Typography variant='body2'>Not Configured</Typography>
                                                    <Button sx={{borderRadius:3, ml:2}} variant="outlined">SET UP</Button>
                                                 </Box>
                                            </Box>
                                        </Box>
                                    </Paper>
                                </Grid>

                                {/* Accounts */}
                                <Grid item sm={12} id="accounts">
                                    <Paper  elevation={3} sx={{borderRadius:3}}>
                                        <Box sx={{p:3}}>
                                            <Typography variant='h5' color='secondary'>Accounts</Typography>
                                        </Box>
                                            
                                        <Box sx={{pl:3}}>
                                            <Typography variant='body1'>Here you can setup and manage your integration settings.</Typography>
                                        </Box>

                                        <Box                                            
                                            sx={{
                                                p:3
                                            }}
                                            >
                                            <ABSwitchItem 
                                                image={'/static/images/slack-logo.png'}
                                                title={'Slack'} 
                                                lable={'Show less'} 
                                                defaultState={true}
                                            />
                                            <ABDivider />
                                            <ABSwitchItem 
                                                image={'/static/images/spotify.png'}
                                                title={'Spotify'} 
                                                lable={'Music'} 
                                                defaultState={false}
                                            />
                                            <ABDivider />
                                            <ABSwitchItem 
                                                image={'/static/images/paypal.png'}
                                                title={'Paypal'} 
                                                lable={'Payment vendor'} 
                                                defaultState={true}
                                            />
                                            <ABDivider />
                                            <ABSwitchItem 
                                                image={'/static/images/asana.png'}
                                                title={'Asana'} 
                                                lable={'Organize your team'} 
                                                defaultState={false}
                                            />
                                            <ABDivider />
                                        </Box>
                                    </Paper>
                                </Grid>

                                {/* Notifications */}
                                <Grid item sm={12} id="notifications">
                                    <Paper  elevation={3} sx={{borderRadius:3}}>
                                        <Box sx={{p:3}}>
                                            <Typography variant='h5' color='secondary'>Notifications</Typography>
                                        </Box>
                                            
                                        <Box sx={{pl:3}}>
                                            <Typography variant='body1'>Choose how you receive notifications. These notification settings apply to the things you’re watching..</Typography>
                                        </Box>

                                        <Box                                            
                                            sx={{
                                                p:3
                                            }}
                                            >
                                            <ABTable 
                                                headers={
                                                    [
                                                        {
                                                            lable: "Activity",
                                                            align: "left"
                                                        },
                                                        {
                                                            lable: "Email",
                                                            align: "center"
                                                        },
                                                        {
                                                            lable: "Push",
                                                            align: "center"
                                                        },
                                                        {
                                                            lable: "SMS",
                                                            align: "center"
                                                        },
                                                    ]
                                                }
                                                rows ={
                                                    [
                                                        {
                                                            cells:[
                                                                {
                                                                    type: "text",
                                                                    title: "Mentions",
                                                                    lable: "Notify when another user mentions you in a comment"
                                                                },
                                                                {
                                                                    name: 'email1',
                                                                    type: "switch",
                                                                    value: true,
                                                                    align: 'center',
                                                                },
                                                                {
                                                                    name: 'push1',
                                                                    type: "switch",
                                                                    value: false,
                                                                    align: 'center',
                                                                },
                                                                {
                                                                    name: 'sms1',
                                                                    type: "switch",
                                                                    value: false,
                                                                    align: 'center',
                                                                },
                                                            ]
                                                        },
                                                        {
                                                            cells: [
                                                                {
                                                                    type: "text",
                                                                    title: "Comments",
                                                                    lable: "Notify when another user comments your item."
                                                                },
                                                                {
                                                                    name: 'email2',
                                                                    type: "switch",
                                                                    value: true,
                                                                    align: 'center',
                                                                },
                                                                {
                                                                    name: 'push2',
                                                                    type: "switch",
                                                                    value: false,
                                                                    align: 'center',
                                                                },
                                                                {
                                                                    name: 'sms2',
                                                                    type: "switch",
                                                                    value: false,
                                                                    align: 'center',
                                                                },
                                                            ]
                                                        },
                                                        {
                                                            cells: [
                                                                {
                                                                    type: "text",
                                                                    title: "Follows",
                                                                    lable: "Notify when another user follows you."
                                                                },
                                                                {
                                                                    name: 'email3',
                                                                    type: "switch",
                                                                    value: true,
                                                                    align: 'center',
                                                                },
                                                                {
                                                                    name: 'push3',
                                                                    type: "switch",
                                                                    value: false,
                                                                    align: 'center',
                                                                },
                                                                {
                                                                    name: 'sms3',
                                                                    type: "switch",
                                                                    value: false,
                                                                    align: 'center',
                                                                },
                                                            ]
                                                        },
                                                        {
                                                            cells: [
                                                                {
                                                                    type: "text",
                                                                    title: "Log in from a new device",
                                                                },
                                                                {
                                                                    name: 'email4',
                                                                    type: "switch",
                                                                    value: true,
                                                                    align: 'center',
                                                                },
                                                                {
                                                                    name: 'push4',
                                                                    type: "switch",
                                                                    value: true,
                                                                    align: 'center',
                                                                },
                                                                {
                                                                    name: 'sms4',
                                                                    type: "switch",
                                                                    value: true,
                                                                    align: 'center',
                                                                },
                                                            ]
                                                        }
                                                    ]
                                                }
                                            />
                                        </Box>
                                    </Paper>
                                </Grid>

                                {/* Sessions */}
                                <Grid item sm={12} id="sessions">
                                    <Paper  elevation={3} sx={{borderRadius:3}}>
                                        <Box sx={{p:3}}>
                                            <Typography variant='h5' color='secondary'>Sessions</Typography>
                                        </Box>
                                            
                                        <Box sx={{pl:3}}>
                                            <Typography variant='body1'>This is a list of devices that have logged into your account. Remove those that you do not recognize.</Typography>
                                        </Box>
                                        <Box sx={{p:3}}>
                                            <Box
                                                sx={{
                                                    display:'flex',
                                                    justifyContent:'space-between'
                                                }}>
                                                <ABDefaultItem 
                                                    icon='computer'
                                                    title='Shaw 10.10.10.10'
                                                    lable='Your current session' 
                                                    color='dark'
                                                    variant='button'
                                                />
                                                <Box sx={{display: 'flex', alignItems: 'center'}}>
                                                    <Chip label="success" color="success" sx={{
                                                        height: '24px',
                                                        background:'rgb(188, 226, 190)', 
                                                        color: 'rgb(51, 149, 55)',
                                                        textTransform: "uppercase"}}/>
                                                    <Typography variant='button' color="info" sx={{p:1}}>CA</Typography>
                                                    <Link href="#" underline="none" color="secondary" sx={{display:'flex', alignItems: 'center',
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
                                                        <Typography variant='caption' sx={{p:1}}>See More</Typography>
                                                        <Icon sx={{w:1, h:1}}>{'arrow_forward'}</Icon>
                                                    </Link>
                                                </Box>
                                            </Box>
                                            <ABDivider />
                                            <Box
                                                sx={{
                                                    display:'flex',
                                                    justifyContent:'space-between'
                                                }}>
                                                <ABDefaultItem 
                                                    icon='computer'
                                                    title='Chrome on macOS'
                                                    color='dark'
                                                    variant='button'
                                                />
                                                <Box sx={{display: 'flex', alignItems: 'center'}}>
                                                    <Typography variant='button' color="info" sx={{p:1}}>US</Typography>
                                                    <Link href="#" underline="none" color="secondary" sx={{display:'flex', alignItems: 'center',
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
                                                        <Typography variant='caption' sx={{p:1}}>See More</Typography>
                                                        <Icon sx={{w:1, h:1,}}>{'arrow_forward'}</Icon>
                                                    </Link>
                                                </Box>
                                            </Box>
                                            <ABDivider />
                                            <Box
                                                sx={{
                                                    display:'flex',
                                                    justifyContent:'space-between'
                                                }}>
                                                <ABDefaultItem 
                                                    icon='phone_iphone'
                                                    title='Safari on iPhone'
                                                    color='dark'
                                                    variant='button'
                                                />
                                                <Box sx={{display: 'flex', alignItems: 'center'}}>
                                                    <Typography variant='button' color="info" sx={{p:1}}>CN</Typography>
                                                    <Link href="#" underline="none" color="secondary" sx={{display:'flex', alignItems: 'center',
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
                                                        <Typography variant='caption' sx={{p:1}}>See More</Typography>
                                                        <Icon sx={{w:1, h:1}}>{'arrow_forward'}</Icon>
                                                    </Link>
                                                </Box>
                                            </Box>
                                            
                                        </Box>
                                        
                                    </Paper>
                                </Grid>

                                 {/* Delete Account */}
                                 <Grid item sm={12} id="delete_account">
                                    <Paper  elevation={3} sx={{borderRadius:3, display: 'flex', justifyContent:'space-between'}}>
                                        <Box sx={{p:3}}>
                                            <Typography variant='h5' color='secondary'>Delete Account</Typography>
                                            <Typography variant='body1'>Once you delete your account, there is no going back. Please be certain.</Typography>
                                        </Box>
                                        <Box gap={2} alignItems="center" sx={{display:'flex', p:2}}>
                                            <Button variant="outlined" sx={{borderRadius:2}}>DEACTIVATE</Button>
                                            <Button variant="contained" color="error" sx={{borderRadius:2}}>DELETE ACCOUNT</Button>
                                        </Box>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
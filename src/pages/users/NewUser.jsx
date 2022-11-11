import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


  const initState = {
    firstname: "",
    lastname: "",
    company: "",
    email: "",
    password: "",
    repassword: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipcode: "",
    twitter: "",
    facebook: "",
    instagram: "",
    title: "",
    resume: "",
  }

  export default function NewUser() {
    
    const [state, setState] = React.useState(initState);
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };
    
      const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };

      const steps = [
        {
            name: 'user info',
            layout: <>
                <Box>
                    <Typography variant='h5'>About me</Typography>
                    <Typography variant='body2'>Mandatory informations</Typography>
                    <Box sx={{mt:1}}>
                        <Grid container spacing={2} >                    
                            <Grid item xs={12} sm={6}>
                                <TextField                                                
                                    id="firstname"
                                    label="First Name"
                                    placeholder="First Name"
                                    variant="standard"
                                    helperText= {state.firstname === "" ?"First Name is required.":""}
                                    onChange={event => setState({...state, firstname: event.target.value })}
                                    error={state.firstname  === ""}
                                    fullWidth= {true}
                                    required
                                    />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField                                                                                                
                                    id="lastname"
                                    label="Last Name"
                                    placeholder="Last Name"
                                    variant="standard"
                                    helperText= {state.lastname === "" ?"Last name is required.":""}
                                    onChange={event => setState({...state, lastname: event.target.value })}
                                    error={state.lastname  === ""}
                                    required
                                    fullWidth= {true}
                                    />
                            </Grid>
                            <Grid  item xs={12} sm={6}>
                                <TextField                                                
                                    id="company"
                                    label="Company"
                                    placeholder="Company"
                                    variant="standard"
                                    helperText= {state.company === "" ?"City is required.":""}
                                    onChange={event => setState({...state, company: event.target.value })}
                                    error={state.company  === ""}
                                    required
                                    fullWidth= {true}
                                    />
                            </Grid>
                            <Grid  item xs={12} sm={6}>
                                <TextField                                                
                                    id="email"
                                    label="Email"
                                    placeholder="example@email.com"
                                    variant="standard"
                                    helperText= {state.email === "" ?"Email is required.":""}
                                    onChange={event => setState({...state, email: event.target.value })}
                                    error={state.email  === ""}
                                    required
                                    fullWidth= {true}
                                    />
                            </Grid>
                            <Grid  item xs={12} sm={6}>
                                <TextField
                                    id="password"
                                    label="Password"
                                    type="password"
                                    variant="standard"
                                    helperText= {state.password === "" ?"Password is required.":""}
                                    onChange={event => setState({...state, password: event.target.value })}
                                    error={state.password  === ""}
                                    fullWidth= {true}
                                    />
                            </Grid>
                            <Grid  item xs={12} sm={6}>
                                <TextField
                                    id="repassword"
                                    label="Repeat Password"
                                    type="password"
                                    variant="standard"
                                    helperText=  {state.repassword === "" ?"Repeat Password is required.":""}
                                    onChange={event => setState({...state, repassword: event.target.value })}
                                    error={state.repassword  === ""}
                                    fullWidth= {true}
                                    />
                            </Grid>
                    </Grid>
                </Box>
            </Box>
        </>,
        },
    
        {
            name: 'address',
            layout: 
            <>
                <Box>
                    <Typography variant='h5'>Address</Typography>
                    <Box sx={{mt:1}}>
                        <Grid container spacing={2} >                    
                            <Grid item xs={12}>
                                <TextField                                                
                                    id="address1"
                                    label="Address1"
                                    placeholder="Address 1"
                                    variant="standard"
                                    helperText= "address1 is required."
                                    fullWidth= {true}
                                    required
                                    />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField                                                                                                
                                    id="address2"
                                    label="Address2"
                                    placeholder="Address 2"
                                    variant="standard"
                                    helperText= "address2 is required."
                                    required
                                    fullWidth= {true}
                                    />
                            </Grid>
                            <Grid item xs={12}></Grid>
                        </Grid>
                    </Box>
                </Box>
                <Box >
                    <Grid container spacing={3}>
                        <Grid  item xs={12} sm={6}>
                            <TextField                                                
                                id="city"
                                label="City"
                                placeholder="City"
                                variant="standard"
                                helperText= "City is required."
                                required
                                fullWidth= {true}
                                />
                        </Grid>
                        <Grid  item xs={12} sm={3}>
                            <Autocomplete
                                    id="state"
                                    options={["State 1","State 2","State 3"]}
                                    getOptionLabel={(option) => option.toString()}
                                    defaultValue="State 1"
                                    renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        variant="standard"
                                        label="State"
                                        fullWidth= {true}
                                        InputLabelProps={{ }}
                                    />
                                    )} />
                        </Grid>
                        <Grid  item xs={12} sm={3}>
                            <TextField
                                    variant="standard"
                                    label="ZipCode"
                                    fullWidth= {true}
                                    InputLabelProps={{ }}
                                />
                        </Grid>
                    </Grid>
                </Box>
            </>
            
        },
        {
            name: 'social',
            layout: <>
                <Box>
                    <Typography variant='h5'>Socials</Typography>
                    <Box sx={{mt:1}}>
                        <Grid container spacing={2} >                    
                            <Grid item xs={12}>
                                <TextField                                                
                                    id="twitter"
                                    label="Twitter Handle"
                                    placeholder="Twitter Handle"
                                    variant="standard"
                                    helperText= "Twitter Handle is required."
                                    fullWidth= {true}
                                    required
                                    />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField                                                
                                    id="facebook"
                                    label="Facebook Account"
                                    placeholder="Facebook Account"
                                    variant="standard"
                                    helperText= "Facebook Account is required."
                                    fullWidth= {true}
                                    required
                                    />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField                                                
                                    id="instagram"
                                    label="Instagram Account"
                                    placeholder="Instagram Account"
                                    variant="standard"
                                    helperText= "Instagram Account is required."
                                    fullWidth= {true}
                                    required
                                    />
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </>
        },
        {
            name: 'profile',
            layout: <>
             <Box>
                    <Typography variant='h5'>Profile</Typography>
                    <Box sx={{mt:1}}>
                        <Grid container spacing={2} >                    
                            <Grid item xs={12}>
                                <TextField                                                
                                    id="title"
                                    label="Title"
                                    placeholder="Title"
                                    variant="standard"
                                    helperText= "Title is required."
                                    fullWidth= {true}
                                    required
                                    />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField                                                
                                    id="resume"
                                    label="Resume"
                                    placeholder="This is about me"
                                    multiline
                                    rows={4}
                                    variant="standard"
                                    fullWidth= {true}
                                    />
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </>
        },
      ];

    return (
        <Box sx={{ flexGrow: 1,
            height: "640px"
        }}>
            <Grid container  sx={{
                justifyContent:'center',
                alignItems:'center', 
                mt:8,
                mb: 20,
                height:'100%'
            }}>                    
                <Grid item xs={12} lg={8}>
                    <FormControl variant="standard" sx={{width: '100%'}}>
                        <Paper 
                            sx={{
                                mt:-8,
                                mr: 3,
                                ml: 3,
                                p: 2,
                                display: 'flex',
                                borderRadius:2,
                                flexDirection: 'column',
                                width: '100%',
                                height: '100%',
                            }}
                        >
                            <Box sx={{mt:-6}}>
                                <Stepper activeStep={activeStep} alternativeLabel 
                                    sx={{
                                        background:'linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))',
                                        borderRadius: 2,
                                        boxShadow:'rgb(0 0 0 / 14%) 0rem 0.25rem 1.25rem 0rem, rgb(0 187 212 / 40%) 0rem 0.4375rem 0.625rem -0.3125rem',
                                        p:2,
                                    }}>
                                    {steps.map((step) => (
                                        <Step key={step.name} >
                                            <StepLabel 
                                                sx={{
                                                    color:'rgba(255, 255, 255, 0.8) !important',                                                    
                                                    textTransform:'uppercase',
                                                    fontWeight:'400 !important',
                                                    "& .MuiStepLabel-labelContainer":{
                                                        "& .MuiStepLabel-label":{
                                                            color:'rgba(255, 255, 255, 0.8)',
                                                        },
                                                        "& .Mui-active, .Mui-completed":{
                                                            color:'rgb(255, 255, 255)',
                                                        },
                                                    },
                                                    "& .MuiStepLabel-iconContainer":{
                                                        "& .MuiStepIcon-root":{
                                                            color:'rgba(255, 255, 255, 0.8)',
                                                        },
                                                        "& .Mui-active, .Mui-completed":{
                                                            color:'rgb(255, 255, 255)',
                                                        },
                                                    },

                                                }}
                                            >{step.name}</StepLabel>
                                        </Step>
                                    ))}
                                </Stepper>
                            </Box>
                            <Box sx={{pt:4, pl:2, pr:2}}>
                                {steps[activeStep].layout}
                            </Box>
                            <Box sx={{p:2}}>
                               
                                <Box sx={{display:'flex', justifyContent:'space-between', pt:4}}>
                                    {activeStep !== 0 ? <Button variant="contained" sx={{
                                        borderRadius:2, 
                                        color: '#000',
                                        backgroundImage:'linear-gradient(195deg, rgb(235, 239, 244), rgb(206, 212, 218))'
                                    }} color="primary" onClick={handleBack}>Back</Button>:(<Box />)}
                                    {activeStep !== steps.length-1 ? (<Button variant="contained" sx={{borderRadius:2}} onClick={handleNext}>Next</Button>):(<Box />)}
                                </Box>
                            </Box>
                        </Paper>
                    </FormControl>

                </Grid>
            </Grid>
        </Box>
    )
}
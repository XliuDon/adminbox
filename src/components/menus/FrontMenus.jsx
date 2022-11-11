import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';
import {ABIcon} from '../icons/ABIcon';
import Grid from '@mui/material/Grid';
import ABDivider from '../ABDivider';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

const pageMenu = ((handleClose)=>(
    <Box sx={{display:'flex', p:3}}>
        <Grid container spacing={4} >                    
            <Grid item xs={12} md={4} sx={{ 
                justifyContent: 'space-between', 
                display:{sm:'block',md:'flex'},
                flexDirection: {sm:'column',md:'row'}}}>
                <Box sx={{display:'block'
                }}>
                    <Box sx={{display:'flex', alignItems:'center', p:1}}>
                        <ABIcon iconName={'dashboard'} />
                        <Typography variant="button" sx={{pl:1.5}}>Dashboard</Typography>
                    </Box>
                    <MenuItem onClick={handleClose} sx={{padding:'4px 12px',borderRadius:2 }}>
                        <Typography variant="menu" sx={{padding:'0 28px'}}>Analytics</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleClose} sx={{padding:'4px 12px',borderRadius:2 }}>
                        <Typography variant="menu" sx={{padding:'0 28px'}}>Sales</Typography>
                    </MenuItem>
                    <Box sx={{display:'flex', alignItems:'center',p:1.5, mt:2}}>
                        <ABIcon iconName={'people'} />
                        <Typography variant="button" sx={{pl:1}}>Users</Typography>
                    </Box>
                    <MenuItem onClick={handleClose} sx={{padding:'4px 12px',borderRadius:2}}>
                        <Typography variant="menu" sx={{padding:'0 28px'}}>Report</Typography>
                    </MenuItem>
                </Box>
                <ABDivider orientation='vertical' sx={{display: { xs: 'none', md:'flex' }}}/>
            </Grid>
            <Grid item xs={12} md={4} sx={{ 
                justifyContent: 'space-between', 
                display:{sm:'block',md:'flex'},
                flexDirection: {sm:'column',md:'row'}}}>
                <Box sx={{display:'block', }}>
                    <Box sx={{display:'flex', alignItems:'center', p:1}}>
                        <ABIcon iconName={'queue_play_next'} />
                        <Typography variant="button" sx={{pl:1.5}}>Extra</Typography>
                    </Box>
                    <MenuItem onClick={handleClose} sx={{padding:'4px 12px',borderRadius:2}}>
                        <Typography variant="menu" sx={{pl:3.5}}>Price Page</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleClose} sx={{padding:'4px 12px',borderRadius:2}}>
                        <Typography variant="menu" sx={{pl:3.5}}>RTL</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleClose} sx={{padding:'4px 12px',borderRadius:2}}>
                        <Typography variant="menu" sx={{pl:3.5}}>Widget</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleClose} sx={{padding:'4px 12px',borderRadius:2}}>
                        <Typography variant="menu" sx={{pl:3.5}}>Charts</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleClose} sx={{padding:'4px 12px',borderRadius:2}}>
                        <Typography variant="menu" sx={{pl:3.5}}>Notifications</Typography>
                    </MenuItem>
                    <Box sx={{display:'flex', alignItems:'center', p:1, mt:2}}>
                        <ABIcon iconName={'cottage'} />
                        <Typography variant="button" sx={{pl:1.5}}>Projects</Typography>
                    </Box>
                    <MenuItem onClick={handleClose} sx={{padding:'4px 12px',borderRadius:2}}>
                        <Typography variant="menu" sx={{pl:3.5}}>Time line</Typography>
                    </MenuItem>
                </Box>
                <ABDivider orientation='vertical' sx={{display: { xs: 'none', md: 'flex' }}}/>
            </Grid>
            <Grid item xs={12} md={4} sx={{ 
                justifyContent: 'space-between', 
                display:{sm:'block',md:'flex'},
                flexDirection: {sm:'column',md:'row'}}}>
                <Box sx={{display:'block',  }}>
                    <Box sx={{display:'flex', alignItems:'center', p:1}}>
                        <ABIcon iconName={'account_balance'} />
                        <Typography variant="button" sx={{pl:1.5}}>Amount</Typography>
                    </Box>
                    <MenuItem onClick={handleClose} sx={{padding:'4px 12px',borderRadius:2}}>
                        <Typography variant="menu" sx={{pl:3.5}}>Settings</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleClose} sx={{padding:'4px 12px',borderRadius:2}}>
                        <Typography variant="menu" sx={{pl:3.5}}>Billings</Typography>
                    </MenuItem>
                    <Box sx={{display:'flex', alignItems:'center',p:1.5, mt:2}}>
                        <ABIcon iconName={'people'} />
                        <Typography variant="button" sx={{pl:1}}>Users</Typography>
                    </Box>
                    <MenuItem onClick={handleClose} sx={{padding:'4px 12px',borderRadius:2}}>
                        <Typography variant="menu" sx={{pl:3.5}}>Invoice</Typography>
                    </MenuItem>
                    <Box sx={{display:'flex', alignItems:'center', p:1, mt:2}}>
                        <ABIcon iconName={'badge'} />
                        <Typography variant="button" sx={{pl:1.5}}>Profile</Typography>
                    </Box>
                    <MenuItem onClick={handleClose} sx={{padding:'4px 12px',borderRadius:2}}>
                        <Typography variant="menu" sx={{pl:3.5}}>Profile view</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleClose} sx={{padding:'4px 12px',borderRadius:2}}>
                        <Typography variant="menu" sx={{pl:3.5}}>All projects</Typography>
                    </MenuItem>
                </Box>
            </Grid>
        </Grid>
    </Box>
));

const applicationMenu = ((handleClose)=>(
    <Box sx={{display:'flex', p:2}}>
        <Grid container spacing={2} >                    
            <Grid item xs={12} md={4} sx={{ 
                justifyContent: 'space-between', 
                display:{sm:'block',md:'flex'},
                flexDirection: {sm:'column',md:'row'}}}>
                <Box sx={{display:'block'
                }}>
                    <MenuItem onClick={handleClose} sx={{padding:'4px 12px',borderRadius:2 }}>
                        <ListItemIcon>
                            <ABIcon iconName={'widgets'} />
                        </ListItemIcon>
                        <ListItemText><Typography variant="menu">Kan ban</Typography></ListItemText>
                    </MenuItem>
                    <MenuItem onClick={handleClose} sx={{padding:'4px 12px',borderRadius:2 }}>
                        <ListItemIcon>
                            <ABIcon iconName={'import_contacts'} />
                        </ListItemIcon>
                        <ListItemText><Typography variant="menu">Wizard</Typography></ListItemText>
                    </MenuItem>
                    <MenuItem onClick={handleClose} sx={{padding:'4px 12px',borderRadius:2 }}>
                        <ListItemIcon>
                            <ABIcon iconName={'backup_table'} />
                        </ListItemIcon>
                        <ListItemText><Typography variant="menu">Data Tables</Typography></ListItemText>
                    </MenuItem>
                    <MenuItem onClick={handleClose} sx={{padding:'4px 12px',borderRadius:2 }}>
                        <ListItemIcon>
                            <ABIcon iconName={'event'} />
                        </ListItemIcon>
                        <ListItemText><Typography variant="menu">Calendar</Typography></ListItemText>
                    </MenuItem>
                </Box>
            </Grid>
        </Grid>
    </Box>
));

const authMenu = ((handleClose)=>(
    <Box sx={{display:'flex', p:2}}>
        <Grid container spacing={2} >                    
            <Grid item xs={12} sx={{ 
                justifyContent: 'space-between', 
                display:{sm:'block',md:'flex'},
                flexDirection: {sm:'column',md:'row'}}}>
                <Box sx={{display:'block'
                }}>
                    <MenuItem onClick={handleClose} sx={{padding:'4px 12px',borderRadius:2 }}>
                        <ListItemIcon>
                            <ABIcon iconName={'login'} />
                        </ListItemIcon>
                        <ListItemText><Typography variant="menu">Sign in</Typography></ListItemText>
                    </MenuItem>
                    <MenuItem onClick={handleClose} sx={{padding:'4px 12px',borderRadius:2 }}>
                        <ListItemIcon>
                            <ABIcon iconName={'assignment'} />
                        </ListItemIcon>
                        <ListItemText><Typography variant="menu">Sign Up</Typography></ListItemText>
                    </MenuItem>
                    <MenuItem onClick={handleClose} sx={{padding:'4px 12px',borderRadius:2 }}>
                        <ListItemIcon>
                            <ABIcon iconName={'refresh'} />
                        </ListItemIcon>
                        <ListItemText><Typography variant="menu">Reset password</Typography></ListItemText>
                    </MenuItem>
                </Box>
            </Grid>
        </Grid>
    </Box>
));


const eCommerceMenu = ((handleClose)=>(
    <Box sx={{display:'flex', p:2}}>
        <Grid container spacing={2} >                    
            <Grid item xs={12} md={6} sx={{ 
                justifyContent: 'space-between', 
                display:{sm:'block',md:'flex'},
                flexDirection: {sm:'column',md:'row'}}}>
                <Box sx={{display:'block'
                }}>
                    <Box sx={{display:'flex', alignItems:'center', p:1}}>
                        <ABIcon iconName={'shopping_card'} />
                        <Typography variant="button" sx={{pl:1.5}}>Orders</Typography>
                    </Box>
                    <MenuItem onClick={handleClose} sx={{padding:'4px 12px',borderRadius:2 }}>
                        <Typography variant="menu" sx={{padding:'0 28px'}}>Order List</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleClose} sx={{padding:'4px 12px',borderRadius:2 }}>
                        <Typography variant="menu" sx={{padding:'0 28px'}}>Order Detail</Typography>
                    </MenuItem>
                </Box>
                <ABDivider orientation='vertical' sx={{display: { xs: 'none', md: 'flex' }}}/>
            </Grid>
            <Grid item xs={12} md={6} sx={{ 
                justifyContent: 'space-between', 
                display:{sm:'block',md:'flex'},
                flexDirection: {sm:'column',md:'row'}}}>
                <Box sx={{display:'block'
                }}>
                    <Box sx={{display:'flex', alignItems:'center', p:1}}>
                        <ABIcon iconName={'memory'} />
                        <Typography variant="button" sx={{pl:1.5}}>Products</Typography>
                    </Box>
                    <MenuItem onClick={handleClose} sx={{padding:'4px 12px',borderRadius:2 }}>
                        <Typography variant="menu" sx={{padding:'0 28px'}}>New Product</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleClose} sx={{padding:'4px 12px',borderRadius:2 }}>
                        <Typography variant="menu" sx={{padding:'0 28px'}}>Edit Product</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleClose} sx={{padding:'4px 12px',borderRadius:2 }}>
                        <Typography variant="menu" sx={{padding:'0 28px'}}>View Product</Typography>
                    </MenuItem>
                </Box>
            </Grid>
        </Grid>
    </Box>
));

const mainMenu =((handleClose)=>(
    <>
        <MenuItem onClick={handleClose} sx={{padding:'4px 12px',borderRadius:2 }}>
            <ListItemText ><Typography variant="button" sx={{padding:'0 10px'}}>Page</Typography></ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{padding:'4px 12px',borderRadius:2 }}>
            <ListItemText ><Typography variant="button" sx={{padding:'0 10px'}}>authentication</Typography></ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{padding:'4px 12px',borderRadius:2 }}>
            <ListItemText ><Typography variant="button" sx={{padding:'0 10px'}}>applications</Typography></ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{padding:'4px 12px',borderRadius:2}}>
        <ListItemText ><Typography variant="button" sx={{padding:'0 10px'}}>ecommerce</Typography></ListItemText>
        </MenuItem>
    </>
));

 export default function  FrontMenus ({...props }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClose = () => {        
        setAnchorEl(null);
    };

    const handleClick = (event, menudata) => {
        console.log("enter")
         setMenuContent(menudata)
        setAnchorEl(event.currentTarget);
    };
    

    const leave = ()=>{
        console.log("leave")
    }
    const [menuContent, setMenuContent] = React.useState(pageMenu(handleClose));

    const handleMobileMenuOpen = (event) => {
        setMenuContent(mainMenu(handleClose));
        setAnchorEl(event.currentTarget);
      };

    return (
        <Box >
            <Box sx={{textTransform: 'capitalize', display: { xs: 'none', md: 'flex' }}} gap={2}>                
                <Box
                    id='menu-page'
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    // onClick={handleClick}
                    onMouseEnter={(event) => handleClick(event, pageMenu(handleClose))}
                    style={{ zIndex: 1301 }}
                    sx={{
                        display: 'flex',
                        color: 'inhert',
                        cursor: 'pointer',
                    }}
                >
                    <Typography variant="button">pages</Typography>
                    <ABIcon iconName={anchorEl && anchorEl.id==='menu-page' ?'keyboard_arrow_up':'keyboard_arrow_down'} />
                </Box>
                <Box
                    id='menu-auth'
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    // onClick={handleClick}
                    onMouseEnter={(event) => handleClick(event, authMenu(handleClose))}
                    onMouseLeave= {leave} 
                    style={{ zIndex: 1301 }}
                    sx={{
                        display: 'flex',
                        color: 'inhert',
                        cursor: 'pointer',
                    }}
                >
                    <Typography variant="button">Authentication</Typography>
                    <ABIcon iconName={anchorEl && anchorEl.id==='menu-auth' ?'keyboard_arrow_up':'keyboard_arrow_down'} />
                </Box>

                <Box
                    id='menu-app'
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    // onClick={handleClick}
                    onMouseEnter={(event) => handleClick(event, applicationMenu(handleClose))}
                    onMouseLeave= {leave} 
                    style={{ zIndex: 1301 }}
                    sx={{
                        display: 'flex',
                        color: 'inhert',
                        cursor: 'pointer',
                    }}
                >
                    <Typography variant="button">applications</Typography>
                    <ABIcon iconName={anchorEl && anchorEl.id==='menu-app' ?'keyboard_arrow_up':'keyboard_arrow_down'} />
                </Box>

                <Box
                    id='menu-ecommerce'
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    // onClick={handleClick}
                    onMouseEnter={(event) => handleClick(event, eCommerceMenu(handleClose))}
                    onMouseLeave= {leave} 
                    style={{ zIndex: 1301 }}
                    sx={{
                        display: 'flex',
                        color: 'inhert',
                        cursor: 'pointer',
                    }}
                >
                    <Typography variant="button">eCommerce</Typography>
                    <ABIcon iconName={anchorEl && anchorEl.id==='menu-ecommerce' ?'keyboard_arrow_up':'keyboard_arrow_down'} />
                </Box>                
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                size="large"
                aria-label="show more"
                aria-controls={open ? 'basic-mobile-menu' : undefined}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
                >
                    <MenuIcon />
                </IconButton>
            </Box>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    onMouseLeave: handleClose 
                }}
                sx={{width:{xs:'80%'}}}         
            >
                {menuContent}
                
            </Menu>
            <Menu
                id="basic-mobile-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    onMouseLeave: handleClose 
                }}
                sx={{width:{xs:'80%'}}}         
            >
                {menuContent}
                
            </Menu>
        </Box>
    );
 }


import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Icon from '@mui/material/Icon';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import {ABBookingCard} from '../../components/index';
import {ABIconTabs, ABDivider} from '../../components/index';


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

const vehicleTypes = [
    "三箱轿车","两箱轿车","SUV", "皮卡"
]

const vehicleColors = [
    "白色","黑色","红色", "蓝色","天蓝色","银色","灰色","卡其色","黄色","绿色","粉色"
]

const vehicleStatus= [
    "已出租","闲置","维修", "报废"
]

const owerStores = [
    "高薪店","天府店","金牛店"
]

export default function AddEditVehicle() {
    
    const images = [
        "/static/vehicles/tesla-m3_1.jpg",
        "/static/vehicles/tesla-m3_2.jpg",
        "/static/vehicles/tesla-m3_3.jpg",
    ];

    const actions=() => {}

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
                <Grid container spacing={3}>
                    <Grid item sm={12}>
                        <Box>
                            <Grid container spacing={3} >                    
                                {/* Profile */}
                                <Grid item xs={12} id="vehicle_view">
                                    <Paper  elevation={3} sx={{borderRadius:3,p:{xs:1,md:3}}}>
                                        <Box sx={{
                                                justifyContent:"center",
                                                width:{xs:350, md:800},
                                                mx:"auto"
                                            }}
                                            alignItems="center"
                                        >
                                            <Slide >
                                                {images.map((item, index)=>(<Box key={'image_'+index} >
                                                        <Box sx={{backgroundImage:`url(${item})`,
                                                                display: 'flex',
                                                                justifyContent:'center',
                                                                backgroundSize:'cover',
                                                                height:400, 
                                                                borderRadius:2,
                                                                boxShadow: 'rgb(0 0 0 / 10%) 0rem 0.25rem 0.375rem -0.0625rem, rgb(0 0 0 / 6%) 0rem 0.125rem 0.25rem -0.0625rem',
                                                                position: "relative",
                                                                zIndex: 1,                                                               
                                                            }} alignItems="center">
                                                        </Box>
                                                        
                                                        <Box sx={{
                                                                    width: '100%',
                                                                    height: '100%',
                                                                    position: 'absolute',
                                                                    left: 0,
                                                                    top: 0,
                                                                    boxShadow: 2,
                                                                    transform: 'scale(0.94)',
                                                                    borderRadius: 2,
                                                                    filter: 'blur(12px)',
                                                                    background: `url(${item}) 0% 0% / cover transparent`,

                                                                }}/>                                                        
                                                </Box>))}
                                            </Slide>
                                            
                                            {/* <ABBookingCard 
                                                image="/static/vehicles/tesla-m3.jpg" 
                                                title="Tesla Model 3"  
                                                description="Tesla Model 3" 
                                                price="$459/Month" 
                                                location="Shanghai, China" 
                                                action = {actions()}
                                            />                                             */}
                                        </Box>
                                    </Paper>
                                </Grid>

                                {/* Vehicle Info */}
                                <Grid item xs={12} id="basic_info">
                                    <Paper  elevation={3} sx={{borderRadius:3}}>
                                        <Box sx={{p:3}}>
                                            <Typography variant='h5' color='secondary'>车辆信息</Typography>
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
                                                        required                                        
                                                        id="plate_number"
                                                        label="车牌号"
                                                        placeholder="京 A123456"
                                                        variant="standard"
                                                        fullWidth= {true}
                                                        InputLabelProps={{ shrink: true, style: { fontSize: "1rem" }, }}
                                                        />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <TextField
                                                        required                                                
                                                        id="vin"
                                                        label="车架号(VIN)"
                                                        placeholder=""
                                                        variant="standard"
                                                        fullWidth= {true}
                                                        InputLabelProps={{ shrink: true, style: { fontSize: "1rem" }, }}
                                                        />
                                                </Grid>                                              
                                                <Grid item xs={12} sm={6}>
                                                    <Autocomplete
                                                        required                                                        
                                                        id="vehicle_type"
                                                        options={vehicleTypes}
                                                        getOptionLabel={(option) => option}                                                        
                                                        renderInput={(params) => (
                                                            <TextField
                                                                {...params}
                                                                variant="standard"
                                                                label="车型"
                                                                fullWidth= {true}
                                                                InputLabelProps={{ shrink: true, style: { fontSize: "1rem" }, }}
                                                            />
                                                        )} />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <Autocomplete      
                                                        required                                                  
                                                        id="vehicle_color"
                                                        options={vehicleColors}
                                                        getOptionLabel={(option) => option}                                                        
                                                        renderInput={(params) => (
                                                            <TextField
                                                                {...params}
                                                                variant="standard"
                                                                label="颜色"
                                                                fullWidth= {true}
                                                                InputLabelProps={{ shrink: true, style: { fontSize: "1rem" }, }}
                                                            />
                                                        )} />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <TextField     
                                                        required                                           
                                                        id="brand"
                                                        label="品牌"
                                                        placeholder="丰田"
                                                        variant="standard"
                                                        fullWidth= {true}
                                                        InputLabelProps={{ shrink: true, style: { fontSize: "1rem" }, }}
                                                        />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <TextField                                                
                                                        id="product_date"
                                                        label="出厂日期"
                                                        placeholder="2012/3/15"
                                                        variant="standard"
                                                        fullWidth= {true}
                                                        InputLabelProps={{ shrink: true, style: { fontSize: "1rem" }, }}
                                                        />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <TextField                                                
                                                        id="registration_startdate"
                                                        label="行驶证有效开始日期"
                                                        placeholder="2012/5/15"
                                                        variant="standard"
                                                        fullWidth= {true}
                                                        InputLabelProps={{ shrink: true, style: { fontSize: "1rem" }, }}
                                                        />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <TextField                                                
                                                        id="registration_startdate"
                                                        label="行驶证有效结束日期"
                                                        placeholder="2018/5/15"
                                                        variant="standard"
                                                        fullWidth= {true}
                                                        InputLabelProps={{ shrink: true, style: { fontSize: "1rem" }, }}
                                                        />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <TextField                                                
                                                        id="product_mileage"
                                                        label="里程数（公里）"
                                                        placeholder="0"
                                                        variant="standard"
                                                        type="number"
                                                        fullWidth= {true}
                                                        InputLabelProps={{ shrink: true, style: { fontSize: "1rem" }, }}
                                                        />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <Autocomplete      
                                                        required                                                  
                                                        id="vehicle_status"
                                                        options={vehicleStatus}
                                                        getOptionLabel={(option) => option}                                                        
                                                        renderInput={(params) => (
                                                            <TextField
                                                                {...params}
                                                                variant="standard"
                                                                label="车辆状态"
                                                                fullWidth= {true}
                                                                InputLabelProps={{ shrink: true, style: { fontSize: "1rem" }, }}
                                                            />
                                                        )} />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <Autocomplete      
                                                        required                                                  
                                                        id="ower_store"
                                                        options={owerStores}
                                                        getOptionLabel={(option) => option}                                                        
                                                        renderInput={(params) => (
                                                            <TextField
                                                                {...params}
                                                                variant="standard"
                                                                label="所属门店"
                                                                fullWidth= {true}
                                                                InputLabelProps={{ shrink: true, style: { fontSize: "1rem" }, }}
                                                            />
                                                        )} />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Box gap={2} alignItems="center" sx={{display:'flex', p:2,  justifyContent:'center',mx:'auto'}}>
                                                        <Button variant="contained" sx={{borderRadius:2}}>保存</Button>
                                                        <Button variant="contained" sx={{borderRadius:2}}>取消</Button>
                                                    </Box>                                                    
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Paper>
                                </Grid>

                                {/* attachments */}
                                <Grid item xs={12} id="attachments">
                                    <Paper  elevation={3} sx={{borderRadius:3}}>
                                        <Box sx={{p:3 }}>
                                            <Typography variant='h5' color='secondary'>附件</Typography>
                                        </Box>
                                        <Box                                            
                                            sx={{
                                                pl:3,pr:3,pb:3
                                            }}
                                            >
                                            <Box
                                                sx={{display:'flex', justifyContent:"space-between"}}
                                            >
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
                                                        <Icon sx={{w:1, h:1}}>{'attachment'}</Icon>                                                        
                                                        <Typography variant='caption' sx={{p:1}}>行驶证</Typography>                                                        
                                                 </Link>
                                                 <Box sx={{display:'flex', alignItems:'center'}}>
                                                    <Button sx={{borderRadius:3, ml:2}} variant="outlined">删除</Button>
                                                 </Box>
                                            </Box>
                                            <ABDivider />
                                        </Box>
                                    </Paper>
                                </Grid>

                                 {/* Delete Vehicle */}
                                 <Grid item xs={12} id="delete_account">
                                    <Paper  elevation={3} sx={{borderRadius:3, display: 'flex', justifyContent:'space-between'}}>
                                        <Box sx={{p:3}}>
                                            <Typography variant='h5' color='secondary'>删除信息</Typography>
                                            <Typography variant='body1'>一旦信息被删除，数据降无法被恢复，确定需要删除吗？.</Typography>
                                        </Box>
                                        <Box gap={2} alignItems="center" sx={{display:'flex', p:2}}>
                                            <Button variant="contained" color="error" sx={{borderRadius:2}}>删除车辆</Button>
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
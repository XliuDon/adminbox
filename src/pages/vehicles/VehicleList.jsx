import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
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

import {ABDivider, ABTable} from '../../components/index';
import {VehicleListData, VehicleListHeaders} from '../../data/fakerData'


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

export default function VehicleList() {    
    const images = [
        "/static/vehicles/tesla-m3_1.jpg",
        "/static/vehicles/tesla-m3_2.jpg",
        "/static/vehicles/tesla-m3_3.jpg",
    ];

    const actions=() => {}

    return (
        <Box >
            <Box sx={{mt:4}}>
                <Grid container spacing={3}>
                    <Grid item sm={12}>
                        <Box>
                            <Grid container spacing={3} >                    

                                {/* search conditions */}
                                <Grid item xs={12} id="search_conditions">
                                    <Paper  elevation={3} sx={{borderRadius:3}}>
                                        <Box sx={{p:3}}>
                                            <Typography variant='h5' color='secondary'>查询条件</Typography>
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
                                                    <TextField                                           
                                                        id="brand"
                                                        label="品牌"
                                                        placeholder="丰田"
                                                        variant="standard"
                                                        fullWidth= {true}
                                                        InputLabelProps={{ shrink: true, style: { fontSize: "1rem" }, }}
                                                        />
                                                </Grid>                                                
                                                <Grid item xs={12} sm={6}>
                                                    <Autocomplete                                                
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
                                                        <Button variant="contained" sx={{borderRadius:2}}>查询</Button>
                                                    </Box>                                                    
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Paper>
                                </Grid>

                                {/* vehicle list */}
                                <Grid item xs={12} id="vehicle_list">
                                    <Paper  elevation={3} sx={{borderRadius:3}}>
                                        <Box sx={{p:3 }}>
                                            <Typography variant='h5' color='secondary'>车辆列表</Typography>
                                        </Box>
                                        <Box>
                                            <ABTable 
                                                headers = {VehicleListHeaders}
                                                rows ={VehicleListData} />                                            
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
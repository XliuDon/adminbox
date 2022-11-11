import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';
import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from '@react-jvectormap/world';
import Tooltip from '@mui/material/Tooltip';

import {ABViewCard, ABSalesTable, ABInfoCard, ABBookingCard} from '../../components/index';
import {ViewDataOptions, ViewData, SalesViewDataOptions,SalesViewData,SalesData} from '../../data/fakerData'

const actions=() => {
    return(
    <>
        <Tooltip title="Refresh" arrow sx={{color:'rgb(233, 30, 99)', cursor: "pointer"}}>
            <Icon >refresh</Icon>
        </Tooltip>
        <Tooltip title="Edit" arrow sx={{color:'rgb(26, 115, 232)', cursor: "pointer"}}>
            <Icon >edit</Icon>
        </Tooltip>
    </>
    );
}
export default function Analytics() {
    
    return (
        <Box sx={{mt:4}}>
            <Paper sx={{borderRadius:3, pl:2}}>
                <Box sx={{display: 'flex'}}>
                    <Box sx={{mr:2, ml:2, 
                        display:'flex', 
                        alignItems:'center', 
                        justifyContent:'center', 
                        width:'70px', 
                        height:'70px', 
                        marginLeft:'16px',
                        marginTop: '-16px',
                        background: 'linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71))',
                        color: '#fff',
                        borderRadius: 2,
                        boxShadow:2,
                        }}>
                        <Icon sx={{fontSize: '28px', overflow:'unset'}}>language</Icon>
                    </Box>
                    <Typography variant='h6' color="secondary" sx={{mt:2}}>Sales by Country</Typography>
                </Box>
                <Box sx={{p:2}}>
                    <Grid container spacing={3} >                    
                        <Grid item  md={12} lg={6}>
                            <ABSalesTable                 
                                rows ={SalesData}
                            />
                        </Grid>
                        <Grid item md={12} lg={6} sx={{p:2}}>
                            <VectorMap map={worldMill} 
                                    zoomOnScroll = {false}
                                    zoomButtons = {false}
                                    backgroundColor="transparent"
                                    regionStyle={{
                                        initial: {
                                            fill: "#DEE2E7"
                                        },
                                        hover: {
                                            fill: "#A0D1DC"
                                        }
                                    }}
                                    series={{
                                        markers: [
                                        {
                                            attribute: "r",
                                            scale: [0.5, 10],
                                            values: [7, 7, 7],
                                            normalizeFunction: "polynomial"
                                        }
                                        ]
                                    }} 
                                    
                                    markerStyle ={{
                                        initial: {
                                            fill: '#E91E63',
                                            stroke: '#fff',
                                            "fill-opacity": 1,
                                            "stroke-width": 5,
                                            "stroke-opacity": 0.5,
                                            r: 7
                                        },
                                        hover: {
                                            stroke: '#fff',
                                            "stroke-width": 2,
                                            cursor: 'pointer',                                        
                                            fill: 'black',
                                        },
                                        selected: {
                                            fill: 'blue'
                                        },
                                        selectedHover: {
                                        }
                                    }}

                                    markers={[
                                        {                                      
                                            latLng: [ 40.73, -73.93],
                                            name: "United State",
                                            value: 16
                                        },
                                        {
                                            latLng: [51.16, 10.45],
                                            name: "Germany",
                                            value: 16
                                        },
                                        {
                                            latLng: [55.37, 3.43],
                                            name: "Great Britain",
                                            value: 16
                                        },
                                        {
                                            latLng: [14.23, 51.92],
                                            name: "Brasil",
                                            value: 16
                                        }
                                    ]}
                                />
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
            
            <Box >
                <Grid container spacing={3} >                    
                    <Grid item xs={12} md={4} sx={{mt:6}}>
                        <ABViewCard 
                            type = 'bar'
                            title="Website Views"
                            label="Last Campaign Performance" 
                            bgcolor="linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))" 
                            boxShadow="rgb(0 0 0 / 14%) 0rem 0.25rem 1.25rem 0rem, rgb(0 187 212 / 40%) 0rem 0.4375rem 0.625rem -0.3125rem" 
                            message="campaign sent 2 days ago"
                            options = {ViewDataOptions}
                            data ={ViewData}
                        />
                    </Grid>
                    <Grid item xs={12} md={4} sx={{mt:6}}>
                        <ABViewCard 
                                type = 'line'
                                title="Daily Sales"
                                label="(+15%) increase in today sales." 
                                bgcolor="linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71))" 
                                boxShadow="rgb(0 0 0 / 14%) 0rem 0.25rem 1.25rem 0rem, rgb(76 175 79 / 40%) 0rem 0.4375rem 0.625rem -0.3125rem" 
                                message="updated 4 min ago"
                                options = {SalesViewDataOptions}
                                data ={SalesViewData}
                            />
                    </Grid>
                    <Grid item xs={12} md={4} sx={{mt:6}}>
                        <ABViewCard 
                                type = 'line'
                                title="Completed Tasks"
                                label="Last Campaign Performance" 
                                bgcolor="linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))" 
                                boxShadow="rgb(0 0 0 / 14%) 0rem 0.25rem 1.25rem 0rem, rgb(64 64 64 / 40%) 0rem 0.4375rem 0.625rem -0.3125rem;" 
                                message="just updated"
                                options = {SalesViewDataOptions}
                                data ={SalesViewData}
                            />
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{pt:2,pb:2}}>
                <Grid container spacing={3} >                    
                    <Grid item xs={12} sm={6} md={3}>
                        <ABInfoCard 
                            iconName='weekend' 
                            iconBg='linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))'
                            boxShadow='rgb(0 0 0 / 14%) 0rem 0.25rem 1.25rem 0rem, rgb(64 64 64 / 40%) 0rem 0.4375rem 0.625rem -0.3125rem' 
                            title='Bookings' 
                            information='123' 
                            message={<Box sx={{display: 'flex', alignItems:'center'}} gap={1}>
                                <Typography variant='caption' sx={{color:'rgb(76, 175, 80)'}}>+55%</Typography>
                                <Typography variant='body1'>than lask week</Typography></Box>}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <ABInfoCard 
                            iconName='leaderboard' 
                            iconBg='linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))' 
                            boxShadow='rgb(0 0 0 / 14%) 0rem 0.25rem 1.25rem 0rem, rgb(0 187 212 / 40%) 0rem 0.4375rem 0.625rem -0.3125rem' 
                            title="Today's Users" 
                            information='2,300' 
                            message={<Box sx={{display: 'flex', alignItems:'center'}} gap={1}>
                                <Typography variant='caption' sx={{color:'rgb(76, 175, 80)'}}>+3%</Typography>
                                <Typography variant='body1'>than last month</Typography></Box>}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <ABInfoCard 
                            iconName='store' 
                            iconBg='linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71))' 
                            boxShadow='rgb(0 0 0 / 14%) 0rem 0.25rem 1.25rem 0rem, rgb(76 175 79 / 40%) 0rem 0.4375rem 0.625rem -0.3125rem' 
                            title="Revenue" 
                            information='34K' 
                            message={<Box sx={{display: 'flex', alignItems:'center'}} gap={1}>
                                <Typography variant='caption' sx={{color:'rgb(76, 175, 80)'}}>+1%</Typography>
                                <Typography variant='body1'>than yesterday</Typography></Box>}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <ABInfoCard 
                            iconName='person_add' 
                            iconBg='linear-gradient(195deg, rgb(236, 64, 122), rgb(216, 27, 96))' 
                            boxShadow='rgb(0 0 0 / 14%) 0rem 0.25rem 1.25rem 0rem, rgb(233 30 98 / 40%) 0rem 0.4375rem 0.625rem -0.3125rem' 
                            title="Followers" 
                            information='+91' 
                            message="Just updated"
                        />
                    </Grid>
                </Grid>
            </Box>
            
            <Box >
                <Grid container spacing={3} >                    
                    <Grid item xs={12} sm={6} md={4} sx={{mt:4}}>
                        <ABBookingCard 
                            image="/static/images/product-1.jpg" 
                            title="Cozy 5 Stars Apartment"  
                            description="The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to &quot;Naviglio&quot; where you can enjoy the main night life in Barcelona." 
                            price="$899/night" 
                            location="Barcelona, Spain" 
                            action = {actions()}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} sx={{mt:4}}>
                        <ABBookingCard 
                            image="/static/images/product-2.jpg" 
                            title="Office Studio"  
                            description="The place is close to Metro Station and bus stop just 2 min by walk and near to &quot;Naviglio&quot; where you can enjoy the night life in London, UK." 
                            price="$1.119/night" 
                            location="London, UK" 
                            action = {actions()}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} sx={{mt:4}}>
                        <ABBookingCard 
                            image="/static/images/product-3.jpg" 
                            title="Beautiful Castle"  
                            description="The place is close to Metro Station and bus stop just 2 min by walk and near to &quot;Naviglio&quot; where you can enjoy the night life in Milan." 
                            price="$459/night" 
                            location="Milan, Italy" 
                            action = {actions()}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
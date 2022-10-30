import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';
import Tooltip from '@mui/material/Tooltip';

import {ABSimpleItem,ABPieChart,ABLineChart,ABBarChart,ABSalesTable,ABTable} from '../../components/index';
import {PieChartData, PieChartOptions, LineChartData, LineChartOptions, BarChartOptions,BarChartData, SalesData2, TopSalesData, TopSalesHeaders} from '../../data/fakerData'

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
export default function Sales() {
    
    return (
        <Box sx={{mt:4}}>
            
            <Box sx={{mt:6}}>
                <Grid container spacing={3} >                    
                    <Grid item xs={12} md={4}>
                        <ABSimpleItem 
                            title="Sales" 
                            lable="6 May - 7 May" 
                            value="$230,220" 
                            message={
                                <>
                                    <Typography variant='caption' sx={{color:'rgb(76, 175, 80)', pr:0.5}}>+55%</Typography>
                                    since last month
                                </>                                
                            }
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ABSimpleItem 
                            title="Customers" 
                            lable="6 May - 7 May" 
                            value="1,000" 
                            message={
                                <>
                                    <Typography variant='caption' sx={{color:'rgb(76, 175, 80)', pr:0.5}}>+12%</Typography>
                                    since last month
                                </>                                
                            }
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ABSimpleItem 
                            title="Avg. Revenue" 
                            lable="6 May - 7 May" 
                            value="$1,200" 
                            message={
                                <>
                                    <Typography variant='caption' sx={{ pr:0.5}} color='error'>-$2,130</Typography>
                                    since last month
                                </>                                
                            }
                        />
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{mt:6}}>
                <Grid container spacing={3} >                    
                    <Grid item xs={12} md={4}>
                        <Paper elevation={2} sx={{p:2, borderRadius:2}}>
                            <ABPieChart 
                                title="Channels"
                                information="See traffic channels"
                                description={
                                    <>
                                    More than <Typography variant="caption">1,200,000</Typography> sales are made using referral marketing, and <Typography variant="caption">700,000</Typography> are from social media.
                                    </>
                                }
                                data = {PieChartData}
                                options = {PieChartOptions}
                            />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Paper elevation={2} sx={{p:2, borderRadius:2}}>
                            <ABLineChart 
                                title="Revenue"
                                information="See which ads perform better"
                                description={
                                    <>
                                    More than <Typography variant="caption">1,200,000</Typography> sales are made using referral marketing, and <Typography variant="caption">700,000</Typography> are from social media.
                                    </>
                                }
                                data = {LineChartData}
                                options = {LineChartOptions}
                            />
                        </Paper>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{mt:6}}>
                <Grid container spacing={3} >                    
                    <Grid item xs={12} md={8}>
                        <Paper elevation={2} sx={{p:2, borderRadius:2}}>
                            <ABBarChart 
                                title="Sales by age"
                                data = {BarChartData}
                                options = {BarChartOptions}
                            />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper elevation={2} sx={{p:2, borderRadius:2,height:'100%'}}>
                            <Box>
                                <Box > 
                                    <Typography variant="h6">Sales by Country</Typography>
                                </Box>
                                <Box>
                                    <ABSalesTable                 
                                        rows ={SalesData2}
                                    />
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{mt:6}}>
                <Grid container >                    
                    <Grid item xs={12}>
                        <Paper elevation={2} sx={{p:2, borderRadius:2}}>
                            <Box > 
                                <Typography variant="h6">Sales by Country</Typography>
                            </Box>
                            <Box>
                                <ABTable 
                                    headers = {TopSalesHeaders}
                                    rows ={TopSalesData} />
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
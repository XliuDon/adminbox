import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { faker } from '@faker-js/faker';
import Grid from '@mui/material/Grid';
import {ABEvents, ABTaskChart, ABNotificationCard, ABVerticalNotificationCard, ABCreditCard, ABCalendar,ABCategories,ABPlayer,ABTimeline} from '../../components'
import {Events, Tasks} from '../../data/fakerData'



const TaskOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    layout: {
        padding: {
            top: 20,
            left: 10,
            right: 10
        },
        
    },
    scales: {
        x: {
            grid: {         
              display: true,      
              drawTicks: true,
              borderDash:[5],
              drawBorder: false,
            },
            ticks:{
                padding: 8
            }
        },
        y: {
            grid: {           
                display: false,      
                drawTicks: false,
                borderDash:[5],
                drawBorder: false,
            },
            ticks:{
                padding: 8
            }
        }
    }
  };
  
  const Monthes = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','Nov','Dec'];
  
  const TaskData = {
    labels: Monthes,
    datasets: [
      {
        label: '',
        data: Monthes.map(() => faker.datatype.number({ min: 20, max: 50 })),
        borderColor: '#1a90ff',  
        fill: true,
        tension: 0.1,
        backgroundColor: [
          '#1a90ff',
        ],
      }
    ],
    
    offset: true
  };

  const Notification1 ={
    icon: 'battery_charging_full',
    title: 'Battery Health',
    info: '99 %'
  };
  const Notification2 ={
    icon: 'volume_down',
    title: 'Music Volume',
    info: '15/100'
  };
  const Notification3 ={
    icon: 'account_balance',
    title: 'Salary',
    info: 'Belong Interactive',
    value: '+$2000'
  };
  const Notification4 ={
    icon: 'paypal',
    title: 'Paypal',
    info: 'Freelance Payment',
    value: '$455.00'
  };
  const CreditCard ={
    number: '4562   1122   4594   7852',
    holder: 'Don Gravity',
    expires: '11/22',
  }

  const EventInfo = [
    { title: 'Meeting', start: new Date(),color: 'green' },
    { title: 'Lunch', start: new Date(Date.now() + ( 3600 * 1000 * 48)), color: 'orange' }
  ]

  const Cates = {
    title: 'Categories',
    cates: [
      {
        icon: 'launch',
        title: 'Devices',
        description: '250 in stock, 346+ sold',
        link: '#'
      },
      {
        icon: 'book_online',
        title: 'Tickets',
        description: '123 closed, 15 open',
        link: '#'
      },
      {
        icon: 'priority_high',
        title: 'Error logs',
        description: '1 is active, 40 closed',
        link: '#'
      },
      {
        icon: 'insert_emoticon',
        title: 'Happy users',
        description: '+ 430',
        link: '#'
      }
    ]
  }

  const Music ={
    name: 'Some Kind Of Blues',
    subtitle: 'Deftones'
  }

  const Timeline = {
    title: 'Orders overview',
    subtitle : ' 24% this month',
    events: [
      {
        icon: 'notifications',
        bgColor: 'rgb(76, 175, 80)',
        title: '$2400, Design changes',
        date: '22 DEC 7:20 PM'
      },
      {
        icon: 'inventory_2',
        bgColor: 'rgb(244, 67, 53)',
        title: 'New order #1832412',
        date: '21 DEC 11 PM'
      },
      {
        icon: 'shopping_cart',
        bgColor: 'rgb(26, 115, 232)',
        title: 'Server payments for April',
        date: '21 DEC 9:34 PM'
      },
      {
        icon: 'payment',
        bgColor: 'rgb(251, 140, 0)',
        title: 'New card added for order #4395133',
        date: '20 DEC 2:20 AM'
      },
      {
        icon: 'vpn_key',
        bgColor: 'rgb(233, 30, 99)',
        title: 'Register',
        date: '18 DEC 4:54 AM'
      },
    ]
  }
  export default function Widgets() {
    const task={...Tasks, options: TaskOptions, data: TaskData} 

    return (
        <Box sx={{ 
            flexGrow: 1,
        }}>
            <Box sx={{
              mb:3
            }}>
                <Grid container  spacing={3}>                    
                    <Grid item xs={12} sm={6} lg={4}>
                        <ABEvents events={Events} />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={8}>
                        <ABTaskChart task={task}/>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Grid container  spacing={3}>                    
                    <Grid item xs={12} sm={6} lg={3}>
                        <Box sx={{
                          display:'block'
                        }}>
                          <Box sx={{
                            mb:3
                          }}>
                            <ABNotificationCard notification={Notification1} />
                          </Box>
                          <Box sx={{
                            mb:3
                          }}>
                            <ABNotificationCard notification={Notification2} />
                          </Box>
                        </Box>                        
                    </Grid>
                    <Grid item xs={12} sm={6} lg={5}>   
                          <Box sx={{
                            display:'flex',
                            gap: 2
                          }}>
                            <Box sx={{width:'100%'}}>
                              <ABVerticalNotificationCard notification={Notification3} />
                            </Box>
                            <Box  sx={{width:'100%'}}>
                              <ABVerticalNotificationCard notification={Notification4} />
                            </Box>                            
                          </Box>                         
                    </Grid>
                    <Grid item xs={12} sm={12} lg={4}>
                      <Box  sx={{width:'100%'}}>
                        <ABCreditCard card={CreditCard} />
                      </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Grid container  spacing={3}>                    
                    <Grid item xs={12} lg={5}>
                        <ABCalendar events={EventInfo}/>
                    </Grid>
                    <Grid item xs={12} lg={3}>
                      <ABCategories categories={Cates} />
                      <Box sx={{mt:3}}><ABPlayer music={Music}/></Box>                      
                    </Grid>
                    <Grid item xs={12} lg={4}>
                      <ABTimeline timeline={Timeline}/>
                    </Grid>
                </Grid>
            
            </Box>
            <Box></Box>
            
        </Box>
    )
}
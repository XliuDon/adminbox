import React from "react";
import { faker } from '@faker-js/faker';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
import avatar from '../data/avatar.jpg'
import avatar2 from '../data/avatar2.jpg';
import avatar3 from '../data/avatar3.png';
import avatar4 from '../data/avatar4.jpg';

import coinbase from './logo-coinbase.svg'
import nasa from './logo-nasa.svg'
import netflix from './logo-netflix.svg'
import pinterest from './logo-pinterest.svg'
import spotify from './logo-spotify.svg'
import vodafone from './logo-vodafone.svg'

export const logos = [
  coinbase,
  nasa,
  netflix,
  pinterest,
  spotify,
  vodafone
]

export const breadcrumbNameMap = {
    '/profile': 'Profile',
    '/account':'Account',
    '/account/setting':'Setting',
    '/dashboards':'Dashboards',
    '/dashboards/analytics':'Analytics',
    '/dashboards/sales':'Sales',
    '/pages':'Pages',
    '/pages/projects':'Projects',
    '/pages/projects/allprojects':'All Projects',        
    '/pages/users':'Users',
    '/pages/users/newuser':'New User',
  };

  
export const ViewDataOptions = {
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
              color:'rgba(255, 255, 255, 0.3)',
              drawTicks: false,
              borderDash:[5],
              drawBorder: false,
            },
            ticks:{
                color:'rgba(255, 255, 255, 0.8)',
                padding: 8
            }
        },
        y: {
            grid: {                            
                color:'rgba(255, 255, 255, 0.3)',
                drawTicks: false,
                borderDash:[5],
                drawBorder: false,
            },
            ticks:{
                color:'rgba(255, 255, 255, 0.8)',
                padding: 8
            }
        }
    },
    color: '#fff'
  };
  
  const WeekDayShortlabels = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  
  export const ViewData = {
    labels: WeekDayShortlabels,
    datasets: [
      {
        label: 'Views',
        data: WeekDayShortlabels.map(() => faker.datatype.number({ min: 20, max: 60 })),
        backgroundColor: 'rgba(255, 255, 255, 0.8)',  
        barThickness: 5,
        borderRadius: 7,        
        clip: true,
        
      }
    ],
    
    offset: true
  };


  
export const SalesViewDataOptions = {
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
              display: false,      
              color:'rgba(255, 255, 255, 0.3)',
              drawTicks: true,
              borderDash:[5],
              drawBorder: false,
            },
            ticks:{
                color:'rgba(255, 255, 255, 0.8)',
                padding: 8
            }
        },
        y: {
            grid: {              
                color:'rgba(255, 255, 255, 0.3)',
                drawTicks: false,
                borderDash:[5],
                drawBorder: false,
            },
            ticks:{
                color:'rgba(255, 255, 255, 0.8)',
                padding: 8
            }
        }
    }
  };
  
  const SalesMonthes = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','Nov','Dec'];
  
  export const SalesViewData = {
    labels: SalesMonthes,
    datasets: [
      {
        label: 'Views',
        data: SalesMonthes.map(() => faker.datatype.number({ min: 200, max: 600 })),
        borderColor: 'rgba(255, 255, 255, 0.8)',  
        fill: true,
        tension: 0.1,
        backgroundColor: [
          'rgba(255, 255, 255, 0.8)',
        ],
      }
    ],
    
    offset: true
  };

  export const PieChartOptions = {
    plugins: {
      legend: {
        position: 'right',
        labels:{
          usePointStyle: true,
          pointStyle: 'circle',
          font: {
            size: 10
          }
        }
      },
      title: {
        display: false,
      },
      
    },
  }

  export const PieChartData = {
    labels: ['Facebook', 'Direct', 'Organic', 'Referral'],
    maintainAspectRatio: false,
    
    datasets: [
      {
        label: '# of Votes',
        data: [55, 12, 23, 10],
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(75, 192, 192, 0.8)',
        ],
        borderColor: [
          'rgba(255, 255, 255, 1)'
        ],
        borderWidth: 2,
      },
    ],
  }

  export const LineChartOptions = {
    plugins: {
      paddingBelowLegends: false,
      legend: {
        position: 'top',
        align: 'start',
        labels:{
          usePointStyle: true,
          pointStyle: 'circle',
          font: {
            size: 10
          },
          padding:20,
        }
      },
      title: {
        display: false,
      }     
    },
    scales: {
      x: {
          grid: { 
            drawTicks: false,
            borderDash:[5],
            drawBorder: false,
          },
          ticks:{
              padding: 8
          }
      },
      y: {
          grid: {                            
              drawTicks: false,
              borderDash:[5],
              drawBorder: false,
          },
          ticks:{
              padding: 8
          }
      }
    },
  }

  
  const AdsMonthes = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','Nov','Dec'];

  export const LineChartData = {
    labels: AdsMonthes,
    maintainAspectRatio: false,
    
    datasets: [
      {
        label: 'Facebook Ads',
        data: AdsMonthes.map(() => faker.datatype.number({ min: 0, max: 800 })),
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 0.8)'
        ],
        borderWidth: 4,
      },
      {
        label: 'Google Ads',
        data: AdsMonthes.map(() => faker.datatype.number({ min: 0, max: 800 })),
        backgroundColor: [
          'rgba(54, 162, 235, 0.8)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 0.8)',
        ],
        borderWidth: 4,
      },
    ],
  }


  

  export const BarChartOptions = {
    responsive: true,
    indexAxis: 'y' ,
    plugins: {
      paddingBelowLegends: false,
      legend: {
       display: false,
      },
      title: {
        display: false,
      }     
    },
    scales: {
      x: {
          grid: { 
            display: false,   
          },
          ticks:{
              padding: 20
          }
      },
      y: {
          grid: {                            
              drawTicks: false,
              borderDash:[5],
              drawBorder: false,
          },
          ticks:{
              padding: 8
          }
      }
    },
  }

  
  const BarLables = ['16-20', '21-25', '26-30', '31-36', '36-42', '42+'];

  export const BarChartData = {
    labels: BarLables,
    maintainAspectRatio: false,
    
    datasets: [      
      {
        label: 'Number',
        data: AdsMonthes.map(() => faker.datatype.number({ min: 0, max: 60 })),
        backgroundColor: [
          'rgba(54, 162, 235, 0.8)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 0.8)',
        ],
        borderWidth: 0,
        barThickness: 22,
        borderRadius: 5,        
        clip: true,
      },
    ],
  }

  export const SalesData = 
    [
        {
            cells:[
                {
                    type: "text",
                    image: '/static/images/united-states-of-america.png',
                    title: "Country",
                    lable: "United State"
                },
                {
                    type: "text",
                    title: "Sales:",
                    lable: "2500"
                },
                {
                    type: "text",
                    title: "Value:",
                    lable: "$230,900"
                },
                {
                    type: "text",
                    title: "Bounce:",
                    lable: "29.9%"
                },
            ]
        },
        {
            cells:[
                {
                    type: "text",
                    image: '/static/images/germany.png',
                    title: "Country",
                    lable: "Germany"
                },
                {
                    type: "text",
                    title: "Sales:",
                    lable: "2500"
                },
                {
                    type: "text",
                    title: "Value:",
                    lable: "$230,900"
                },
                {
                    type: "text",
                    title: "Bounce:",
                    lable: "29.9%"
                },
            ]
        },
        {
            cells:[
                {
                    type: "text",
                    image: '/static/images/united-kingdom.png',
                    title: "Country",
                    lable: "Great Britain"
                },
                {
                    type: "text",
                    title: "Sales:",
                    lable: "2500"
                },
                {
                    type: "text",
                    title: "Value:",
                    lable: "$230,900"
                },
                {
                    type: "text",
                    title: "Bounce:",
                    lable: "29.9%"
                },
            ]
        },
        {
            cells:[
                {
                    type: "text",
                    image: '/static/images/brazil.png',
                    title: "Country",
                    lable: "Brasil"
                },
                {
                    type: "text",
                    title: "Sales:",
                    lable: "2500"
                },
                {
                    type: "text",
                    title: "Value:",
                    lable: "$230,900"
                },
                {
                    type: "text",
                    title: "Bounce:",
                    lable: "29.9%"
                },
            ]
        }
    ];

export const SalesData2 = 
    [
        {
            cells:[
                {
                    type: "text",
                    image: '/static/images/united-states-of-america.png',
                    title: "Country",
                    lable: "United State"
                },
                {
                    type: "text",
                    title: "Sales:",
                    lable: "2,500"
                },
                {
                    type: "text",
                    title: "Bounce:",
                    lable: "29.9%"
                },
            ]
        },
        {
            cells:[
                {
                    type: "text",
                    image: '/static/images/germany.png',
                    title: "Country",
                    lable: "Germany"
                },
                {
                    type: "text",
                    title: "Sales:",
                    lable: "4,500"
                },
                {
                    type: "text",
                    title: "Bounce:",
                    lable: "32.9%"
                },
            ]
        },
        {
            cells:[
                {
                    type: "text",
                    image: '/static/images/united-kingdom.png',
                    title: "Country",
                    lable: "Great Britain"
                },
                {
                    type: "text",
                    title: "Sales:",
                    lable: "3,100"
                },
                {
                    type: "text",
                    title: "Bounce:",
                    lable: "18.9%"
                },
            ]
        },
        {
            cells:[
                {
                    type: "text",
                    image: '/static/images/brazil.png',
                    title: "Country",
                    lable: "Brasil"
                },
                {
                    type: "text",
                    title: "Sales:",
                    lable: "1,230"
                },
                {
                    type: "text",
                    title: "Bounce:",
                    lable: "18.3%"
                },
            ]
        }
        ,
        {
            cells:[
                {
                    type: "text",
                    image: '/static/images/flag-of-australia.png',
                    title: "Country",
                    lable: "Brasil"
                },
                {
                    type: "text",
                    title: "Sales:",
                    lable: "2,330"
                },
                {
                    type: "text",
                    title: "Bounce:",
                    lable: "20.6%"
                },
            ]
        }
    ];

export const TopSalesHeaders=[
  {
    align: 'left',
    lable: 'Product'
  },
  {
    align: 'left',
    lable: 'Value'
  },
  {
    align: 'left',
    lable: 'Ads spent'
  },
  {
    align: 'left',
    lable: 'Refunds'
  }
]

export const TopSalesData = 
    [
        {
            cells:[
                {
                    type: "text",
                    align: "left",
                    title:
                      <>
                        <Box sx={{display:'flex', alignItems:'center'}}>
                          <Avatar src={'/static/products/product4.jpg'}  />
                          <Box sx={{display:'block', pl:2}}>
                            <Typography variant="button">Nike v22 Running</Typography>
                            <Typography variant="body2">
                              <Typography variant="caption" sx={{color:'rgb(76, 175, 80)'}}>8.232 </Typography>
                              orders
                            </Typography>
                          </Box>
                        </Box>
                      </> 
                },
                {
                    type: "text",
                    title: "$130.992",
                },
                {
                    type: "text",
                    title: "$9.500",
                },
                {
                  type: "text",
                  title: <>
                    <Box sx={{display:'flex', alignItems:'center'}}>
                        <Typography variant="button">13</Typography>
                        <Icon fontSize="small" color={"success"}>keyboard_arrow_up</Icon>
                    </Box>
                  </> 
              },
            ]
        },
        {
          cells:[
              {
                  type: "text",
                  align: "left",
                  title:
                    <>
                      <Box sx={{display:'flex', alignItems:'center'}}>
                        <Avatar src={'/static/products/product2.jpg'}  />
                        <Box sx={{display:'block', pl:2}}>
                          <Typography variant="button">Business Kit (Mug + Notebook)</Typography>
                          <Typography variant="body2">
                            <Typography variant="caption" sx={{color:'rgb(76, 175, 80)'}}>12.821 </Typography>
                            orders
                          </Typography>
                        </Box>
                      </Box>
                    </> 
              },
              {
                  type: "text",
                  title: "$80.250",
              },
              {
                  type: "text",
                  title: "$4.200",
              },
              {
                type: "text",
                title: <>
                  <Box sx={{display:'flex', alignItems:'center'}}>
                      <Typography variant="button">40</Typography>
                      <Icon fontSize="small" color={"error"}>keyboard_arrow_down</Icon>
                  </Box>
                </> 
            },
          ]
      },
      {
        cells:[
            {
                type: "text",
                align: "left",
                title:
                  <>
                    <Box sx={{display:'flex', alignItems:'center'}}>
                      <Avatar src={'/static/products/product1.jpg'}  />
                      <Box sx={{display:'block', pl:2}}>
                        <Typography variant="button">White Car</Typography>
                        <Typography variant="body2">
                          <Typography variant="caption" sx={{color:'rgb(76, 175, 80)'}}>20 </Typography>
                          orders
                        </Typography>
                      </Box>
                    </Box>
                  </> 
            },
            {
                type: "text",
                title: "$20,000",
            },
            {
                type: "text",
                title: "$5,000",
            },
            {
              type: "text",
              title: <>
                <Box sx={{display:'flex', alignItems:'center'}}>
                    <Typography variant="button">5</Typography>
                    <Icon fontSize="small" color={"error"}>keyboard_arrow_up</Icon>
                </Box>
              </> 
          },
        ]
    },
    {
      cells:[
          {
              type: "text",
              align: "left",
              title:
                <>
                  <Box sx={{display:'flex', alignItems:'center'}}>
                    <Avatar src={'/static/products/product3.jpg'}  />
                    <Box sx={{display:'block', pl:2}}>
                      <Typography variant="button">Wireless Watch</Typography>
                      <Typography variant="body2">
                        <Typography variant="caption" sx={{color:'rgb(76, 175, 80)'}}>20 </Typography>
                        orders
                      </Typography>
                    </Box>
                  </Box>
                </> 
          },
          {
              type: "text",
              title: "$200",
          },
          {
              type: "text",
              title: "$3,000",
          },
          {
            type: "text",
            title: <>
              <Box sx={{display:'flex', alignItems:'center'}}>
                  <Typography variant="button">10</Typography>
                  <Icon fontSize="small" color={"error"}>keyboard_arrow_up</Icon>
              </Box>
            </> 
        },
      ]
  },
  {
    cells:[
        {
            type: "text",
            align: "left",
            title:
              <>
                <Box sx={{display:'flex', alignItems:'center'}}>
                  <Avatar src={'/static/products/product5.jpg'}  />
                  <Box sx={{display:'block', pl:2}}>
                    <Typography variant="button">Glass</Typography>
                    <Typography variant="body2">
                      <Typography variant="caption" sx={{color:'rgb(76, 175, 80)'}}>20 </Typography>
                      orders
                    </Typography>
                  </Box>
                </Box>
              </> 
        },
        {
            type: "text",
            title: "$15",
        },
        {
            type: "text",
            title: "$500",
        },
        {
          type: "text",
          title: <>
            <Box sx={{display:'flex', alignItems:'center'}}>
                <Typography variant="button">2,000</Typography>
                <Icon fontSize="small" color={"success"}>keyboard_arrow_down</Icon>
            </Box>
          </> 
      },
    ]
},
];


export const ParticipantsData =[
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
  }
]
import React from 'react';
import { createTheme } from '@mui/material/styles';

const baseTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1A2034"
    },
    secondary: {
      main: "#344767",
    },
    background: {
      default: '#1A2034',
      paper: '#1A2034'          
    },
  },

  typography: {
    fontFamily: [
      'Roboto',
      'Helvetica Neue',
      'Arial',
      'sans-serif',
    ].join(','),

    h5: {
      fontSize: '1.25rem',
      fontWeight: 700,
      letterSpacing: '0em',
      textTransform: 'capitalize',
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 700,
      letterSpacing: '0.0075em',
      textTransform: 'capitalize',
    },
    subtitle1: {
      fontSize: '0.875rem',
      fontWeight: 300,
      letterSpacing: '0.01em',
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 300,
      letterSpacing: '0.02857em',
    },
    body1: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.6,      
      letterSpacing: '0.00938em',
    },
    body2: {
      fontSize:  '0.875rem',
      fontWeight: 400,
      lineHeight: 1.6,
      letterSpacing: '0.001em',
    }, 
    caption:{
      fontSize: '0.75rem',
      lineHeight: 1.25,
      letterSpacing: '0.03333em',
      fontWeight: 700,
      textTransform: 'uppercase',
    }
  },
})

const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: "dark",
    primary: {
      main: "rgba(255, 255, 255, 0.87)",
    },
    secondary: {
      main: "#fff"
    },
    background: {
      default: '#1A2034',
      paper: 'rgb(32, 41, 64)'                
    },
    tab: {
      main: '#transpant',
      boxShadow: 'rgb(0 0 0 / 14%) 0rem 0.125rem 0.125rem 0rem, rgb(0 0 0 / 20%) 0rem 0.1875rem 0.0625rem -0.125rem, rgb(0 0 0 / 12%) 0rem 0.0625rem 0.3125rem 0rem',
    }, 
    button:{
      main: '#fff'
    }
  },

  typography: {
    h5: {
      ...baseTheme.typography.h5,
      color: '#fff'     
    },
    h6: {
      ...baseTheme.typography.h6,
      color: '#fff'     
    },
    subtitle1: {
      ...baseTheme.typography.subtitle1,
      color: 'rgba(255, 255, 255, 0.8)'     
    },
    subtitle2: {
      ...baseTheme.typography.subtitle2,
      color: 'rgba(255, 255, 255, 0.8)'     
    },
    body1: {
      ...baseTheme.typography.body1,
      ...{color: 'rgba(255, 255, 255, 0.8)'}
    },
    body2: {
       ...baseTheme.typography.body2,
      ...{color: 'rgba(255, 255, 255, 0.8)'}   
    }, 
    caption:{
      ...baseTheme.typography.caption,
    }
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'myaboutlined' },
          style: {
            border: `1px solid #fff`,
            backgroundColor: 'transparent',
            boxShadow:2,
          },
        },
      ],
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === 'outlined' && {
              backgroundColor: '#transparent',
              color: '#fff',
              border: `1px solid #fff`,
              boxShadow:3,
              borderRadius:'0.5rem',
            }),

            ...(ownerState.variant === 'outlined' && 
                ownerState.color === 'secondary'&&{
                background: '#fff',
                color: '',
                border: `1px solid #fff`,
                borderRadius:'0.5rem'
            }), 
        }),
      }
    },
  },
})

const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: "light",
    primary: {
      main: "rgb(123, 128, 154)"
    },
    secondary: {
      main: "#344767"
    },
    background: {
      default: '#F0F2F5',//linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))
      paper: '#fff'          
    },     
    tab:{
      main: 'rgb(248,249,250)',
      boxShadow: 'rgb(221 221 221) 0rem 0.0625rem 0.3125rem 0.0625rem'
    },
    text:{
      main:'rgb(52, 71, 103)',
    }
  },
  typography: {
    h5: {
      ...baseTheme.typography.h5,
      color: '#344767'     
    },
    h6: {
      ...baseTheme.typography.h6,
      color: '#344767'     
    },
    subtitle1: {
      ...baseTheme.typography.subtitle1,
      color: '#7B809A'       
    },
    subtitle2: {
      ...baseTheme.typography.subtitle2,
      color: '#7B809A'    
    },
    body1: {
      ...baseTheme.typography.body1,
      color: 'rgb(52, 71, 103)'        
    },
    body2: {
      ...baseTheme.typography.body2,
      color: 'rgb(123, 128, 154)',
    }, 
    caption:{
      ...baseTheme.typography.caption,
      color: '#344767',
    }
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'myaboutlined' },
          style: {
            border: `1px solid #000`,
            backgroundColor: 'transparent',
            
          },
          boxShadow:2,
        },
      ],
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === 'outlined' && {
              backgroundColor: '#transparent',
              color: '#344767',
              border: `1px solid #344767`,              
              borderRadius:'0.5rem'
            }),

            ...(ownerState.variant === 'outlined' && 
                ownerState.color === 'secondary'&&{
                backgroundImage: 'linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))',
                color: '#fff',
                border: `1px solid #344767`,
                borderRadius:'0.5rem'
            }),  
        }),
      },
    },
  }
})

const ABMainTheme = (mode) => {
  return mode==='dark'? darkTheme: lightTheme;
}

export { darkTheme, lightTheme, ABMainTheme }

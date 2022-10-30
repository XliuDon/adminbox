import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Link from '@mui/material/Link';

  const flexContainer = {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
  };

  export default function Footer() {

    return (
        <Box sx={{ display:'flex', justifyContent: 'space-between', alignItems:'center', pl:1.5, pr:1.5, mt:1,mb:1, flexDirection:{xs:'column',md:'row'} }} >
            <Box sx={{  display: 'inline-flex' }}>
                <Typography color='primary'>Admin Box V0.1 &copy;2022, made by <Typography component={'span'} variant='h6'>Don</Typography>, world peace!</Typography>
            </Box>    
            <List  sx={{ display: 'inline-flex', alignItems: 'flex-end',m:0, flexShrink: 0, width: 'auto'}} >
                <ListItem sx={{flexShrink: 0, width: 'inherit'}}>
                    <Link href="#" underline="hover">
                    {'Don'}
                    </Link>
                </ListItem>
                <ListItem sx={{flexShrink: 0, width: 'inherit' }}>
                    <Link href="#" underline="hover">
                    {'About Us'}
                    </Link>
                </ListItem>
                <ListItem sx={{flexShrink: 0, width: 'inherit' }}>
                    <Link href="#" underline="hover">
                    {'Blog'}
                    </Link>
                </ListItem>
                <ListItem sx={{flexShrink: 0, width: 'inherit'}}>
                    <Link href="#" underline="hover">
                    {'License'}
                    </Link>
                </ListItem>
            </List>    
        </Box>
    )
}
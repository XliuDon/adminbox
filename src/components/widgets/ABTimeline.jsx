import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {ABIcon} from '../icons/ABIcon';

export default function ABTimeline({timeline}) {
  return (    
    <Paper elevation={3} 
        sx={{
            borderRadius:3,
            position: 'sticky',
            top: '1%',
            height:'100%'
        }} >
        <Box sx={{padding:"16px 16px 0 16px"}}>
            <Typography variant='h6' color="primary">{timeline.title}</Typography>
            <Box variant='button'>{timeline.subtitle}</Box>
        </Box>
        <Box sx={{py:4, pl:2}}>
            <Timeline sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                },
            }}>
                {timeline.events.map((item,index)=>(
                    <TimelineItem key={index}>                    
                        <TimelineSeparator>
                            <TimelineConnector />
                                <TimelineDot sx={{backgroundColor: item.bgColor}}>
                                    <ABIcon iconName={item.icon} sx={{fontSize: '14px'}}/>
                                </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span" sx={{fontWeight:600, fontSize: '14px'}}>
                                {item.title}
                            </Typography>
                            <Typography>{item.date}</Typography>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>         
        </Box>
    </Paper>
  );
}

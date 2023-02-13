import * as React from 'react';
import Box from '@mui/material/Box';
import FullCalendar from '@fullcalendar/react'
import Paper from '@mui/material/Paper';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';



  
export default function ABCalendar({events}) {   
    // a custom render function
    function renderEventContent(eventInfo) {
        return (
        <Box sx={{
            backgroundColor:eventInfo.backgroundColor,
            borderRadius: 1,
            color: eventInfo.textColor!==""? eventInfo.textColor: "#fff"
        }}>
            <b>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
        </Box>
        )
    }

  return (    
    <Paper elevation={3} 
            sx={{
                borderRadius:3,
            }} >
        <Box sx={{
            p:2,
        }}>
             <FullCalendar
                plugins={[dayGridPlugin]}
                initialView='dayGridMonth'
                weekends={true}
                events={events}
                eventColor= 'green'
                height="auto"
                eventContent={renderEventContent}
            />

        </Box>
    </Paper>
  );
}

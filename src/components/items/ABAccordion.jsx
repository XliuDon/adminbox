import React from "react";
import Icon from '@mui/material/Icon';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

 export default function  ABAccordion ({...props }) {
    const { id, title, description} = props;
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        
        <Accordion sx={{
            borderRadius:0,
            boxShadow: 0
            }}
            onChange={handleChange(id)}
            >
            <AccordionSummary
            expandIcon={expanded === id?<RemoveIcon sx={{
                fontWeight: 700,
                fontSize: '1.25rem !important'
            }}/>:<AddIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{
                borderBottom:' 0.0625rem solid rgb(222, 226, 230)'
            }}
            >
                <Typography variant="h5">{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant="body2">
                    {description}
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
 }


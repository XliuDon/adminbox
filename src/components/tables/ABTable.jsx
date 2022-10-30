import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ABBlockSwitch  from '../ABBlockSwitch'
import Typography from '@mui/material/Typography';

 export default function  ABTable ({...props }) {
    const {headers, rows} = props;
    console.log(headers,rows)
    const [state, setState] = React.useState(false);

    const handleChange = (event) => {    
        setState(event.target.checked);        
    };
    
    return (
        <TableContainer >
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow sx={{ textTransform: "uppercase"}}>
                        {headers.map((header,index) => (
                            <TableCell key={index} align={header.align??'left'}>{header.lable}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row, index) => (
                    <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        {row.cells.map((cell, cindex) => {
                            let first = cindex === 0;
                            const propdata = first?{component:"th", scope:"row"}:{};
                            return (
                                <TableCell key={cindex} {...propdata} align={cell.align??'left'} >
                                    {cell.type==='switch' && <ABBlockSwitch checked={cell.value}/>}
                                    {cell.type==='text' && cell.title}
                                    {/* {cell.type==='text' && <Typography variant='body1' >{cell.title}</Typography>} */}
                                    {cell.type==='text' && cell.lable && <Typography variant='body2' >{cell.lable}</Typography>}
                                </TableCell>
                            );
                        })}
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
 }


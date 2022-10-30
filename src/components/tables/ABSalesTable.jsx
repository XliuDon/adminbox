import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ABBlockSwitch  from '../ABBlockSwitch'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

 export default function  ABSalesTable ({...props }) {
    const {rows} = props;
    
    return (
        <TableContainer >
            <Table aria-label="sales table">
                <TableBody>
                {rows.map((row, index, rows) => {
                    let last = index === rows.length;
                    return (
                        <TableRow
                        key={index}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            {row.cells.map((cell, cindex) => {
                                let first = cindex === 0;
                                return (
                                    <TableCell key={cindex} align={cell.align??'left'} >
                                        <Box sx={{display: 'flex', alignItems:'center'}}>
                                            {cell.image && <Box component='img'
                                                    sx={{
                                                        mr: 2,
                                                        width: 30, 
                                                        height: 30
                                                    }}
                                                    src={cell.image} 
                                                    alt={cell.title} >
                                                </Box>}
                                            <Box sx={{alignItems:'center'}}>
                                                {cell.type==='switch' && <ABBlockSwitch checked={cell.value}/>}
                                                {cell.type==='text' && <Typography variant='caption' >{cell.title}</Typography>}
                                                {cell.type==='text' && cell.lable && <Typography variant='body2' >{cell.lable}</Typography>}
                                            </Box>
                                        </Box>
                                    </TableCell>
                                );
                            })}
                        </TableRow>
                    );
                })}
                </TableBody>
            </Table>
        </TableContainer>
    );
 }


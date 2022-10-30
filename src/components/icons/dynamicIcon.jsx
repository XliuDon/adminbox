import React from "react";
import Icon from '@mui/material/Icon';


 export const AbIcon =({iconName, ...props }) =>{

    return (<Icon {...props}>{iconName}</Icon>);
 }


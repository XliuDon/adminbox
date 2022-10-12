import React, {createElement } from "react";
import * as MuiIcons from '@material-ui/core/icons'

export const AbIcon = ({ iconName }) => {
    return React.createElement(MuiIcons[iconName]);
}
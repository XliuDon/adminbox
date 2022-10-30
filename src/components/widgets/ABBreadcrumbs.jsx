import * as React from 'react';
import { emphasize, styled } from '@mui/material/styles';
import { NavLink} from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { useLocation,} from 'react-router-dom';
import {breadcrumbNameMap} from '../../data/fakerData'

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
}); 

export default function ABBreadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <Box role="presentation" >   
      <Breadcrumbs aria-label="breadcrumb">
        <NavLink to={'/'}>
          <StyledBreadcrumb
              label="Home"
              icon={<HomeIcon fontSize="small" />}
            />
        </NavLink>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

        return last ? (
          <Typography key={to}>{ breadcrumbNameMap[to]}</Typography>
        ) : (
          <NavLink to={to} key={to}>
            <StyledBreadcrumb 
                label={ breadcrumbNameMap[to]}/>
          </NavLink>    
        );
      })}

      </Breadcrumbs>
    </Box>
  );
}

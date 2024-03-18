import * as React from 'react';
import { useLocation } from 'react-router-dom';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';


import { SideBarData } from '../sidebar/SideBarData';
import Link from '@mui/material/Link';


export const MainListItems = () => {

  const location = useLocation();

  return(
    <List>
      {SideBarData.map((item, index) =>(
        <ListItemButton selected={location.pathname === item.path ? true : false}
          key={index}
          component={Link}
          to={item.path}>
          <ListItemIcon>
            {item.icon}
          </ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItemButton>
    ))}
  </List>
  )
}
  

export const secondaryListItems = (
  <>
    {/* <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader> }
    {SideBarData.map((item, index) =>(
      <ListItemButton
        key={index}
        component={Link}
        to={item.path}>
        <ListItemIcon>
          {item.icon}
        </ListItemIcon>
        <ListItemText primary={item.title} />
      </ListItemButton>
    ))*/}
  </>
);
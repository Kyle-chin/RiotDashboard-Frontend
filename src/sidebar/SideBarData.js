import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import GroupIcon from '@mui/icons-material/Group';

export const SideBarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        path: "/"
    },
    {
        title: "Dashboard",
        icon: <DashboardIcon />,
        path: "/dashboard"
    },
    {
        title: "Collections",
        icon: <GroupIcon />,
        path: "/collections"
    },
    {
        title: "Graphs",
        icon: <BarChartIcon />,
        path: "/graphs"
    }
] 

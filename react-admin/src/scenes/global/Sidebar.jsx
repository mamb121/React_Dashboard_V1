import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar"; 
//import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from "react-router-dom"
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PepoleOutlinedIcon from "@mui/icons-material/PepoleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartlinedIcon from "@mui/icons-material/BarChartlined";
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import MenuChartOutlinedIcon from "@mui/icons-material/MenuChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Sidebar = () =>{
    const theme = useTheme();
    const colors = Tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setselected] = useState('Dashboard');
    return (
        <Box
        sx={{
            "& .pro-sidebar-inner":{
                background:`${colors.primary[400]} !important`
            },
            "& .pro-sidebar-wrapper":{
                backgroundColor: "transparent !important"
            },
            "& .pro-sidebar-item":{
                padding:"5px 35px 5px 20px !important"
            },
            "& .pro-sidebar-item: hover":{
                color:"#868dfb !important",
            },
            "& .pro-sidebar-item.active":{
                color:"#6870fa !important",
            },
        }}
        >
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    {/* LOGO AND MENU ICON */}
                    <MenuItem 
                     OnClick={()=> setIsCollapsed(!isCollapsed)}
                     icon={isCollapsed ? <MenuChartOutlinedIcon />:undefined}
                     Style={{
                        margin: "10px 0 20px 0",
                        color: colors.grey[100],
                     }}
                    >
                </Menu>
            </ProSidebar>                
        </Box>        
    )
}

export default Sidebar;
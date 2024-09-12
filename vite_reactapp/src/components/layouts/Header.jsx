import React, { useState } from 'react'
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from "@mui/material"
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { Link , NavLink} from 'react-router-dom';
import '../../styles/HeaderStyle.css'
import MenuIcon from '@mui/icons-material/Menu';
function Header() {
    const [mobile, setmobile] = useState(false)
    
    //handleMenu click
    const handleDrawerToggle = () => {
        setmobile(!mobile)
    }
    //menu drawer

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography color={"goldenrod"} variant='h6' component="div" sx={{ bgcolor: "white", flexGrow: 1, my: 2 }}>
                <RestaurantIcon />
                My Resturent
            </Typography>

            <Divider />
            <ul className='mobile-navigation'>
                <li>
                    <NavLink to={'/'}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/about'}>About</NavLink>
                </li>
                <li>
                    <NavLink to={'/menu'}>Menu</NavLink>
                </li>
                <li>
                    <NavLink to={'/contact'}>Contact</NavLink>
                </li>
            </ul>
        </Box>

    )
    return (
        <>
            {/* <h1>Navbar</h1> */}
            <Box>
                <AppBar component={'nav'} sx={{ bgcolor: "black" }}>
                    <Toolbar >
                        <IconButton color='inherit' aria-label='open drawer' edge='start'
                            sx={{
                                mr: 2, display: { sm: 'none' },
                            }} onClick={handleDrawerToggle}>
                            <MenuIcon />
                        </IconButton>
                        <Typography color={"goldenrod"} variant='h6' component="div" sx={{ flexGrow: 1}}>
                            <RestaurantIcon />
                            My Resturent
                        </Typography>
                        <Box sx={{ display: { xs: "none", sm: "block" } }}>
                            <ul className='navigate-menu'>
                                <li>
                                    <NavLink activeClassName="active" to={'/'}>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/about'}>About</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/menu'}>Menu</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/contact'}>Contact</NavLink>
                                </li>
                            </ul>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box component={"nav"}>
                    <Drawer variant='temporary' open={mobile}
                        onClose={handleDrawerToggle} sx={{
                            display: { xs: "block", sm: "none" },
                            "& .MuiDrawer-paper": {
                                boxSizing: "border-box",
                                width: "200px"
                            }
                        }}>
                        {drawer}
                    </Drawer>
                </Box>
                <Box>
                    {/* "big device pr content show krne k liya maine toolbar ko fixed kiya h back pr" */}
                    <Toolbar  />
                </Box>
            </Box>

        </>
    )
}

export default Header

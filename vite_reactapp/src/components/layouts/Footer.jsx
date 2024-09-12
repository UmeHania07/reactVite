import React from 'react'
import { Box, Typography } from '@mui/material'
import { GitHub, Instagram, Twitter, YouTube } from '@mui/icons-material'
function Footer() {
    return (
        <>
            <Box sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 }}>
                <Box sx={{
                    my: 3, "& svg": {
                        fontSize: "60px",
                        cursor: "pointer",
                        mr: 2,
                    },
                    "& svg:hover": {
                        color: "goldenrod",
                        transform: "translateX(Spx)",
                        transition: "all 400ms",
                    }
                }}>
                    {/* Icons */}
                    <Instagram />
                    <Twitter />
                    <GitHub />
                    <YouTube />
                </Box>
                <Typography variant='h5' sx={{
                    "@media (max-width:600px)": {
                        fontSize: "1rem"
                    }
                }}>All Rights Reserved &copy; Techinfo YT</Typography>
            </Box>
        </>
    )
}

export default Footer

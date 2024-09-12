import React from 'react'
import Layouts from '../components/layouts/Layouts'
import { Box, Paper, TableCell, TableContainer, TableHead, TableRow, Typography, Table, TableBody } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
function Contact() {
    return (
        <Layouts>
            <Box sx={{
                my: 10,
                ml: 10,
                "& h4": {
                    fontWeight: "bold",
                    mb: 2
                }
            }}>
                <Typography variant='h4'>
                    Contact My Resturant
                </Typography>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ipsa perspiciatis cum neque explicabo illo blanditiis repellat hic deleniti quae tempore, necessitatibus eos nostrum autem magnam aspernatur, eaque temporibus obcaecati.</p>
            </Box>
            <Box sx={{m:3, width:"600px", ml:5,
                "@media (max-width:600px)":{
                    width:"300px"
                }}}>
                <TableContainer component={Paper}>
                    <Table aria-label="contact table">
                        <TableHead>
                            <TableRow>
                                <TableCell  sx={{bgcolor:"black", color:"white" , fontWeight:"bold"}}align='center'>
                                    Contact Details
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <SupportAgentIcon sx={{ color: "red", pt: 1}} />1700-00-8080(torollFree)
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <EmailIcon sx={{ color: "blue", pt: 1 }} />Help@myrest.com
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <CallIcon sx={{ color: "green", pt: 1 }} />12345678910(Call Now)
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Layouts>
    )
}

export default Contact

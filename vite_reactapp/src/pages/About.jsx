import React from 'react'
import Layouts from '../components/layouts/Layouts'
import { Box, Typography } from '@mui/material'

function About() {
    return (
        <Layouts>
            <Box sx={{
                my:3,
                textAlign:"center",
                p:2,
                "& h4":{
                    fontWeight:"bold",
                    my:2,
                    fontSize:"2rem",
                },
                "& p":{
                    textAlign:"justify",
                },
                '@media (max-width:600px)':{
                    mt:0,
                    "& h4":{
                        fontSize:"1.7rem"
                    }
                }
               
            }}>
                <Typography variant='h4'>
                    WelCome To My Resturant!
                </Typography>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ipsa rerum doloremque impedit, similique porro! Perspiciatis commodi culpa ipsa doloremque laudantium vero, aut nulla! Provident harum labore ullam! Pariatur, consectetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ipsa rerum doloremque impedit, similique porro! Perspiciatis commodi culpa ipsa doloremque laudantium vero, aut nulla! Provident harum labore ullam! Pariatur, consectetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ipsa rerum doloremque impedit, similique porro! Perspiciatis commodi culpa ipsa doloremque laudantium vero, aut nulla! Provident harum labore ullam! Pariatur, consectetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ipsa rerum doloremque impedit, similique porro! Perspiciatis commodi culpa ipsa doloremque laudantium vero, aut nulla! Provident harum labore ullam! Pariatur, consectetur.</p>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nemo temporibus atque ipsum rem qui autem consequatur, deleniti ratione aperiam commodi odit! Maxime doloribus iure aliquid perferendis laboriosam aperiam atque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ipsa rerum doloremque impedit, similique porro! Perspiciatis commodi culpa ipsa doloremque laudantium vero, aut nulla! Provident harum labore ullam! Pariatur, consectetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ipsa rerum doloremque impedit, similique porro! Perspiciatis commodi culpa ipsa doloremque laudantium vero, aut nulla! Provident harum labore ullam! Pariatur, consectetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ipsa rerum doloremque impedit, similique porro! Perspiciatis commodi culpa ipsa doloremque laudantium vero, aut nulla! Provident harum labore ullam! Pariatur, consectetur.</p>
            </Box>
        </Layouts>
    )
}

export default About

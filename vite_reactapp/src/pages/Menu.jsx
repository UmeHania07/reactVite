import React from 'react'
import {MenuList} from '../data/Data'
import Layouts from '../components/layouts/Layouts'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'

function Menu() {
  return (
     <Layouts>
        <Box sx={{display:"flex", flexWrap:"wrap",justifyContent:"center"}}>
           {
            MenuList.map(manu => (
               <Card sx={{maxWidth:"390px", display:"flex", m:2}}>
                  <CardActionArea>
                     <CardMedia sx={{minHeight:"400px"}} component={'img'} src={manu.image} alt={manu.name}/>
                  <CardContent>
                     <Typography variant='h5' gutterBottom component={'div'}>
                        {manu.name}
                     </Typography>
                     <Typography variant='body2'>
                        {manu.description}
                     </Typography>
                     <Typography>
                        {manu.price}
                     </Typography>
                  </CardContent>
                  </CardActionArea>
               </Card>
            ))
           }
        </Box>
     </Layouts>
  )
}

export default Menu

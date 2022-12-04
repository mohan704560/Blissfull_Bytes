import { Typography,Card,CardMedia,CardContent } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

const CakeSection = () => {
    const Cake=[
      {name:"Chocolate",image:"https://source.unsplash.com/diUixdrqh0Q/300x200"},
      {name:"Red Velvet",image:"https://source.unsplash.com/hXqbSgOPjSI/300x200"},
      {name:"Rose",image:"https://source.unsplash.com/7dhnDG46L2E/300x200"},
      {name:"Butter Scotch",image:"https://source.unsplash.com/nIFmcMvnxbI/300x200"},
      {name:"Foam",image:"https://source.unsplash.com/IWy4NSq9QRA/300x200"},
      {name:"Pound",image:"https://source.unsplash.com/AYIN6zxIyfo/300x200"},
      {name:"Sponge",image:"https://source.unsplash.com/Pzjez86SsvQ/300x200"},
      {name:"Cupcake",image:"https://source.unsplash.com/Ltv7a5m8i4c/300x200"},
      {name:"Mix fruit",image:"https://source.unsplash.com/6SHd7Q-l1UQ/300x200"},
      {name:"Strawberry",image:"https://source.unsplash.com/rBmLu0s5z2s/300x200"},
    ]
    
  return (
    <>
    <Typography variant="h4" mt={6} mb={6}>Cakes - </Typography>
    <Stack direction="row" justifyContent='space-evenly' sx={{flexWrap:"wrap"}}>
        {
            Cake.map((cake,index)=>{
                return (
                    <Card sx={{ maxWidth: 300 , mb:2}} key={index}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={cake.image}
                      alt="Cake image"
                    />
                    <CardContent>
                      <Typography variant="h5">
                        {cake.name}
                      </Typography>
                      </CardContent>
                  </Card>
                )
            })
        }
    </Stack>
    </>
  )
}

export default CakeSection
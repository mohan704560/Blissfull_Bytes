import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import {Box} from '@mui/system';
import cake from "../Images/cake.png"

const Body = () => {
  return (
    <Grid container direction="row" alignItems="center" mt={12}>
        <Grid item xs={12} sm={6} order={{xs:2,sm:1}} justifyContent="space-evenly">
        <Typography variant="h3" color="inherit">
            A bliss in every byte
        </Typography>
        <Typography variant="h5" color="inherit">
            we offer tasty cakes and sweets for you.
        </Typography>
        <Button size="large" variant="contained" sx={{borderRadius:5}}>
            Call us
        </Button>
        </Grid>
        <Grid container item xs={12} sm={6} justifyContent="center" order={{xs:1,sm:2}}>
          <Box component="img" src={cake}/>
        </Grid>
    </Grid>
  )
}

export default Body
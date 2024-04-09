import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';



// Comonents
import Fund from './Results/Fund';
import Filters from './Filters/Filters';


const Main = () => {
  return (

    <>
      <Container style={{marginTop:50}}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
            <Filters/>
          </Grid>
          <Grid item xs={6} md={8}>
            
            <Fund/>
          </Grid>
      </Grid>
     </Container>
    </>
    
  )
}

export default Main

import React from 'react';
import { Container, Typography } from '@mui/material';
import { Grid } from '@material-ui/core';
import { PushToTalkButton, PushToTalkButtonContainer } from '@speechly/react-ui'
import Main from './components/Main/Main'
import Details from './components/Details/Details'

function MainExpenseTracker(){
    return(
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY:"10" }}>
            <div>
      <Grid className={classes.grid} container spacing={0} alignItems='center' justifyContent='center' style={{ height:'100vh' }}>
        <Grid item xs={12} sm={4}>   
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={3}>   
          <Main />
        </Grid>
        <Grid item xs={12} sm={4}>   
          <Details title="Expense" />
        </Grid>
      </Grid>
      <PushToTalkButtonContainer>
        <PushToTalkButton />
      </PushToTalkButtonContainer>
    </div>
        </Container>
    )
}

export default MainExpenseTracker;
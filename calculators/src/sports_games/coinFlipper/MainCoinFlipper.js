import React, { useState } from 'react';
import { Button, Container, Typography } from '@mui/material';

function MainCoinFlipper(){
    const [side, setSide] = useState("")
    const handleInput = () => {
        const rand=Math.round(Math.random());
        if(rand) {
            setSide("Its heads");
        } else {
            setSide("Its tails")
        }
    }
    return(
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY:"10" }}>
            <Typography pt={1} variant='h5' sx = {{textAlign: "center"}}>Coin Flipper</Typography>
            <hr/>
            <br/>
            {/* Write your code here */}
            <div>click the "TOSS" button and don't forget to pick a side</div>
            <br/>
            <br/>
            <Button variant="contained" color="primary" onClick={handleInput}>
                    TOSS
            </Button>
            <br/>
            <br/>
            <div>
                {side}
            </div>
            {/* End your code here */}
        </Container>
    )
}

export default MainCoinFlipper;
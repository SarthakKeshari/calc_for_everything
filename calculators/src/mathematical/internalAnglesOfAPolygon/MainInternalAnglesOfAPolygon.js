import React, {useState} from 'react';
import {Container, Typography,TextField,Button } from '@mui/material';

function MainInternalAnglesOfAPolygon(){
    const [noofsides,setnoofsides] = useState(3);
    const [angletotal,setans] = useState(180);
    const [angle,setangle] = useState(angletotal/noofsides);

    const calculateAns = () => {
        const ans = 180*(noofsides-2);
        setans(ans);
        setangle(ans/noofsides);
    };


    return(
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY:"10" }}>
            <Typography pt={1} variant='h5' sx = {{textAlign: "center"}}>Internal Angles Of a Polygon Calculator</Typography>
            <hr/>
            <br/>
            {/* Write your code here */}
            <div>
                <TextField
                    type="number"
                    label="Enter No. of Sides"
                    value={noofsides}
                    onChange={(event) => setnoofsides(event.target.value)}
                />
                <br />
                <br></br>
                <Button variant="contained" color="primary" onClick={calculateAns}>Calculate Sum of Internal Angles</Button>
                <br />
                <br></br>
                Sum of Internal Angles: {angletotal}
                <br></br>
                Each Internal angle for equal sides in polygon: {angle}
            </div>
            <br></br>
            <br></br>
            <div></div>


            {/* End your code here */}
        </Container>
    )
}

export default MainInternalAnglesOfAPolygon;
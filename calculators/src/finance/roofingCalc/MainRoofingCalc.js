import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

function MainRoofingCalc() {
    // Input fields
    const [Housebaselength, setHousebaselength] = useState(0);
    const [Housebasewidth, setHousebasewidth] = useState(0);
    const [Roofpitch, setRoofpitch] = useState(0);
    const [Eaves, setEaves] = useState(0);
    const [Price, setPrice] = useState(1);

    // Output fields
    const [RoofingArea, setRoofingArea] = useState(0);

    // Calculation
    const calcRoofingArea = () => {
        const roofpitchInches = Roofpitch / 12;
        const roofpitchSquared = Math.pow(roofpitchInches, 2);
        const adjustedRoofpitch = Math.sqrt(roofpitchSquared + 1);

        // Calculating area
        const Housebasearea = Housebasewidth * (Housebaselength + Eaves);
        const roofingArea = Housebasearea * adjustedRoofpitch;
        setRoofingArea(roofingArea);
    }

    return (
        <Container>
            <Typography variant="h5">Roofing Calculator</Typography>

            <TextField
                label="House Base Length"
                type="number"
                value={Housebaselength}
                onChange={(e) => setHousebaselength(parseFloat(e.target.value))}
            />
            <hr/>
            <br/>
            <TextField
                label="House Base Width"
                type="number"
                value={Housebasewidth}
                onChange={(e) => setHousebasewidth(parseFloat(e.target.value))}
            />
            <hr/>
            <br/>
            <TextField
                label="Roof Pitch (inches per foot)"
                type="number"
                value={Roofpitch}
                onChange={(e) => setRoofpitch(parseFloat(e.target.value))}
            />
            <hr/>
            <br/>
            <TextField
                label="Eaves"
                type="number"
                value={Eaves}
                onChange={(e) => setEaves(parseFloat(e.target.value))}
            />
            <hr/>
            <br/>
            <Button variant="contained" color="primary" onClick={calcRoofingArea}>
                Calculate
            </Button>

            <Typography variant="h6">Roofing Area: {RoofingArea} square feet</Typography>
        </Container>
    );
}

export default MainRoofingCalc;

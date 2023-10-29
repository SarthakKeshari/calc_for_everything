import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField } from '@mui/material';

function MainMolarMassCalc(){

    const [moles, setMoles] = useState(null);
    const [mass, setMass] = useState(null);
    const [formulaWeight, setFormulaWeight] = useState(null);
  
    const handleMolesChange = (e) => {
      setMoles(parseFloat(e.target.value));
    };
  
    const handleMassChange = (e) => {
      setMass(parseFloat(e.target.value));
    };
  
    const handleFormulaWeightChange = (e) => {
      setFormulaWeight(parseFloat(e.target.value));
    };
  
    useEffect(() => {
      if (moles !== null && mass !== null) {
        setFormulaWeight(mass / moles);
      } else if (mass !== null && formulaWeight !== null) {
        setMoles(mass / formulaWeight);
      } else if (moles !== null && formulaWeight !== null) {
        setMass(moles * formulaWeight);
      }
    }, [moles, mass, formulaWeight]);



    return(
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY:"10" }}>
            <Typography pt={1} variant='h5' sx = {{textAlign: "center"}}>Molar Mass Calculator</Typography>
            <hr/>
            <br/>
            {/* Write your code here */}
            <div>
                <p style={{ color: 'black', fontSize: '18px' }}>amount of substance:</p>
                <TextField
                label="mol"
                type="number"
                value={moles || ''}
                onChange={handleMolesChange}
                />
            </div>
            <div>
                <p style={{ color: 'black', fontSize: '18px' }}>mass:</p>
                <TextField
                label="g"
                type="number"
                value={mass || ''}
                onChange={handleMassChange}
                />
            </div>
            <div>
                <p style={{ color: 'black', fontSize: '18px' }}>molar mass:</p>
                <TextField
                label="g/mol"
                type="number"
                value={formulaWeight || ''}
                onChange={handleFormulaWeightChange}
                />
            </div>
          

            <div style={{ display: 'flex', alignItems: 'center' }}>
            <p style={{ color: 'black', marginRight: '10px' }}>result:</p>
            <p style={{ marginRight: '40px' }}>n: {moles !== null ? moles : 0} mol</p>
            <p style={{ marginRight: '40px' }}>m: {mass !== null ? mass : 0} g</p>
            <p>M: {formulaWeight !== null ? formulaWeight : 0} g/mol</p>
            </div>

           
            {/* End your code here */}
        </Container>
    )
}

export default MainMolarMassCalc;
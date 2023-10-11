import React, { useMemo, useState } from 'react';
import { Container, Input, MenuItem, Select, Typography } from '@mui/material';
import CopyValue from '../../components/CopyValue';
import InfoCI from './InfoCI';

function MainCI(){
       // Initialize state variables for principal, rate, time, and frequency
       const [principal, setPrincipal] = useState();
       const [rate, setRate] = useState();
       const [time, setTime] = useState();
       const [frequency, setFrequency] = useState(1);
   
       // Convert the state variables to float for calculations
       const principalFloat = useMemo(() => parseFloat(principal), [principal]);
       const rateFloat = useMemo(() => parseFloat(rate), [rate]);
       const timeFloat = useMemo(() => parseFloat(time), [time]);
       const frequencyFloat = useMemo(() => parseFloat(frequency), [frequency]);
   
       // Calculate the interest using the compound interest formula
       const interest = useMemo(() => {
           const cal = principalFloat * Math.pow((1 + rateFloat / (100 * frequencyFloat)), (frequencyFloat * timeFloat)) - principalFloat;
           return Math.abs(Number(cal.toFixed()));
       }, [principalFloat, rateFloat, timeFloat, frequencyFloat]);
   
       // Calculate the total amount by adding the interest to the principal
       const amount = useMemo(() => {
           return interest + principalFloat;
       }, [interest, principalFloat]);
    return(
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY:"10" }}>
            <Typography pt={1} variant='h5' sx = {{textAlign: "center"}}>Compound Interest Calculator <InfoCI/></Typography>
            <hr/>
            <br/>
            <Container sx={{display:"flex", flexDirection:"column"}}>
                <Typography pt={1} variant='h6' mt={2}>Principal (int ₹)</Typography>
                <Input
                    color="primary"
                    disabled={false}
                    placeholder="Enter Principal"
                    size="lg"
                    variant="outlined"
                    type='number'
                    onChange={(e) => setPrincipal(e.target.value)}
                    value={principal}
                />
                <Typography pt={1} variant='h6' mt={2}>Rate (in %age)</Typography>
                <Input
                    color="primary"
                    disabled={false}
                    placeholder="Enter Rate"
                    size="lg"
                    variant="outlined"
                    type='number'
                    onChange={(e) => setRate(e.target.value)}
                    value={rate}
                />
                <Typography pt={1} variant='h6' mt={2}>Time (in years)</Typography>
                <Input
                    color="primary"
                    disabled={false}
                    placeholder="Enter Time"
                    size="lg"
                    variant="outlined"
                    type='number'
                    onChange={(e) => setTime(e.target.value)}
                    value={time}
                />
                <Typography pt={1} variant='h6' mt={2}>Compounding Frequency</Typography>
                <Select
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value)}
                >
                    <MenuItem value={12}>Monthly</MenuItem>
                    <MenuItem value={4}>Quarterly</MenuItem>
                    <MenuItem value={2}>Semi-Annually</MenuItem>
                    <MenuItem value={1}>Annually</MenuItem>
                </Select>
                <Typography pt={1} variant='h6' mt={2}>Interest (in ₹)</Typography>
                <div className='output'>
                    <Typography pt={1} variant='h6' sx={{ color: 'blue' }}>{interest || 0}</Typography>
                    <CopyValue value={interest}/>
                </div>
                <Typography pt={1} variant='h6' mt={2}>Amount (in ₹)</Typography>
                <div className='output'>
                    <Typography pt={1} variant='h6' sx={{ color: 'blue' }}>{amount || 0}</Typography>
                    <CopyValue value={amount}/>
                </div>
            </Container>
        </Container>
    )
}

export default MainCI;
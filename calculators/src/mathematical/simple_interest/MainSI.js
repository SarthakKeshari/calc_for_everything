import React, { useEffect, useState } from 'react';
import { Container, Input, Typography } from '@mui/material';

function MainSI(){
    const [principal, setPrincipal] = useState()
    const [rate, setRate] = useState()
    const [time, setTime] = useState()
    const [interest, setInterest] = useState(0)
    const [amount, setAmount] = useState(0)

    useEffect(() => {
        const cal = (parseFloat(principal)*parseFloat(rate)*parseFloat(time))/100.0;
        setInterest(cal)
        setAmount(cal+parseFloat(principal))
    }, [principal, rate, time])

    return(
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY:"10" }}>
            <Typography pt={1} variant='h5' sx = {{textAlign: "center"}}>Simple Interest Calculator</Typography>
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
                <Typography pt={1} variant='h6' mt={2}>Interest (in ₹)</Typography>
                <Input
                    color="primary"
                    disabled={true}
                    size="lg"
                    variant="outlined"
                    type='number'
                    value={interest}
                />
                <Typography pt={1} variant='h6' mt={2}>Amount (in ₹)</Typography>
                <Input
                    color="primary"
                    disabled={true}
                    size="lg"
                    variant="outlined"
                    type='number'
                    value={amount}
                />
            </Container>
        </Container>
    )
}

export default MainSI;
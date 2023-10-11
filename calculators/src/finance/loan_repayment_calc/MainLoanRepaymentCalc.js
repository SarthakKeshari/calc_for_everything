import React, { useState, useEffect, useCallback } from 'react';
import { Container, Typography, Input, Divider, Tabs, Tab } from '@mui/material';

function MainLoanRepaymentCalc(){
    const [principal, setPrincipal] = useState(0);
    const [rate, setRate] = useState(0);
    const [time, setTime] = useState(0);
    const [monthlyPayment, setMonthlyPayment] = useState(0);
    const [totalInterest, setTotalInterest] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [tab, setTab] = useState(0);

    const calculatePayment = useCallback(() => {
        const r = rate / 100 / 12;
        if(tab === 0 && principal>=0 && rate>=0 && time>0)
        {
            const n = time * 12;
            const payment = (r * principal) / (1 - Math.pow(1 + r, -n));
            setMonthlyPayment(payment.toFixed(2));
            setTotalInterest((payment * n - principal).toFixed());
            setTotalAmount((payment * n).toFixed());
        }
        else if(tab === 1 && principal>=0 && rate>=0 && monthlyPayment>0)
        {
            const n = Math.log(monthlyPayment / (monthlyPayment - r * principal)) / Math.log(1 + r);
            !isNaN(n) ? setTime((n / 12).toFixed(1)) : setTime(0);
            const payment = monthlyPayment;
            setTotalInterest((payment * n - principal).toFixed());
            setTotalAmount((payment * n).toFixed());
        }
        else
        {
            setMonthlyPayment(0)
            setTotalInterest(0)
            setTotalAmount(0)
        }
    }, [principal, rate, time, monthlyPayment, tab]);

    useEffect(calculatePayment, [calculatePayment]);

    const resetValues = () => {
        setPrincipal(0);
        setRate(0);
        setTime(0);
        setMonthlyPayment(0);
        setTotalInterest(0);
        setTotalAmount(0);
    }

    const handleTabChange = (event, newValue) => {
        setTab(newValue);
        resetValues();
    };

    return(
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY:"10" }}>
            <Typography pt={1} variant='h5' sx = {{textAlign: "center"}}>Loan Repayment/EMI Calculator</Typography>
            <hr/>
            <br/>
            <Tabs value={tab} onChange={handleTabChange}>
                <Tab label="Calculate Monthly Payment" />
                <Tab label="Calculate Repayment Period" />
            </Tabs>
            {tab === 0 && (
                <Container sx={{display:"flex", flexDirection:"column"}}>
                    <Typography pt={1} variant='h6' mt={2}>Principal (in ₹)</Typography>
                    <Input
                        color="primary"
                        disabled={false}
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
                        size="lg"
                        variant="outlined"
                        type='number'
                        onChange={(e) => setTime(e.target.value)}
                        value={time}
                    />
                    <Typography pt={1} variant='h6' mt={2}>Monthly Payment (in ₹)</Typography>
                    <div className='output'>
                        <Typography pt={1} variant='h6' fontStyle={{color: "blue"}}>{monthlyPayment}</Typography>
                    </div>
                    <Divider/>
                    <Typography pt={1} variant='h6' mt={2}>Total Interest (in ₹)</Typography>
                    <div className='output'>
                        <Typography pt={1} variant='h6' fontStyle={{color: "blue"}}>{totalInterest}</Typography>
                    </div>
                    <Divider/>
                    <Typography pt={1} variant='h6' mt={2}>Total Amount (in ₹)</Typography>
                    <div className='output'>
                        <Typography pt={1} variant='h6' fontStyle={{color: "blue"}}>{totalAmount}</Typography>
                    </div>
                    <Divider/>
                </Container>
            )}
            {tab === 1 && (
                <Container sx={{display:"flex", flexDirection:"column"}}>
                    <Typography pt={1} variant='h6' mt={2}>Principal (in ₹)</Typography>
                    <Input
                        color="primary"
                        disabled={false}
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
                        size="lg"
                        variant="outlined"
                        type='number'
                        onChange={(e) => setRate(e.target.value)}
                        value={rate}
                    />
                    <Typography pt={1} variant='h6' mt={2}>Monthly Payment (in ₹)</Typography>
                    <Input
                        color="primary"
                        disabled={false}
                        size="lg"
                        variant="outlined"
                        type='number'
                        onChange={(e) => setMonthlyPayment(e.target.value)}
                        value={monthlyPayment}
                    />
                    <Typography pt={1} variant='h6' mt={2}>Time (in years)</Typography>
                    <div className='output'>
                        <Typography pt={1} variant='h6' fontStyle={{color: "blue"}}>{time}</Typography>
                    </div>
                    <Divider/>
                    <Typography pt={1} variant='h6' mt={2}>Total Interest Payable (in ₹)</Typography>
                    <div className='output'>
                        <Typography pt={1} variant='h6' fontStyle={{color: "blue"}}>{totalInterest}</Typography>
                    </div>
                    <Divider/>
                    <Typography pt={1} variant='h6' mt={2}>Total Amount Payable (in ₹)</Typography>
                    <div className='output'>
                        <Typography pt={1} variant='h6' fontStyle={{color: "blue"}}>{totalAmount}</Typography>
                    </div>
                    <Divider/>
                </Container>
            )}
        </Container>
    )
}

export default MainLoanRepaymentCalc;
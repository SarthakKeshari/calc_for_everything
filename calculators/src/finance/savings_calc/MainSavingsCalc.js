import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button, Divider, Grid } from '@mui/material';

function MainSavingsCalc() {
    const [salary, setSalary] = useState(0);
    const [expenses, setExpenses] = useState([{ name: '', amount: 0 }]);
    const [savings, setSavings] = useState(0);

    const handleSalaryChange = (e) => {
        setSalary(e.target.value);
    };

    const handleExpenseChange = (index, type) => (e) => {
        const newExpenses = [...expenses];
        newExpenses[index][type] = e.target.value;
        setExpenses(newExpenses);
    };

    const addExpense = () => {
        setExpenses([...expenses, { name: '', amount: 0 }]);
    };

    const deleteExpense = (index) => {
        const newExpenses = [...expenses];
        newExpenses.splice(index, 1);
        setExpenses(newExpenses);
    };

    const calculateSavings = () => {
        const totalExpenses = expenses.reduce((total, expense) => total + Number(expense.amount), 0);
        setSavings(salary - totalExpenses);
    };

    useEffect(() => {
        calculateSavings();
    }, [expenses, salary]);

    return (
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY:"10" }}>
            <Typography pt={1} variant='h5' sx = {{textAlign: "center"}}>Savings Calculator</Typography>
            <hr/>
            <br/>
            <Container sx={{display:"flex", flexDirection:"column"}}>
                <Typography pt={1} variant='h6' mt={2}>Salary</Typography>
                <TextField
                    color="primary"
                    disabled={false}
                    placeholder="Enter Salary"
                    size="lg"
                    variant="outlined"
                    type='number'
                    onChange={handleSalaryChange}
                    value={salary}
                />
                {expenses.map((expense, index) => (
                    <Grid container spacing={2} key={index} sx={{ mt: 2, alignItems: 'center' }}>
                        <Grid item xs={3}>
                            <Typography pt={1} variant='h6'>Expense Name</Typography>
                            <TextField
                                color="primary"
                                disabled={false}
                                placeholder="Enter Expense Name"
                                size="small"
                                variant="outlined"
                                type='text'
                                onChange={handleExpenseChange(index, 'name')}
                                value={expense.name}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <Typography pt={1} variant='h6'>Expense Amount</Typography>
                            <TextField
                                color="primary"
                                disabled={false}
                                placeholder="Enter Expense Amount"
                                size="small"
                                variant="outlined"
                                type='number'
                                onChange={handleExpenseChange(index, 'amount')}
                                value={expense.amount}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant="contained" color="secondary" onClick={() => deleteExpense(index)} sx={{ mt: 4 }}>Delete Expense</Button>
                        </Grid>
                    </Grid>
                ))}
                <Button variant="contained" color="primary" onClick={addExpense} sx={{ mt: 2 }}>Add Expense</Button>
                <Divider sx={{ mt: 2 }}/>
                <Typography pt={1} variant='h6' mt={2}>Savings</Typography>
                <div className='output'>
                    <Typography pt={1} variant='h6' sx={{color: "blue"}}>{savings}</Typography>
                </div>
                <Divider/>
            </Container>
        </Container>
    );
}

export default MainSavingsCalc;
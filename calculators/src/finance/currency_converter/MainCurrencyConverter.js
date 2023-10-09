import React, { useEffect, useState } from 'react';
import { Container, Typography, Select, MenuItem, Button } from '@mui/material';
import Axios from 'axios';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import './CurrencyApp.css';

function MainCurrencyConverter() {
    // Initializing all the state variables
    const [info, setInfo] = useState([]);
    const [input, setInput] = useState(0);
    const [from, setFrom] = useState('usd');
    const [to, setTo] = useState('inr');
    const [options, setOptions] = useState([]);
    const [output, setOutput] = useState(0);

    // Calling the api whenever the dependency changes
    useEffect(() => {
        Axios.get(
            `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`
        ).then((res) => {
            setInfo(res.data[from]);
        });
    }, [from]);

    // Calling the convert function whenever
    // a user switches the currency
    useEffect(() => {
        setOptions(Object.keys(info));
        convert();
    }, [info]);

    // Function to convert the currency
    function convert() {
        var rate = info[to];
        setOutput(input * rate);
    }

    // Function to switch between two currencies
    function flip() {
        var temp = from;
        setFrom(to);
        setTo(temp);
    }

    return (
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: '10' }}>
            <Typography pt={1} variant="h5" sx={{ textAlign: 'center' }}>
                Currency Converter
            </Typography>
            <hr />
            <br />

            <div className="container">
                <div className="left">
                    <h3>Amount</h3>
                    <input
                        type="text"
                        placeholder="Number"
                        onChange={(e) => setInput(e.target.value)}
                    />
                </div>
                <div className="middle">
                    <h3>From</h3>
                    <Select
                        value={from}
                        onChange={(e) => setFrom(e.target.value)}
                        placeholder="From"
                    >
                        {options.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </Select>
                </div>
                <div className="switch">
                    <div className="switch">
                        <CurrencyExchangeIcon style={{ fontSize: 30 }} onClick={() => flip()} />
                    </div>
                </div>
                <div className="right">
                    <h3>To</h3>
                    <Select
                        value={to}
                        onChange={(e) => setTo(e.target.value)}
                        placeholder="To"
                    >
                        {options.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </Select>
                </div>
            </div>
            <div className="result">
                <Button
                    className='convertButton'
                    variant="contained"
                    color="primary"
                    onClick={() => convert()}
                >
                    Convert
                </Button>
                <h2>Converted Amount:</h2>
                <p>
                    {input + ' ' + from + ' = ' + output.toFixed(2) + ' ' + to}
                </p>
            </div>
        </Container>
    );
}

export default MainCurrencyConverter;

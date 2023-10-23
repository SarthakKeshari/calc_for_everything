import React, { useEffect, useState } from 'react';
import { Button, Container, TextField, Typography } from '@mui/material';
import { chemicalData } from './chemicaFormulaData';

function MainChemicalFormulaValidator() {
    const [formula, setFormula] = useState('');
    const [found, setFound] = useState(-1);
    const [output, setOutput] = useState(null);

    const fetchData = async (formula) => {
        console.log({ formula });
        if (chemicalData.includes(formula)) {
            setFound(1);
        } else {
            setFound(0);
        }
    };

    useEffect(() => {
        if (found === 1) {
            setOutput("Valid Formula");
        } else if (found === 0) {
            setOutput("Invalid Formula");
        }
    }, [found]);

    return (
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: "10" }}>
            <Typography pt={1} variant='h5' sx={{ textAlign: "center" }}>Chemical Formula Validator</Typography>
            <hr />
            <br />

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <label
                    style={{
                        marginBottom: "1rem"
                    }}
                >Enter Chemical Formula</label>
                <TextField
                    style={{
                        width: "90%"
                    }}
                    onChange={(e) => setFormula(e.target.value)}
                    placeholder='Enter Here'
                />
                <Button
                    variant='contained'
                    style={{
                        marginTop: "1rem"
                    }}
                    onClick={() => fetchData(formula)}
                >
                    Validate
                </Button>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: "2rem"
                }}
            >
                <p
                    style={{
                        fontSize: "1.5rem",
                        color: "black"
                    }}
                >Output</p>
                <TextField
                    style={{
                        width: "90%"
                    }}
                    value={output}
                />
            </div>
        </Container>
    )
}

export default MainChemicalFormulaValidator;

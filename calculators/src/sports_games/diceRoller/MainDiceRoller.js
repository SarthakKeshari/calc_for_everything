import React, { useState } from 'react';
import { Container, Button, Grid, Typography } from '@mui/material';

function MainDiceRoller() {
    const [results, setResults] = useState([]);

    const rollDice = (numDice) => {
        const newResults = [];
        for (let i = 0; i < numDice; i++) {
            const result = Math.floor(Math.random() * 6) + 1;
            
            newResults.push(result);
        }
        setResults(newResults);
    };

    return (
        <Container>
            <h1>Dice Roller</h1>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick={() => rollDice(1)}>
                        Roll 1 Die
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick={() => rollDice(2)}>
                        Roll 2 Dice
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick={() => rollDice(3)}>
                        Roll 3 Dice
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick={() => rollDice(4)}>
                        Roll 4 Die
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick={() => rollDice(5)}>
                        Roll 5 Die
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick={() => rollDice(6)}>
                        Roll 6 Die
                    </Button>
                </Grid>
            </Grid>
            <Typography variant="h6" gutterBottom>
                Results:
            </Typography>
            <div>
                {results.map((result, index) => (
                    <Typography key={index} variant="subtitle1">
                        Die {index + 1}: {result}
                    </Typography>
                ))}
            </div>
        </Container>
    );
}

export default MainDiceRoller;

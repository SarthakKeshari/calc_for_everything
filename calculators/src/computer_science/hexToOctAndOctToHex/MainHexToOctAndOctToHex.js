import React, { useState } from "react";
import { Container, TextField, Button, Grid, Typography } from "@mui/material";

function MainHexToOctAndOctToHex() {

    const [hex, setHex] = useState("");
    const [oct, setOct] = useState("");

    const handleHexToOct = () => {
        try {
            const decimal = parseInt(hex, 16);
            const octal = decimal.toString(8);
            setOct(octal);
        } catch (error) {
            setOct("Invalid Input");
        }
    };

    const handleOctToHex = () => {
        try {
            const decimal = parseInt(oct, 8);
            const hex = decimal.toString(16);
            setHex(hex.toUpperCase());
        } catch (error) {
            setHex("Invalid Input");
        }
    };

    return (
        <Container
            maxWidth="lg"
            sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: "10" }}
        >
            <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
                Hexadecimal to Octal and Octal to Hexadecimal Calculator
            </Typography>

            <hr />
            <br />

            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12}>
                    <TextField
                        label="Hexadecimal"
                        variant="outlined"
                        fullWidth
                        value={hex}
                        onChange={(e) => setHex(e.target.value.toUpperCase())}
                    />
                </Grid>

                <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick={handleHexToOct}>
                        Convert Hex to Oct
                    </Button>
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        label="Octal"
                        variant="outlined"
                        fullWidth
                        value={oct}
                        onChange={(e) => setOct(e.target.value)}
                    />
                </Grid>

                <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick={handleOctToHex}>
                        Convert Oct to Hex
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export default MainHexToOctAndOctToHex;

import React, { useState, useMemo } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
} from "@mui/material";
import numberToWords from "number-to-words";
import inr from "inr-words";

const MainNumeralsToWords = () => {
  const [inputNumber, setInputNumber] = useState("");
  const [indianNumerals, setIndianNumerals] = useState("");
  const [indianWords, setIndianWords] = useState("");
  const [internationalNumerals, setInternationalNumerals] = useState("");
  const [internationalWords, setInternationalWords] = useState("");

  const convertNumber = () => {
    const number = parseFloat(inputNumber);

    if (isNaN(number)) {
      setIndianNumerals("Invalid Number");
      setIndianWords("Invalid Number");
      setInternationalNumerals("Invalid Number");
      setInternationalWords("Invalid Number");
      return;
    }

    const formattedNumber = new Intl.NumberFormat("en-IN").format(number);
    setIndianNumerals(formattedNumber);

    const formattedInternationalNumber = new Intl.NumberFormat("en-US").format(number);
    setInternationalNumerals(formattedInternationalNumber);

    const indianWords = inr(number).slice(0,-8);

    setIndianWords(indianWords);

    const internationalWords = numberToWords.toWords(number, {
      locale: "en-US",
    });
    setInternationalWords(internationalWords);
  };

  return (
    <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY:"10" }}>
    <Typography pt={1} variant='h5' sx = {{textAlign: "center"}}>Numerals To Words Converter</Typography>
    <hr/>
    <br/>
      <TextField
          label="Enter a number"
          fullWidth
          variant="outlined"
          value={inputNumber  }
          onChange={(e) => setInputNumber(e.target.value)}
          style={{ marginTop: "20px" }}
      />
      <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={convertNumber}
          style={{ marginTop: '20px' }}
      >
          Convert
      </Button>
      <Grid container spacing={3} style={{ marginTop: '20px' }}>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} style={{ padding: "20px" }}>
            <Typography variant="h6">Indian Number System:</Typography>
            <Typography variant="body1">Numeral: {indianNumerals}</Typography>
            <Typography variant="body1">Words: {indianWords}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} style={{ padding: "20px" }}>
            <Typography variant="h6">International Number System:</Typography>
            <Typography variant="body1">Numeral: {internationalNumerals}</Typography>
            <Typography variant="body1">Words: {internationalWords}</Typography>
          </Paper>
        </Grid>
      </Grid>
      
    </Container>
  );
};

export default MainNumeralsToWords;

import React, { useState } from "react";
import { Container, Typography, TextField, FormControl, Button} from "@mui/material";
import "./MainZScoreCalc.css"

function MainZScoreCalc() {

    // all the usestate variables 
    const [mean, setMean] = useState();
    const [sd, setSd] = useState();
    const [raw, setRaw] = useState();
    const [result, setResult] = useState("Fill all the fields");


    // function to calculate Zscore and check for errors
    const calculateZScore = () =>{
        if(mean === undefined || sd=== undefined || raw === undefined){
            setResult("Field Must have a value");
            return;
        }
        if(sd === "0"){
            setResult("Standard Deviation can not be zero");
            return;
        }
        let answer = (raw - mean)/sd;
        setResult(answer)
        console.log("executed"+ result)
    }
  return (
    <Container
      maxWidth="lg"
      sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: "10" }}
    >
      <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
        Z-Score Calculator
      </Typography>
      <hr />
      <br />
      {/* Write your code here */}

      <FormControl sx={{
        transform:"translate(-50%,0%)",
        left: "50%",
        top: "20%",
        alignItems: "center"
      }}>


        {/* input box for mean, standard deviation and raw Score */}

        <TextField
          label=" Poplation Mean(μ)"
          type="number"
          value={mean}
          onChange={(event) => {setMean(event.target.value); console.log(mean)}}
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*'}}
          sx={{ marginBottom: 2,}}
        />
        <TextField
           label="Standard Deviation(σ)"
           type="number"
           value={sd}
           onChange={(event) => {setSd(event.target.value); console.log(sd)}}
           inputProps={{ inputMode: 'numeric', pattern: '[0-9]*'}}
           sx={{ marginBottom: 2 ,}}
         
        />
        <TextField
           label="Raw Score(x)"
           type="number"
           value={raw}
           onChange={(event) => {setRaw(event.target.value); console.log(raw)}}
           inputProps={{ inputMode: 'numeric', pattern: '[0-9]*'}}
           sx={{ marginBottom: 2,}}
            />



      {/* submit button */}
        <Button
        type="submit"
          variant="contained"
          onClick={calculateZScore}
          sx={{ margin: 1, padding: 1 }}
        >
          Convert to Binary
        </Button>

      </FormControl>



      {/* Result section  */}
      <p style={{
        position: "relative",
        transform:"translate(-50%,1%)",
        left: "50%",
        top: "50%", 
        textAlign: "center",
        color: "black",
        fontWeight: 400,
      }}>
         Z-Score: &nbsp;
         {
            result
         }   
      </p>

      {/* End your code here */}
    </Container>
  );
}

export default MainZScoreCalc;

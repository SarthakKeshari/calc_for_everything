import React, { useEffect, useState } from "react";
import {
  Container,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

function MainElasticPotentialCalc() {
  const [distChange, setDistChange] = useState(0);
  const [k, setK] = useState(200);
  const [result, setResult] = useState(0);
  const handleInput = (e) => {
    setDistChange(e.target.value);
  };
  const handleK = (e) => {
    setK(e.target.value);
  };

  useEffect(() => {
    setResult(0.5 * k * distChange * distChange);
  }, [distChange, k]);
  return (
    <Container
      maxWidth="lg"
      sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: "10" }}
    >
      <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
        Elastic Potential Calculator
      </Typography>
      <hr />
      <br />
      {/* Write your code here */}

      <TextField
        label="Enter the displacement (Δx) in the body as a result of applied external force (in meters)"
        type="number"
        variant="standard"
        sx={{ m: 1, width: "55ch" }}
        InputProps={{
          endAdornment: <InputAdornment position="end">m</InputAdornment>,
        }}
        value={distChange}
        onChange={handleInput}
      />

      <TextField
        label="Enter value of spring constand (k) (N/m) "
        type="number"
        variant="standard"
        sx={{ m: 1, width: "55ch" }}
        InputProps={{
          endAdornment: <InputAdornment position="end">N/m</InputAdornment>,
        }}
        value={k}
        onChange={handleK}
      />
      <div>
        <div>
          <img
            src="https://www.gstatic.com/education/formulas2/553212783/en/elastic_energy.svg"
            alt="Elasti Potential Energy Formula"
          />
          <div>k = spring constant</div>
          <div>Δx = change in position</div>
          <div>U = elastic energy</div>
        </div>
        <div>
          <i>
            <b>Result</b> : 
          </i>
          <span> U = {result} Joules </span>
        </div>
      </div>

      {/* End your code here */}
    </Container>
  );
}

export default MainElasticPotentialCalc;

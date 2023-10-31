import React, { useEffect, useState } from "react";
import { Container, TextField, Typography } from "@mui/material";

function MainNthRootCalc() {
  const [value, setValue] = useState(0);
  const [root, setRoot] = useState(1);
  const [result, setResult] = useState(0);
  const [rank, setRank] = useState("st");

  const handleInput = (e) => {
    setValue(e.target.value);
  };
  const handleRoot = (e) => {
    setRoot(e.target.value);
  };

  useEffect(() => {
    setResult(Math.pow(value, 1 / root));
    const tenths = root%10;
    const hundreds = root%100;
    const rankTypes = ["st", "nd", "rd", "th"];
    if (tenths === 1 && hundreds !== 11) {
      setRank(rankTypes[0]);
    } else if (tenths === 2 && hundreds !== 12) {
      setRank(rankTypes[1]);
    } else if (tenths === 3 && hundreds !== 13) {
      setRank(rankTypes[2]);
    } else {
      setRank(rankTypes[3]);
    }
  }, [value, root]);

  return (
    <Container
      maxWidth="lg"
      sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: "10" }}
    >
      <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
        Nth Root Calculator
      </Typography>
      <hr />
      <br />
      {/* Write your code here */}
      <TextField
        label="Enter a number"
        type="number"
        variant="outlined"
        value={value}
        onChange={handleInput}
      />
      <TextField
        label="Enter value of 'N' in N'th root"
        type="number"
        variant="outlined"
        value={root}
        onChange={handleRoot}
      />
      <br />
      <br />
      <Typography variant="h6">
        <i>
          <b>Result</b> :
        </i>
        {root}'{rank} root of {value} is {result}
      </Typography>
      {/* End your code here */}
    </Container>
  );
}

export default MainNthRootCalc;

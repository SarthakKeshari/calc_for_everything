import React, { useEffect, useState } from "react";
import { Container, TextField, Typography } from "@mui/material";

function MainNthRootCalc() {
  const [value, setValue] = useState(0);
  const [root, setRoot] = useState(1);
  const [result, setResult] = useState(0);
  const [rank, setRank] = useState("st");
  const rankTypes = ["st", "nd", "rd", "th"];

  const handleInput = (e) => {
    setValue(e.target.value);
  };
  const handleRoot = (e) => {
    setRoot(e.target.value);
  };

  useEffect(() => {
    setResult(Math.pow(value, 1 / root));
    if (root % 10 === 1 && root % 100 !== 11) {
      setRank(rankTypes[0]);
    } else if (root % 10 === 2 && root % 100 !== 12) {
      setRank(rankTypes[1]);
    } else if (root % 10 === 3 && root % 100 !== 13) {
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

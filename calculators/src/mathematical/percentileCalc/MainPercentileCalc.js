import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

function MainPercentileCalc() {
  const [data, setData] = useState("");
  const [number, setnumber] = useState("");
  const [result, setresult] = useState(null);

  const handleCalculate = () => {
    if (number === "" || data === "") {
      return alert(
        "Please make sure to add your data and provide a data point to calculate percentile."
      );
    }

    let modifyData = data;
    while (modifyData[modifyData.length - 1] === ",") {
      modifyData = modifyData.slice(0, -1);
    }
    const dataArray = modifyData
      .split(",")
      .map((item) => parseFloat(item.trim()))
      .sort(function (a, b) {
        return a - b;
      });

    const numIndex = dataArray.indexOf(parseFloat(number));
    if (numIndex == -1)
      return alert("The data point must lie in the data provided above.");

    setresult(calculateP(numIndex, dataArray.length) * 100);
  };

  const calculateP = (pos, total) => {
    // pos - index of the data point
    // total - total number of data points => len of the dataArray
    return (pos + 1) * (1 / total);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: "10" }}
    >
      <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
        Percentile Calculator
      </Typography>
      <hr />
      <br />
      <TextField
        label="Enter data (comma-separated)"
        variant="outlined"
        fullWidth
        value={data}
        onChange={(e) => setData(e.target.value)}
        sx={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
        style={{ marginBottom: "1rem" }}
      />
      {/* input for the number to find percentile for  */}
      <TextField
        type="Number"
        label="Enter one data point from above."
        variant="outlined"
        value={number}
        onChange={(e) => setnumber(e.target.value)}
        fullWidth
        sx={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
      />

      {/* button to proceed for calculation */}
      <Button
        variant="contained"
        color="primary"
        sx={{ marginTop: "1rem" }}
        onClick={handleCalculate}
      >
        Calculate
      </Button>

      {/* results */}
      {result !== null && (
        <Box mt={3}>
          <Paper
            elevation={3}
            sx={{ maxHeight: "380px", overflowY: "auto", padding: "16px" }}
          >
            <div>
              <Typography variant="h6">Calculated Percentile :</Typography>
              <Typography variant="body1">{result} %</Typography>
            </div>
          </Paper>
        </Box>
      )}
    </Container>
  );
}

export default MainPercentileCalc;

import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Box,
  List,
  ListItem,
} from "@mui/material";

function MainSortingVisualizer() {
  const [inputValues, setInputValues] = useState("");
  const [sortedValues, setSortedValues] = useState([]);
  const [activeIndices, setActiveIndices] = useState([]);
  const [sorting, setSorting] = useState(false);

  useEffect(() => {
    const valuesArray = inputValues
      .split(",")
      .map((value) => Number(value.trim()));
    setSortedValues([...valuesArray]);
  }, [inputValues]);

  const bubbleSort = async () => {
    setSorting(true);

    const valuesArray = [...sortedValues];
    const n = valuesArray.length;

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        setActiveIndices([j, j + 1]);

        await sleep(1000);

        if (valuesArray[j] > valuesArray[j + 1]) {
          const temp = valuesArray[j];
          valuesArray[j] = valuesArray[j + 1];
          valuesArray[j + 1] = temp;
          setSortedValues([...valuesArray]);
        }
      }
    }

    setActiveIndices([]);
    setSorting(false);
  };

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  return (
    <Container
      maxWidth="lg"
      sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: "10" }}
    >
      <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
        {sorting ? "Sorting" : "Sorted Values"}{" "}
      </Typography>
      <hr />
      <br />
      <Paper elevation={3} sx={{ padding: "16px", textAlign: "center" }}>
        <TextField
          label="Enter values (comma-separated)"
          variant="outlined"
          fullWidth
          value={inputValues}
          onChange={(e) => setInputValues(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={async () => {
            await bubbleSort();
          }}
          disabled={sorting}
          sx={{ mt: "1rem" }}
        >
          SORT
        </Button>
        <Box
          mt={3}
          sx={{ fontWeight: "bold", color: sorting ? "orange" : "green" }}
        >
          {sorting ? "Sorting..." : "Sorted Values:"}
        </Box>
        <List>
          {sortedValues.map((value, index) => (
            <ListItem
              key={index}
              sx={{
                backgroundColor: sorting
                  ? activeIndices.includes(index)
                    ? "#00d3ff"
                    : "lightblue"
                  : "lightgreen",
                borderRadius: "5px",
                padding: "8px",
                color: sorting ? "black" : "white",
              }}
            >
              {value}
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
}

export default MainSortingVisualizer;

import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Box,
  List,
  ListItem,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

function MainSearchingVisualizer() {
  const [inputValues, setInputValues] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [searching, setSearching] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [message, setMessage] = useState("");
  const [searchType, setSearchType] = useState("linear");

  const valuesArray = inputValues.split(",").map((value) => value.trim());

  const handleSearchTypeChange = (event) => {
    setSearchType(event.target.value);
  };

  const linearSearch = () => {
    setSearching(true);

    let currentIndex = 0;
    const searchInterval = setInterval(() => {
      if (currentIndex === valuesArray.length) {
        clearInterval(searchInterval);
        setSearching(false);
        setMessage("Value not found");
        // Change all values to orange when the value is not found
        setHighlightedIndex(-1);
        return;
      }

      setHighlightedIndex(currentIndex);

      if (valuesArray[currentIndex] === searchValue) {
        clearInterval(searchInterval);
        setSearching(false);
        setMessage("Value found");
        // Change the found value to green
        setHighlightedIndex(currentIndex);
      }

      currentIndex++;
    }, 500); // Adjust the interval duration as needed
  };

  const binarySearch = () => {
    setSearching(true);
    let left = 0;
    let right = valuesArray.length - 1;
    const searchInterval = setInterval(() => {
      if (left > right) {
        clearInterval(searchInterval);
        setSearching(false);
        setMessage("Value not found");
        // Change all values to orange when the value is not found
        setHighlightedIndex(-1);
        return;
      }

      const mid = Math.floor((left + right) / 2);
      setHighlightedIndex(mid);

      if (valuesArray[mid] === searchValue) {
        clearInterval(searchInterval);
        setSearching(false);
        setMessage("Value found");
        // Change the found value to green
        setHighlightedIndex(mid);
      }

      if (valuesArray[mid] < searchValue) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }, 500); // Adjust the interval duration as needed
  };

  const interpolationSearch = () => {
    setSearching(true);
    let left = 0;
    let right = valuesArray.length - 1;
    const searchInterval = setInterval(() => {
      if (left > right) {
        clearInterval(searchInterval);
        setSearching(false);
        setMessage("Value not found");
        // Change all values to orange when the value is not found
        setHighlightedIndex(-1);
        return;
      }

      const rangeDelta = valuesArray[right] - valuesArray[left];
      if (rangeDelta === 0) {
        // Avoid division by zero
        clearInterval(searchInterval);
        setSearching(false);
        setMessage("Value not found");
        // Change all values to orange when the value is not found
        setHighlightedIndex(-1);
        return;
      }

      const position =
        left +
        Math.floor(
          ((right - left) / rangeDelta) * (searchValue - valuesArray[left])
        );

      if (position < left || position > right) {
        clearInterval(searchInterval);
        setSearching(false);
        setMessage("Value not found");
        // Change all values to orange when the value is not found
        setHighlightedIndex(-1);
        return;
      }

      setHighlightedIndex(position);

      if (valuesArray[position] === searchValue) {
        clearInterval(searchInterval);
        setSearching(false);
        setMessage("Value found");
        // Change the found value to green
        setHighlightedIndex(position);
      }

      if (valuesArray[position] < searchValue) {
        left = position + 1;
      } else {
        right = position - 1;
      }
    }, 500); // Adjust the interval duration as needed
  };

  const performSearch = () => {
    if (searchType === "linear") {
      linearSearch();
    } else if (searchType === "binary") {
      binarySearch();
    } else if (searchType === "interpolation") {
      interpolationSearch();
    }
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ bgcolor: "#f0f0f0", minHeight: "100vh", py: "2rem" }}
    >
      <Typography variant="h4" sx={{ textAlign: "center", mb: "1rem" }}>
        Searching Visualizer
      </Typography>
      <Paper elevation={3} sx={{ padding: "2rem", textAlign: "center" }}>
        <TextField
          label="Enter values (comma-separated)"
          variant="outlined"
          fullWidth
          value={inputValues}
          onChange={(e) => setInputValues(e.target.value)}
        />
        <TextField
          label="Value to Search"
          variant="outlined"
          fullWidth
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          sx={{ mt: "1rem" }}
        />
        <FormControl variant="outlined" fullWidth sx={{ mt: "1rem" }}>
          <InputLabel id="search-type-label">Search Type</InputLabel>
          <Select
            labelId="search-type-label"
            id="search-type"
            value={searchType}
            onChange={handleSearchTypeChange}
            label="Search Type"
          >
            <MenuItem value="linear">Linear Search</MenuItem>
            <MenuItem value="binary">Binary Search</MenuItem>
            <MenuItem value="interpolation">Interpolation Search</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={performSearch}
          disabled={searching}
          sx={{ mt: "1rem" }}
        >
          Search
        </Button>
        <Box
          mt={3}
          sx={{
            fontWeight: "bold",
            color:
              message === "Value found"
                ? "green"
                : message === "Value not found"
                  ? "red"
                  : "black",
          }}
        >
          {message || "Search Your Value"}
        </Box>
      </Paper>
      <Typography variant="h6" sx={{ mt: "2rem" }}>
        Visualization:
      </Typography>
      <List>
        {valuesArray.map((value, index) => (
          <ListItem
            key={index}
            sx={{
              backgroundColor:
                highlightedIndex === index
                  ? valuesArray[index] === searchValue
                    ? "green"
                    : "red"
                  : "#888",
              borderRadius: "5px",
              padding: "8px",
              color: "white",
            }}
          >
            {value}
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default MainSearchingVisualizer;
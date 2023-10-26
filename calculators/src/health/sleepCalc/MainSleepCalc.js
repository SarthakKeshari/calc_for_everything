import React, { useState } from "react";
import {
  Container,
  Typography,
  Paper,
  Box,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

function MainSleepCalc() {
  const [age, setAge] = useState("");
  const [ageUnit, setAgeUnit] = useState("years");
  const [recommendedSleep, setRecommendedSleep] = useState(null);
  const [error, setError] = useState(false);

  const calculateRecommendedSleep = (age, ageUnit) => {
    if (age === "" || !/^\d+$/.test(age)) {
      setError(true);
      return "Please enter a valid age (use numbers only).";
    }
    setError(false);

    const ageInMonths = ageUnit === "months" ? age : age * 12;

    let result = "";

    switch (ageUnit) {
      case "months":
        switch (true) {
          case ageInMonths >= 0 && ageInMonths <= 3:
            result = "Newborn: 14-17 hours per 24 hours (including naps)";
            break;
          case ageInMonths >= 4 && ageInMonths <= 12:
            result = "Infant: 12–16 hours per 24 hours (including naps)";
            break;
          case ageInMonths >= 13 && ageInMonths <= 24:
            result = "Toddler: 11–14 hours per 24 hours (including naps)";
            break;
          case ageInMonths >= 25 && ageInMonths <= 60:
            result = "Preschool: 10–13 hours per 24 hours (including naps)";
            break;
          default:
            break;
        }
        break;
      case "years":
        switch (true) {
          case age >= 1 && age <= 2:
            result = "Toddler: 11–14 hours per 24 hours (including naps)";
            break;
          case age >= 3 && age <= 5:
            result = "Preschool: 10–13 hours per 24 hours (including naps)";
            break;
          case age >= 6 && age <= 12:
            result = "School Age: 9–12 hours per 24 hours";
            break;
          case age >= 13 && age <= 18:
            result = "Teen: 8–10 hours per 24 hours";
            break;
          case age >= 18 && age <= 60:
            result = "Adult: 7 or more hours per night";
            break;
          case age >= 61 && age <= 64:
            result = "Adult: 7–9 hours per night";
            break;
          case age >= 65:
            result = "Adult: 7–8 hours per night";
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }

    if (result !== "") {
      return result;
    } else {
      return "Age not within the specified range for this group";
    }
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setAge(inputValue);
  };

  const handleAgeUnitChange = (e) => {
    setAgeUnit(e.target.value);
  };

  const handleCalculateSleep = () => {
    const recommendedSleepHours = calculateRecommendedSleep(age, ageUnit);
    setRecommendedSleep(recommendedSleepHours);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: 10 }}
    >
      <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
        Sleep Calculator
      </Typography>
      <hr />
      <br />

      <Container maxWidth="sm">
        <Paper elevation={3}>
          <Box p={3}>
            <Typography variant="h5" align="center"></Typography>
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={12}>
                <TextField
                  type="text"
                  fullWidth
                  label="Enter your age"
                  variant="outlined"
                  value={age}
                  onChange={handleInputChange}
                  error={error}
                  helperText={error}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel htmlFor="age-unit">Age Unit</InputLabel>
                  <Select
                    label="Age Unit"
                    id="age-unit"
                    value={ageUnit}
                    onChange={handleAgeUnitChange}
                  >
                    <MenuItem value="months">Months</MenuItem>
                    <MenuItem value="years">Years</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} align="center">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleCalculateSleep}
                >
                  Calculate Recommended Sleep
                </Button>
              </Grid>
              {recommendedSleep !== null && (
                <Grid item xs={12} align="center">
                  <Typography>
                    {recommendedSleep ===
                    "Please enter a valid age (use numbers only)."
                      ? recommendedSleep
                      : recommendedSleep.startsWith("Age not within")
                      ? recommendedSleep
                      : `Recommended sleep for your age: ${recommendedSleep}`}
                  </Typography>
                </Grid>
              )}
            </Grid>
          </Box>
        </Paper>
      </Container>
    </Container>
  );
}

export default MainSleepCalc;

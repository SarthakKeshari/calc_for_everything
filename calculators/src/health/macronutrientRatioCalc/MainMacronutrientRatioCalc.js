import React, { useState } from "react";
import {
  Container,
  Typography,
  FormControl,
  InputLabel,
  TextField,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

function MainMacronutrientRatioCalc() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState("");
  const [goal, setGoal] = useState("");
  const [calories, setCalories] = useState("");
  const [carbohydrates, setCarbohydrates] = useState("");
  const [proteins, setProteins] = useState("");
  const [fats, setFats] = useState("");
  const [result, setResult] = useState(null);

  function handleCalculate() {
    let bmr;
    if (gender === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    const activityLevelsFactors = {
      Sedentary: 1.2,
      Light: 1.375,
      Moderate: 1.55,
      Active: 1.725,
      "Very Active": 1.9,
      "Extra Active": 1.9,
    };
    const activityFactor = activityLevelsFactors[activity];
    let calculatedCalories;
    if (goal === "Maintain weight") {
      calculatedCalories = bmr * activityFactor;
    } else if (goal === "Mild weight loss of 0.5 lb (0.25 kg) per week") {
      calculatedCalories = bmr * activityFactor - 500;
    } else if (goal === "Weight loss of 1 lb (0.5 kg) per week") {
      calculatedCalories = bmr * activityFactor - 1000;
    } else if (goal === "Extreme weight loss of 2 lb (1 kg) per week") {
      calculatedCalories = bmr * activityFactor - 2000;
    } else if (goal === "Mild weight gain of 0.5 lb (0.25 kg) per week") {
      calculatedCalories = bmr * activityFactor + 500;
    } else if (goal === "Weight gain of 1 lb (0.5 kg) per week") {
      calculatedCalories = bmr * activityFactor + 1000;
    } else if (goal === "Extreme weight gain of 2 lb (1 kg) per week") {
      calculatedCalories = bmr * activityFactor + 2000;
    }
    const calculatedCarbohydrates = (calculatedCalories * 0.4) / 4;
    const calculatedProteins = (calculatedCalories * 0.3) / 4;
    const calculatedFats = (calculatedCalories * 0.3) / 9;
    setCalories(calculatedCalories.toFixed(2));
    setCarbohydrates(calculatedCarbohydrates.toFixed(2));
    setProteins(calculatedProteins.toFixed(2));
    setFats(calculatedFats.toFixed(2));
    setResult(true);
  }
  return (
    <Container
      maxWidth="lg"
      sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: 10 }}
    >
      <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
        Macronutrient Ratio Calculator
      </Typography>
      <hr />
      <br />

      <TextField
        label="Age"
        variant="outlined"
        fullWidth
        margin="normal"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <FormControl variant="outlined" fullWidth margin="normal">
        <InputLabel
          style={{ backgroundColor: "#eeeeee", paddingInline: "4px" }}
        >
          Gender
        </InputLabel>
        <Select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          style={{ backgroundColor: "#eeeeee" }}
        >
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Height (in cm)"
        variant="outlined"
        fullWidth
        margin="normal"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <TextField
        label="Weight (in kg)"
        variant="outlined"
        fullWidth
        margin="normal"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <FormControl variant="outlined" fullWidth margin="normal">
        <InputLabel
          style={{ backgroundColor: "#eeeeee", paddingInline: "4px" }}
        >
          Activity Level
        </InputLabel>
        <Select
          value={activity}
          onChange={(e) => {
            setActivity(e.target.value);
          }}
          style={{ backgroundColor: "#eeeeee" }}
        >
          <MenuItem value="Sedentary">
            Sedentary: Little or no exercise
          </MenuItem>
          <MenuItem value="Light">Light: Exercise 1-3 times/week</MenuItem>
          <MenuItem value="Moderate">
            Moderate: Exercise 4-5 times/week
          </MenuItem>
          <MenuItem value="Active">
            Active: Daily exercise or intense exercise 3-4 times/week
          </MenuItem>
          <MenuItem value="Very Active">
            Very Active: Intense exercise 6-7 times/week
          </MenuItem>
          <MenuItem value="Extra Active">
            Extra Active: Very intense exercise daily, or physical job
          </MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined" fullWidth margin="normal">
        <InputLabel
          style={{ backgroundColor: "#eeeeee", paddingInline: "4px" }}
        >
          Your Goal
        </InputLabel>
        <Select
          value={goal}
          onChange={(e) => {
            setGoal(e.target.value);
          }}
          style={{ backgroundColor: "#eeeeee" }}
        >
          <MenuItem value="Maintain weight">Maintain weight</MenuItem>
          <MenuItem value="Mild weight loss of 0.5 lb (0.25 kg) per week">
            Mild weight loss of 0.5 lb (0.25 kg) per week
          </MenuItem>
          <MenuItem value="Weight loss of 1 lb (0.5 kg) per week">
            Weight loss of 1 lb (0.5 kg) per week
          </MenuItem>
          <MenuItem value="Extreme weight loss of 2 lb (1 kg) per week">
            Extreme weight loss of 2 lb (1 kg) per week
          </MenuItem>
          <MenuItem value="Mild weight gain of 0.5 lb (0.25 kg) per week">
            Mild weight gain of 0.5 lb (0.25 kg) per week
          </MenuItem>
          <MenuItem value="Weight gain of 1 lb (0.5 kg) per week">
            Weight gain of 1 lb (0.5 kg) per week
          </MenuItem>
          <MenuItem value="Extreme weight gain of 2 lb (1 kg) per week">
            Extreme weight gain of 2 lb (1 kg) per week
          </MenuItem>
        </Select>
      </FormControl>
      <Button
        variant="contained"
        onClick={handleCalculate}
        fullWidth
        style={{ marginTop: 20, paddingBlock: 10 }}
      >
        Calculate
      </Button>
      {result && (
        <div
          style={{
            marginTop: 20,
            border: "1px solid #ccc",
            padding: 15,
            borderRadius: 5,
          }}
        >
          <Typography variant="h6">Results:</Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography style={{ marginBottom: 10 }}>
              Calories: {calories} kcal
            </Typography>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography>Carbohydrates: {carbohydrates} grams </Typography>
              <Typography>Proteins: {proteins} gram </Typography>
              <Typography>Fats: {fats} grams </Typography>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}

export default MainMacronutrientRatioCalc;

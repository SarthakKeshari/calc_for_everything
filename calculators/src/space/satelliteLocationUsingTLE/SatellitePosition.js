import React, { useState, useEffect } from "react";
import { twoline2satrec, propagate, gstime, eciToGeodetic } from "satellite.js";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const useStyles = {
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
    textAlign: "center",
    margin: "20px 0",
  },
  input: {
    width: "100%",
  },
  button: {
    margin: "20px 0",
  },
  positionInfo: {
    color: "darkgrey",
  },
};

function SatellitePosition() {
  const [TLE, setTLE] = useState("");
  const [position, setPosition] = useState(null);
  const [country, setCountry] = useState(""); // New state for country information
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setDate(new Date()), 4000);
    return () => clearInterval(interval);
  }, []);


  const handleTLEChange = (event) => {
    setTLE(event.target.value);
  };

  const calculatePosition = () => {
    const satrec = twoline2satrec(
      TLE.split("\n")[0].trim(),
      TLE.split("\n")[1].trim()
    );

    const positionAndVelocity = propagate(satrec, date);
    const gmst = gstime(date);
    const satellitePositions = eciToGeodetic(
      positionAndVelocity.position,
      gmst
    );
    setPosition(satellitePositions);

    // Use a geocoding service (Nominatim) to get country information
    fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${satellitePositions.latitude}&lon=${satellitePositions.longitude}&zoom=10`)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.address && data.address.country) {
          setCountry(data.address.country);
        } else {
          setCountry("Country information not available");
        }
      })
      .catch((error) => {
        console.error("Error fetching country information: ", error);
        setCountry("Error fetching country information");
      });
  };

  return (
    <Box sx={useStyles.root}>
      <Box sx={useStyles.inputContainer}>
        <TextField
          label="TLE Data"
          variant="outlined"
          multiline
          rows={5}
          value={TLE}
          onChange={handleTLEChange}
          sx={useStyles.input}
        />
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={calculatePosition}
        sx={useStyles.button}
      >
        Calculate Position
      </Button>
      {position && (
        <div>
          <Typography variant="h6" sx={useStyles.positionInfo}>
            Latitude:{" "}
            <span style={{ color: "black" }}>
              {position.latitude}
            </span>
          </Typography>
          <Typography variant="h6" sx={useStyles.positionInfo}>
            Longitude:{" "}
            <span style={{ color: "black" }}>
              {position.longitude}
            </span>
          </Typography>
          <Typography variant="h6" sx={useStyles.positionInfo}>
            Country:{" "}
            <span style={{ color: "black" }}>
              {country}
            </span>
          </Typography>
        </div>
      )}
      {/* Your SatelliteMap component can be used here passing latitude and longitude */}
    </Box>
  );
}

export default SatellitePosition;

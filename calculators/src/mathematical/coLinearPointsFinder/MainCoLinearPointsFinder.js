import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Stack,
  Box,
} from "@mui/material";
import Plotly from 'react-plotly.js';

const minPoints = 3;
const maxPoints = 6;

function MainCoLinearPointsFinder() {
  const [numPoints, setNumPoints] = useState("");
  const [points, setPoints] = useState([]);
  const [showError, setShowError] = useState(false);
  const [collinearPoints, setColinearPoints] = useState(null);

  const handleNumPointsChange = (e) => {
    setColinearPoints(null);
    setNumPoints(e.target.value);
    if (e.target.value < minPoints || e.target.value > maxPoints) {
      setPoints([]);
      setShowError(true);
      return;
    }
    setShowError(false);
    let pointArray = [];
    for (let i = 0; i < e.target.value; i++) {
      pointArray.push({ x: "", y: "" });
    }
    setPoints(pointArray);
  };

  const handlePointsChange = (e, coordinate, index) => {
    setColinearPoints(null);
    let pointArray = [...points];
    if (coordinate === "x") {
      pointArray[index].x = e.target.value;
    } else {
      pointArray[index].y = e.target.value;
    }
    setPoints(pointArray);
  };

  function findCollinearGroups() {
    const collinearGroups = [];
    const uniqueSlopes = new Set(); // Set to store unique slopes

    function calculateSlope(point1, point2) {
      if (point1.x === point2.x) {
        return Infinity; // Vertical line, slope is infinity
      }
      return (point2.y - point1.y) / (point2.x - point1.x);
    }

    // Iterate through each pair of points
    for (let i = 0; i < points.length; i++) {
      const point1 = points[i];

      for (let j = i + 1; j < points.length; j++) {
        const point2 = points[j];
        const slope = calculateSlope(point1, point2);

        // Check if the slope already exists in the uniqueSlopes Set
        if (!uniqueSlopes.has(slope)) {
          uniqueSlopes.add(slope);
          const collinearGroup = [point1, point2]; // Initialize the group

          // Check all other points for the same slope
          for (let k = j + 1; k < points.length; k++) {
            const point3 = points[k];
            const slope2 = calculateSlope(point1, point3);

            // If the slope matches, add the point to the collinearGroup
            if (slope === slope2) {
              collinearGroup.push(point3);
            }
          }

          // Check if the collinearGroup has at least three points
          if (collinearGroup.length >= 3) {
            collinearGroups.push(collinearGroup);
          }
        }
      }
    }

    setColinearPoints(collinearGroups);
  }

  const generateChart=(data)=>{
       let datasets=[]
       datasets = data.map((group,idx)=>{
        return(
          {
            x: group.map(point=>point.x),
            y: group.map(point=>point.y),
            type: 'scatter',
            name: `Group ${idx+1}`,
          }
        )
       })

       return(datasets)

  }

  const getPointString = (points) => {
    let pointArray = [];
    points.forEach((point) => pointArray.push(`(${point.x},${point.y})`));
    return pointArray.join(" ");
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: "10" }}
    >
      <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
        Co-Linear Points Finder
      </Typography>
      <hr />
      <br />
      <TextField
        label="Number of Points"
        variant="outlined"
        type="number"
        fullWidth
        sx={{ mb: 2 }}
        value={numPoints}
        onChange={handleNumPointsChange}
      />
      {showError && (
        <Typography sx={{ color: "red" }}>
          Number of points should be between {minPoints} and {maxPoints}
        </Typography>
      )}
      <Stack spacing={2} sx={{ mb: 2 }}>
        {points.map((point, idx) => {
          return (
            <Stack spacing={2} direction={"row"} key={idx}>
              <Typography sx={{ flex: 2, textAlign: "center", pt: 2 }}>
                Point {idx + 1}
              </Typography>
              <TextField
                label="x coordinate"
                variant="outlined"
                type="number"
                sx={{ flex: 4 }}
                value={point.x}
                onChange={(e) => handlePointsChange(e, "x", idx)}
              />
              <TextField
                label="y coordinate"
                variant="outlined"
                type="number"
                sx={{ flex: 4 }}
                value={point.y}
                onChange={(e) => handlePointsChange(e, "y", idx)}
              />
            </Stack>
          );
        })}
      </Stack>
      {points.length > 0 && (
        <Button
          variant="contained"
          color="primary"
          onClick={findCollinearGroups}
        >
          Find Co-Linear Points
        </Button>
      )}
      {collinearPoints !== null &&
        (collinearPoints.length > 0 ? (
          <Box>
            <Typography
              pt={2}
              variant="h6"
              sx={{ textAlign: "center", color: "green" }}
            >
              Co-linear Points are:
            </Typography>
            {collinearPoints.map((group, idx) => {
              return (
                <>
                <Typography key={idx} variant="h6" sx={{ textAlign: "center" }}>
                  Group {idx + 1}: {getPointString(group)}
                </Typography>
                </>
              );
            })}
            <Plotly
                data={generateChart(collinearPoints)}
                style={{ width: '100%', height: '400px' }}
            />
          </Box>
        ) : (
          <Typography
            pt={2}
            variant="h6"
            sx={{ textAlign: "center", color: "red" }}
          >
            No Co-linear Points
          </Typography>
        ))}
    </Container>
  );
}

export default MainCoLinearPointsFinder;
import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

function MainDistanceFormula() {
  const [point1, setPoint1] = useState({ x: 0, y: 0, z: 0 });
  const [point2, setPoint2] = useState({ x: 0, y: 0, z: 0 });
  const [distance, setDistance] = useState(null);
  const [dimension, setDimension] = useState("2D"); // Default to 2D

  const calculateDistance = () => {
    const dx = point1.x - point2.x;
    const dy = point1.y - point2.y;
    let dist;

    if (dimension === "3D") {
      const dz = point1.z - point2.z;
      dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
    } else {
      dist = Math.sqrt(dx * dx + dy * dy);
    }

    setDistance(dist);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: "10" }}
    >
      <Typography pt={1} variant="h4" sx={{ textAlign: "center" }}>
        Distance Calculator
      </Typography>
      <hr />
      <br />
      <FormControl fullWidth sx={{ marginBottom: 3 }}>
        <InputLabel>Select Dimension</InputLabel>
        <Select
          value={dimension}
          onChange={(e) => setDimension(e.target.value)}
        >
          <MenuItem value="2D">2D</MenuItem>
          <MenuItem value="3D">3D</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label={`Point 1 X (${dimension})`}
        variant="outlined"
        type="number"
        fullWidth
        value={point1.x}
        onChange={(e) =>
          setPoint1({ ...point1, x: parseFloat(e.target.value) })
        }
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label={`Point 1 Y (${dimension})`}
        variant="outlined"
        type="number"
        fullWidth
        value={point1.y}
        onChange={(e) =>
          setPoint1({ ...point1, y: parseFloat(e.target.value) })
        }
        sx={{ marginBottom: 2 }}
      />
      {dimension === "3D" && (
        <TextField
          label={`Point 1 Z (${dimension})`}
          variant="outlined"
          type="number"
          fullWidth
          value={point1.z}
          onChange={(e) =>
            setPoint1({ ...point1, z: parseFloat(e.target.value) })
          }
          sx={{ marginBottom: 2 }}
        />
      )}
      <TextField
        label={`Point 2 X (${dimension})`}
        variant="outlined"
        type="number"
        fullWidth
        value={point2.x}
        onChange={(e) =>
          setPoint2({ ...point2, x: parseFloat(e.target.value) })
        }
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label={`Point 2 Y (${dimension})`}
        variant="outlined"
        type="number"
        fullWidth
        value={point2.y}
        onChange={(e) =>
          setPoint2({ ...point2, y: parseFloat(e.target.value) })
        }
        sx={{ marginBottom: 2 }}
      />
      {dimension === "3D" && (
        <TextField
          label={`Point 2 Z (${dimension})`}
          variant="outlined"
          type="number"
          fullWidth
          value={point2.z}
          onChange={(e) =>
            setPoint2({ ...point2, z: parseFloat(e.target.value) })
          }
          sx={{ marginBottom: 2 }}
        />
      )}
      <Button variant="contained" color="primary" onClick={calculateDistance}>
        Calculate Distance
      </Button>
      {distance !== null && (
        <Typography variant="h6" sx={{ textAlign: "center", marginTop: 2 }}>
          Distance: {distance.toFixed(2)}
        </Typography>
      )}
    </Container>
  );
}

export default MainDistanceFormula;

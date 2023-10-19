import React, { useState, useEffect } from "react";
import { Container, Box, Typography, TextField } from "@mui/material";

function MainProjectileCalc() {
  const [i_height, setI_height] = useState(0);
  const [i_vel, setI_vel] = useState(0);
  const [ProjectionAngle, setProjectionAngle] = useState(0);
  const [gravity, setGravity] = useState(9.807);
  const [vx, setVx] = useState("");
  const [vy, setVy] = useState("");
  const [tof, setTof] = useState("");
  const [max_height, setMax_height] = useState("");
  const [range, setRange] = useState("");
  const [err1, setErr1] = useState(false);
  const [err2, setErr2] = useState(false);
  const [err3, setErr3] = useState(false);
  const [err4, setErr4] = useState(false);

  useEffect(() => {
    try {
      setErr1(false);
      setErr2(false);
      setErr3(false);
      setErr4(false);
      const rad = (Math.PI / 180) * ProjectionAngle;
      const a = Math.cos(rad),
        b = Math.sin(rad);
      if (isNaN(a) || ProjectionAngle > 90 || ProjectionAngle < 0) {
        setErr3(true);
        throw new Error();
      }
      const c = i_vel * a,
        d = i_vel * b;
      if (isNaN(c) || !isFinite(c)) {
        setErr2(true);
        throw new Error();
      }
      setVx(c.toFixed(12));
      setVy(d.toFixed(12));
      const hi = i_height * 1,
        gr = gravity * 1;
      if (isNaN(hi) || !isFinite(hi) || i_height < 0) {
        setErr1(true);
        throw new Error();
      }
      if (isNaN(gr) || !isFinite(gr) || gravity <= 0) {
        setErr4(true);
        throw new Error();
      }
      setMax_height(eval(vy ** 2 / (2 * gr) + hi).toFixed(12));
      setTof(eval((d + (d ** 2 + 2 * gr * hi) ** 0.5) / gr).toFixed(12));
      setRange(eval(c * tof).toFixed(12));
    } catch (e) {
      setVx("");
      setVy("");
      setMax_height("");
      setTof("");
      setRange("");
    }
  }, [
    i_height,
    i_vel,
    ProjectionAngle,
    gravity,
    vx,
    vy,
    max_height,
    tof,
    range,
  ]);
  return (
    <Container maxWidth="md" sx={{ marginTop: "2rem" }}>
      <Typography variant="h4" gutterBottom>
        Projectile Calculator
      </Typography>
      <hr />
      <br />
      <Typography variant="h4">Inputs</Typography>
      <Box sx={{ margin: "10px 0" }}>
        <TextField
          id="outline"
          error={err1}
          label="Initial Height"
          variant="outlined"
          value={i_height}
          onChange={(e) => {
            setI_height(e.target.value);
          }}
          sx={{ margin: "10px" }}
          helperText={`${err1 ? "Invalid Input" : ""}`}
        />
        <TextField
          id="outline"
          error={err2}
          label="Initial Velocity"
          variant="outlined"
          value={i_vel}
          onChange={(e) => {
            setI_vel(e.target.value);
          }}
          sx={{ margin: "10px" }}
          helperText={`${err2 ? "Invalid Input" : ""}`}
        />
        <TextField
          id="outline"
          error={err3}
          label="Angle of Projection"
          variant="outlined"
          value={ProjectionAngle}
          onChange={(e) => {
            setProjectionAngle(e.target.value);
          }}
          placeholder="Enter angle in degree"
          sx={{ margin: "10px" }}
          helperText={`${err3 ? "Invalid Input" : ""}`}
        />
        <TextField
          id="outline"
          error={err4}
          label="Gravitational Acceleration"
          variant="outlined"
          value={gravity}
          onChange={(e) => {
            setGravity(e.target.value);
          }}
          sx={{ margin: "10px" }}
          helperText={`${err4 ? "Invalid Input" : ""}`}
        />
      </Box>
      <Typography variant="h4">Outputs</Typography>
      <Box sx={{ margin: "10px 0" }}>
        <TextField
          id="outline"
          label="Vx"
          variant="outlined"
          value={vx}
          inputProps={{ readOnly: true }}
          sx={{ margin: "10px" }}
        />
        <TextField
          id="outline"
          label="Vy"
          variant="outlined"
          value={vy}
          inputProps={{ readOnly: true }}
          sx={{ margin: "10px" }}
        />
        <TextField
          id="outline"
          label="Time of Flight"
          variant="outlined"
          value={tof}
          inputProps={{ readOnly: true }}
          sx={{ margin: "10px" }}
        />
        <TextField
          id="outline"
          label="Maximum Height"
          variant="outlined"
          value={max_height}
          inputProps={{ readOnly: true }}
          sx={{ margin: "10px" }}
        />
        <TextField
          id="outline"
          label="Range"
          variant="outlined"
          value={range}
          inputProps={{ readOnly: true }}
          sx={{ margin: "10px" }}
        />
      </Box>
    </Container>
  );
}

export default MainProjectileCalc;
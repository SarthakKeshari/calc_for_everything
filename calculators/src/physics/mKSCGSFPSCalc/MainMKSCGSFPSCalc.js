import React, { useState } from "react";
import { Container, Grid, TextField, Typography } from "@mui/material";

function FormRowLabel() {
  return (
    <React.Fragment>
      <Grid item xs={3}>
        <Typography pt={1} variant="h6" sx={{ textAlign: "center" }}>
          Quantity
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography pt={1} variant="h6" sx={{ textAlign: "center" }}>
          MKS
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography pt={1} variant="h6" sx={{ textAlign: "center" }}>
          CGS
        </Typography>{" "}
      </Grid>
      <Grid item xs={3}>
        <Typography pt={1} variant="h6" sx={{ textAlign: "center" }}>
          FPS
        </Typography>{" "}
      </Grid>
    </React.Fragment>
  );
}

function MainMKSCGSFPSCalc() {
  const [lengthMKS, setLengthMKS] = useState("");
  const [lengthCGS, setLengthCGS] = useState("");
  const [lengthFPS, setLengthFPS] = useState("");
  const [massMKS, setMassMKS] = useState("");
  const [massCGS, setMassCGS] = useState("");
  const [massFPS, setMassFPS] = useState("");
  const [timeMKS, setTimeMKS] = useState("");
  const [areaMKS, setAreaMKS] = useState("");
  const [areaCGS, setAreaCGS] = useState("");
  const [areaFPS, setAreaFPS] = useState("");
  const [volumeMKS, setVolumeMKS] = useState("");
  const [volumeCGS, setVolumeCGS] = useState("");
  const [volumeFPS, setVolumeFPS] = useState("");
  const [velocityMKS, setVelocityMKS] = useState("");
  const [velocityCGS, setVelocityCGS] = useState("");
  const [velocityFPS, setVelocityFPS] = useState("");
  const [accMKS, setAccMKS] = useState("");
  const [accCGS, setAccCGS] = useState("");
  const [accFPS, setAccFPS] = useState("");
  const [forceMKS, setForceMKS] = useState("");
  const [forceCGS, setForceCGS] = useState("");
  const [forceFPS, setForceFPS] = useState("");
  const [energyMKS, setEnergyMKS] = useState("");
  const [energyCGS, setEnergyCGS] = useState("");
  const [energyFPS, setEnergyFPS] = useState("");

  function handleConversion(value, name) {
    switch (name) {
      case "lengthMKS":
        setLengthMKS(value);
        setLengthCGS(value * 100);
        setLengthFPS(value * 3.28084);
        break;
      case "lengthCGS":
        setLengthMKS(value * 0.01);
        setLengthCGS(value);
        setLengthFPS(value * 0.0328084);
        break;
      case "lengthFPS":
        setLengthMKS(value / 3.281);
        setLengthCGS(value * 30.48);
        setLengthFPS(value);
        break;
      case "massMKS":
        setMassMKS(value);
        setMassCGS(value * 1000);
        setMassFPS(value * 2.205);
        break;
      case "massCGS":
        setMassMKS(value / 1000);
        setMassCGS(value);
        setMassFPS(value / 453.6);
        break;
      case "massFPS":
        setMassMKS(value / 2.205);
        setMassCGS((value * 1000) / 2.205);
        setMassFPS(value);
        break;
      case "timeMKS":
        setTimeMKS(value);
        break;
      case "areaMKS":
        setAreaMKS(value);
        setAreaCGS(value * 100 * 100);
        setAreaFPS(value * 3.28084 * 3.28084);
        break;
      case "areaCGS":
        setAreaMKS(value * 0.01 * 0.01);
        setAreaCGS(value);
        setAreaFPS(value * 0.0328084 * 0.0328084);
        break;
      case "areaFPS":
        setAreaMKS(value / (3.281 * 3.281));
        setAreaCGS(value * 30.48 * 30.48);
        setAreaFPS(value);
        break;
      case "volumeMKS":
        setVolumeMKS(value);
        setVolumeCGS(value * 100 * 100 * 100);
        setVolumeFPS(value * 3.28084 * 3.28084 * 3.28084);
        break;
      case "volumeCGS":
        setVolumeMKS(value * 0.01 * 0.01 * 0.01);
        setVolumeCGS(value);
        setVolumeFPS(value * 0.0328084 * 0.0328084 * 0.0328084);
        break;
      case "volumeFPS":
        setVolumeMKS(value / (3.281 * 3.281 * 3.281));
        setVolumeCGS(value * 30.48 * 30.48 * 30.48);
        setVolumeFPS(value);
        break;
      case "velocityMKS":
        setVelocityMKS(value);
        setVelocityCGS(value * 100);
        setVelocityFPS(value * 3.28084);
        break;
      case "velocityCGS":
        setVelocityMKS(value * 0.01);
        setVelocityCGS(value);
        setVelocityFPS(value * 0.0328084);
        break;
      case "velocityFPS":
        setVelocityMKS(value / 3.281);
        setVelocityCGS(value * 30.48);
        setVelocityFPS(value);
        break;
      case "accMKS":
        setAccMKS(value);
        setAccCGS(value * 100);
        setAccFPS(value * 3.28084);
        break;
      case "accCGS":
        setAccMKS(value * 0.01);
        setAccCGS(value);
        setAccFPS(value * 0.0328084);
        break;
      case "accFPS":
        setAccMKS(value / 3.281);
        setAccCGS(value * 30.48);
        setAccFPS(value);
        break;
      case "forceMKS":
        setForceMKS(value);
        setForceCGS(value * 100000);
        setForceFPS(value * 7.23301);
        break;
      case "forceCGS":
        setForceMKS(value / 100000);
        setForceCGS(value);
        setForceFPS((value * 7.23301) / 100000);
        break;
      case "forceFPS":
        setForceMKS(value / 7.23301);
        setForceCGS((value * 100000) / 7.23301);
        setForceFPS(value);
        break;
      case "energyMKS":
        setEnergyMKS(value);
        setEnergyCGS(value * 10000000);
        setEnergyFPS(value / 1.356);
        break;
      case "energyCGS":
        setEnergyMKS(value / 10000000);
        setEnergyCGS(value);
        setEnergyFPS(value / (1.356 * 10000000));
        break;
      case "energyFPS":
        setEnergyMKS(value * 1.356);
        setEnergyCGS(value * 10000000 * 1.356);
        setEnergyFPS(value);
        break;
    }
  }

  return (
    <Container maxWidth="lg" sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: "10" }}>
      <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
        MKS - CGS - FPS Calculator
      </Typography>
      <hr />
      <br />
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid container item spacing={3}>
            <FormRowLabel />
          </Grid>
          <Grid container item spacing={3}>
            <Grid item xs={3}>
              <Typography pt={1} variant="h6" sx={{ textAlign: "center" }}>
                Length
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <TextField label={"length" + " (meter)"} fullWidth variant="outlined" value={lengthMKS} onChange={(e) => handleConversion(e.target.value, "lengthMKS")} />
            </Grid>
            <Grid item xs={3}>
              <TextField label={"length" + " (centimeter)"} fullWidth variant="outlined" value={lengthCGS} onChange={(e) => handleConversion(e.target.value, "lengthCGS")} />
            </Grid>
            <Grid item xs={3}>
              <TextField label={"length" + " (foot)"} fullWidth variant="outlined" value={lengthFPS} onChange={(e) => handleConversion(e.target.value, "lengthFPS")} />
            </Grid>
          </Grid>
          <Grid container item spacing={3}>
            <Grid item xs={3}>
              <Typography pt={1} variant="h6" sx={{ textAlign: "center" }}>
                Mass
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <TextField label={"mass" + " (kilogram)"} fullWidth variant="outlined" value={massMKS} onChange={(e) => handleConversion(e.target.value, "massMKS")} />
            </Grid>
            <Grid item xs={3}>
              <TextField label={"mass" + " (gram)"} fullWidth variant="outlined" value={massCGS} onChange={(e) => handleConversion(e.target.value, "massCGS")} />
            </Grid>
            <Grid item xs={3}>
              <TextField label={"mass" + " (pound)"} fullWidth variant="outlined" value={massFPS} onChange={(e) => handleConversion(e.target.value, "massFPS")} />
            </Grid>
          </Grid>
          <Grid container item spacing={3}>
            <Grid item xs={3}>
              <Typography pt={1} variant="h6" sx={{ textAlign: "center" }}>
                Time
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <TextField label={"time" + " (second)"} fullWidth variant="outlined" value={timeMKS} onChange={(e) => handleConversion(e.target.value, "timeMKS")} />
            </Grid>
            <Grid item xs={3}>
              <TextField label={"time" + " (second)"} fullWidth variant="outlined" value={timeMKS} onChange={(e) => handleConversion(e.target.value, "timeMKS")} />
            </Grid>
            <Grid item xs={3}>
              <TextField label={"time" + " (second)"} fullWidth variant="outlined" value={timeMKS} onChange={(e) => handleConversion(e.target.value, "timeMKS")} />
            </Grid>
          </Grid>
          <Grid container item spacing={3}>
            <Grid item xs={3}>
              <Typography pt={1} variant="h6" sx={{ textAlign: "center" }}>
                Area
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <TextField label={"area" + " (sq.m)"} fullWidth variant="outlined" value={areaMKS} onChange={(e) => handleConversion(e.target.value, "areaMKS")} />
            </Grid>
            <Grid item xs={3}>
              <TextField label={"area" + " (sq.cm)"} fullWidth variant="outlined" value={areaCGS} onChange={(e) => handleConversion(e.target.value, "areaCGS")} />
            </Grid>
            <Grid item xs={3}>
              <TextField label={"area" + " (sq.ft)"} fullWidth variant="outlined" value={areaFPS} onChange={(e) => handleConversion(e.target.value, "areaFPS")} />
            </Grid>
          </Grid>
          <Grid container item spacing={3}>
            <Grid item xs={3}>
              <Typography pt={1} variant="h6" sx={{ textAlign: "center" }}>
                Volume
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <TextField label={"volume" + " (cubic.m)"} fullWidth variant="outlined" value={volumeMKS} onChange={(e) => handleConversion(e.target.value, "volumeMKS")} />
            </Grid>
            <Grid item xs={3}>
              <TextField label={"volume" + " (cubic.cm)"} fullWidth variant="outlined" value={volumeCGS} onChange={(e) => handleConversion(e.target.value, "volumeCGS")} />
            </Grid>
            <Grid item xs={3}>
              <TextField label={"volume" + " (cubic.ft)"} fullWidth variant="outlined" value={volumeFPS} onChange={(e) => handleConversion(e.target.value, "volumeFPS")} />
            </Grid>
          </Grid>
          <Grid container item spacing={3}>
            <Grid item xs={3}>
              <Typography pt={1} variant="h6" sx={{ textAlign: "center" }}>
                Velocity
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <TextField label={"velocity" + " (m/s)"} fullWidth variant="outlined" value={velocityMKS} onChange={(e) => handleConversion(e.target.value, "velocityMKS")} />
            </Grid>
            <Grid item xs={3}>
              <TextField label={"velocity" + " (cm/s)"} fullWidth variant="outlined" value={velocityCGS} onChange={(e) => handleConversion(e.target.value, "velocityCGS")} />
            </Grid>
            <Grid item xs={3}>
              <TextField label={"velocity" + " (ft/s)"} fullWidth variant="outlined" value={velocityFPS} onChange={(e) => handleConversion(e.target.value, "velocityFPS")} />
            </Grid>
          </Grid>
          <Grid container item spacing={3}>
            <Grid item xs={3}>
              <Typography pt={1} variant="h6" sx={{ textAlign: "center" }}>
                Acceleration
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <TextField label={"acceleration" + " (m/s.s)"} fullWidth variant="outlined" value={accMKS} onChange={(e) => handleConversion(e.target.value, "accMKS")} />
            </Grid>
            <Grid item xs={3}>
              <TextField label={"acceleration" + " (cm/s.s)"} fullWidth variant="outlined" value={accCGS} onChange={(e) => handleConversion(e.target.value, "accCGS")} />
            </Grid>
            <Grid item xs={3}>
              <TextField label={"acceleration" + " (ft/s.s)"} fullWidth variant="outlined" value={accFPS} onChange={(e) => handleConversion(e.target.value, "accFPS")} />
            </Grid>
          </Grid>
          <Grid container item spacing={3}>
            <Grid item xs={3}>
              <Typography pt={1} variant="h6" sx={{ textAlign: "center" }}>
                Force
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <TextField label={"force" + " (N)"} fullWidth variant="outlined" value={forceMKS} onChange={(e) => handleConversion(e.target.value, "forceMKS")} />
            </Grid>
            <Grid item xs={3}>
              <TextField label={"force" + " (dyne)"} fullWidth variant="outlined" value={forceCGS} onChange={(e) => handleConversion(e.target.value, "forceCGS")} />
            </Grid>
            <Grid item xs={3}>
              <TextField label={"force" + " (poundal)"} fullWidth variant="outlined" value={forceFPS} onChange={(e) => handleConversion(e.target.value, "forceFPS")} />
            </Grid>
          </Grid>
          <Grid container item spacing={3}>
            <Grid item xs={3}>
              <Typography pt={1} variant="h6" sx={{ textAlign: "center" }}>
                Energy
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <TextField label={"energy" + " (J)"} fullWidth variant="outlined" value={energyMKS} onChange={(e) => handleConversion(e.target.value, "energyMKS")} />
            </Grid>
            <Grid item xs={3}>
              <TextField label={"energy" + " (erg)"} fullWidth variant="outlined" value={energyCGS} onChange={(e) => handleConversion(e.target.value, "energyCGS")} />
            </Grid>
            <Grid item xs={3}>
              <TextField label={"energy" + " (foot-pound)"} fullWidth variant="outlined" value={energyFPS} onChange={(e) => handleConversion(e.target.value, "energyFPS")} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

export default MainMKSCGSFPSCalc;

import React, { useState } from "react";
import { Container, Typography, Button, TextField } from "@mui/material";

function MainTriangleTypeFinder() {
  const [sideA1, setSideA1] = useState("");
  const [sideB1, setSideB1] = useState("");
  const [sideC1, setSideC1] = useState("");
  const [sideA2, setSideA2] = useState("");
  const [sideB2, setSideB2] = useState("");
  const [sideC2, setSideC2] = useState("");
  const [result, setResult] = useState("");

  const checkTriangle=(a,b,c)=>{
    if(a<=0 || b<=0 || c<=0) return false;
    else if(a+b<=c || b+c<=a || c+a<=b) return false;
    else return true;
  }

  const handleCalculations = () => {
    const a1 = parseFloat(sideA1);
    const b1 = parseFloat(sideB1);
    const c1 = parseFloat(sideC1);
    const a2 = parseFloat(sideA2);
    const b2 = parseFloat(sideB2);
    const c2 = parseFloat(sideC2);
    if(checkTriangle(a1,b1,c1) && checkTriangle(a2,b2,c2)){
      if(a1==a2 && b1==b2 && c1==c2){
        setResult("The given triangles are congruent");
      }else if(a1==b2 && b1==a2 && c1==c2){
        setResult("The given triangles are congruent");
      }else if(a1==c2 && b1==b2 && c1==a2){
        setResult("The given triangles are congruent");
      }else if(a1==a2 && b1==c2 && c1==b2){
        setResult("The given triangles are congruent");
      }else if(a1==b2 && b1==c2 && c1==a2){
        setResult("The given triangles are congruent");
      }else if(a1==c2 && b1==a2 && c1==b2){
        setResult("The given triangles are congruent");
      }else{
        setResult("The given triangles are not congruent");
      }
    }else{
      setResult("The given triangles are invalid");
    }
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: "10" }}
    >
      <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
      Congruency of Triangle Calculator
      </Typography>
      <hr />
      <br />

      <Typography pt={1} variant="h6" sx={{ textAlign: "center" }}>
        Triangle one sides
      </Typography>
      <TextField
        label="Side A"
        type="number"
        style={{ marginTop: "20px" }}
        fullWidth
        value={sideA1}
        onChange={(e) => setSideA1(e.target.value)}
      />
      <TextField
        label="Side B"
        type="number"
        style={{ marginTop: "20px" }}
        fullWidth
        value={sideB1}
        onChange={(e) => setSideB1(e.target.value)}
      />
      <TextField
        label="Side C"
        type="number"
        style={{ marginTop: "20px" }}
        fullWidth
        value={sideC1}
        onChange={(e) => setSideC1(e.target.value)}
      />
      <Typography pt={1} variant="h6" sx={{ textAlign: "center" }}>
        Triangle two sides
      </Typography>
      <TextField
        label="Side A"
        type="number"
        style={{ marginTop: "20px" }}
        fullWidth
        value={sideA2}
        onChange={(e) => setSideA2(e.target.value)}
      />
      <TextField
        label="Side B"
        type="number"
        style={{ marginTop: "20px" }}
        fullWidth
        value={sideB2}
        onChange={(e) => setSideB2(e.target.value)}
      />
      <TextField
        label="Side C"
        type="number"
        style={{ marginTop: "20px" }}
        fullWidth
        value={sideC2}
        onChange={(e) => setSideC2(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleCalculations}
        style={{ marginTop: "20px" }}
      >
        Calculate
      </Button>
      {result && (
        <Typography variant="h5" style={{ marginTop: "20px" }}>
          Result : {result}
        </Typography>
      )}
    </Container>
  );
}

export default MainTriangleTypeFinder;

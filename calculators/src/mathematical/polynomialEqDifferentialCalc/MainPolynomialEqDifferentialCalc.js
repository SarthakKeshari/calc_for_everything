import React, { useEffect, useState } from "react";
import { Container, Button, Input, Typography, Divider } from "@mui/material";

function MainPolynomialEqDifferentialCalc() {
  // our input equation
  const [equation, setEquation] = useState("");
  // our output equation
  const [Intequation, setIntEquation] = useState("");

  function FindIntegral() {
    if (!equation) return;
    const validPattern = /^[0-9x\+\^\s\-\*]+$/;
    if (!validPattern.test(equation)) {
      alert("wrong equation format");
      return;
    }
    const equationWithoutSpaces = equation.replace(/\s+/g, "");
    const cleanedEquation = equationWithoutSpaces.replace(
      /([0-9]+)\*([0-9]+)/g,
      (match, num1, num2) => {
        return (parseInt(num1) * parseInt(num2)).toString();
      }
    );
    const simplifiedEquation = cleanedEquation.replace(
      (match, exp1, exp2) => {
        return `x^${parseInt(exp1) + parseInt(exp2)}`;
      }
    );

    const eqArr = cleanedEquation.split(/(\+|-)/);
    for (let i = 0; i < eqArr.length - 2; i++) {
      if (
        (eqArr[i] === "+" && eqArr[i + 2] === "+") && eqArr[i+1]===""  ||
        (eqArr[i] === "-" && eqArr[i + 2] === "-") && eqArr[i+1]==="" ||
        (eqArr[i] === "-" && eqArr[i + 2] === "+") && eqArr[i+1]==="" ||
        (eqArr[i] === "+" && eqArr[i + 2] === "-") && eqArr[i+1]==="" 
      ) {
        alert("wrong equation format");
        return;
      }
    }
    for (let i = 0; i < eqArr.length; i++) {
      if (!eqArr[i]) continue;
      if (eqArr[i].includes("x^")) {
        let s = eqArr[i];
        let idx = s.indexOf("^");
        let pwr = Number(s.slice(idx + 1)) - 1;
        let cst;
        if (s[0] === "x") {
          cst = 1.0 * (pwr+1);
        } else cst = Number(s.slice(0, idx - 1)) * (pwr+1);
        eqArr[i] = `${cst + "x^" + pwr}`;
      } else if (eqArr[i][eqArr[i].length - 1] === "x") {
        let s = eqArr[i];
        let cst;
        if (s[0] === "x") {
          eqArr[i] = `1`;
        } else {
            let idx = s.indexOf("x");
            cst = Number(s.slice(0,idx));
            eqArr[i] = `${cst}`;
        } 
      }
      else if (Number(eqArr[i])) {
        // let s = eqArr[i];
        // eqArr[i] = `${s}x`;
        delete eqArr[i]
      }
    }
    let finalEq = eqArr.join("")
    if(finalEq[finalEq.length-1]==="+"||finalEq[finalEq.length-1]==="-") finalEq = finalEq.slice(0,finalEq.length-1)
    setIntEquation(finalEq);
  }

  return (
    <Container
      maxWidth="lg"
      sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: "10" }}
    >
      <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
        Polynomial Differential Calculator
      </Typography>
      <hr />
      <br />
      <Container sx={{ display: "flex", flexDirection: "column" }}>
        <Typography pt={1} variant="h6" mt={2}>
          Enter The Polynomial Equation (eg:format of equation should be of ax^2+bx+c type)
        </Typography>
        <Input
          color="primary"
          disabled={false}
          placeholder="Enter Polynomial Equation"
          size="lg"
          variant="outlined"
          type="text"
          value={equation}
          onChange={(e) => setEquation(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: 2 }}
          onClick={FindIntegral}
        >
          Find Differential
        </Button>
        {Intequation && (
          <div className="output">
            <div>
              <h2>Integral is </h2>
              <Typography pt={1} variant="h6" sx={{ marginTop: 2 }}>
                {Intequation}
                <hr />
              </Typography>
            </div>
          </div>
        )}
      </Container>
    </Container>
  );
}

export default MainPolynomialEqDifferentialCalc;
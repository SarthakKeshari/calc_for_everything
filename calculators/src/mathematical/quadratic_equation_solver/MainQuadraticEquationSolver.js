import React, { useEffect, useState } from "react";
import { Container, Typography, Divider, Input } from "@mui/material";
import InfoQuadraticEquationSolver from './InfoQuadraticEquationSolver';

function MainQuadraticEquationSolver() {
  const [x2, setX2] = useState();
  const [x, setX] = useState();
  const [constant, setConstant] = useState();
  const [root1, setRoot1] = useState(0);
  const [root2, setRoot2] = useState(0);

  useEffect(() => {
    // Quadratic Formula for finding roots of a quadratic equation
    // x = (-b +- sqrt(b^2 - 4ac))/2a

    // For calculating real and complex roots
    if (x2 !== undefined && x !== undefined && constant !== undefined) {
      const a = parseFloat(x2);
      const b = parseFloat(x);
      const c = parseFloat(constant);
      const d = b * b - 4 * a * c;
      if (d > 0) {
        const root1 = (-b + Math.sqrt(d)) / (2 * a);
        const root2 = (-b - Math.sqrt(d)) / (2 * a);
        setRoot1(root1);
        setRoot2(root2);
      } else if (d === 0) {
        const root1 = -b / (2 * a);
        const root2 = -b / (2 * a);
        setRoot1(root1);
        setRoot2(root2);
      } else {
        const realPart = (-b / (2 * a)).toFixed(2);
        const imaginaryPart = (Math.sqrt(-d) / (2 * a)).toFixed(2);
        setRoot1(realPart + " + " + imaginaryPart + "i");
        setRoot2(realPart + " - " + imaginaryPart + "i");
      }
    } else {
      setRoot1(0);
      setRoot2(0);
    }
  }, [x2, x, constant]);

  return (
    <Container
      maxWidth="lg"
      sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: "10" }}
    >
      <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
        Quadratic Equation Solver
        <InfoQuadraticEquationSolver/>
      </Typography>
      <hr />
      <br />

      <Container sx={{ display: "flex", flexDirection: "column" }}>
        <Typography pt={1} variant="h6" mt={2}>
          Coefficient of x<sup>2</sup>{" "}
        </Typography>
        <Input
          color="primary"
          disabled={false}
          placeholder="Enter Coefficient of x square"
          size="lg"
          variant="outlined"
          type="number"
          onChange={(e) => setX2(e.target.value)}
          value={x2}
        />
        <Typography pt={1} variant="h6" mt={2}>
          Coefficient of x
        </Typography>
        <Input
          color="primary"
          disabled={false}
          placeholder="Enter Coefficient of x"
          size="lg"
          variant="outlined"
          type="number"
          onChange={(e) => setX(e.target.value)}
          value={x}
        />
        <Typography pt={1} variant="h6" mt={2}>
          Constant
        </Typography>
        <Input
          color="primary"
          disabled={false}
          placeholder="Enter Constant"
          size="lg"
          variant="outlined"
          type="number"
          onChange={(e) => setConstant(e.target.value)}
          value={constant}
        />

        <Divider />

        {/* Display the equation */}

        <Typography pt={1} variant="h6" mt={2}>
          Equation
        </Typography>

        {x2 &&
          x &&
          constant &&(
            <Typography pt={1} variant="h6" fontStyle={{ color: "blue" }}>
              {x2}x<sup>2</sup> + {x}x + {constant} = 0
            </Typography>
          )}

        <Divider />

        <Typography pt={1} variant="h6" mt={2}>
          Root 1
        </Typography>
        <div>
          <Typography pt={1} variant="h6" fontStyle={{ color: "blue" }}>
            {root1}
          </Typography>
        </div>
        <Divider />
        <Typography pt={1} variant="h6" mt={2}>
          Root 2
        </Typography>
        <div>
          <Typography pt={1} variant="h6" fontStyle={{ color: "blue" }}>
            {root2}
          </Typography>
        </div>
        <Divider />
      </Container>
    </Container>
  );
}

export default MainQuadraticEquationSolver;

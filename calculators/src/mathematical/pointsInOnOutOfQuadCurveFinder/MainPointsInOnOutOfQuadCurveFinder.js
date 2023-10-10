import React , {useState} from 'react';
import { Container, Typography } from '@mui/material';

function MainPointsInOnOutOfQuadCurveFinder(){

const [a, setA] = useState(1);
const [b, setB] = useState(0);
const [c, setC] = useState(0);
const [numPoints, setNumPoints] = useState(2);

const [points, setPoints] = useState(Array.from({ length: numPoints }, () => ({ x: 0, y: 0 })));
const [results, setResults] = useState({ onCurve: [], insideCurve: [], outsideCurve: [] });


const handleInputChange = (e, setter) => {
  setter(parseFloat(e.target.value));
};

const handleNumPointsChange = (e) => {
  const num = parseInt(e.target.value);
  setNumPoints(num);
  setPoints(Array.from({ length: num }, () => ({ x: 0, y: 0 })));

  setResults({ onCurve: [], insideCurve: [], outsideCurve: [] });
};

const handlePointInputChange = (e, index, type) => {
  const newPoints = [...points];
  newPoints[index][type] = parseFloat(e.target.value);
  setPoints(newPoints);
};

const calculateResults = () => {
  const onCurve = [];
  const insideCurve = [];
  const outsideCurve = [];

  for (let i = 0; i < numPoints; i++) {
    const { x, y } = points[i];
    const curveY = a * x * x + b * x + c;

    if (Math.abs(y - curveY) < 0.01) {
      onCurve.push({ x, y });
    } else if (y < curveY) {
      insideCurve.push({ x, y });
    } else {
      outsideCurve.push({ x, y });
    }
  }

  setResults({ onCurve, insideCurve, outsideCurve });
};
    

return (
    <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: '10' }}>
      <Typography pt={1} variant="h5" sx={{ textAlign: 'center' }}>
        Grouping Points On/Inside/Outside of Quadratic Curve
      </Typography>
      <hr />
      <br />
      <h1>Quadratic Curve Checker</h1>
      
        <div>
          <label>Enter coefficients of the quadratic equation:</label>
          <div>
            <input
              type="number"
              placeholder="a"
              value={a}
              onChange={(e) => handleInputChange(e, setA)}
            />
            <input
              type="number"
              placeholder="b"
              value={b}
              onChange={(e) => handleInputChange(e, setB)}
            />
            <input
              type="number"
              placeholder="c"
              value={c}
              onChange={(e) => handleInputChange(e, setC)}
            />
          </div>
        </div>
        <div>
          <label>Number of Points: </label>
          <input
            type="number"
            min="2"
            value={numPoints}
            onChange={handleNumPointsChange}
          />
        </div>
        {points?.length > 0 && (
          <div>
            <h2>Enter Points:</h2>
            {points.map((point, index) => (
              <div key={index}>
                <label>Point {index + 1} (x, y): </label>
                <input
                  type="number"
                  value={point.x}
                  onChange={(e) => handlePointInputChange(e, index, 'x')}
                />
                <input
                  type="number"
                  value={point.y}
                  onChange={(e) => handlePointInputChange(e, index, 'y')}
                />
              </div>
            ))}
            <button onClick={calculateResults}>Calculate</button>
          </div>
        )}

        {results.onCurve?.length > 0 && (
          <div>
            <h2>Points on the Curve:</h2>
            <ul>
              {results.onCurve.map((point, index) => (
                <li key={index}>
                  ({point.x}, {point.y})
                </li>
              ))}
            </ul>
          </div>
        )}

        {results.insideCurve?.length > 0 && (
          <div>
            <h2>Points Inside the Curve:</h2>
            <ul>
              {results.insideCurve.map((point, index) => (
                <li key={index}>
                  ({point.x}, {point.y})
                </li>
              ))}
            </ul>
          </div>
        )}

        {results.outsideCurve?.length > 0 && (
          <div>
            <h2>Points Outside the Curve:</h2>
            <ul>
              {results.outsideCurve.map((point, index) => (
                <li key={index}>
                  ({point.x}, {point.y})
                </li>
              ))}
            </ul>
          </div>
        )}
     
    </Container>
  );
}


export default MainPointsInOnOutOfQuadCurveFinder;
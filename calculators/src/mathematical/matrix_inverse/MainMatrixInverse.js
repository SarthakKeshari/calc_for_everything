import React, { useState } from "react";
import numeric from "numeric";
import "./mainMatrixInverse.css";
import InfoMatrixInverse from "./InfoMatrixInverse";

function MainMatrixInverse() {
  const [matrixSize, setMatrixSize] = useState("");
  const [matrix, setMatrix] = useState([]);
  const [inverseMatrix, setInverseMatrix] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSizeChange = (e) => {
    const newSize = parseInt(e.target.value);
    if(newSize>=7)
    {
        alert('The Value must be less than or equal to 6')
    }
    else{
    setMatrixSize(newSize);
    setMatrix(
      Array.from({ length: newSize }, () =>
        Array.from({ length: newSize }, () => null)
      )
    );
    setInverseMatrix([]);
    setErrorMessage("");
  };
}
const isValidInput = (input) => {
    return /^-?\d+(\.\d*)?$/.test(input);
  };
const handleMatrixChange = (row, col, value) => {
    const updatedMatrix = matrix.map((rowArray) => [...rowArray]); // Clone the matrix.
    updatedMatrix[row][col] = value !== "" ? parseFloat(value) : null; // Parse if not empty, set to null if empty.
    setMatrix(updatedMatrix);
    setInverseMatrix([]);
    setErrorMessage("");
  };
  const calculateMatrixInverse = () => {
    try {
      const inv = numeric.inv(matrix);
      if (inv.flat().some((value) => !isFinite(value))) {
        setInverseMatrix([]);
        setErrorMessage("Matrix is not invertible or contains invalid values.");
      } else {
        setInverseMatrix(inv);
        setErrorMessage("");
      }
    } catch (error) {
      setInverseMatrix([]);
      setErrorMessage("Matrix is not invertible or contains invalid values.");
    }
  };
  return (
    <div className="matrix-inverse-calculator">
      <h1>Matrix Inverse Calculator<InfoMatrixInverse/></h1>
      <div>
        <label className="mx-2">Matrix Size:</label>
        <input
          type="number"
          value={matrixSize}
          onChange={handleSizeChange}
          min="1"
          max="6"
        />
      </div>
      <div>
        <h3>Enter Matrix Elements:</h3>
        {matrix.map((row, rowIndex) => (
          <div key={rowIndex}>
            {row.map((col, colIndex) => (
              <input
                key={colIndex}
                type="number"
                value={col}
                onChange={(e) =>
                  isValidInput(e.target.value) && handleMatrixChange(rowIndex, colIndex, e.target.value)
                }
              />
            ))}
          </div>
        ))}
      </div>
      <button onClick={calculateMatrixInverse}>Calculate Inverse</button>
      {errorMessage && (
        <div>
          <p>{errorMessage}</p>
        </div>
      )}
      {inverseMatrix.length > 0 && (
        <div>
          <h2>Inverse Matrix:</h2>
          {inverseMatrix.map((row, rowIndex) => (
            <div key={rowIndex}>
              {row.map((col, colIndex) => (
                <span key={colIndex}>{col.toFixed(2)} </span>
              ))}
              <br />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default MainMatrixInverse;

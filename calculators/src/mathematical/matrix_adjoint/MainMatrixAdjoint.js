import React, { useState } from "react";
import "./MainMatrix.css";

function MainMatrixAdjoint() {
  const [matrixSize, setMatrixSize] = useState(2);
  const [matrix, setMatrix] = useState(Array.from({ length: 2 }, () => Array(2).fill("")));
  const [adjoint, setAdjoint] = useState([]);
  const [message, setMessage] = useState("");
  const handleSizeChange = (e) => {
    const newSize = parseInt(e.target.value, 10);
    setMatrixSize(newSize);
    const newMatrix = Array.from({ length: newSize }, () => Array(newSize).fill(""));
    setMatrix(newMatrix);
    setAdjoint([]);
    setMessage("");
  };
  const handleMatrixChange = (e, rowIndex, colIndex) => {
    const newValue = e.target.value;
    const newMatrix = matrix.map((row, i) =>
      i === rowIndex ? row.map((value, j) => (j === colIndex ? newValue : value)) : row
    );
    setMatrix(newMatrix);
    setAdjoint([]);
    setMessage("");
  };
  const isValidInput = (input) => {
    return /^-?\d*\.?\d*\/?\d*$/.test(input);
  };
  const areAllInputsFilled = () => {
    return matrix.flat().every((value) => value !== "");
  };
  const calculateAdjoint = () => {
    if (!areAllInputsFilled()) {
      setMessage("Fill all matrix inputs before calculating the adjoint.");
      return;
    }

    const size = matrixSize;
    const adjointMatrix = [];

    for (let i = 0; i < size; i++) {
      adjointMatrix[i] = [];
      for (let j = 0; j < size; j++) {
        const cofactor = getCofactor(matrix, i, j);
        adjointMatrix[i][j] = parseFloat(Math.pow(-1, i + j) * determinant(cofactor));
      }
    }
    const transposedAdjoint = [];
    for (let i = 0; i < size; i++) {
      transposedAdjoint[i] = [];
      for (let j = 0; j < size; j++) {
        transposedAdjoint[i][j] = adjointMatrix[j][i];
      }
    }

    setAdjoint(transposedAdjoint);
    setMessage("");
  };
  const determinant = (matrix) => {
    if (matrix.length === 1) {
      return parseFloat(matrix[0][0]);
    }

    if (matrix.length === 2) {
      return (
        parseFloat(matrix[0][0]) * parseFloat(matrix[1][1]) -
        parseFloat(matrix[0][1]) * parseFloat(matrix[1][0])
      );
    }
    let det = 0;
    for (let j = 0; j < matrix.length; j++) {
      const cof = getCofactor(matrix, 0, j);
      det += parseFloat(matrix[0][j]) * Math.pow(-1, j) * determinant(cof);
    }
    return det;
  };
  const getCofactor = (matrix, row, col) => {
    const size = matrix.length;
    const cofactor = [];

    for (let i = 0; i < size; i++) {
      if (i !== row) {
        cofactor.push([]);
        for (let j = 0; j < size; j++) {
          if (j !== col) {
            cofactor[cofactor.length - 1].push(matrix[i][j]);
          }
        }
      }
    }

    return cofactor;
  };

  return (
    <div className="container" style={{width:'450px'}} >
        
      <h1>Adjoint Matrix Calculator</h1>
      <label>
        Select Matrix Size :
        <select value={matrixSize} onChange={handleSizeChange}>
          <option value={2}>2x2</option>
          <option value={3}>3x3</option>
          <option value={4}>4x4</option>
          <option value={5}>5x5</option>
          <option value={6}>6x6</option>
        </select>
      </label>
      <table >
        <tbody>
          {matrix.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((value, colIndex) => (
                <td key={colIndex}>
                  <input
                    type="text"
                    value={value}
                    onChange={(e) =>
                      isValidInput(e.target.value) && handleMatrixChange(e, rowIndex, colIndex)
                    }
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={calculateAdjoint}>Calculate Adjoint</button>
      {message && <p>{message}</p>}
      {adjoint.length > 0 && (
        <div>
          <h2>Adjoint Matrix</h2>
          <table>
            <tbody>
              {adjoint.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((value, colIndex) => (
                    <td key={colIndex}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
   
  );
}
export default MainMatrixAdjoint;

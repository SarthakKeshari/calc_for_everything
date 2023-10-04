import React, { useState } from 'react';

function MainMatrixMultiplication() {
  const [matrixADimensions, setMatrixADimensions] = useState({ rows: 3, cols: 3 });
  const [matrixBDimensions, setMatrixBDimensions] = useState({ rows: 3, cols: 3 });
  const createEmptyMatrix = (rows, cols) => {
    return Array.from({ length: rows }, () => Array.from({ length: cols }, () => 0));
  };
  const [matrixA, setMatrixA] = useState(createEmptyMatrix(matrixADimensions.rows, matrixADimensions.cols));
  const [matrixB, setMatrixB] = useState(createEmptyMatrix(matrixBDimensions.rows, matrixBDimensions.cols));
  const [result, setResult] = useState(null);

  

  const updateMatrixADimensions = (event) => {
    const value = parseInt(event.target.value);
    setMatrixADimensions((prev) => ({ ...prev, rows: value }));
    setMatrixA(createEmptyMatrix(value, matrixADimensions.cols));
  };

  const updateMatrixBDimensions = (event) => {
    const value = parseInt(event.target.value);
    setMatrixBDimensions((prev) => ({ ...prev, cols: value }));
    setMatrixB(createEmptyMatrix(matrixBDimensions.rows, value));
  };

  const handleMatrixAChange = (event, row, col) => {
    const value = parseInt(event.target.value);
    const updatedMatrixA = [...matrixA];
    updatedMatrixA[row][col] = value;
    setMatrixA(updatedMatrixA);
  };

  const handleMatrixBChange = (event, row, col) => {
    const value = parseInt(event.target.value);
    const updatedMatrixB = [...matrixB];
    updatedMatrixB[row][col] = value;
    setMatrixB(updatedMatrixB);
  };

  const multiplyMatrices = () => {
    const rowsA = matrixADimensions.rows;
    const colsA = matrixADimensions.cols;
    const rowsB = matrixBDimensions.rows;
    const colsB = matrixBDimensions.cols;

    if (colsA !== rowsB) {
      alert("Matrix A's columns must be equal to Matrix B's rows.");
      return;
    }

    const resultMatrix = createEmptyMatrix(rowsA, colsB);

    for (let i = 0; i < rowsA; i++) {
      for (let j = 0; j < colsB; j++) {
        for (let k = 0; k < colsA; k++) {
          resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
        }
      }
    }

    setResult(resultMatrix);
  };

  return (
    <div>
      <h2>Matrix Multiplication</h2>
      <div>
        <label>
          Matrix A Dimensions (Rows x Cols):
          <input
            type="number"
            value={matrixADimensions.rows}
            onChange={updateMatrixADimensions}
          />
          x
          <input
            type="number"
            value={matrixADimensions.cols}
            onChange={updateMatrixADimensions}
          />
        </label>
      </div>
      <div>
        <label>
          Matrix B Dimensions (Rows x Cols):
          <input
            type="number"
            value={matrixBDimensions.rows}
            onChange={updateMatrixBDimensions}
          />
          x
          <input
            type="number"
            value={matrixBDimensions.cols}
            onChange={updateMatrixBDimensions}
          />
        </label>
      </div>
      <div>
        <h3>Matrix A:</h3>
        <table>
          <tbody>
            {matrixA.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, colIndex) => (
                  <td key={colIndex}>
                    <input
                      type="number"
                      value={cell}
                      onChange={(event) => handleMatrixAChange(event, rowIndex, colIndex)}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h3>Matrix B:</h3>
        <table>
          <tbody>
            {matrixB.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, colIndex) => (
                  <td key={colIndex}>
                    <input
                      type="number"
                      value={cell}
                      onChange={(event) => handleMatrixBChange(event, rowIndex, colIndex)}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={multiplyMatrices}>Multiply</button>
      {result && (
        <div>
          <h3>Result:</h3>
          <table>
            <tbody>
              {result.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, colIndex) => (
                    <td key={colIndex}>{cell}</td>
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

export default MainMatrixMultiplication;

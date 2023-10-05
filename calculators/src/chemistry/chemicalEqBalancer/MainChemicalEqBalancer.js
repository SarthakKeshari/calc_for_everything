import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
// import { matrix, lusolve } from 'mathjs'; // Import specific functions from the math.js library
import * as math from 'mathjs'; // Import the entire math.js library


function MainChemicalEqBalancer() {
  const [equation, setEquation] = useState('');
  const [balancedEquation, setBalancedEquation] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setEquation(e.target.value);
  };

  const handleBalanceClick = () => {
    try {
      const balanced = balanceChemicalEquation(equation);
      setBalancedEquation(balanced);
      setError('');
    } catch (err) {
      setError(err.message);
    }
  };

  // Define the chemical equation balancing function
  const balanceChemicalEquation = (equation) => {
    // Split the equation into left and right sides
    const sides = equation.split('=');
    if (sides.length !== 2) {
      throw new Error('Invalid equation format. Use "=" to separate left and right sides.');
    }

    const leftSide = sides[0].trim();
    const rightSide = sides[1].trim();

    // Define a function to parse and process a side of the equation
    const processSide = (side) => {
      // Split the side into individual molecules using '+'
      const molecules = side.split('+').map((molecule) => molecule.trim());
      return molecules;
    };

    // Define a function to count atoms in a molecule
    const countAtomsInMolecule = (molecule) => {
      const atomsCount = {};
    
      // Regular expression to match atom symbols and their counts
      const atomRegex = /([A-Z][a-z]*)(\d*)/g;

        let match;
        while ((match = atomRegex.exec(molecule))) {
          const [, atomSymbol, countStr] = match;
          const count = countStr ? parseInt(countStr, 10) : 1;
          atomsCount[atomSymbol] = (atomsCount[atomSymbol] || 0) + count;
        }
      
      return atomsCount;
    };
    

    // Process both sides of the equation
    const balancedLeftSide = processSide(leftSide);
    const balancedRightSide = processSide(rightSide);

    console.log('BalancedLeftSide: ' + balancedLeftSide);
    console.log('BalancedRightSide: ' + balancedRightSide);

    // Count atoms in the balanced sides
    const leftAtomsCount = countAtomsInMolecule(balancedLeftSide);
    const rightAtomsCount = countAtomsInMolecule(balancedRightSide);

    console.log('LeftAtomsCount: ' + JSON.stringify(leftAtomsCount));
    console.log('RightAtomsCount: ' + JSON.stringify(rightAtomsCount));

    // Define a function to balance the equation
    const balanceEquation = (leftAtomsCount, rightAtomsCount) => {
      const uniqueAtoms = new Set([...Object.keys(leftAtomsCount), ...Object.keys(rightAtomsCount)]);
      const equations = [];

      console.log('UniqueAtoms: ' + Array.from(uniqueAtoms));


      // Create equations for each atom
      for (const atom of uniqueAtoms) {
        const leftCount = leftAtomsCount[atom] || 0;
        const rightCount = rightAtomsCount[atom] || 0;

        // Create the equation: left_atoms - right_atoms = 0
        equations.push(leftCount - rightCount);
      }

      // Construct the coefficient matrix
      const coefficients = [];
      for (const molecule of [...balancedLeftSide, ...balancedRightSide])
       {
        console.log(molecule)
        const moleculeAtomsCount = countAtomsInMolecule(molecule);

        console.log('MoleculeAtomsCount: ' + JSON.stringify(moleculeAtomsCount));

        const moleculeCoefficients = [];

        // Populate the coefficients for each atom in the molecule
        for (const atom of uniqueAtoms) {
          const count = moleculeAtomsCount[atom] || 0;
          moleculeCoefficients.push(count);
        }

        coefficients.push(moleculeCoefficients);
      }

      console.log("Coefficients: " + coefficients)
      console.log("Equations: " + equations)

    // Ensure the coefficient matrix is square by adding zero rows if necessary
    // Ensure the coefficient matrix is square by adding zero columns if necessary
const maxEquationsLength = Math.max(equations.length, coefficients.length);
coefficients.forEach((row) => {
  while (row.length < maxEquationsLength) {
    row.push(0);
  }
});

// Ensure the equations array is the same length as maxEquationsLength
while (equations.length < maxEquationsLength) {
  equations.push(0);
}

      // Convert coefficients to a math.js matrix
      const coefficientsMatrix = math.matrix(coefficients);
 
      // Convert equations to a math.js matrix
      const equationsMatrix = math.transpose(math.matrix(equations));

      // console.log("Size of augmentedMatrixMatrix:", augmentedMatrix.size());
      console.log("Size of equationsMatrix:", equationsMatrix.size());
      console.log("Size of coefficientsMatrix:", coefficientsMatrix.size());
      // console.log("Size of identityMatrix:", identityMatrix.size());
      
      console.log("Coefficientmatrix: ", coefficientsMatrix)
      console.log("EquationsMatrix: ", equationsMatrix);


      // Solve the system of equations
      const solutions = math.lusolve(coefficientsMatrix, equationsMatrix);
      console.log(solutions)

      // Extract the solutions
      const solutionArray = solutions.map((solution) => solution[0]);
      console.log('SolutionArray: ' + solutionArray)

      // Construct the balanced equation using the coefficients
      const balancedEquation = coefficients.map((moleculeCoefficients, index) => {
        const coefficient = solutionArray[index];
        return `${coefficient !== 1 ? `${coefficient}${balancedLeftSide}` : balancedLeftSide} = ${coefficient !== 1 ? `${coefficient}${balancedRightSide}` : balancedRightSide}`;
      }).join(' + ');

      return balancedEquation;
    };
    

    return balanceEquation(leftAtomsCount, rightAtomsCount);
  };

  return (
    <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: '10' }}>
      <Typography pt={1} variant="h5" sx={{ textAlign: 'center' }}>
        Chemical Equation Balancer
      </Typography>
      <hr />
      <br />
      <TextField
        label="Enter Chemical Equation"
        fullWidth
        variant="outlined"
        value={equation}
        onChange={handleInputChange}
      />
      <br />
      <Button variant="contained" onClick={handleBalanceClick}>
        Balance Equation
      </Button>
      <br />
      <br />
      {error && (
        <Typography variant="body1" sx={{ textAlign: 'center', color: 'red' }}>
          Error: {error}
        </Typography>
      )}
      {balancedEquation && (
        <Typography variant="body1" sx={{ textAlign: 'center' }}>
          Balanced Equation: {balancedEquation}
        </Typography>
      )}
    </Container>
  );
}

export default MainChemicalEqBalancer;

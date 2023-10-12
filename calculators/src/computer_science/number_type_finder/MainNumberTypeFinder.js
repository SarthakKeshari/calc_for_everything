// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   Container,
//   Divider,
//   FormControl,
//   InputLabel,
//   MenuItem,
//   Paper,
//   Select,
//   TextField,
//   Typography,
// } from "@mui/material";

// function MainNumberTypeFinder() {
//   const [number, setnumber] = useState("");
//   const [selectedNumberTypes, setselectedNumberTypes] = useState([]);
//   const [results, setresults] = useState(null);

//   const handleCheck = () => {
//     if (number === "" || selectedNumberTypes.length === 0) {
//       return alert(
//         "Please make sure to select atleast one number type and add a number to check."
//       );
//     }

//     setnumber(parseInt(number));
//     const calculatedResults = {};

//     selectedNumberTypes.forEach((type) => {
//       switch (type) {
//         case "armstrong":
//           calculatedResults.armstrong = checkArmstrong(number);
//           break;
//         case "kaprekar":
//           calculatedResults.kaprekar = checkKaprekar(number);
//           break;
//         case "automorphic":
//           calculatedResults.automorphic = checkAutomorphic(number);
//           break;
//         case "perfect":
//           calculatedResults.perfect = checkPerfect(number);
//           break;
//         case "amicable":
//           calculatedResults.amicable = checkAmicable(number);
//           break;
//         default:
//           break;
//       }
//     });

//     setresults(calculatedResults);
//   };

//   // * functions to check number types

//   // armstrong
//   const checkArmstrong = (num) => {
//     let value = 0;
//     let x = num.toString();
//     x = x.split("");
//     x.forEach((digit) => {
//       value += parseInt(digit) ** x.length;
//     });
//     return value === num;
//   };

//   // Kaprekar Number
//   const checkKaprekar = (num) => {
//     let x = num ** 2;
//     x = x.toString();
//     const mid = Math.floor((x.length - 1) / 2);
//     const leftNum = x.substring(0, mid + 1);
//     const rightNum = x.substring(mid + 1, x.length);
//     const value = parseInt(leftNum) + parseInt(rightNum);
//     return value === num;
//   };

//   // Automorphic Number
//   const checkAutomorphic = (num) => {
//     let x = num ** 2;
//     x = x.toString();
//     x = x.substring(x.length - num.toString().length, x.length);
//     return parseInt(x) === num;
//   };

//   // sum of proper divisors of a Number
//   const sumProperDivisors = (num) => {
//     if (num <= 1) {
//       return 0;
//     }

//     let sum = 1;
//     const sqrtNum = Math.sqrt(num);

//     for (let i = 2; i <= sqrtNum; i++) {
//       if (num % i === 0) {
//         sum += i;
//         const divisor = num / i;
//         if (divisor !== i) {
//           sum += divisor;
//         }
//       }
//     }

//     return sum;
//   };

//   // Perfect Number
//   const checkPerfect = (num) => {
//     if (num <= 0) {
//       return false;
//     } else {
//       return sumProperDivisors(num) === num;
//     }
//   };

//   // Amicable Number
//   const checkAmicable = (num) => {
//     const x = sumProperDivisors(num);
//     if (x !== num) {
//       if (sumProperDivisors(x) === num) {
//         return true;
//       } else {
//         return false;
//       }
//     } else {
//       return true;
//     }
//   };

//   return (
    // <Container
    //   maxWidth="lg"
    //   sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: "10" }}
    // >
    //   <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
    //     Number Type Finder
    //   </Typography>
    //   <hr />
    //   <br />
    //   {/* input for the number */}
    //   <TextField
    //     type="Number"
    //     label="Enter number"
    //     variant="outlined"
    //     value={number}
    //     onChange={(e) => setnumber(e.target.value)}
    //     fullWidth
    //     sx={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
    //   />
    //   {/* multi-select dropdown list */}
    //   <FormControl
    //     variant="outlined"
    //     fullWidth
    //     sx={{ marginTop: "1rem", backgroundColor: "rgba(255, 255, 255, 0.8)" }}
    //   >
    //     <InputLabel>Select Calculations</InputLabel>
    //     <Select
    //       multiple
    //       value={selectedNumberTypes}
    //       onChange={(e) => setselectedNumberTypes(e.target.value)}
    //       label="Select Calculations"
    //       renderValue={(selected) => selected.join(", ")}
    //     >
    //       <MenuItem value="armstrong">Armstrong Number</MenuItem>
    //       <MenuItem value="kaprekar">Kaprekar Number</MenuItem>
    //       <MenuItem value="automorphic">Automorphic Number</MenuItem>
    //       <MenuItem value="perfect">Perfect Number</MenuItem>
    //       <MenuItem value="amicable">Amicable Number</MenuItem>
    //     </Select>
    //   </FormControl>
    //   {/* button to check the number type */}
    //   <Button
    //     variant="contained"
    //     color="primary"
    //     sx={{ marginTop: "1rem" }}
    //     onClick={handleCheck}
    //   >
    //     Check
    //   </Button>

    //   {/* results */}
    //   {results !== null && (
    //     <Box mt={3}>
    //       <Paper
    //         elevation={3}
    //         sx={{ maxHeight: "380px", overflowY: "auto", padding: "16px" }}
    //       >
    //         {Object.keys(results).map((type) => (
    //           <div key={type}>
    //             <Typography variant="h6">
    //               {type.charAt(0).toUpperCase() + type.slice(1)} Number :
    //             </Typography>
    //             <Typography variant="body1">
    //               {results[type] ? "Yes" : "No"}
    //             </Typography>
    //             <Divider sx={{ marginY: "8px" }} />
    //           </div>
    //         ))}
    //       </Paper>
    //     </Box>
    //   )}
    // </Container>
//   );
// }

// export default MainNumberTypeFinder;

//////////////////////////////////////////////////////////////////////////////////////////////


import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";

function MainNumberTypeFinder() {
  const [number, setnumber] = useState("");
  const [selectedNumberTypes, setselectedNumberTypes] = useState([]);
  const [results, setresults] = useState(null);

  // Function to check Armstrong Number
  const checkArmstrong = (num) => {
    const numStr = num.toString();
    const numDigits = numStr.length;
    let sum = 0;

    for (let i = 0; i < numDigits; i++) {
      const digit = parseInt(numStr[i]);
      sum += digit ** numDigits;
    }

    return sum === num;
  };

  // Function to check Kaprekar Number
  const checkKaprekar = (num) => {
    const square = num * num;
    const squareStr = square.toString();
    const numStr = num.toString();
    const len = numStr.length;

    const rightPart = squareStr.slice(-len);
    const leftPart = squareStr.slice(0, -len);

    const left = parseInt(leftPart) || 0;
    const right = parseInt(rightPart) || 0;

    return left + right === num;
  };

  // Function to check Automorphic Number
  const checkAutomorphic = (num) => {
    const square = num * num;
    const numStr = num.toString();
    const squareStr = square.toString();

    return squareStr.endsWith(numStr);
  };

  // Function to check Perfect Number
  const checkPerfect = (num) => {
    if (num <= 0) {
      return false;
    }

    const sumProperDivisors = (n) => {
      let sum = 0;
      for (let i = 1; i <= n / 2; i++) {
        if (n % i === 0) {
          sum += i;
        }
      }
      return sum;
    };

    return sumProperDivisors(num) === num;
  };

  // Function to check Amicable Number
  const checkAmicable = (num) => {
    const sumProperDivisors = (n) => {
      let sum = 0;
      for (let i = 1; i <= n / 2; i++) {
        if (n % i === 0) {
          sum += i;
        }
      }
      return sum;
    };

    const sum1 = sumProperDivisors(num);
    if (sum1 === num) {
      return false; // Perfect numbers are not considered amicable
    }

    const sum2 = sumProperDivisors(sum1);

    return sum2 === num;
  };

  // Function to check Fibonacci Number
  const checkFibonacci = (num) => {
    if (num <= 0) {
      return false;
    }

    let a = 0;
    let b = 1;
    while (b < num) {
      const temp = b;
      b += a;
      a = temp;
    }

    return b === num;
  };

  // Function to check Palindromic Number
  const checkPalindromic = (num) => {
    const numStr = num.toString();
    return numStr === numStr.split("").reverse().join("");
  };

  // Function to check Smith Number
  const checkSmith = (num) => {
    // Implement Smith number checking logic here
    const findPrimeFactors = (n) => {
      const factors = [];
      let divisor = 2;
      while (n >= 2) {
        if (n % divisor === 0) {
          factors.push(divisor);
          n /= divisor;
        } else {
          divisor++;
        }
      }
      return factors;
    };
    // You can define your own function to check for Smith numbers
  };

  // Function to check Harshad Number
  const checkHarshad = (num) => {
    const sumOfDigits = num
      .toString()
      .split("")
      .map(Number)
      .reduce((a, b) => a + b, 0);
    return num % sumOfDigits === 0;
  };

  // Function to check Happy Number
  const checkHappy = (num) => {
    let seen = new Set();

    while (num !== 1 && !seen.has(num)) {
      seen.add(num);
      num = num
        .toString()
        .split("")
        .map((digit) => parseInt(digit) ** 2)
        .reduce((a, b) => a + b, 0);
    }

    return num === 1;
  };

  const handleCheck = () => {
    if (number === "" || selectedNumberTypes.length === 0) {
      return alert(
        "Please make sure to select at least one number type and add a number to check."
      );
    }

    setnumber(parseInt(number));
    const calculatedResults = {};

    selectedNumberTypes.forEach((type) => {
      switch (type) {
        case "armstrong":
          calculatedResults.armstrong = checkArmstrong(number);
          break;
        case "kaprekar":
          calculatedResults.kaprekar = checkKaprekar(number);
          break;
        case "automorphic":
          calculatedResults.automorphic = checkAutomorphic(number);
          break;
        case "perfect":
          calculatedResults.perfect = checkPerfect(number);
          break;
        case "amicable":
          calculatedResults.amicable = checkAmicable(number);
          break;
        case "fibonacci":
          calculatedResults.fibonacci = checkFibonacci(number);
          break;
        case "palindromic":
          calculatedResults.palindromic = checkPalindromic(number);
          break;
        case "smith":
          calculatedResults.smith = checkSmith(number);
          break;
        case "harshad":
          calculatedResults.harshad = checkHarshad(number);
          break;
        case "happy":
          calculatedResults.happy = checkHappy(number);
          break;
        default:
          break;
      }
    });

    setresults(calculatedResults);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: "10" }}
    >
      <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
        Number Type Finder
      </Typography>
      <hr />
      <br />

      <TextField
        type="Number"
        label="Enter number"
        variant="outlined"
        value={number}
        onChange={(e) => setnumber(e.target.value)}
        fullWidth
        sx={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
      />
      {/* multi-select dropdown list */}
      <FormControl
        variant="outlined"
        fullWidth
        sx={{ marginTop: "1rem", backgroundColor: "rgba(255, 255, 255, 0.8)" }}
      >
        <InputLabel>Select Calculations</InputLabel>
        <Select
          multiple
          value={selectedNumberTypes}
          onChange={(e) => setselectedNumberTypes(e.target.value)}
          label="Select Calculations"
          renderValue={(selected) => selected.join(", ")}
        >
          <MenuItem value="armstrong">Armstrong Number</MenuItem>
          <MenuItem value="kaprekar">Kaprekar Number</MenuItem>
          <MenuItem value="automorphic">Automorphic Number</MenuItem>
          <MenuItem value="perfect">Perfect Number</MenuItem>
          <MenuItem value="amicable">Amicable Number</MenuItem>
          <MenuItem value="fibonacci">Fibonacci Number</MenuItem>
          <MenuItem value="palindromic">Palindromic Number</MenuItem>
          <MenuItem value="smith">Smith Number</MenuItem>
          <MenuItem value="harshad">Harshad Number</MenuItem>
          <MenuItem value="happy">Happy Number</MenuItem>
        </Select>
      </FormControl>
      {/* button to check the number type */}
      <Button
        variant="contained"
        color="primary"
        sx={{ marginTop: "1rem" }}
        onClick={handleCheck}
      >
        Check
      </Button>

      {/* results */}
      {results !== null && (
        <Box mt={3}>
          <Paper
            elevation={3}
            sx={{ maxHeight: "380px", overflowY: "auto", padding: "16px" }}
          >
            {Object.keys(results).map((type) => (
              <div key={type}>
                <Typography variant="h6">
                  {type.charAt(0).toUpperCase() + type.slice(1)} Number :
                </Typography>
                <Typography variant="body1">
                  {results[type] ? "Yes" : "No"}
                </Typography>
                <Divider sx={{ marginY: "8px" }} />
              </div>
            ))}
          </Paper>
        </Box>
      )}
    </Container>
  );
}

export default MainNumberTypeFinder;

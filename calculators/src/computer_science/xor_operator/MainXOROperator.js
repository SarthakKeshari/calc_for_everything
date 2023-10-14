import React , {useState} from 'react';
import { Container, Typography } from '@mui/material';
import InfoXOROperator from './InfoXOROperator';

function MainXOROperator(){
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [result, setResult] = useState('');

    const handleValue1Change = (e) => {
    setValue1(e.target.value);
  };

    const handleValue2Change = (e) => {
    setValue2(e.target.value);
  };

    const calculateXOR = () => {
    if (!value1 || !value2) {
      alert('Please enter both values.');
      return;
    }

    const parsedValue1 = parseFloat(value1);
    const parsedValue2 = parseFloat(value2);

    if (isNaN(parsedValue1) || isNaN(parsedValue2)) {
      alert('Invalid input. Please enter numeric values.');
      return;
    }

    const xorResult = parsedValue1 ^ parsedValue2;
    setResult(xorResult);
  };
    return(
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY:"10" }}>
            <Typography pt={1} variant='h5' sx = {{textAlign: "center"}}>XOR Operator <InfoXOROperator/> </Typography>
            <hr/>
            <br/>
            <div>
      <h1>XOR Calculator</h1>
       <input
        type="text"
        placeholder="Enter value 1"
        value={value1}
        onChange={handleValue1Change}
      />
      <input
        type="text"
        placeholder="Enter value 2"
        value={value2}
        onChange={handleValue2Change}
      />
       <button onClick={calculateXOR}>Calculate XOR</button>
       <p>XOR Result: {result}</p>
     </div>
     
 

        </Container>
    )
}






//   const [value1, setValue1] = useState('');
//   const [value2, setValue2] = useState('');
//   const [result, setResult] = useState('');

//   const handleValue1Change = (e) => {
//     setValue1(e.target.value);
//   };

//   const handleValue2Change = (e) => {
//     setValue2(e.target.value);
//   };

//   const calculateXOR = () => {
//     if (!value1 || !value2) {
//       alert('Please enter both values.');
//       return;
//     }

//     const parsedValue1 = parseFloat(value1);
//     const parsedValue2 = parseFloat(value2);

//     if (isNaN(parsedValue1) || isNaN(parsedValue2)) {
//       alert('Invalid input. Please enter numeric values.');
//       return;
//     }

//     const xorResult = parsedValue1 ^ parsedValue2;
//     setResult(xorResult);
//   };

//   return (
//     <div>
//       <h1>XOR Calculator</h1>
//       <input
//         type="text"
//         placeholder="Enter value 1"
//         value={value1}
//         onChange={handleValue1Change}
//       />
//       <input
//         type="text"
//         placeholder="Enter value 2"
//         value={value2}
//         onChange={handleValue2Change}
//       />
//       <button onClick={calculateXOR}>Calculate XOR</button>
//       <p>XOR Result: {result}</p>
//     </div>
//   );
// 

export default MainXOROperator;

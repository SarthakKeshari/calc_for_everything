import React,{useState} from 'react';
import { Container, Typography } from '@mui/material';
import "./index.css";
import InfoSetOperations from './InfoSetOperations';


function MainSetOperations() {
  const [setA, setSetA] = useState([]);
  const [setB, setSetB] = useState([]);
  const [result, setResult] = useState([]);
  const [operator, setOperator] = useState("");

  const handleInput = (e, set) => {
    const input = e.target.value.trim();
    const elements = input.split(",").map((el) => el.trim());
    set(elements);
  };

  const union = () => {
    const result = [...new Set([...setA, ...setB])];
    setResult(result);
    setOperator("Union");
    
  };

  const intersection = () => {
    const result = setA.filter((element) => setB.includes(element));
    setResult(result);
    setOperator("Intersection");
    
  };

  const complement = () => {
    const result = setA.filter((element) => !setB.includes(element));
    setResult(result);
    setOperator("Complement of A");
  };

  const difference = () => {
    const result = setA.filter((element) => !setB.includes(element));
    setResult(result);
    setOperator("Difference (Relative Complement) of A");
  };

  return (

    <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY:"10" }}>
        <Typography pt={1} variant='h5' sx = {{textAlign: "center"}}>Set Operations <InfoSetOperations/></Typography>
            <hr/>
            <br/>
    <div className="app">
      
      <div className='sets'>
        <label>Set A:  </label>
        <input
          type="text"
          placeholder="separate digits by commas"
          onChange={(e) => handleInput(e, setSetA)}
        />
      </div>
      
      <div className='sets'>
        <label>Set B:   </label>
        <input
          type="text"
          placeholder=" separate digits by commas"
          onChange={(e) => handleInput(e, setSetB)}
          />
      </div>
      <div>
        <button className='opButton' onClick={union}>Union</button>
        <button className='opButton' onClick={intersection}>Intersection</button>
        <button className='opButton' onClick={complement}>Complement</button>
        <button className='opButton' onClick={difference}>Difference</button>
      </div>
      <div className='result'>
        <label>Result:</label>
        <p> {operator}:  {result.join(", ")}</p>
      </div>
    </div>
  </Container>
  );
}

export default MainSetOperations;

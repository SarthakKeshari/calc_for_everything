import React, { useState } from 'react';
import { Container, Typography, Button } from '@mui/material';

function MainAgeCalculator() {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = (birthdate) => {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  };

  const handleInputChange = (e) => {
    setBirthdate(e.target.value);
  };

  const handleGetAge = () => {
    if (birthdate) {
      const calculatedAge = calculateAge(birthdate);
      setAge(calculatedAge);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY:"10" }}>
      <Typography pt={1} variant='h5' sx={{textAlign: "center"}}>Age Calculator</Typography>
      <hr />
      <br />
      <div style={{ textAlign: "center" }}>
        <label htmlFor="birthdate">Enter your date of birth:</label>
        <input 
          type="date"
          id="birthdate"
          value={birthdate}
          onChange={handleInputChange}
        />
        <Button variant="contained" onClick={handleGetAge}>Get your age</Button>
        {age !== null && <div>Your age is {age}</div>}
      </div>
    </Container>
  );
}

export default MainAgeCalculator;

import React, { useEffect, useState } from 'react';
import { Container, Divider, Input, Typography } from '@mui/material';
import CopyValue from '../../components/CopyValue';

function MainOctToBinAndBinToOct() {
  const [bin, setBin] = useState(0);
  const [oct, setOct] = useState(0);
  const [binans, setBinans] = useState(0);
  const [octans, setOctans] = useState(0);

  const handleConversion = (value, fromBase, toBase) => {
    const numericValue = parseFloat(value);
    if (!isNaN(numericValue)) {
      return numericValue.toString(toBase);
    } else {
      return "Invalid input";
    }
  };

  useEffect(() => {
    setBinans(handleConversion(oct, 8, 2));
    setOctans(handleConversion(bin, 2, 8));
  }, [oct, bin]);

  return (
    <div>
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY:"10" }}>
            <Typography pt={1} variant='h5' sx = {{textAlign: "center"}}>Octal-Binary and Vice versa calculator</Typography>
            <hr/>
            <br/>
            <Container sx={{display:"flex", flexDirection:"column"}}>
                <Typography pt={1} variant='h6' mt={2}>Enter Octal No.</Typography>
                <Input
                    color="primary"
                    disabled={false}
                    placeholder="Enter Octal No."
                    size="lg"
                    variant="outlined"
                    type='number'
                    onChange={(e) => setOct(e.target.value)}
                    value={oct}
                />
                <Typography pt={1} variant='h6' mt={2}>Binary No.</Typography>
                <div className='output'>
                    <Typography pt={1} variant='h6' fontStyle={{color: "blue"}}>{binans}</Typography>
                    <CopyValue value={binans}/>
                </div>
                <hr/>
                <br/>
                <Divider />
                <Typography pt={1} variant='h6' mt={2}>Enter Binary No.</Typography>
                <Input
                    color="primary"
                    disabled={false}
                    placeholder="Enter Binary No."
                    size="lg"
                    variant="outlined"
                    type='number'
                    onChange={(e) => setBin(e.target.value)}
                    value={bin}
                />
                <Typography pt={1} variant='h6' mt={2}>Octal no.</Typography>
                <div className='output'>
                    <Typography pt={1} variant='h6' fontStyle={{color: "blue"}}>{octans}</Typography>
                    <CopyValue value={octans}/>
                </div>
                
                <Divider />
            </Container>
        </Container>
    </div>
  )
}

export default MainOctToBinAndBinToOct;


import React, { useEffect, useState } from 'react';
import { Container, Divider, Input, Typography } from '@mui/material';
const MainOctalAdder = () => {
    const [oct1,setOct1] = useState(0)
    const [oct2,setOct2] = useState(0)
    const [octans,setOctans] = useState(0)
    const [decans,setDecans] = useState(0)
    useEffect(()=>{
        if(oct1>0 || oct2>0){
            setOctans((parseInt(oct1,8)+parseInt(oct2,8)).toString(8))
            setDecans(parseInt(oct1,8)+parseInt(oct2,8))
        }
        else{
            setOctans(0)
            setDecans(0)
        }
    },[oct1,oct2])
  return (
    <div><Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY:"10" }}>
    <Typography pt={1} variant='h5' sx = {{textAlign: "center"}}>Octal Adder</Typography>
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
            onChange={(e) => setOct1(e.target.value)}
            value={oct1}
        />
        <Typography pt={1} variant='h6' mt={2}>Enter Octal No.</Typography>
        <Input
            color="primary"
            disabled={false}
            placeholder="Enter Rate"
            size="lg"
            variant="outlined"
            type='number'
            onChange={(e) => setOct2(e.target.value)}
            value={oct2}
        />
        
        
        <Typography pt={1} variant='h6' mt={2}>Resultant in Octal</Typography>
        <Typography pt={1} variant='h6' fontStyle={{color: "blue"}}>{octans}</Typography>
        <Typography pt={1} variant='h6' mt={2}>Resultant in Decimal</Typography>
        <Typography pt={1} variant='h6' fontStyle={{color: "blue"}}>{decans}</Typography>

        <Divider />
    </Container>
</Container>
</div>
  )
}

export default MainOctalAdder
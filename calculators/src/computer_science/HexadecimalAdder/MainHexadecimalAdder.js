
import React, { useEffect, useState } from 'react';
import { Container, Divider, Input, Typography } from '@mui/material';
const MainHexadecimalAdder = () => {
    const [hex1,setHex1] = useState("0")
    const [hex2,setHex2] = useState("0")
    const [hexans,setHexans] = useState(0)
    const [decans,setDecans] = useState(0)
    useEffect(()=>{
        if(hex1!=="0" || hex2!=="0"){
            console.log(parseInt(hex1,16)+" ,,,"+parseInt(hex2,16));
            setHexans((parseInt(hex1,16)+parseInt(hex2,16)).toString(16))
            setDecans(parseInt(hex1,16)+parseInt(hex2,16))
        }
        else{
            setHexans(0)
        }
    },[hex1,hex2])
  return (
    <div><Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY:"10" }}>
    <Typography pt={1} variant='h5' sx = {{textAlign: "center"}}>Hexadecimal Adder</Typography>
    <hr/>
    <br/>
    <Container sx={{display:"flex", flexDirection:"column"}}>
        <Typography pt={1} variant='h6' mt={2}>Enter Hexadecimall no.</Typography>
        <Input
            color="primary"
            disabled={false}
            placeholder="Enter Hexadecimal No."
            size="lg"
            variant="outlined"
            type='text'
            onChange={(e) => setHex1(e.target.value)}
            value={hex1}
        />
        <Typography pt={1} variant='h6' mt={2}>Enter Hexadecimal No.</Typography>
        <Input
            color="primary"
            disabled={false}
            placeholder="Enter Hexadecimal No."
            size="lg"
            variant="outlined"
            type='text'
            onChange={(e) => setHex2(e.target.value)}
            value={hex2}
        />
        
        
        <Typography pt={1} variant='h6' mt={2}>Resultant in Hexadecimal</Typography>
        <Typography pt={1} variant='h6' fontStyle={{color: "blue"}}>{hexans}</Typography>
        <Typography pt={1} variant='h6' mt={2}>Resultant in Decimal</Typography>
        <Typography pt={1} variant='h6' fontStyle={{color: "blue"}}>{decans}</Typography>

        <Divider />
    </Container>
</Container>
</div>
  )
}

export default MainHexadecimalAdder
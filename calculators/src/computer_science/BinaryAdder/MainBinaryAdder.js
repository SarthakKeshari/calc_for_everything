import React, { useEffect, useState } from 'react';
import { Container, Divider, Input, Typography } from '@mui/material';
import CopyValue from '../../components/CopyValue';
import InfoBinaryAdder from './InfoBinaryAdder';

function MainBinaryAdder(){
    const [bin1,setBin1] = useState(0)
    const [bin2,setBin2] = useState(0)
    const [binans,setBinans] = useState(0)
    const [decans,setDecans] = useState(0)
    useEffect(()=>{
        if(bin1>0 || bin2>0){
            setBinans((parseInt(bin1,2)+parseInt(bin2,2)).toString(2))
            setDecans(parseInt(bin1,2)+parseInt(bin2,2))
        }
        else{
            setBinans(0)
            setDecans(0)
        }
    },[bin1,bin2])
  return (
    <div><Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY:"10" }}>
    <Typography pt={1} variant='h5' sx = {{textAlign: "center"}}>Binary Adder <InfoBinaryAdder/> </Typography>
    <hr/>
    <br/>
    <Container sx={{display:"flex", flexDirection:"column"}}>
        <Typography pt={1} variant='h6' mt={2}>Enter Binary No.</Typography>
        <Input
            color="primary"
            disabled={false}
            placeholder="Enter Binary No."
            size="lg"
            variant="outlined"
            type='number'
            onChange={(e) => setBin1(e.target.value)}
            value={bin1}
        />
        <Typography pt={1} variant='h6' mt={2}>Enter Binary No.</Typography>
        <Input
            color="primary"
            disabled={false}
            placeholder="Enter Binary"
            size="lg"
            variant="outlined"
            type='number'
            onChange={(e) => setBin2(e.target.value)}
            value={bin2}
        />
        
        
        <Typography pt={1} variant='h6' mt={2}>Resultant in Binary</Typography>
        <div className='output'>
            <Typography pt={1} variant='h6' fontStyle={{color: "blue"}}>{binans}</Typography>
            <CopyValue value={binans}/>
        </div>
        <Typography pt={1} variant='h6' mt={2}>Resultant in Decimal</Typography>
        <div className='output'>
            <Typography pt={1} variant='h6' fontStyle={{color: "blue"}}>{decans}</Typography>
            <CopyValue value={decans}/>
        </div>
        <Divider />
    </Container>
</Container>
</div>
  )
}

export default MainBinaryAdder;
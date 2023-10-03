import React, { useCallback, useEffect, useState } from 'react';
import { Container, Divider, Input, Typography } from '@mui/material';
import CopyValue from '../../components/CopyValue';

function MainBinarySubtractor(){
    const [binaryNum1, setBinaryNum1] = useState(0);
    const [binaryNum2, setBinaryNum2] = useState(0);
    const [binans,setBinans] = useState(0)
    const [decans,setDecans] = useState(0)

    const binSub = useCallback((a, b) => {
        let carry;
        b = binAdd(~b, 1);
        while (b !== 0) {
          carry = (a & b) << 1;
          a = a ^ b;
          b = carry;
        }
        return a;
      }, []);
    const binAdd = (x, y) => {
        let carry;
        while (y !== 0) {
          carry = (x & y) << 1;
          x = x ^ y;
          y = carry;
        }
        return x;
    };
    useEffect(()=>{
        const num1 = parseInt(binaryNum1, 2);
        const num2 = parseInt(binaryNum2, 2);
        if(binaryNum1>0 || binaryNum2>0){
            const sub = binSub(num1, num2);
            setBinans(sub.toString(2));
            setDecans(sub);
        }
        else{
            setBinans(0);
            setDecans(0);
        }
    },[binaryNum1,binaryNum2,binSub])

    return(
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY:"10" }}>
            <Typography pt={1} variant='h5' sx = {{textAlign: "center"}}>Binary Subtractor</Typography>
            <hr/>
            <br/>
            <Container sx={{display:"flex", flexDirection:"column"}}>
        <Typography pt={1} variant='h6' mt={2}>Enter Binary No.</Typography>
        <Input
            color="primary"
            disabled={false}
            placeholder="Enter Binary No."
            name="binaryNum1"
            size="lg"
            variant="outlined"
            type='number'
            onChange={(e) => setBinaryNum1(e.target.value)}
            value={binaryNum1}
        />
        <Typography pt={1} variant='h6' mt={2}>Enter Binary No.</Typography>
        <Input
            color="primary"
            disabled={false}
            placeholder="Enter Binary No."
            name="binaryNum2"
            size="lg"
            variant="outlined"
            type='number'
            onChange={(e) => setBinaryNum2(e.target.value)}
            value={binaryNum2}
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
    )
}

export default MainBinarySubtractor;

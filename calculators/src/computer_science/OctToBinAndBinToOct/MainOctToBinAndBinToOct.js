import React, { useEffect, useState } from 'react';
import { Container, Divider, Input, Typography } from '@mui/material';
function MainOctToBinAndBinToOct(){
    const [bin,setBin] = useState(0)
    const [oct,setOct] = useState(0)
    const [binans,setBinans] = useState(0)
    const [octans,setOctans] = useState(0)
    useEffect(() => {
        if(oct>0){
            setBinans(parseInt(oct,8).toString(2))
        }
        else{
            setBinans(0)
        }
        if(bin>0){
            setOctans(parseInt(bin,2).toString(8))
        }
        else{
            setOctans(0)
        }
    }, [oct,bin])
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
                <Typography pt={1} variant='h6' fontStyle={{color: "blue"}}>{binans}</Typography>
                <hr/>
                <br/>
                <Divider />
                <Typography pt={1} variant='h6' mt={2}>Enter Binary No.</Typography>
                <Input
                    color="primary"
                    disabled={false}
                    placeholder="Enter Rate"
                    size="lg"
                    variant="outlined"
                    type='number'
                    onChange={(e) => setBin(e.target.value)}
                    value={bin}
                />
                <Typography pt={1} variant='h6' mt={2}>Octal no.</Typography>
                <Typography pt={1} variant='h6' fontStyle={{color: "blue"}}>{octans}</Typography>

                <Divider />
            </Container>
        </Container>
    </div>
  )
}

export default MainOctToBinAndBinToOct;
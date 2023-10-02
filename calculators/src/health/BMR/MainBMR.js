import React, { useEffect, useState } from 'react';
import { Container, Divider, Input, Typography, Switch } from '@mui/material';
import CopyValue from '../../components/CopyValue';
import './Bmr.css'
function MainBMR(){
    const [bmr,setbmr]=useState(0);
    const [age,setAge]=useState(0);
    const [checked, setChecked] = useState(false);
    const [height,setHeight]=useState(0);
    const [weight,setWeight]=useState(0);
    useEffect(()=>{
        if(age>14 && height>0 && weight>0 && age<81){
            if(checked){
                setbmr((10*weight)+(6.25*height)-(5*age)-161)
            }
            else{
                setbmr((10*weight)+(6.25*height)-(5*age)+5)
            }
        }
    },[checked,age,height,weight])
    return(
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY:"10" }}>
            <Typography pt={1} variant='h5' sx = {{textAlign: "center"}}>BMR Calculator</Typography>
            <hr/>
            <br/>
            <Container sx={{display:"flex", flexDirection:"column"}}>
                <Typography pt={1} variant='h6' mt={2}>Enter Age(15-80)</Typography>
                <Input
                    color="primary"
                    disabled={false}
                    placeholder="Enter Age"
                    size="lg"
                    variant="outlined"
                    type='number'
                    onChange={(e) => setAge(e.target.value)}
                    value={age}
                />
                <Typography pt={1} variant='h6' mt={2}>Gender</Typography>
                
                <div className='BMRcheckbox'>
                    <span>Male</span>
                    <Switch
                        checked={checked}
                        onChange={(e)=>setChecked(e.target.checked)}
                        inputProps={{ 'aria-label': 'controlled' }}
                    /> <span>Female</span>
                </div>
                <hr/>
                <br/>
                <Divider />
                <Typography pt={1} variant='h6' mt={2}>Enter Height</Typography>
                <Input
                    color="primary"
                    disabled={false}
                    placeholder="Enter Height in cm"
                    size="lg"
                    variant="outlined"
                    type='number'
                    onChange={(e) => setHeight(e.target.value)}
                    value={height}
                />
                <Divider />
                <Typography pt={1} variant='h6' mt={2}>Enter Weight</Typography>
                <Input
                    color="primary"
                    disabled={false}
                    placeholder="Enter Weight in kg"
                    size="lg"
                    variant="outlined"
                    type='number'
                    onChange={(e) => setWeight(e.target.value)}
                    value={weight}
                />
                <Typography pt={1} variant='h6' mt={2}>BMR</Typography>
                <div className='output'>
                    <Typography pt={1} pb={3} variant='h6' fontStyle={{color: "blue"}}>{bmr}</Typography>
                    <CopyValue value={bmr}/>
                </div>
                
                <Divider />
            </Container>
        </Container>
    )
}

export default MainBMR;
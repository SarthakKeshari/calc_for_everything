import React, { useEffect, useState } from 'react';
import { Container, Divider, Input, Typography } from '@mui/material';
import CopyValue from '../../components/CopyValue';
import InfoOROperator from './InfoOROperator';

function MainOROperator(){
    const [field,setField] = useState(0)
    const [decans,setDecans] = useState(0)
    const [binans,setBinans] = useState(0)
    const [fieldValues, setFieldValues] = useState([]);
    useEffect(()=>{
        console.log(fieldValues)
        if(field>0)
        {
            let ans = parseInt(fieldValues[0],2)
            for(let i=1;i<field;i++){
                ans = ans | parseInt(fieldValues[i],2)
            }
            setDecans(ans)
            setBinans(ans.toString(2))
        }
        else{
            setBinans(0)
            setDecans(0)
        }
    },[fieldValues,field]);
    const handleFieldChange = (index, value) => {
        const updatedFieldValues = [...fieldValues];
        updatedFieldValues[index] = value;
        setFieldValues(updatedFieldValues);
      };
    const generateFields = () => {
        const fields = [];
        for (let i = 0; i < field; i++) {
          fields.push(<Container sx={{display:"flex", flexDirection:"column"}}><Typography pt={1} variant='h6' mt={2}>Enter Binary No.</Typography>
          <Input
                id={i}
              color="primary"
              disabled={false}
              placeholder={`Enter Binary no. ${i + 1}`}
              size="lg"
              variant="outlined"
              type='number'
              value={fieldValues[i] || ''}
          onChange={(e) => handleFieldChange(i, e.target.value)}
          /></Container>);
        }
        return fields;
      };
    return(
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY:"10" }}>
            <Typography pt={1} variant='h5' sx = {{textAlign: "center"}}>OR Operator <InfoOROperator/> </Typography>
            <hr/>
            <br/>
                <Container sx={{display:"flex", flexDirection:"column"}}>
            <Typography pt={1} variant='h6' mt={2}>Enter No. of fields</Typography>
            <Input
                color="primary"
                disabled={false}
                placeholder="Enter No. of Fields"
                size="lg"
                variant="outlined"
                type='number'
                onChange={(e) => setField(e.target.value)}
                value={field}
            />
            {field>0 && generateFields()
            }
            
            
            
            
            <Typography pt={1} variant='h6' mt={2}>Resultant in Decimal</Typography>
            <div className='output'>
                <Typography pt={1} variant='h6' fontStyle={{color: "blue"}}>{decans}</Typography>
                <CopyValue value={decans}/>
            </div>
            <Divider />
            <Typography pt={1} variant='h6' mt={2}>Resultant in Binary</Typography>
            <div className='output'>
                <Typography pt={1} variant='h6' fontStyle={{color: "blue"}}>{binans}</Typography>
                <CopyValue value={decans}/>
            </div>
            <Divider />
        </Container>
        </Container>
    )
}

export default MainOROperator;
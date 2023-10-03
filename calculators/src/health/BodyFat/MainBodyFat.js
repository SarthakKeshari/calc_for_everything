import React, { useState, useEffect } from 'react';
import { Container, Typography, Tabs, Tab, RadioGroup, FormControlLabel, Radio, TextField, Box } from '@mui/material';

function MainBodyFat() {
    const [value, setValue] = useState(0);
    const [gender, setGender] = useState('male');
    const [age, setAge] = useState(25);
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [neck, setNeck] = useState(0);
    const [waist, setWaist] = useState(0);
    const [bodyFat, setBodyFat] = useState(0);
    const [heightFeet, setHeightFeet] = useState(0);
    const [heightInches, setHeightInches] = useState(0);
    const [neckFeet, setNeckFeet] = useState(0);
    const [neckInches, setNeckInches] = useState(0);
    const [waistFeet, setWaistFeet] = useState(0);
    const [waistInches, setWaistInches] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // useEffect hook to calculate body fat percentage
    useEffect(() => {
        // Only calculate if all necessary values are provided
        if (age && weight && heightFeet && heightInches && neckFeet && neckInches && waistFeet && waistInches) {
            let heightInCm, neckInCm, waistInCm;
    
            // Convert measurements to cm if using US units
            if (value === 0) { // US Units
                heightInCm = (parseInt(heightFeet) * 12 + parseFloat(heightInches)) * 2.54;
                neckInCm = (parseInt(neckFeet) * 12 + parseFloat(neckInches)) * 2.54;
                waistInCm = (parseInt(waistFeet) * 12 + parseFloat(waistInches)) * 2.54;
            } else { // Metric Units
                // No conversion needed for metric units
                heightInCm = height;
                neckInCm = neck;
                waistInCm = waist;
            }
    
            let bodyFatPercentage;
            // Calculate body fat percentage using different formulas for male and female
            if (gender === 'male') {
                bodyFatPercentage = 495 / (1.0324 - 0.19077 * Math.log10(waistInCm - neckInCm) + 0.15456 * Math.log10(heightInCm)) - 450;
            } else {
                bodyFatPercentage = 495 / (1.29579 - 0.35004 * Math.log10(waistInCm - neckInCm) + 0.22100 * Math.log10(heightInCm)) - 450;
            }
    
            // Update body fat percentage state
            setBodyFat(bodyFatPercentage.toFixed(1));
        }
    }, [age, weight, heightFeet, heightInches, neckFeet, neckInches, waistFeet, waistInches, gender, value, height, neck, waist]);

    return (
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: "10" }}>
            <Typography pt={1} variant='h5' sx={{ textAlign: "center" }}>Body Fat Calculator</Typography>
            <hr />
            <br />
            <Tabs value={value} onChange={handleChange} centered>
                <Tab label="US Units" />
                <Tab label="Metric Units" />
            </Tabs>
            <Container sx={{display:"flex", flexDirection:"column"}}>
                <Typography pt={1} variant='h6' mt={2}>Gender</Typography>
                <RadioGroup value={gender} onChange={(e) => setGender(e.target.value)}>
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                </RadioGroup>
                <Typography pt={1} variant='h6' mt={2}>Age</Typography>
                <TextField color="primary" disabled={false} placeholder="Enter Age" size="lg" variant="outlined" type='number' onChange={(e) => setAge(e.target.value)} value={age} />
                <Typography pt={1} variant='h6' mt={2}>Weight ({value === 0 ? "lbs" : "kg"})</Typography>
                <TextField color="primary" disabled={false} placeholder="Enter Weight" size="lg" variant="outlined" type='number' onChange={(e) => setWeight(e.target.value)} value={weight} />
                <Typography pt={1} variant='h6' mt={2}>Height ({value === 0 ? "feet" : "cm"})</Typography>
                {value === 0 ? (
                    <Box display="flex">
                        <TextField
                            color="primary"
                            disabled={false}
                            placeholder="Enter Feet"
                            size="lg"
                            variant="outlined"
                            type='number'
                            onChange={(e) => setHeightFeet(e.target.value)}
                            value={heightFeet}
                        />
                        <TextField
                            color="primary"
                            disabled={false}
                            placeholder="Enter Inches"
                            size="lg"
                            variant="outlined"
                            type='number'
                            onChange={(e) => setHeightInches(e.target.value)}
                            value={heightInches}
                        />
                    </Box>
                ) : (
                    <TextField
                        color="primary"
                        disabled={false}
                        placeholder="Enter Height"
                        size="lg"
                        variant="outlined"
                        type='number'
                        onChange={(e) => setHeight(e.target.value)}
                        value={height}
                    />
                )}
                <Typography pt={1} variant='h6' mt={2}>Neck ({value === 0 ? "feet inches" : "cm"})</Typography>
                {value === 0 ? (
                    <Box display="flex">
                        <TextField
                            color="primary"
                            disabled={false}
                            placeholder="Enter Feet"
                            size="lg"
                            variant="outlined"
                            type='number'
                            onChange={(e) => setNeckFeet(e.target.value)}
                            value={neckFeet}
                        />
                        <TextField
                            color="primary"
                            disabled={false}
                            placeholder="Enter Inches"
                            size="lg"
                            variant="outlined"
                            type='number'
                            inputProps={{ step: 0.1 }}
                            onChange={(e) => setNeckInches(e.target.value)}
                            value={neckInches}
                        />
                    </Box>
            ) : (
                <TextField
                    color="primary"
                    disabled={false}
                    placeholder="Enter Neck"
                    size="lg"
                    variant="outlined"
                    type='number'
                    onChange={(e) => setNeck(e.target.value)}
                    value={neck}
                />
            )}
                <Typography pt={1} variant='h6' mt={2}>Waist ({value === 0 ? "feet inches" : "cm"})</Typography>
                {value === 0 ? (
                    <Box display="flex">
                        <TextField
                            color="primary"
                            disabled={false}
                            placeholder="Enter Feet"
                            size="lg"
                            variant="outlined"
                            type='number'
                            onChange={(e) => setWaistFeet(e.target.value)}
                            value={waistFeet}
                        />
                        <TextField
                            color="primary"
                            disabled={false}
                            placeholder="Enter Inches"
                            size="lg"
                            variant="outlined"
                            type='number'
                            inputProps={{ step: 0.1 }}
                            onChange={(e) => setWaistInches(e.target.value)}
                            value={waistInches}
                        />
                    </Box>
                ) : (
                    <TextField
                        color="primary"
                        disabled={false}
                        placeholder="Enter Waist"
                        size="lg"
                        variant="outlined"
                        type='number'
                        onChange={(e) => setWaist(e.target.value)}
                        value={waist}
                    />
                )}
                <Typography pt={1} variant='h6' mt={2}>Body Fat (in %)</Typography>
                <div className='output'>
                    <Typography pt={1} variant='h6' fontStyle={{color: "blue"}}>{bodyFat || 0}</Typography>
                </div>
            </Container>
        </Container>
    )
}

export default MainBodyFat;
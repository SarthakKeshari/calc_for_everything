import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button, Grid, Tooltip } from '@mui/material';
import {Chart} from 'chart.js';


function MainVibrationalResponseCalc(){

    //System Properties:
    const [mass, setMass] = useState(1);
    const [springConstant, setSpringConstant] = useState(100);
    const [damperConstant, setDamperConstant] = useState(100);
    const [natFreq,setnatFreq] = useState(10);

    //Excitation:
    const [excitationfreq, setexcitationFreq] = useState(1);
    const [excitationForce, setexcitationForce] = useState(10);

    //Additional terms for computation:
    const [dampingRatio, setdampingRatio] = useState(20);
    const [freqRatio, setfreqRatio] = useState(excitationfreq/natFreq);

    //Output:
    const [amplitude, setAmplitude] = useState(excitationForce/mass);
    const [phase, setPhase] = useState(20);

    const [output, setOutput] = useState([0,0,0]);
    const [ctx, setCtx] = useState(null);
    const [chart, setChart] = useState(null);
    const [data, setData] = useState([
    { x: 0, y: 0 },
    { x: 1, y: 0 },
    { x: 2, y: 0 },
  ]);
  
    const calculateOutput = () => {
      const natFreq = Math.sqrt(springConstant / mass);
      setnatFreq(natFreq);
      console.log(natFreq)

      const dampingRatio = damperConstant / (2*Math.sqrt(springConstant*mass));
      setdampingRatio(dampingRatio);
      console.log(dampingRatio)

      const freqRatio = excitationfreq / natFreq;
      setfreqRatio(freqRatio);
      console.log(freqRatio)

      //1. Finding Amplitude:
      const static_amplitude = excitationForce / mass;
      const term1 = (1-freqRatio*freqRatio);
      const term2 = (2*dampingRatio*freqRatio);

      const amplitude = static_amplitude / Math.sqrt(term1**2 + term2**2);
      setAmplitude(amplitude);
      console.log(amplitude)

       //2. Finding phase angle:
 
       const phase = Math.atan(term2/term1);
       setPhase(phase);
       console.log(phase)

      const output = [amplitude,phase,natFreq];

      setOutput(output);

      const newData = [];
     for (let i = 0; i < 100; i++) {
        const x = i / 100;
        const y = amplitude*Math.sin(x * 2 * Math.PI + phase);
        newData.push({ x, y });
        
    }
    
        // Set the data state variable.
    setData(newData);
    console.log(newData);

}

  useEffect(() => {
    // Create the chart.
    // Get the canvas element.
    const canvas = document.getElementById('myCanvas');

    // Get the context of the canvas element.
    const ctx = canvas.getContext('2d');

    // Set the ctx state variable.
    setCtx(ctx);
    console.log(data);
    const newChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.map((d) => d.x),
        datasets: [{
          label: 'Response',
          data: data.map((d) => d.y),
          borderColor: 'red',
          backgroundColor: 'transparent',
          xAxisID: "Time",
          yAxisID: "Displacement"
        }],
      },
    });

    // Set the chart state variable.
    setChart(newChart);

    // Return a cleanup function to destroy the chart when the component is unmounted.
    return () => {
      newChart.destroy();
    };
  }, [data]);

    return(
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY:"10" }}>
            <Typography pt={1} variant='h5' sx = {{textAlign: "center"}}>Vibrational Response Calculator</Typography>
            <hr/>
            <br></br>
            <Grid container spacing={2}>
            <Typography pt={2} variant='h4'>Excitation Parameters:</Typography>
                <Grid item xs={8} md={2}>
                    <Tooltip title="The term F0 sin(ωt) represents the external force, which is a sinusoidal force with amplitude F0 and frequency ω. The sinusoidal force is a force that varies sinusoidally with time. The amplitude of the force is the maximum value of the force.  ">
                        <TextField
                                type="number"
                                label="Static Force (N)"
                                value={excitationForce}
                                onChange={(event) => setexcitationForce(event.target.value)}
                        />
                    </Tooltip>
                    
                </Grid>
                <Grid item xs={6} md={2}>
                    <Tooltip title="The term F0 sin(ωt) represents the external force, which is a sinusoidal force with amplitude F0 and frequency ω. The sinusoidal force is a force that varies sinusoidally with time. The frequency of the force is the number of times per second that the force completes a cycle.  ">
                    <TextField
                            type="number"
                            label="Excitation Frequency (Hz)"
                            value={excitationfreq}
                            onChange={(event) => setexcitationFreq(event.target.value)}
                            
                    />
                    </Tooltip>
                    
                </Grid>
            </Grid>

            <br></br>
            <Grid container spacing={2}>
            <Typography pt={2} variant='h4'>System Parameters:</Typography>
                <Grid item xs={8} md={2}>
                    <Tooltip title="The Inertial force is proportional to the mass of the system and the acceleration of the system. The Inertial Force is the force required to move this mass.">
                    <TextField
                            type="number"
                            label="Mass (kg)"
                            value={mass}
                            onChange={(event) => setMass(event.target.value)}
                            
                    />
                    </Tooltip>
                    
                </Grid>
                <Grid item xs={6} md={2}>
                    <Tooltip title="The restoring force is proportional to the stiffness coefficient and the displacement of the system. The stiffness coefficient is a measure of how stiff the system is.">
                    <TextField
                            type="number"
                            label="Spring Constant (N/m)"
                            value={springConstant}
                            onChange={(event) => setSpringConstant(event.target.value)}
                           
                    />
                    </Tooltip>
                    
                </Grid>
                <Grid item xs={6} md={2}>
                    <Tooltip title="The damping force is proportional to the damping coefficient and the velocity of the system. Dampers are used as shock absorbers, that is they prevent a hazardous condition called Resonance showing it's true power.">
                    <TextField
                        type="number"
                        label="Damper Constant (N-s/m)"
                        value={damperConstant}
                        onChange={(event) => setDamperConstant(event.target.value)}
                    />
                    </Tooltip>
                    
                </Grid>
            </Grid>
                   
            <div>
                
                <br></br>
                <br></br>
                <Button variant="contained" color="primary" onClick={calculateOutput}>Calculate Output</Button>
                <br></br>
                <Typography pt={5} variant='h5'>Results:</Typography>
                <Typography pt={5} variant='h5'>Amplitude of Excitation is {output[0]} meters</Typography>
                <Typography pt={2} variant='h5'>Phase Difference is {output[1]*(180/Math.PI)} degrees</Typography>
                <Typography pt={2} variant='h5'>Natural Frequency of System is {output[2]} Hz</Typography>
                <div>
                    <canvas id="myCanvas" style={{ maxWidth: "100vw", maxHeight: "500px" }} />
                </div>
            </div>

        </Container>
    )
}

export default MainVibrationalResponseCalc;
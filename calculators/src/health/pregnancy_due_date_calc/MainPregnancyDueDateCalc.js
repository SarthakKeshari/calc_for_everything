import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

function MainPregnancyDueDateCalc() {
    const [lastMenstrualPeriod, setLastMenstrualPeriod] = useState('');
    const [cycleLength, setCycleLength] = useState('');
    const [dueDate, setDueDate] = useState(null);

    const calculateDueDate = () => {
        const lmpDate = new Date(lastMenstrualPeriod);
        const ovulationDate = new Date(lmpDate);
        ovulationDate.setDate(lmpDate.getDate() + 14);

        const dueDateStart = new Date(ovulationDate);
        const dueDateEnd = new Date(ovulationDate);
        dueDateStart.setDate(ovulationDate.getDate() + 266);
        dueDateEnd.setDate(ovulationDate.getDate() + 280);

        setDueDate({ start: dueDateStart, end: dueDateEnd });
    }

    const handleCalculate = () => {
        calculateDueDate();
    }

    return (
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: "10" }}>
            <Typography pt={1} variant='h5' sx={{ textAlign: "center" }}>Pregnancy Due Date Calculator</Typography>
            <hr />
            <Box mt={2} mx="auto" maxWidth="500px">
                <TextField
                    fullWidth
                    label="Last Menstrual Period (YYYY-MM-DD)"
                    variant="outlined"
                    value={lastMenstrualPeriod}
                    onChange={(e) => setLastMenstrualPeriod(e.target.value)}
                    sx={{ mb: 2 }}
                />
                <TextField
                    fullWidth
                    label="Cycle Length (in days)"
                    variant="outlined"
                    type="number"
                    value={cycleLength}
                    onChange={(e) => setCycleLength(e.target.value)}
                    sx={{ mb: 2 }}
                />
                <Button variant="contained" onClick={handleCalculate}>Calculate Due Date</Button>
            </Box>
            {dueDate && (
                <Typography variant="body1" sx={{ textAlign: "center", mt: 2 }}>
                    The estimated due date is between {dueDate.start.toISOString().split('T')[0]} and {dueDate.end.toISOString().split('T')[0]}.
                </Typography>
            )}

            <Typography pt={4} variant='h5' sx={{ textAlign: "center" }}>Precaution Measures for Pregnant Women</Typography>
            <ul>
                <li>Get regular prenatal check-ups.</li>
                <li>Eat a balanced diet rich in nutrients.</li>
                <li>Avoid smoking, alcohol, and illicit drugs.</li>
                <li>Stay physically active, but consult with your healthcare provider about suitable exercises.</li>
                <li>Get plenty of rest and manage stress.</li>
                <li>Avoid exposure to harmful chemicals and environmental hazards.</li>
                <li>Stay hydrated and avoid overheating.</li>
            </ul>
        </Container>
    )
}

export default MainPregnancyDueDateCalc;

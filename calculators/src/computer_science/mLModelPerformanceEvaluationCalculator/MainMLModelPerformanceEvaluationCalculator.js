import React, { useState } from 'react';
import { Container, Typography, Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Card, CardContent, Paper } from '@mui/material';

function MainMLModelPerformanceEvaluationCalculator() {
  const [actualValues, setActualValues] = useState([]);
  const [predictedValues, setPredictedValues] = useState([]);
  const [results, setResults] = useState({
    accuracy: 0.00,
    precision: 0.00,
    recall: 0.00,
    f1Score: 0.00,
  });

  const handleCalculateMetrics = () => {
    if (actualValues.length !== predictedValues.length) {
      alert('The number of actual and predicted values must be the same.');
      return;
    }

    const truePositives = actualValues.filter((actual, index) => actual === 1 && predictedValues[index] === 1).length;
    const falsePositives = actualValues.filter((actual, index) => actual === 0 && predictedValues[index] === 1).length;
    const trueNegatives = actualValues.filter((actual, index) => actual === 0 && predictedValues[index] === 0).length;
    const falseNegatives = actualValues.filter((actual, index) => actual === 1 && predictedValues[index] === 0).length;

    const accuracy = (truePositives + trueNegatives) / (truePositives + falsePositives + trueNegatives + falseNegatives);
    const precision = truePositives / (truePositives + falsePositives);
    const recall = truePositives / (truePositives + falseNegatives);
    const f1Score = (2 * precision * recall) / (precision + recall);

    setResults({
      accuracy,
      precision,
      recall,
      f1Score,
    });
  };

  return (
    <Container maxWidth="lg" sx={{ bgcolor: '#f5f5f5', minHeight: '90vh', paddingTop: '2rem', paddingBottom: '2rem' }}>
      <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '1rem' }}>
        ML Model Performance Evaluation Calculator
      </Typography>
      <hr />
      <div>
        <TextField
          label="Actual Values (0s and 1s, comma-separated)"
          variant="outlined"
          fullWidth
          onChange={(e) => setActualValues(e.target.value.split(',').map((value) => Number(value)))}
          placeholder="Enter actual values..."
        />
        <TextField
          label="Predicted Values (0s and 1s, comma-separated)"
          variant="outlined"
          fullWidth
          onChange={(e) => setPredictedValues(e.target.value.split(',').map((value) => Number(value)))}
          placeholder="Enter predicted values..."
        />
        <Button variant="contained" onClick={handleCalculateMetrics} disabled={!actualValues.length || !predictedValues.length}>
          Calculate Metrics
        </Button>
      </div>
      <Card sx={{ marginTop: '2rem' }}>
        <CardContent>
          <Typography variant="h6">Results:</Typography>
          <TableContainer component={Paper} elevation={3} sx={{ width: 'auto', background: '#f0f0f0' }}>
            <Table size="small">
              <TableBody>
                <TableRow>
                  <TableCell>Metric</TableCell>
                  <TableCell>Value</TableCell>
                </TableRow>
                {results && (
                  <>
                    <TableRow>
                      <TableCell>Accuracy</TableCell>
                      <TableCell>{results.accuracy.toFixed(2)}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Precision</TableCell>
                      <TableCell>{results.precision.toFixed(2)}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Recall</TableCell>
                      <TableCell>{results.recall.toFixed(2)}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>F1 Score</TableCell>
                      <TableCell>{results.f1Score.toFixed(2)}</TableCell>
                    </TableRow>
                  </>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Container>
  );
}

export default MainMLModelPerformanceEvaluationCalculator;

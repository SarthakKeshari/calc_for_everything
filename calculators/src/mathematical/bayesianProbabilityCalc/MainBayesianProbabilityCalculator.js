import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Snackbar,
} from '@mui/material';

function MainBayesianProbabilityCalculator() {
  const [priorProbability, setPriorProbability] = useState('');
  const [likelihood, setLikelihood] = useState('');
  const [evidence, setEvidence] = useState('');
  const [posteriorProbability, setPosteriorProbability] = useState('');
  const [errorSnackbar, setErrorSnackbar] = useState(false);

  const handleCloseErrorSnackbar = () => {
    setErrorSnackbar(false);
  };

  const calculateProbability = () => {
    const prior = parseFloat(priorProbability);
    const likelihoodValue = parseFloat(likelihood);
    const evidenceValue = parseFloat(evidence);

    if (isNaN(prior) || isNaN(likelihoodValue) || isNaN(evidenceValue) || 
        prior < 0 || prior > 1 || likelihoodValue < 0 || likelihoodValue > 1 || 
        evidenceValue < 0 || evidenceValue > 1) {
      setErrorSnackbar(true);
      setPosteriorProbability('');
      return;
    }

    const posterior =
      (likelihoodValue * prior) / evidenceValue;

    setPosteriorProbability(posterior.toFixed(4));
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        backgroundColor: '#f5f5f5',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper elevation={3} sx={{ padding: 4, textAlign: 'center', maxWidth: '80%', width: 400 }}>
        <Typography variant="h5" gutterBottom>
          Bayesian Probability Calculator
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Prior Probability (0-1)"
              variant="outlined"
              fullWidth
              type="number"
              inputProps={{ min: 0, max: 1, step: 0.01 }}
              value={priorProbability}
              onChange={(e) => setPriorProbability(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Likelihood (0-1)"
              variant="outlined"
              fullWidth
              type="number"
              inputProps={{ min: 0, max: 1, step: 0.01 }}
              value={likelihood}
              onChange={(e) => setLikelihood(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Evidence (0-1)"
              variant="outlined"
              fullWidth
              type="number"
              inputProps={{ min: 0, max: 1, step: 0.01 }}
              value={evidence}
              onChange={(e) => setEvidence(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={calculateProbability}
            >
              Calculate
            </Button>
          </Grid>
          {posteriorProbability && (
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Posterior Probability: {posteriorProbability}
              </Typography>
            </Grid>
          )}
        </Grid>
      </Paper>
      <Snackbar
        open={errorSnackbar}
        autoHideDuration={4000}
        onClose={handleCloseErrorSnackbar}
        message="Invalid input. Please enter values between 0 and 1."
      />
    </Container>
  );
}

export default MainBayesianProbabilityCalculator;

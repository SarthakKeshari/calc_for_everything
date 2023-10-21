import React, { useState } from 'react';
import {
  Button,
  Container,
  TextField,
  Typography,
} from '@mui/material';

const TransmissionDelayCalculator = () => {
  const [messageSize, setMessageSize] = useState('');
  const [senderTransmissionRate, setSenderTransmissionRate] = useState('');
  const [receiverTransmissionRate, setReceiverTransmissionRate] = useState('');
  const [transmissionDelay, setTransmissionDelay] = useState('');

  const calculateTransmissionDelay = () => {
    if (messageSize && senderTransmissionRate && receiverTransmissionRate) {
      const sizeInBits = parseFloat(messageSize) * 8; // Assuming messageSize is in bytes
      const senderRateInMbps = parseFloat(senderTransmissionRate);
      const receiverRateInMbps = parseFloat(receiverTransmissionRate);

      const totalRate = senderRateInMbps + receiverRateInMbps;
      const delayInSeconds = sizeInBits / (totalRate * 1e6);
      
      setTransmissionDelay(delayInSeconds);
    } else {
      setTransmissionDelay('Please enter valid values for all fields.');
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Transmission Delay Calculator
      </Typography>
      <TextField
        label="Message Size (in bytes)"
        type="number"
        fullWidth
        value={messageSize}
        onChange={(e) => setMessageSize(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Sender Transmission Rate (in Mbps)"
        type="number"
        fullWidth
        value={senderTransmissionRate}
        onChange={(e) => setSenderTransmissionRate(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Receiver Transmission Rate (in Mbps)"
        type="number"
        fullWidth
        value={receiverTransmissionRate}
        onChange={(e) => setReceiverTransmissionRate(e.target.value)}
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={calculateTransmissionDelay}
        style={{ marginTop: '16px' }}
      >
        Calculate Transmission Delay
      </Button>
      <Typography variant="h6" style={{ marginTop: '16px' }}>
        Transmission Delay: {transmissionDelay} seconds
      </Typography>
    </Container>
  );
};

export default TransmissionDelayCalculator;

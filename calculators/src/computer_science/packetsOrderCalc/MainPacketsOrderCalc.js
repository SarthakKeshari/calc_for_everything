import { Container, Typography, Card } from "@mui/material";
import React, { useState } from "react";

function PropagationDelayCalculator() {
  const [formData, setFormData] = useState([]);
  const [n, setN] = useState(0);

  const handleNChange = (event) => {
    const newN = parseInt(event.target.value, 10) || 0;
    setN(newN);
    const initialData = Array.from({ length: newN }, (_, index) => ({
      datagram: (index + 1).toString(),
      pathLength: 0,
      sumOfVisitedSwitchDelay: 0,
    }));
    setFormData(initialData);
  };

  const handleInputChange = (event, rowIndex, column) => {
    const updatedFormData = [...formData];
    if (column === "pathLength" || column === "sumOfVisitedSwitchDelay") {
      updatedFormData[rowIndex][column] = parseInt(event.target.value, 10) || 0;
    }
    setFormData(updatedFormData);
  };

  const calculateDelay = (pathLength, sumOfVisitedSwitchDelay) => {
    return (pathLength / 2e8)*1000000 + sumOfVisitedSwitchDelay;
  };

  const totalDelay = formData.reduce((acc, row) => acc + calculateDelay(row.pathLength, row.sumOfVisitedSwitchDelay), 0);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Log the entered data
    console.log(formData);
  };

  const sortedData = [...formData].sort((a, b) => parseInt(a.datagram, 10) - parseInt(b.datagram, 10));

  return (
    <Container maxWidth="lg" sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: "10" }}>
      <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
        Packets Order Calculator
      </Typography>
      <hr />
      <br />
      <div>
        <form onSubmit={handleFormSubmit}>
          <label>
            Enter the number of rows (n):
            <input type="number" value={n} onChange={handleNChange} />
          </label>
          <table>
            <thead>
              <tr>
                <th>Datagram serial</th>
                <th>Path Length (km)</th>
                <th>Sum of Visited Switch Delay(ms)</th>
              </tr>
            </thead>
            <tbody>
              {sortedData.map((row, index) => (
                <tr key={index}>
                  <td>
                    <input type="number" value={row.datagram} readOnly />
                  </td>
                  <td>
                    <input type="number" value={row.pathLength} onChange={(e) => handleInputChange(e, index, "pathLength")} />
                  </td>
                  <td>
                    <input type="number" value={row.sumOfVisitedSwitchDelay} onChange={(e) => handleInputChange(e, index, "sumOfVisitedSwitchDelay")} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button type="submit">Submit</button>
        </form>
      </div>

      <Card sx={{ marginTop: 2, padding: 2 }}>
        <Typography variant="h6">Delay of Datagram</Typography>
        <ul>
          {sortedData.map((row, index) => (
            <li key={index}>
              Datagram {row.datagram}: {calculateDelay(row.pathLength, row.sumOfVisitedSwitchDelay)} milliseconds
            </li>
          ))}
        </ul>
        <Typography variant="h6">Total Delay</Typography>
        <p>{totalDelay} milliseconds</p>
      </Card>
    </Container>
  );
}

export default PropagationDelayCalculator;

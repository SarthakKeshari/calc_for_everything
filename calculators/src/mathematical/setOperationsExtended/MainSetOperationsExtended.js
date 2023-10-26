import React from 'react';
import { Container, Typography, Grid, Button, Stack } from '@mui/material';
import { VennDiagram } from 'react-venn-diagram';

function MainSetOperationsExtended() {
  const [sets, setSets] = React.useState([]);
  const [union, setUnion] = React.useState([]);
  const [intersection, setIntersection] = React.useState([]);
  const [complement, setComplement] = React.useState([]);
  const [relativeComplement, setRelativeComplement] = React.useState([]);

  const handleAddSet = () => {
    setSets([...sets, { name: '', elements: [] }]);
  };

  const handleRemoveSet = (index) => {
    setSets(sets.filter((set, i) => i !== index));
  };

  const handleSetChange = (index, event) => {
    const { name, value } = event.target;
    setSets(sets.map((set, i) => {
      if (i === index) {
        if (name === 'name') {
          set.name = value;
        } else if (name === 'element') {
          set.elements.push(value);
        }
      }
      return set;
    }));
  };

  const calculateSetOperations = () => {
    // Calculate the union of the sets.
    const union = sets.reduce((acc, set) => {
      return acc.concat(set.elements);
    }, []);
    setUnion([...new Set(union)]);

    // Calculate the intersection of the sets.
    const intersection = sets.reduce((acc, set) => {
      return acc.filter(element => set.elements.includes(element));
    }, sets[0].elements);
    setIntersection([...new Set(intersection)]);

    // Calculate the complement of the first set.
    const complement = sets[0].elements.filter(element => !union.includes(element));
    setComplement(complement);

    // Calculate the relative complement of the second set with respect to the first set.
    const relativeComplement = sets[1].elements.filter(element => !intersection.includes(element));
    setRelativeComplement(relativeComplement);
  };

  return (
    <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: 10 }}>
      <Typography pt={1} variant='h5' sx={{ textAlign: 'center' }}>Set Operations Extended Calculator</Typography>
      <hr />
      <br />

      {/* Add set form */}
      <form onSubmit={(event) => event.preventDefault()}>
        <Button variant="contained" onClick={handleAddSet}>Add Set</Button>
        <br />
        {sets.map((set, index) => (
          <Stack key={index} spacing={2}>
            <input type="text" placeholder="Set Name" value={set.name} onChange={(event) => handleSetChange(index, event)} />
            <input type="text" placeholder="Add Element" value={set.element} onChange={(event) => handleSetChange(index, event)} />
            <Button variant="contained" onClick={handleRemoveSet(index)}>Remove Set</Button>
          </Stack>
        ))}
      </form>

      {/* Calculate button */}
      <br />
      <Button variant="contained" onClick={calculateSetOperations}>Calculate</Button>

      {/* Venn diagram */}
      <br />
      <VennDiagram
        sets={sets}
        union={union}
        intersection={intersection}
        complement={complement}
        relativeComplement={relativeComplement}
      />
    </Container>
  );
}

export default MainSetOperationsExtended;

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 500,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 3,
};

{/* For reference look into the following file - calc_for_everything\calculators\src\mathematical\simple_interest\InfoSI.js */}
// Change the name of the function as the file name
export default function InfoQuadraticEquationIntersection() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <span style={{cursor: 'pointer'}}>
      <InfoOutlinedIcon color='primary' onClick={handleOpen}/>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* For reference look into the following file - calc_for_everything\calculators\src\mathematical\simple_interest\InfoSI.js */}
        <Box sx={style} sm={1}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {/* Calculator Heading */}
            Quadratic Equation Intersection Calculator

          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {/* Definition */}
            The quadratic equation intersection refers to the points where a quadratic function crosses or touches the x-axis, indicating its real roots or solutions.
            
            <br/>
            {/* Replace the below calculator name with yuor calculator name */}
            The formula for calculating quadratic equation intersection is:

            <br/>
            <code style={{display: 'flex', justifyContent: 'center'}}>
              <h3>
                {/* Add calc formula */}
                The formula for finding the intersection (real roots) of a quadratic equation, ax^2 + bx + c = 0, is:

x = (-b ± √(b^2 - 4ac)) / (2a)
                
              </h3>
            </code>
            <code style={{display: 'flex', justifyContent: 'center'}}>
              <h5>
                {/* Define meaning that each variable convey */}
                In the quadratic equation ax^2 + bx + c = 0:

- "a" is the coefficient of the quadratic term.
- "b" is the coefficient of the linear term.
- "c" is the constant term.
- "x" represents the variable you are solving for, and it represents the values at which the quadratic equation equals zero (the solutions or roots).

              </h5>
            </code>
          </Typography>
        </Box>
      </Modal>
    </span>
  );
}
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
export default function InfoPythagorasTheorem() {

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
            Pythagoras Theorem

          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {/* Definition */}
            
             Mathematically, if a and b are the lengths of the legs of the right-angled triangle,
             and c is the length of the hypotenuse, then the Pythagorean theorem is represented by the equation:

             
            <br/>
            <code style={{display: 'flex', justifyContent: 'center'}}>
              <h3>
                {/* Add calc formula */}

                c<sup>2</sup>=a<sup>2</sup>+b<sup>2</sup>
            
              </h3>
            </code>
            <code style={{display: 'flex', justifyContent: 'center'}}>
              <h5>
                {/* Define meaning that each variable convey */}

                a, b and c are the sides of a right angled triangle where c is hypotenuse.

              </h5>
            </code>
          </Typography>
        </Box>
      </Modal>
    </span>
  );
}
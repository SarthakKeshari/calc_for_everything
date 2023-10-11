import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
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
export default function InfoSI() {

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
            Simple Interest
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {/* Definition */}
            Simple interest is a method of calculating the interest on a principal amount of money over a specific period of time. 
            <br/>
            {/* Replace the below calculator name with yuor calculator name */}
            The formula for calculating simple interest is:
            <br/>
            <code style={{display: 'flex', justifyContent: 'center'}}>
              <h3>
                {/* Add calc formula */}
                I =(P x R x T)/100
              </h3>
            </code>
            <code style={{display: 'flex', justifyContent: 'center'}}>
              <h5>
                {/* Define meaning that each variable convey */}
                Where: <br/>
                  - I represents the interest earned or paid. <br/>
                  - P is the principal amount (the initial sum of money). <br/>
                  - R is the interest rate (expressed as a decimal) per annum. <br/>
                  - T is the time (in years) for which the interest is calculated. <br/>
              </h5>
            </code>
          </Typography>
        </Box>
      </Modal>
    </span>
  );
}
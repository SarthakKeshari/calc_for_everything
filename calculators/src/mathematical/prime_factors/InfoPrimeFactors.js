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
export default function InfoPrimeFactors() {

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

          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {/* Definition */}
            
            <br/>
            {/* Replace the below calculator name with yuor calculator name */}
            Calculator to find Prime Fators
            <br/>
            <code style={{display: 'flex', justifyContent: 'center'}}>
              <h3>
                {/* Add calc formula */}
                Prime factorization is the process of breaking down a number into its prime factors, which are the prime numbers that can divide the original number evenly. 
                <br></br>
                1.Start with the number you want to find the prime factors for.<br/>

                2.Begin by dividing the number by the smallest prime number, which is 2. Continue dividing by 2 until you can no longer divide evenly.<br/>

                3. Move on to the next prime number, which is 3, and continue dividing by 3 until you can no longer divide evenly.<br/>

                4.Continue this process with the subsequent prime numbers (5, 7, 11, 13, 17, 19, 23, and so on) until the number is completely factored into prime numbers.<br/>

                5.Keep track of all the prime factors you used.<br/>

                The prime factors you've found are the prime factorization of the original number.<br/>
<br/>
              </h3>
            </code>
            <code style={{display: 'flex', justifyContent: 'center'}}>
              <h5>
                {/* Define meaning that each variable convey */}

              </h5>
            </code>
          </Typography>
        </Box>
      </Modal>
    </span>
  );
}
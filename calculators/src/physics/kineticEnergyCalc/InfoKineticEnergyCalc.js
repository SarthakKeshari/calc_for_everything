import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 3,
};

export default function InfoKineticEnergyCalc() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <span style={{ cursor: "pointer" }}>
      <InfoOutlinedIcon color="primary" onClick={handleOpen} />
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style} sm={1}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {/* Calculator Heading */}
            Kinetic Energy Calculator
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {/* Definition */}
            Kinetic Energy is the energy of motion, observable as the movement of an object or subatomic particle.
            <br />
            <br />
            The formula for calculating Kinetic Energy is:
            <br />
            <code style={{ display: "flex", justifyContent: "center" }}>
              <h3>
                {/* Add calc formula */}
                Kinetic Energy (K.E.) = 1/2 * (m) * (v)<sup>2</sup>
              </h3>
            </code>
            <code style={{ display: "flex", justifyContent: "center" }}>
              <h5>
                {/* Define meaning that each variable convey */}
                Where: <br />- K.E. represents the Kinetic Energy. <br />
                - m is the mass measured in kilograms (kg). <br />- v is the velocity measured in meter per second (m/s). <br />
              </h5>
            </code>
          </Typography>
        </Box>
      </Modal>
    </span>
  );
}

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

export default function InfoTimeDilationCalc() {
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
            Time Dilation Calculator
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {/* Definition */}
            Time dilation is the difference in elapsed time as measured by two clocks, either due to a relative velocity between them (special relativity), or a difference in gravitational potential between their locations (general relativity).
            <br />
            <br />
            The formula for calculating Time Dilation is:
            <br />
            <code style={{ display: "flex", justifyContent: "center" }}>
              <h3>
                {/* Add calc formula */}
                Relative Time = t / sqrt(1-(v)<sup>2</sup>/(c)<sup>2</sup>)
              </h3>
            </code>
            <code style={{ display: "flex", justifyContent: "center" }}>
              <h5>
                {/* Define meaning that each variable convey */}
                Where: <br />- t represents the Time Interval. <br />
                - v is the Observer Velocity measured in m/s. <br />- c is the velocity of light. <br />
              </h5>
            </code>
          </Typography>
        </Box>
      </Modal>
    </span>
  );
}

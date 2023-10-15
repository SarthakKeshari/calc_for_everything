import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

function MainDataCleaner() {
  const [file, setFile] = useState(null);
  const [fileData, setFileData] = useState([]);
  const [fileHeaderData, setFileHeaderData] = useState([]);
  const [checkbox1, setcheckbox1] = useState(false);
  const [checkbox2, setcheckbox2] = useState(false);
  const [checkbox3, setcheckbox3] = useState(false);
  const [checkbox4, setcheckbox4] = useState(false);

  //this function handle unreadable values
  const isUnreadable = (value) => {
    return value === "" || value === "nan";
  };

  // handle remove unreadable columns
  const handleRemoveUnreadableColumns = (data) => {
    const numRows = data.length;
    const numCols = data[0].length;

    let delCol = [];
    for (let col = 0; col < numCols; col++) {
      let validCounter = 0;
      let invalidCounter = 0;
      for (let row = 0; row < numRows; row++) {
        console.log(`Value: ${data[row][col]}`);
        if (isUnreadable(data[row][col].trim().toLowerCase())) {
          invalidCounter++;
        } else {
          validCounter++;
        }
      }
      console.log(invalidCounter);
      console.log(validCounter);
      if (invalidCounter >= validCounter) {
        delCol.push(col);
      }
    }
    console.log(delCol);
    let newData = [];
    for (let row = 0; row < numRows; row++) {
      let newRow = [];
      for (let col = 0; col < numCols; col++) {
        if (!delCol.includes(col)) {
          newRow.push(data[row][col]);
        }
      }
      newData.push(newRow);
    }
    data = newData;
    console.log(data);
  };

  // handle remove unreadable rows
  const handleRemoveUnreadableRows = (data) => {
    const rowLen = data[0].length;
    const filteredData = data.filter((row) => {
      const rowData = row.filter(
        (cell) => !isUnreadable(cell.trim().toLowerCase())
      );
      if (rowData.length === rowLen) {
        return row;
      }
    });
    console.log(data);
    console.log(filteredData);
  };

  //this function handle file change
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  //this function handle apply filters
  const handleApplyFilters = () => {
    let data = fileData;
    data = data.split("\r\n"); //it comes after end of every row
    let tempData = [];
    data.forEach((element) => {
      tempData.push(element.split(","));
    });
    data = tempData;
    setFileHeaderData(data[0]);
    data = data.slice(1, data.length - 1);
    console.log(data);
    //  Data types filtering
    if (checkbox1) {
    }
    //  Remove rows containing unreadable values.
    if (checkbox2) {
      handleRemoveUnreadableRows(data);
    }
    // Replace unreadable values(eg Nan ,0)
    if (checkbox3) {
    }
    // Remove columns having ample amount of unreadable values
    if (checkbox4) {
      handleRemoveUnreadableColumns(data);
    }
  };

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result;
        setFileData(content);
      };
      reader.readAsText(file);
      // console.log(reader);
    }
  }, [file]);

  // useEffect(() => {
  //   // console.log(fileData);
  // }, [fileData]);

  return (
    <Container
      maxWidth="lg"
      sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: "10" }}
    >
      <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
        Data Cleaner
      </Typography>
      <hr />
      <br />
      <Button
        component="label"
        variant="contained"
        startIcon={<CloudUploadIcon />}
      >
        Upload file
        <VisuallyHiddenInput type="file" onChange={handleFileChange} />
      </Button>
      {fileData}
      <div>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox onChange={() => setcheckbox1(!checkbox1)} />}
            label=" Data types filtering"
          />
          <FormControlLabel
            control={<Checkbox onChange={() => setcheckbox2(!checkbox2)} />}
            label=" Remove rows containing unreadable values."
          />
          <FormControlLabel
            control={<Checkbox onChange={() => setcheckbox3(!checkbox3)} />}
            label=" Replace unreadable values(eg Nan ,0)"
          />
          <FormControlLabel
            control={<Checkbox onChange={() => setcheckbox4(!checkbox4)} />}
            label=" Remove columns having ample amount of unreadable values "
          />
        </FormGroup>
        <Button variant="contained" onClick={handleApplyFilters}>
          Apply Filters
        </Button>
      </div>
    </Container>
  );
}
export default MainDataCleaner;

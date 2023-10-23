import React, { useState } from "react";
import { TextField, Button, Container, Typography, TextareaAutosize } from "@mui/material";
import FileCopyIcon from '@mui/icons-material/FileCopy';
import CachedIcon from '@mui/icons-material/Cached';
import IconButton from '@mui/material/IconButton';

function Base64Converter() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [isEncoding, setIsEncoding] = useState(true);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleToggle = () => {
    setIsEncoding(!isEncoding);
    setInputText("");
    setOutputText("");
  };

  const handleConvert = () => {
    if (isEncoding) {
      const encodedText = btoa(inputText);
      setOutputText(encodedText);
    } else {
      try {
        const decodedText = atob(inputText);
        setOutputText(decodedText);
      } catch (error) {
        setOutputText("Invalid Base64 input");
      }
    }
  };

  const handleCopyToClipboard = () => {
    if (outputText) {
      navigator.clipboard.writeText(outputText)
        .then(() => {
          alert("Text copied to clipboard!");
        })
        .catch(err => {
          console.error("Copy to clipboard failed: ", err);
        });
    }
  };


  return (
    <Container maxWidth="sm">
      <Typography variant="h4" margin={'20px 0'} gutterBottom>
        Base64 Encoder/Decoder
      </Typography>
      <TextField
        fullWidth
        label={isEncoding ? "Text to Encode" : "Base64 to Decode"}
        multiline
        rows={4}
        variant="outlined"
        value={inputText}
        onChange={handleInputChange}
        style={{ background: "white" }}
      />
    <div className="btnContainer" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap:'1rem'}}>
    <Button
        variant="contained"
        onClick={handleConvert}
        color="primary"
        style={{ margin: "10px 0" }}
      >
        {isEncoding ? "Encode" : "Decode"}
      </Button>
      <Button 
      variant="outlined"
      onClick={handleToggle} 
      color="secondary"
      startIcon={<CachedIcon />}
      >
        {isEncoding ? "Switch to Decode" : "Switch to Encode"}
      </Button>
      {outputText && (
        <IconButton
          onClick={handleCopyToClipboard}
          variant="outlined">
          <FileCopyIcon />
        </IconButton>
      )}
        </div>     
      <TextareaAutosize
        label={isEncoding ? "Base64 Encoded Text" : "Decoded Text"}
        multiline
        rows={14}
        variant="outlined"
        value={outputText}
        style={{ margin: "20px 0", width:"99%", height:"100%", background: "transparent"}}
        onClick={(e) => e.target.select()}
      />
    </Container>
  );
}

export default Base64Converter;

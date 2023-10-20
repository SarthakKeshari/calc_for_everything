import React, { useState, useRef } from "react";
import Tesseract from "tesseract.js";
import { Buffer } from "buffer";
import { Button, Container, Grid, LinearProgress, TextareaAutosize, TextField } from "@mui/material";

export default function ImageTextReader() {
  const [language, setLanguage] = useState("eng");
  const [percentage, setPercentage] = useState(0);
  const [progressBar, setProgressBar] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [holData, setHolData] = useState();
  const { createWorker } = Tesseract;

  //----------Tesseract--------------

  const onFileChange = (e) => {
    let file = e.target.files[0];
    console.log("file :- ", file);
    if (file) {
      const reader = new FileReader();
      reader.onload = _handleReaderLoaded;
      reader.readAsBinaryString(file);
    }
  };
  const handleBackToForm = () => {
    setIsLoading(false);
    setText("");
    setImage("");
    setHolData(null);
  };

  const _handleReaderLoaded = (readerEvt) => {
    let binaryString = readerEvt.target.result;
    setImage(btoa(binaryString));
  };

  const handleClick = async () => {
    setIsLoading(true);
    window.Buffer = window.Buffer || require("buffer").Buffer;
    let base64 = image;
    let imageBuffer = Buffer.from(base64, "base64");

    const worker = createWorker({
      logger: (m) => {
        if (m.status === "recognizing text") {
          setProgressBar(m.progress);
          setPercentage(parseInt(m.progress * 100));
        }
      },
    });

    await worker.load();
    await worker.loadLanguage(language);
    await worker.initialize(language);
    const data = await worker.recognize(imageBuffer);
    console.log(data);
    setHolData(data);
    setText(data.data.text);
    setIsLoading(false);
    console.log(data.data.text);
    await worker.terminate();
  };

  return (
    <Container>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={5}>
          {!isLoading && !text && (
            <>
              <TextField
                type="file"
                onChange={(e) => onFileChange(e)}
                fullWidth
                variant="outlined"
                margin="normal"
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleClick}
              >
                Convert
              </Button>
            </>
          )}

          {isLoading && (
            <>
              <p className="text-center mt-5">
                Converting:{" "}
                <LinearProgress
                  variant="determinate"
                  value={progressBar * 100}
                />{" "}
                {Math.round(percentage)}%
              </p>
            </>
          )}

          {!isLoading && text && (
            <>
               <TextareaAutosize
                value={text}
                onChange={(e) => setText(e.target.value)}
                style={{ width: "100%" }}
              />
                            <br/>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleBackToForm}
                >
              Upload Another File
            </Button>
            </>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}
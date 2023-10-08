import React, { useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  FormLabel,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

function MainCodeEditorWebDev() {
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [jsCode, setJsCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isResultGenerated, setIsResultGenerated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const iframe = document.createElement("iframe");
    iframe.id = "codeIframe";
    iframe.title = "output";
    iframe.style.width = "100%";
    iframe.style.height = "80vh";
    iframe.style.display = "hidden";

    const outputDiv = document.getElementById("outputDiv");

    outputDiv.appendChild(iframe);

    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

    const fullHtml = `
    <html>
    <head>
      <style>${cssCode}</style>
    </head>
    <body>
      ${htmlCode}
      <script>${jsCode}</script>
    </body>
    </html>
  `;

    iframeDoc.open();
    iframeDoc.write(fullHtml);
    iframeDoc.close();

    setIsResultGenerated(true);
    // setIsLoading(false);
  };

  let inputResponsiveWidth = {
    xs: "350px",
    sm: "500px",
    md: "500px",
    lg: "500px",
    xl: "500px",
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: "10" }}
    >
      <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
        {!isResultGenerated ? "Code Editor for Web Dev" : "Result"}
      </Typography>
      <hr />
      <br />
      {!isResultGenerated ? (
        <form onSubmit={handleSubmit}>
          <Stack
            spacing={1}
            width={"100%"}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <FormLabel
                type="primary"
                sx={{ fontStyle: "normal", color: "#000" }}
              >
                Enter HTML Code
              </FormLabel>
              <br />
              <TextField
                placeholder="<div>
                        <h1>Hello, World!</h1>
                        <p>This is a sample HTML content.</p>
                </div>"
                variant="outlined"
                sx={{
                  width: inputResponsiveWidth,
                  marginTop: 1.5,
                }}
                InputLabelProps={{ style: { fontStyle: "normal" } }}
                value={htmlCode}
                onChange={(e) => setHtmlCode(e.target.value)}
                type="text"
                multiline
                maxRows={6}
                minRows={5}
              />
            </Box>
            <Box>
              <FormLabel
                type="primary"
                sx={{ fontStyle: "normal", color: "#000" }}
              >
                Enter CSS Code
              </FormLabel>
              <br />
              <TextField
                // label="Enter Your Annual Interest Rate"
                placeholder="h1 {
                    color: blue;
                    }

                    p {
                    font-size: 18px;
                    }"
                variant="outlined"
                sx={{ width: inputResponsiveWidth, marginTop: 1.5 }}
                InputLabelProps={{ style: { fontStyle: "normal" } }}
                value={cssCode}
                onChange={(e) => setCssCode(e.target.value)}
                type="text"
                multiline
                maxRows={6}
                minRows={6}
              />
            </Box>
            <Box>
              <FormLabel
                type="primary"
                sx={{ fontStyle: "normal", color: "#000" }}
              >
                Enter Javascript Code
              </FormLabel>
              <br />
              <TextField
                placeholder={`document.querySelector("h1").addEventListener("click", function() {
  alert("You clicked the heading!");
});`}
                variant="outlined"
                sx={{ width: inputResponsiveWidth, marginTop: 1.5 }}
                InputLabelProps={{ style: { fontStyle: "normal" } }}
                value={jsCode}
                onChange={(e) => setJsCode(e.target.value)}
                type="text"
                multiline
                maxRows={5}
                minRows={6}
              />
            </Box>
            <Box>
              <Button
                variant="contained"
                sx={{
                  "&:hover": { backgroundColor: "#EC6F66" },
                  width: inputResponsiveWidth,
                  marginTop: "20px",
                  marginBottom: "30px",
                }}
                type="submit"
              >
                View Output
              </Button>
            </Box>
          </Stack>
        </form>
      ) : null}
      <>
        <Paper
          elevation={4}
          sx={{ display: !isResultGenerated ? "none" : "block" }}
        >
          <div
            id="outputDiv"
            style={{
              width: "100%",
              height: "80vh",
            }}
          ></div>
        </Paper>
        <Box
          sx={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            display: !isResultGenerated ? "none" : "flex",
          }}
        >
          <Button
            variant="contained"
            sx={{
              "&:hover": { backgroundColor: "#EC6F66" },
              width: "300px",
              marginTop: "10px",
              marginBottom: "30px",
            }}
            onClick={() => window.location.reload()}
          >
            Generate Again
          </Button>
        </Box>
      </>
    </Container>
  );
}

export default MainCodeEditorWebDev;

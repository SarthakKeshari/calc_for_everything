import React, { useEffect, useState } from "react";
import { Container, TextField, Typography } from "@mui/material";

function MainWordCounter() {
    const [ txt, setText] = useState("");
    const [result, setResult] = useState(0);

    const handleInput = (e) => {
        setText(e.target.value);
    }
    useEffect(() => {
        let words = txt.trim().split(" ").filter((word) => word.length!==0);
        if(words[0] === "")
            setResult(0)
        else
            setResult(words.length)
    }, [txt])

    return (
    <Container
      maxWidth="lg"
      sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: "10" }}
    >
      <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
        Word Counter
      </Typography>
      <hr />
      <br />
      {/* Write your code here */}

      <TextField
          id="filled-multiline-static"
          label="Enter Text"
          multiline
          fullWidth
          variant="filled"
          value={txt}
          onChange={handleInput}
        />
        <br/>
        <br/>
        <div>
            <i>
                <b>Result</b> : 
            </i>
            The number words present in the given string is {result}
        </div>

      {/* End your code here */}
    </Container>
  );
}

export default MainWordCounter;

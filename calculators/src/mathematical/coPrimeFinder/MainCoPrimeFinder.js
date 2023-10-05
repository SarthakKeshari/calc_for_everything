import React, { useEffect, useState } from "react";
import { Container, Typography, Input } from "@mui/material";

function MainCoPrimeFinder() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [res, setRes] = useState("");

  function __gcd(a, b) {
    if (b == 0) {
      return a;
    }
    return __gcd(b, a % b);
  }

  function checkCoprime() {
    if (x > 0 && y > 0) {
      if (__gcd(x, y) === 1) setRes("Co-Prime");
      else setRes("Not Co-prime");
    }
  }

  useEffect(() => {
    checkCoprime();
  }, [x, y]);

  return (
    <Container
      maxWidth="lg"
      sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: "10" }}
    >
      <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
        Co-Prime Finder
      </Typography>
      <hr />
      <br />

      <Container sx={{ display: "flex", flexDirection: "column" }}>
        <Typography pt={1} variant="h6" mt={2}>
          First Number
        </Typography>
        <Input
          color="primary"
          disabled={false}
          placeholder="Enter First Number"
          size="lg"
          variant="outlined"
          type="number"
          onChange={(e) => {
            setX(e.target.value);
            setRes("");
          }}
          value={x}
        />
        <Typography pt={1} variant="h6" mt={2}>
          Second Number
        </Typography>
        <Input
          color="primary"
          disabled={false}
          placeholder="Enter Second Number"
          size="lg"
          variant="outlined"
          type="number"
          onChange={(e) => {
            setY(e.target.value);
            setRes("");
          }}
          value={y}
        />

        <br />

        <Typography pt={1} variant="h6" mt={2}>
          Result
        </Typography>
        <div>
          <Typography pt={1} variant="h6" fontStyle={{ color: "blue" }}>
            {res}
          </Typography>
        </div>
      </Container>
    </Container>
  );
}

export default MainCoPrimeFinder;

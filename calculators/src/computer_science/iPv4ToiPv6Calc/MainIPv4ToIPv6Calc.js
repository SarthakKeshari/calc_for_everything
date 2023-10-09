import React, { useState } from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";

function MainIPv4ToIPv6Calc() {
  const [ipv4Address, setIpv4Address] = useState("");
  const [ipv6Address, setIpv6Address] = useState("");
  const [isValid, setIsValid] = useState(true);

  const convertMainIPv4ToIPv6Calc = () => {
    // IPv4 to IPv6 conversion logic
    const ipv4Parts = ipv4Address.split(".").map((part) => parseInt(part, 10));

    if (
      ipv4Parts.length === 4 &&
      ipv4Parts.every((part) => part >= 0 && part <= 255)
    ) {
      const ipv6 = `0000:0000:0000:0000:0000:ffff:${ipv4Parts[0]
        .toString(16)
        .padStart(2, "0")}${ipv4Parts[1]
        .toString(16)
        .padStart(2, "0")}:${ipv4Parts[2]
        .toString(16)
        .padStart(2, "0")}${ipv4Parts[3].toString(16).padStart(2, "0")}`;
      setIpv6Address(ipv6);
      setIsValid(true);
    } else {
      setIpv6Address("Invalid IPv4 Address");
      setIsValid(false);
    }
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: 2 }}
    >
      <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
        IPv4 to IPv6 Converter
      </Typography>
      <hr />
      <br />
      <TextField
        label="IPv4 Address"
        variant="outlined"
        fullWidth
        value={ipv4Address}
        onChange={(e) => setIpv4Address(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <Button
        variant="contained"
        onClick={convertMainIPv4ToIPv6Calc}
        sx={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
      >
        Convert
      </Button>
      <Box sx={{ textAlign: "center", marginTop: 2 }}>
        <Typography variant="h6">IPv6 Address:</Typography>
        <Box
          sx={{
            bgcolor: isValid ? "lightgreen" : "lightcoral",
            padding: 2,
            borderRadius: 4,
          }}
        >
          <Typography variant="body1" sx={{ fontSize: 20 }}>
            {ipv6Address}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default MainIPv4ToIPv6Calc;

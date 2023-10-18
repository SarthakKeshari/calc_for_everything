import React, { useState } from "react";
import { Container, Typography, TextField, Button, Paper } from "@mui/material";

function MainIPAddressCalc() {
  const [ipAddress, setIpAddress] = useState("");
  const [broadcastID, setBroadcastID] = useState("");
  const [networkAddress, setNetworkAddress] = useState("");
  const [addressClass, setAddressClass] = useState("");
  const [lastUsableHost, setLastUsableHost] = useState("");
  const [firstAddress, setFirstAddress] = useState("");
  const [subnetMask, setSubnetMask] = useState("");
  const [complementSubnetMask, setComplementSubnetMask] = useState("");
  const [uniqueID, setUniqueID] = useState("");
  const [broadcastAddress, setBroadcastAddress] = useState("");

  const calculateInfo = () => {
    // Function to calculate IP address info
    const ipParts = ipAddress.split(".").map(Number);
    if (ipParts.length === 4) {
      if (ipParts[0] >= 1 && ipParts[0] <= 126) {
        setAddressClass("A");
        setNetworkAddress(ipParts.slice(0, 1).join(".") + ".0.0.0");
        setFirstAddress(ipParts.slice(0, 1).join(".") + ".0.0.1");
        setSubnetMask("255.0.0.0");
        setComplementSubnetMask("0.255.255.255");
        setBroadcastID(ipParts.slice(0, 1).join(".") + ".255.255.255");
        setLastUsableHost(ipParts.slice(0, 1).join(".") + ".255.255.254");
        // Calculate the broadcast address for class A
        setBroadcastAddress(ipParts.slice(0, 1).join(".") + ".255.255.255");
      } else if (ipParts[0] >= 128 && ipParts[0] <= 191) {
        setAddressClass("B");
        setNetworkAddress(ipParts.slice(0, 2).join(".") + ".0.0.0");
        setFirstAddress(ipParts.slice(0, 2).join(".") + ".0.0.1");
        setSubnetMask("255.255.0.0");
        setComplementSubnetMask("0.0.255.255");
        setBroadcastID(ipParts.slice(0, 2).join(".") + ".255.255.255");
        setLastUsableHost(ipParts.slice(0, 2).join(".") + ".255.255.254");
        // Calculate the broadcast address for class B
        setBroadcastAddress(ipParts.slice(0, 2).join(".") + ".255.255.255");
      } else if (ipParts[0] >= 192 && ipParts[0] <= 223) {
        setAddressClass("C");
        setNetworkAddress(ipParts.slice(0, 3).join(".") + ".0.0");
        setFirstAddress(ipParts.slice(0, 3).join(".") + ".0.1");
        setSubnetMask("255.255.255.0");
        setComplementSubnetMask("0.0.0.255");
        setBroadcastID(ipParts.slice(0, 3).join(".") + ".255.255");
        setLastUsableHost(ipParts.slice(0, 3).join(".") + ".255.254");
        // Calculate the broadcast address for class C
        setBroadcastAddress(ipParts.slice(0, 3).join(".") + ".255.255");
      } else if (ipParts[0] >= 224 && ipParts[0] <= 239) {
        setAddressClass("D (Multicast)");
        // Set N/A for broadcast address for class D (Multicast)
        setBroadcastAddress("N/A");
      } else if (ipParts[0] >= 240 && ipParts[0] <= 255) {
        setAddressClass("E (Experimental)");
        // Set N/A for broadcast address for class E (Experimental)
        setBroadcastAddress("N/A");
      } else {
        setAddressClass("Invalid IP Address");
        // Set N/A for broadcast address for invalid IP address
        setBroadcastAddress("N/A");
      }

      // Calculate the unique host ID range
      if (addressClass !== "Invalid IP Address") {
        setUniqueID(
          `2 to ${Math.pow(2, 32 - getSubnetMaskLength(subnetMask)) - 2}`
        );
      } else {
        setUniqueID("N/A");
      }
    }
  };

  // Utility function to get subnet mask length (count of leading 1s)
  const getSubnetMaskLength = (mask) => {
    const maskParts = mask.split(".").map(Number);
    const binaryMask = maskParts
      .map((part) => part.toString(2).padStart(8, "0"))
      .join("");
    return binaryMask.indexOf("0");
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: "10" }}
    >
      <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
        <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
          IP Address Numerical Calculator
        </Typography>
        <hr />
        <br />
        <TextField
          label="Enter IP Address"
          variant="outlined"
          fullWidth
          value={ipAddress}
          onChange={(e) => setIpAddress(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={calculateInfo}
          style={{ marginTop: "10px" }}
        >
          Calculate
        </Button>
        <Typography variant="h6" style={{ marginTop: "20px" }}>
          Broadcast ID: {broadcastID}
        </Typography>
        <Typography variant="h6">Network Address: {networkAddress}</Typography>
        <Typography variant="h6">Class: {addressClass}</Typography>
        <Typography variant="h6">First Address: {firstAddress}</Typography>
        <Typography variant="h6">Subnet Mask: {subnetMask}</Typography>
        <Typography variant="h6">
          Complement Subnet Mask: {complementSubnetMask}
        </Typography>
        <Typography variant="h6">
          Last Usable Host Address: {lastUsableHost}
        </Typography>
        <Typography variant="h6">Unique ID (Host): {uniqueID}</Typography>
        <Typography variant="h6">
          Broadcast Address: {broadcastAddress}
        </Typography>
      </Paper>
    </Container>
  );
}

export default MainIPAddressCalc;

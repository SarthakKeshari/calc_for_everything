import React, { useState } from "react";
import {
  Container,
  TextField,
  Typography,
  FormLabel,
  Stack,
  Box,
  Button,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

function MainRDMaturityCalc() {
  const [amountDeposited, setAmountDeposited] = useState();
  const [InterestRate, setInterestRate] = useState();
  const [depositDate, setDepositDate] = useState();
  const [depositDuration, setDepositDuration] = useState();
  const [compoundingFreq, setCompoundingFreq] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isResultGenerated, setIsResultGenerated] = useState(false);
  const [resultSet, setResultSet] = useState(null);

  const calculateMaturityDetails = (
    installmentAmount,
    annualInterestRate,
    durationMonths,
    compoundingFrequency,
    depositDate = null
  ) => {
    let isDateProvided = true;
    let _compoundFreq = !compoundingFrequency ? 12 : compoundingFrequency;
    const monthlyInterestRate = annualInterestRate / 100 / _compoundFreq;

    if (!depositDate) {
      depositDate = new Date();
      isDateProvided = false;
    } else {
      depositDate = new Date(depositDate);
    }
    const maturityDate = new Date(depositDate);
    maturityDate.setMonth(maturityDate.getMonth() + durationMonths);

    let maturityAmount = 0;
    for (let i = 0; i < durationMonths; i++) {
      maturityAmount += installmentAmount;
      maturityAmount += maturityAmount * monthlyInterestRate;
    }
    const maturityInterest =
      maturityAmount - installmentAmount * durationMonths;

    return {
      maturityInterest,
      maturityAmount,
      maturityDate: isDateProvided ? maturityDate : null,
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "submitting the form with",
      amountDeposited,
      InterestRate,
      depositDate,
      depositDuration,
      compoundingFreq
    );

    setIsLoading(true);

    let result = calculateMaturityDetails(
      Math.abs(Number(amountDeposited)),
      Math.abs(Number(InterestRate)),
      Math.abs(Number(depositDuration)),
      Math.abs(Number(compoundingFreq)),
      depositDate
    );
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    if (!!result.maturityDate) {
      result["maturityDate"] = result?.maturityDate.toLocaleString(
        "en-US",
        options
      );
    }
    setResultSet(result);
    console.log("result", result);
    setIsResultGenerated(true);
    setIsLoading(false);
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
        RD Maturity Calculator
      </Typography>
      <hr />
      <br />
      {isLoading ? (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <CircularProgress />
        </Box>
      ) : !isResultGenerated ? (
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
                Amount Deposited
              </FormLabel>
              <br />
              <TextField
                label="Enter Your Deposited Amount"
                variant="outlined"
                sx={{
                  width: inputResponsiveWidth,
                  marginTop: 1.5,
                }}
                InputLabelProps={{ style: { fontStyle: "normal" } }}
                value={amountDeposited}
                onChange={(e) => setAmountDeposited(e.target.value)}
                type="number"
                required
              />
            </Box>
            <Box>
              <FormLabel
                type="primary"
                sx={{ fontStyle: "normal", color: "#000" }}
              >
                Interest Rate
              </FormLabel>
              <br />
              <TextField
                label="Enter Your Annual Interest Rate"
                variant="outlined"
                sx={{ width: inputResponsiveWidth, marginTop: 1.5 }}
                InputLabelProps={{ style: { fontStyle: "normal" } }}
                value={InterestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                type="number"
                required
              />
            </Box>
            <Box>
              <FormLabel
                type="primary"
                sx={{ fontStyle: "normal", color: "#000" }}
              >
                Date of Deposit (Optional)
              </FormLabel>
              <br />
              <TextField
                variant="outlined"
                sx={{ width: inputResponsiveWidth, marginTop: 1.5 }}
                InputLabelProps={{ style: { fontStyle: "normal" } }}
                value={depositDate}
                onChange={(e) => setDepositDate(e.target.value)}
                type="date"
              />
            </Box>
            <Box>
              <FormLabel
                type="primary"
                sx={{ fontStyle: "normal", color: "#000" }}
              >
                Duration of Deposit
              </FormLabel>
              <br />
              <TextField
                label="Enter Duration of Deposit (In months)"
                variant="outlined"
                sx={{ width: inputResponsiveWidth, marginTop: 1.5 }}
                InputLabelProps={{ style: { fontStyle: "normal" } }}
                value={depositDuration}
                onChange={(e) => setDepositDuration(e.target.value)}
                type="number"
                required
              />
            </Box>
            <Box>
              <FormLabel
                type="primary"
                sx={{ fontStyle: "normal", color: "#000" }}
              >
                Compounding Frequency (Optional)
              </FormLabel>
              <br />
              <TextField
                label="Enter Compounding Frequency (In months)"
                variant="outlined"
                sx={{
                  width: inputResponsiveWidth,
                  marginTop: 1.5,
                }}
                InputLabelProps={{ style: { fontStyle: "normal" } }}
                value={compoundingFreq}
                onChange={(e) => setCompoundingFreq(e.target.value)}
                type="number"
              />
            </Box>
            <Box>
              <Button
                variant="contained"
                sx={{
                  "&:hover": { backgroundColor: "#EC6F66" },
                  width: inputResponsiveWidth,
                  marginTop: "20px",
                }}
                type="submit"
              >
                Calculate
              </Button>
            </Box>
          </Stack>
        </form>
      ) : (
        <>
          <Typography sx={{ fontSize: 28, textAlign: "center" }}>
            Results
          </Typography>
          <hr />

          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              marginTop: 5,
            }}
          >
            <Typography
              sx={{
                fontSize: 25,
                textAlign: "left",
                marginTop: 5,
                marginBottom: 1,
              }}
            >
              Maturity Amount:
            </Typography>
            <Typography
              sx={{
                backgroundColor: "#FFCC66",
                fontSize: 20,
                padding: 0.5,
                borderRadius: 0.5,
              }}
            >
              {" "}
              {resultSet.maturityAmount.toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}
            </Typography>
            <Typography
              sx={{
                fontSize: 25,
                textAlign: "left",
                marginTop: 5,
                marginBottom: 1,
              }}
            >
              Maturity Interest:
            </Typography>
            <Typography
              sx={{
                backgroundColor: "#FFCC66",
                fontSize: 20,
                padding: 0.5,
                borderRadius: 0.5,
              }}
            >
              {resultSet.maturityInterest.toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}
            </Typography>
            {resultSet.maturityDate ? (
              <>
                <Typography
                  sx={{
                    fontSize: 25,
                    textAlign: "left",
                    marginTop: 5,
                    marginBottom: 1,
                  }}
                >
                  Maturity Date:
                </Typography>
                <Typography
                  sx={{
                    backgroundColor: "#FFCC66",
                    fontSize: 20,
                    padding: 0.5,
                    borderRadius: 0.5,
                  }}
                >
                  {resultSet.maturityDate}
                </Typography>
              </>
            ) : null}

            <Button
              variant="contained"
              sx={{
                "&:hover": { backgroundColor: "#EC6F66" },
                width: "300px",
                marginTop: "30px",
              }}
              onClick={() => window.location.reload()}
            >
              Calculate Again
            </Button>
          </Box>
        </>
      )}
    </Container>
  );
}

export default MainRDMaturityCalc;

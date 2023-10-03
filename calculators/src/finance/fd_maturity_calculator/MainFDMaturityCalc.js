import React, { useState, useEffect } from "react";
import { Container, Typography, TextField, MenuItem, Select } from "@mui/material";

function MainFDMaturityCalc() {
	// Input Fields
	const [amountDeposited, setAmountDeposited] = useState(0);
	const [rateOfInterest, setRateOFInterest] = useState(0);
	const [durationOfDeposit, setDurationOfDeposit] = useState(0);
	const [dateOfDeposit, setDateOfDeposit] = useState("");
	const [compoundingFrequency, setCompoundingFrequency] = useState(1);

	// Output Fields
	const [maturityInterest, setMaturityInterest] = useState(0);
	const [maturityAmount, setMaturityAmount] = useState(0);
	const [maturityDate, setMaturityDate] = useState("");

	useEffect(() => {
		if (dateOfDeposit) {
			const calculateMaturityDate = new Date(dateOfDeposit);
			calculateMaturityDate.setFullYear(calculateMaturityDate.getFullYear() + durationOfDeposit * 1);
			setMaturityDate(
				calculateMaturityDate.getDate() +
					"-" +
					(calculateMaturityDate.getMonth() + 1) +
					"-" +
					calculateMaturityDate.getFullYear()
			);
		} else {
			setMaturityDate("");
		}
		const calculateMaturityAmount =
			amountDeposited *
			Math.pow(1 + rateOfInterest / (100 * compoundingFrequency), compoundingFrequency * durationOfDeposit);
		setMaturityInterest(Math.round((calculateMaturityAmount - amountDeposited) * 100) / 100);
		setMaturityAmount(Math.round(calculateMaturityAmount * 100) / 100);
	}, [amountDeposited, rateOfInterest, durationOfDeposit, dateOfDeposit, compoundingFrequency]);
	return (
		<Container
			maxWidth="lg"
			sx={{
				bgcolor: "#eeeeee",
				minHeight: "90vh",
				paddingY: "10",
				display: "flex",
				flexDirection: "column",
			}}
		>
			<Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
				FD Maturity Calculator
			</Typography>
			<hr />
			<br />
			<Typography pt={1} variant="h6" mt={2}>
				Amount Deposited:{" "}
			</Typography>
			<TextField
				color="primary"
				disabled={false}
				placeholder="Enter Amount"
				size="lg"
				variant="outlined"
				type="number"
				InputProps={{ inputProps: { min: 0 } }}
				onChange={(e) => setAmountDeposited(e.target.value)}
				value={amountDeposited}
			/>
			<Typography pt={1} variant="h6" mt={2}>
				Rate of Interest (in %):{" "}
			</Typography>
			<TextField
				color="primary"
				disabled={false}
				placeholder="Enter Rate of Interest"
				size="lg"
				variant="outlined"
				type="number"
				InputProps={{ inputProps: { min: 0 } }}
				onChange={(e) => setRateOFInterest(e.target.value)}
				value={rateOfInterest}
			/>
			<Typography pt={1} variant="h6" mt={2}>
				Duration of Deposit (in Years):{" "}
			</Typography>
			<TextField
				color="primary"
				disabled={false}
				placeholder="Enter Duration of Deposit in Years"
				size="lg"
				variant="outlined"
				type="number"
				InputProps={{ inputProps: { min: 0 } }}
				onChange={(e) => setDurationOfDeposit(e.target.value)}
				value={durationOfDeposit}
			/>
			<Typography pt={1} variant="h6" mt={2}>
				Date of Deposit:{" "}
			</Typography>
			<TextField
				color="primary"
				disabled={false}
				placeholder="Enter Date of Deposit"
				size="lg"
				variant="outlined"
				type="date"
				onChange={(e) => setDateOfDeposit(e.target.value)}
				value={dateOfDeposit}
			/>
			<Typography pt={1} variant="h6" mt={2}>
				Compounding frequency:{" "}
			</Typography>
			<Select
				// multiple
				value={compoundingFrequency}
				onChange={(e) => setCompoundingFrequency(e.target.value)}
				label="Select Frequency of Compounding"
			>
				<MenuItem value={12}>Monthly</MenuItem>
				<MenuItem value={4}>Quaterly</MenuItem>
				<MenuItem value={2}>Semi-Annually</MenuItem>
				<MenuItem value={1}>Annually</MenuItem>
			</Select>
			<hr />
			<br />

			<Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
				FD Maturity Calculation Results
			</Typography>
			<hr />
			<br />

			<Typography pt={1} variant="h6" mt={2}>
				Maturity Amount
			</Typography>
			<div className="output">
				<Typography pt={1} variant="h6" fontStyle={{ color: "blue" }}>
					{maturityAmount}
				</Typography>
			</div>
			<Typography pt={1} variant="h6" mt={2}>
				Maturity Interest
			</Typography>
			<div className="output">
				<Typography pt={1} variant="h6" fontStyle={{ color: "blue" }}>
					{maturityInterest}
				</Typography>
			</div>
			{maturityDate && (
				<>
					<Typography pt={1} variant="h6" mt={2}>
						Maturity Date
					</Typography>
					<div className="output">
						<Typography pt={1} variant="h6" fontStyle={{ color: "blue" }}>
							{maturityDate}
						</Typography>
					</div>
				</>
			)}
			<hr />
			<br />
		</Container>
	);
}

export default MainFDMaturityCalc;

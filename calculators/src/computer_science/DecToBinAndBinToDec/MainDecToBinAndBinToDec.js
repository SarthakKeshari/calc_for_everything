// src/BinaryDecimalConverter.js
import React, { useState } from "react";
import { Container, Typography, TextField, Button } from "@mui/material";

function BinaryDecimalConverter() {
	const [binaryInput, setBinaryInput] = useState("");
	const [decimalInput, setDecimalInput] = useState("");

	const handleBinaryChange = (event) => {
		setBinaryInput(event.target.value);
	};

	const handleDecimalChange = (event) => {
		setDecimalInput(event.target.value);
	};

	const convertBinaryToDecimal = () => {
		const decimalValue = parseInt(binaryInput, 2);
		if (!isNaN(decimalValue)) {
			setDecimalInput(decimalValue.toString());
		} else {
			setDecimalInput("Invalid input");
		}
	};

	const convertDecimalToBinary = () => {
		const decimalValue = parseInt(decimalInput, 10);
		if (!isNaN(decimalValue)) {
			setBinaryInput(decimalValue.toString(2));
		} else {
			setBinaryInput("Invalid input");
		}
	};

	return (
		<Container
			maxWidth="lg"
			sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: "10" }}
		>
			<Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
				Decimal to Binary and Binary to Decimal Calculator
			</Typography>
			<hr />
			<br />
			<div>
				<TextField
					label="Binary"
					type="text"
					value={binaryInput}
					onChange={handleBinaryChange}
				/>
				<Button variant="contained" onClick={convertBinaryToDecimal}>
					Convert to Decimal
				</Button>
			</div>
			<div>
				<TextField
					label="Decimal"
					type="text"
					value={decimalInput}
					onChange={handleDecimalChange}
				/>
				<Button variant="contained" onClick={convertDecimalToBinary}>
					Convert to Binary
				</Button>
			</div>
		</Container>
	);
}

export default BinaryDecimalConverter;

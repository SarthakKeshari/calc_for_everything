import React, { useState } from "react";
import { Container, Typography, TextField, Button } from "@mui/material";

const ATOM_MASS = {
	H: 1.00794,
	He: 4.0026,
	Li: 6.941,
	Be: 9.01218,
	B: 10.811,
	C: 12.011,
	N: 14.0067,
	O: 15.9994,
	F: 18.9984,
	Ne: 20.1797,
	Na: 22.98977,
	Mg: 24.305,
	Al: 26.98154,
	Si: 28.0855,
	P: 30.97376,
	S: 32.066,
	Cl: 35.4527,
	Ar: 39.948,
	K: 39.0983,
	Ca: 40.078,
	Sc: 44.9559,
	Ti: 47.88,
	V: 50.9415,
	Cr: 51.996,
	Mn: 54.938,
	Fe: 55.847,
	Co: 58.9332,
	Ni: 58.6934,
	Cu: 63.546,
	Zn: 65.39,
	Ga: 69.723,
	Ge: 72.61,
	As: 74.9216,
	Se: 78.96,
	Br: 79.904,
	Kr: 83.8,
	Rb: 85.4678,
	Sr: 87.62,
	Y: 88.9059,
	Zr: 91.224,
	Nb: 92.9064,
	Mo: 95.94,
	Tc: 98,
	Ru: 101.07,
	Rh: 102.9055,
	Pd: 106.42,
	Ag: 107.868,
	Cd: 112.41,
	In: 114.82,
	Sn: 118.71,
	Sb: 121.757,
	Te: 127.6,
	I: 126.9045,
	Xe: 131.29,
	Cs: 132.9054,
	Ba: 137.33,
	La: 138.9055,
	Hf: 178.49,
	Ta: 180.9479,
	W: 183.85,
	Re: 186.207,
	Os: 190.2,
	Ir: 192.22,
	Pt: 195.08,
	Au: 196.9665,
	Hg: 200.59,
	Tl: 204.383,
	Pb: 207.2,
	Bi: 208.9804,
	Po: 209,
	At: 210,
	Rn: 222,
	Fr: 223,
	Ra: 226.0254,
	Ac: 227,
	Rf: 261,
	Db: 262,
	Sg: 263,
	Bh: 262,
	Hs: 265,
	Mt: 266,
	Uun: 269,
	Uuu: 272,
	Uub: 277,
	Ce: 140.12,
	Pr: 140.9077,
	Nd: 144.24,
	Pm: 145,
	Sm: 150.36,
	Eu: 151.965,
	Gd: 157.25,
	Tb: 158.9253,
	Dy: 162.5,
	Ho: 164.9303,
	Er: 167.26,
	Tm: 168.9342,
	Yb: 173.04,
	Lu: 174.967,
	Th: 232.0381,
	Pa: 231.0359,
	U: 238.029,
	Np: 237.0482,
	Pu: 244,
	Am: 243,
	Cm: 247,
	Bk: 247,
	Cf: 251,
	Es: 252,
	Fm: 257,
	Md: 258,
	No: 259,
	Lr: 262,
};

function MainMolecularWeightCalc() {
	// Input Fields
	const [molecule, setMolecule] = useState("");
	const [error, setError] = useState(false);

	// Output Fields
	const [molecularWeight, setMolecularWeight] = useState("");

	function calculateMolecularWeight() {
		// Elements will be of size 1, 2, 3
		// size = 1, only Capitals - H, N, etc.
		// size = 2, first character capital and second character small - He, Na, Cl
		// size = 3 , first character capital and second, third character small - Uun, Uuu

		// I was able to find 3 types of Chemical formulas
		// 1. characters followed by number(if any) eg: H2, SN4, N - ([A-Z][a-z]{0,2}[0-9]*)+
		// 2. We can have brackets and followed by number eg: Na(SO4)2 - \(  and \)[0-9]*
		// 3. We can have '.' in between when chemical is crystalized. eg: CuSO4.5H2O - \.[0-9]*([A-Z][a-z]{0,2}[0-9]*)+
		const validFormulaRegex = /([A-Z][a-z]{0,2}[0-9]*)+|\(|\)[0-9]*|\.[0-9]*([A-Z][a-z]{0,2}[0-9]*)+/g;
		const generalCaseRegex = /[A-Z][a-z]*[0-9]*/g;
		const generalCaseToTestRegex = /^([A-Z][a-z]{0,2}[0-9]*)+/;
		const dotRegex = /\.(\d+)[A-Z]/;
		const numberRegex = /[0-9]+$/;
		const alphaRegex = /[A-Z][a-z]{0,2}/;
		if (!validFormulaRegex.test(molecule)) {
			setError(true);
			return;
		}
		const subMoleculeArray = molecule.match(validFormulaRegex);
		let stack = [];

		subMoleculeArray.forEach((subMolecule) => {
			if (generalCaseToTestRegex.test(subMolecule)) {
				// Case 1
				const subAtoms = subMolecule.match(generalCaseRegex);
				let currTotal = 0;
				subAtoms.forEach((atom) => {
					if (numberRegex.test(atom)) {
						const element = atom.match(alphaRegex)[0];
						const number = atom.match(numberRegex)[0];
						if (ATOM_MASS.hasOwnProperty(element)) {
							currTotal += ATOM_MASS[element] * parseInt(number);
						} else {
							setError(true);
						}
					} else {
						if (ATOM_MASS.hasOwnProperty(atom)) {
							currTotal += ATOM_MASS[atom];
						} else {
							setError(true);
						}
					}
				});
				stack.push(currTotal);
			} else if (subMolecule === "(") {
				// Case 2
				stack.push("(");
			} else if (subMolecule[0] === ")") {
				// Case 2
				if (stack.length === 0) {
					setError(true);
					return;
				}
				let currSum = 0;
				let number = 1;
				if (numberRegex.test(subMolecule)) {
					number = parseInt(subMolecule.match(numberRegex)[0]);
				}
				let poppedElement = stack.pop();
				while (poppedElement !== "(") {
					currSum += poppedElement;
					if (stack.length === 0) {
						setError(true);
						break;
					}
					poppedElement = stack.pop();
				}
				stack.push(currSum * number);
			} else if (subMolecule[0] === ".") {
				// Case - 3
				let number = subMolecule.match(dotRegex);
				if (subMolecule.match(dotRegex)) {
					number = parseInt(subMolecule.match(dotRegex)[1]);
				}
				let currTotal = 0;
				const subAtoms = subMolecule.match(generalCaseRegex);
				subAtoms.forEach((atom) => {
					if (numberRegex.test(atom)) {
						const element = atom.match(alphaRegex)[0];
						const number = atom.match(numberRegex)[0];
						if (ATOM_MASS.hasOwnProperty(element)) {
							currTotal += ATOM_MASS[element] * parseInt(number);
						} else {
							setError(true);
						}
					} else {
						if (ATOM_MASS.hasOwnProperty(atom)) {
							currTotal += ATOM_MASS[atom];
						} else {
							setError(true);
						}
					}
				});
				stack.push(currTotal * number);
			}
		});
		let finalMolecularWeight = 0;
		stack.forEach((subMoleculeWeight) => {
			if (Number(subMoleculeWeight) === subMoleculeWeight) {
				finalMolecularWeight += subMoleculeWeight;
			} else {
				setError(true);
			}
		});
		setMolecularWeight(finalMolecularWeight);
	}

	return (
		<Container maxWidth="lg" sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: "10" }}>
			<Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
				Molecular Weight Calculator
			</Typography>
			<hr />
			<br />

			<Container sx={{ display: "flex", flexDirection: "column" }}>
				<Typography pt={1} variant="h6" mt={2}>
					Enter Molecular Formula:
				</Typography>
				<TextField
					error={error}
					id="outlined-error"
					color="primary"
					disabled={false}
					placeholder="Enter Molecular Formula"
					size="lg"
					variant="outlined"
					value={molecule}
					onChange={(e) => {
						setMolecule(e.target.value);
						setError(false);
						setMolecularWeight("");
					}}
					helperText={`${error ? "Invalid Input" : ""}`}
				/>
				<Button
					variant="contained"
					onClick={calculateMolecularWeight}
					sx={{ width: "50%", margin: "auto", mt: "20px" }}
				>
					Calculate Molecular Weight
				</Button>
			</Container>

			<hr />
			<br />
			{!error && molecularWeight && (
				<>
					<Typography pt={1} variant="h6" mt={2}>
						Molecular Weight
					</Typography>
					<div className="output">
						<Typography pt={1} variant="h6" fontStyle={{ color: "blue" }}>
							{molecularWeight}
						</Typography>
					</div>
				</>
			)}
		</Container>
	);
}

export default MainMolecularWeightCalc;

import React, { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const styles = {
  root: {
    backgroundColor: "#f0f0f0",
    minHeight: "90vh",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
  },
  paper: {
    padding: "20px",
    width: "100%",
    maxWidth: "800px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  input: {
    marginBottom: "20px",
  },
  button: {
    marginTop: "20px",
    marginBottom: "20px",
    backgroundColor: "#007bff",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#0056b3",
    },
  },
  postfix: {
    color: "#32a852",
    marginBottom: "20px",
  },
  prefix: {
    color: "#ff5722",
    marginBottom: "20px",
  },
  table: {
    border: "2px solid #ccc",
    width: "100%",
    backgroundColor: "#101010",
    marginBottom: "20px",
    borderRadius: "10px",
    marginTop: "15px",
  },
  tableCell: {
    color: "white",
    borderBottom: "1px solid #ccc",
    borderRight: "1px solid #ccc",
    padding: "15px",
    minWidth: "70px",
  },
};

function MainInfixToPostAndPreCalc() {
  let [infixExpression, setInfixExpression] = useState("");
  const [postfixExpression, setPostfixExpression] = useState("");
  const [prefixExpression, setPrefixExpression] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [postfixSteps, setPostfixSteps] = useState([]);
  const [prefixSteps, setPrefixSteps] = useState([]);

  const handleInputChange = (e) => {
    setInfixExpression(e.target.value);
    setIsSubmitted(false);
    setPostfixSteps([]);
    setPrefixSteps([]);
  };

  const convertToPostfix = () => {
    let operatorsStack = [];
    let postfix = "";
    let steps = [];

    const precedence = {
      $: 4,
      "^": 3,
      "*": 2,
      "/": 2,
      "+": 1,
      "-": 1,
    };

    const isOpeningBracket = (ch) => ch === "(" || ch === "{" || ch === "[";
    const isClosingBracket = (ch) => ch === ")" || ch === "}" || ch === "]";

    if (!infixExpression.startsWith("(")) {
      infixExpression = "(" + infixExpression + ")";
    }

    for (let i = 0; i < infixExpression.length; i++) {
      const token = infixExpression[i];

      if (token.match(/[0-9A-Z]/i)) {
        postfix += token;
      } else if (token === " ") {
        continue;
      } else if (!isOpeningBracket(token) && !isClosingBracket(token)) {
        while (
          operatorsStack.length !== 0 &&
          !isOpeningBracket(operatorsStack[operatorsStack.length - 1]) &&
          precedence[token] <=
            precedence[operatorsStack[operatorsStack.length - 1]]
        ) {
          postfix += operatorsStack.pop();
        }
        operatorsStack.push(token);
      } else if (isOpeningBracket(token)) {
        operatorsStack.push(token);
      } else if (isClosingBracket(token)) {
        while (
          operatorsStack.length !== 0 &&
          !isOpeningBracket(operatorsStack[operatorsStack.length - 1])
        ) {
          postfix += operatorsStack.pop();
        }
        operatorsStack.pop();
      }
      steps.push({
        token,
        operatorsStack: [...operatorsStack],
        postfix: postfix,
      });
    }

    while (operatorsStack.length !== 0) {
      postfix += operatorsStack.pop();
    }

    setPostfixExpression(postfix);
    setPostfixSteps(steps);
  };

  const convertToPrefix = () => {
    const reversedExpression = infixExpression.split("").reverse().join("");
    let operatorsStack = [];
    let prefix = "";
    let steps = [];

    const precedence = {
      $: 4,
      "^": 3,
      "*": 2,
      "/": 2,
      "+": 1,
      "-": 1,
    };

    const isOpeningBracket = (ch) => ch === ")" || ch === "}" || ch === "]";
    const isClosingBracket = (ch) => ch === "(" || ch === "{" || ch === "[";

    for (let i = 0; i < reversedExpression.length; i++) {
      const token = reversedExpression[i];

      if (token.match(/[0-9A-Z]/i)) {
        prefix += token;
      } else if (token === " ") {
        continue;
      } else if (!isOpeningBracket(token) && !isClosingBracket(token)) {
        while (
          operatorsStack.length !== 0 &&
          !isOpeningBracket(operatorsStack[operatorsStack.length - 1]) &&
          precedence[token] <=
            precedence[operatorsStack[operatorsStack.length - 1]]
        ) {
          prefix += operatorsStack.pop();
        }
        operatorsStack.push(token);
      } else if (isOpeningBracket(token)) {
        operatorsStack.push(token);
      } else if (isClosingBracket(token)) {
        while (
          operatorsStack.length !== 0 &&
          !isOpeningBracket(operatorsStack[operatorsStack.length - 1])
        ) {
          prefix += operatorsStack.pop();
        }
        operatorsStack.pop();
      }
      steps.unshift({
        token,
        operatorsStack: [...operatorsStack],
        prefix: prefix.split("").reverse().join(""),
      });
    }

    while (operatorsStack.length !== 0) {
      prefix += operatorsStack.pop();
    }

    setPrefixExpression(prefix.split("").reverse().join(""));
    setPrefixSteps(steps.reverse());
  };

  return (
    <Container maxWidth="lg" style={styles.root}>
      <Paper elevation={3} style={styles.paper}>
        <Typography variant="h5">
          Infix To Postfix and Prefix Calculator
        </Typography>
        <hr />
        <TextField
          style={styles.input}
          fullWidth
          variant="outlined"
          placeholder="Enter infix expression"
          value={infixExpression}
          onChange={handleInputChange}
        />
        <Button
          style={styles.button}
          variant="contained"
          onClick={() => {
            convertToPostfix();
            convertToPrefix();
            setIsSubmitted(true);
          }}
        >
          Generate Postfix and Prefix
        </Button>
        {isSubmitted && (
          <Typography variant="h6" style={styles.postfix}>
            Postfix Expression: {postfixExpression}
          </Typography>
        )}
        {isSubmitted && (
          <Typography variant="h6" style={styles.prefix}>
            Prefix Expression: {prefixExpression}
          </Typography>
        )}
        {isSubmitted && (
          <div>
            <Typography variant="h6">Postfix Conversion Steps:</Typography>
            <TableContainer style={styles.table}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell style={styles.tableCell}>Token</TableCell>
                    <TableCell style={styles.tableCell}>
                      Operators Stack
                    </TableCell>
                    <TableCell style={styles.tableCell}>Postfix</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {postfixSteps.map((step, index) => (
                    <TableRow key={index}>
                      <TableCell style={styles.tableCell}>
                        {step.token}
                      </TableCell>
                      <TableCell style={styles.tableCell}>
                        {step.operatorsStack.join("")}
                      </TableCell>
                      <TableCell style={styles.tableCell}>
                        {step.postfix}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Typography variant="h6">Prefix Conversion Steps:</Typography>
            <TableContainer style={styles.table}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell style={styles.tableCell}>Token</TableCell>
                    <TableCell style={styles.tableCell}>
                      Operators Stack
                    </TableCell>
                    <TableCell style={styles.tableCell}>Prefix</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {prefixSteps.map((step, index) => (
                    <TableRow key={index}>
                      <TableCell style={styles.tableCell}>
                        {step.token}
                      </TableCell>
                      <TableCell style={styles.tableCell}>
                        {step.operatorsStack.join("")}
                      </TableCell>
                      <TableCell style={styles.tableCell}>
                        {step.prefix}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        )}
      </Paper>
    </Container>
  );
}

export default MainInfixToPostAndPreCalc;

import React, { useState } from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function MainGraphMaker() {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("sm"));

  const [input, setInput] = useState("");
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(50);
  const [err1, setErr1] = useState(false);
  const [err2, setErr2] = useState(false);
  const [xData, setXData] = useState([]);
  const [yData, setYData] = useState([]);
  const [title, setTitle] = useState("");

  let options = {
    plugins: {
      legend: {
        position: "top",
        labels: {
          usePointStyle: true,
        },
      },
      title: {
        display: true,
        text: `${title && `Graph of ${title}`}`,
      },
    },
  };
  let data = {
    labels: xData,
    datasets: [
      {
        label: title,
        data: yData,
        borderColor: `${title? "rgb(25 118 210)": "transparent"}`, 
        backgroundColor: `${title? "white": "transparent"}`,
        pointRadius: sm ? 1.5 : 0,
      },
    ],
  };
  const makeGraph = () => {
    if (!(validate1() && validate2())) return;
    let xTemp = [],
      yTemp = [],
      flag = false;
    for (let i = parseInt(start); i <= parseInt(end); i++) {
      try {
        xTemp.push(i);
        const a = input
          .replaceAll("^", "**")
          .replaceAll(" ", "")
          .replaceAll("x", `(${i})`)
          .replaceAll("log", "Math.log")
          .replaceAll("e", "Math.E");
        const y = eval(a);
        if (isNaN(y) || !isFinite(y)) throw new Error(`Not Defined at ${i}`);
        yTemp.push(y);
        flag = true;
      } catch (err) {
        yTemp.push(null);
      }
    }
    console.log(xTemp, yTemp)
    setXData(xTemp);
    setYData(yTemp);
    if (flag) setTitle(input);
    else setTitle("");
  };
  const validate1 = () => {
    try {
      setErr1(false);
      const y = eval(start);
      if (isNaN(y) || !isFinite(y) || start === "" || y < -1000)
        throw new Error("Invalid min-input");
      return true;
    } catch (error) {
      setErr1(true);
      return false;
    }
  };
  const validate2 = () => {
    try {
      setErr2(false);
      const y = end * 1;
      if (isNaN(y) || !isFinite(y) || end === "" || y > 1000)
        throw new Error("Invalid max-input");
      return true;
    } catch (error) {
      setErr2(true);
      return false;
    }
  };

  return (
    <Container
      maxWidth="md"
      sx={{ marginTop: "2rem", display: `${xData ? "" : "none"}` }} 
    >
      <Typography variant="h4" gutterBottom>
        Graph Maker
      </Typography>
      <br />
      <TextField
        id="outlined-error"
        label="Enter an equation of x"
        variant="outlined"
        sx={{ width: "100%" }}
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        placeholder="Use Only ()*/+- Numbers, x(as a variable), log() and e^"
      />
      <Box
        sx={{
          margin: "10px 0px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <TextField
          error={err1}
          id="outlined-basic"
          label="min value of x"
          variant="outlined"
          placeholder="Start value of x"
          value={start}
          onChange={(e) => {
            setStart(e.target.value);
          }}
          helperText={`${err1 ? "x should be greater than 0" : ""}`}
        />
        <TextField
          error={err2}
          id="outlined-basic"
          label="max value of x"
          variant="outlined"
          placeholder="End value of x"
          value={end}
          onChange={(e) => {
            setEnd(e.target.value);
          }}
          helperText={`${err2 ? "x should be lesser than 1000" : ""}`}
        />
        <Button
          variant="contained"
          sx={{
            minWidth: "min-content",
            maxWidth: "min-content",
            whiteSpace: "nowrap",
          }}
          onClick={makeGraph}
        >
          Make my Graph
        </Button>
      </Box>
      <Line options={options} data={data} />
    </Container>
  );
}

export default MainGraphMaker;
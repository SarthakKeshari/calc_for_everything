import React, { Component } from "react";
import { Container, Typography } from "@mui/material";

class MainCongruencyOfTriangleCalc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      side1a: 0,
      side1b: 0,
      side1c: 0,
      angle1A: 0,
      angle1B: 0,
      angle1C: 0,
      side2a: 0,
      side2b: 0,
      side2c: 0,
      angle2A: 0,
      angle2B: 0,
      angle2C: 0,
      congruent: false,
    };
  }

  checkCongruence = () => {
    const {
      side1a,
      side1b,
      side1c,
      angle1A,
      angle1B,
      angle1C,
      side2a,
      side2b,
      side2c,
      angle2A,
      angle2B,
      angle2C,
    } = this.state;

    const congruent =
      (side1a === side2a && side1b === side2b && side1c === side2c) ||
      (side1a === side2b && side1b === side2c && side1c === side2a) ||
      (side1a === side2c && side1b === side2a && side1c === side2b);

    if (
      congruent &&
      angle1A === angle2A &&
      angle1B === angle2B &&
      angle1C === angle2C
    ) {
      this.setState({ congruent: true });
    } else {
      this.setState({ congruent: false });
    }
  };

  render() {
    return (
      <Container
        maxWidth="lg"
        sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: "10" }}
      >
        <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
          Congruency Of Triangle Calculator
        </Typography>
        <hr />
        <div>
          <h2>Triangle Congruence Checker</h2>
          <div>
            <h3>Triangle 1</h3>
            <input
              type="number"
              placeholder="Side a"
              onChange={(e) =>
                this.setState({ side1a: Number(e.target.value) })
              }
            />
            <input
              type="number"
              placeholder="Side b"
              onChange={(e) =>
                this.setState({ side1b: Number(e.target.value) })
              }
            />
            <input
              type="number"
              placeholder="Side c"
              onChange={(e) =>
                this.setState({ side1c: Number(e.target.value) })
              }
            />
            <input
              type="number"
              placeholder="Angle A"
              onChange={(e) =>
                this.setState({ angle1A: Number(e.target.value) })
              }
            />
            <input
              type="number"
              placeholder="Angle B"
              onChange={(e) =>
                this.setState({ angle1B: Number(e.target.value) })
              }
            />
            <input
              type="number"
              placeholder="Angle C"
              onChange={(e) =>
                this.setState({ angle1C: Number(e.target.value) })
              }
            />
          </div>
          <div>
            <h3>Triangle 2</h3>
            <input
              type="number"
              placeholder="Side a"
              onChange={(e) =>
                this.setState({ side2a: Number(e.target.value) })
              }
            />
            <input
              type="number"
              placeholder="Side b"
              onChange={(e) =>
                this.setState({ side2b: Number(e.target.value) })
              }
            />
            <input
              type="number"
              placeholder="Side c"
              onChange={(e) =>
                this.setState({ side2c: Number(e.target.value) })
              }
            />
            <input
              type="number"
              placeholder="Angle A"
              onChange={(e) =>
                this.setState({ angle2A: Number(e.target.value) })
              }
            />
            <input
              type="number"
              placeholder="Angle B"
              onChange={(e) =>
                this.setState({ angle2B: Number(e.target.value) })
              }
            />
            <input
              type="number"
              placeholder="Angle C"
              onChange={(e) =>
                this.setState({ angle2C: Number(e.target.value) })
              }
            />
          </div>
          <button onClick={this.checkCongruence}>Check Congruence</button>
          {this.state.congruent ? (
            <p>The triangles are congruent.</p>
          ) : (
            <p>The triangles are not congruent.</p>
          )}
        </div>
      </Container>
    );
  }
}

export default MainCongruencyOfTriangleCalc;

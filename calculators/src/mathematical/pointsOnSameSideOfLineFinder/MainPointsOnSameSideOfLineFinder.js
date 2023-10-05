import React, { Component } from 'react';
import { Container, Typography, Button, TextField, Grid, Paper } from '@mui/material';
import Plotly from 'react-plotly.js';

class MainPointsOnSameSideOfLineFinder extends Component {
    constructor() {
        super();
        this.state = {
            line: { x1: 0, y1: 0, x2: 0, y2: 0 },
            points: [],
            results: { sameSide: [], oppositeSide: [] },
            x: 0,
            y: 0,
            graphData: [],
        };
    }

    // Function to calculate which side of the line a point lies on
    findSide = (point, line) => {
        const { x, y } = point;
        const { x1, y1, x2, y2 } = line;

        const crossProduct = (x - x1) * (y2 - y1) - (y - y1) * (x2 - x1);

        if (crossProduct > 0) {
            return 'sameSide';
        } else if (crossProduct < 0) {
            return 'oppositeSide';
        } else {
            return 'onLine';
        }
    };

    handleLineInput = () => {
        const { x1, y1, x2, y2 } = this.state;
        const line = { x1, y1, x2, y2 };
        const graphData = [
            // Add the line trace
            {
                type: 'scatter',
                x: [x1, x2],
                y: [y1, y2],
                mode: 'lines',
                line: { color: 'blue' },
                name: 'Line',
            },
        ];
        this.setState({ line, graphData });
    };

    handlePointInput = () => {
        const { x, y, points, line, graphData } = this.state;
        const side = this.findSide({ x, y }, line);
        const updatedPoints = [...points, { x, y, side }];

        // Add the point trace
        graphData.push({
            type: 'scatter',
            x: [x],
            y: [y],
            mode: 'markers',
            name: `Point (${x}, ${y})`,
            marker: { size: 10 },
        });

        this.setState({
            points: updatedPoints,
            x: 0,
            y: 0,
            graphData,
        });
    };

    groupPoints = () => {
        const { points } = this.state;
        const sameSide = points.filter((point) => point.side === 'sameSide');
        const oppositeSide = points.filter((point) => point.side === 'oppositeSide');

        this.setState({ results: { sameSide, oppositeSide } });
    };

    render() {
        const { x1, y1, x2, y2, x, y, results, graphData } = this.state;

        return (
            <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: "10" }}>
                <Typography pt={1} variant='h5' sx={{ textAlign: "center" }}>Grouping Points On Same Side Of Line</Typography>
                <hr />
                <br />

                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Paper elevation={3} sx={{ padding: 2 }}>
                            <Typography variant='h6' sx={{ textAlign: "center" }}>Enter Line Points</Typography>
                            <TextField
                                fullWidth
                                label="x1"
                                type="number"
                                value={x1}
                                onChange={(e) => this.setState({ x1: parseFloat(e.target.value) })}
                            />
                            <TextField
                                fullWidth
                                label="y1"
                                type="number"
                                value={y1}
                                onChange={(e) => this.setState({ y1: parseFloat(e.target.value) })}
                            />
                            <TextField
                                fullWidth
                                label="x2"
                                type="number"
                                value={x2}
                                onChange={(e) => this.setState({ x2: parseFloat(e.target.value) })}
                            />
                            <TextField
                                fullWidth
                                label="y2"
                                type="number"
                                value={y2}
                                onChange={(e) => this.setState({ y2: parseFloat(e.target.value) })}
                            />
                            <Button variant="contained" onClick={this.handleLineInput}>Set Line</Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper elevation={3} sx={{ padding: 2 }}>
                            <Typography variant='h6' sx={{ textAlign: "center" }}>Enter Points</Typography>
                            <TextField
                                fullWidth
                                label="x"
                                type="number"
                                value={x}
                                onChange={(e) => this.setState({ x: parseFloat(e.target.value) })}
                            />
                            <TextField
                                fullWidth
                                label="y"
                                type="number"
                                value={y}
                                onChange={(e) => this.setState({ y: parseFloat(e.target.value) })}
                            />
                            <Button variant="contained" onClick={this.handlePointInput}>Add Point</Button>
                        </Paper>
                    </Grid>
                </Grid>

                <Button variant="contained" onClick={this.groupPoints} sx={{ marginTop: 2 }}>
                    Group Points
                </Button>

                <h3>Results:</h3>
                <div>
                    <Typography variant='h6'>Points on the One Side of the Line:</Typography>
                    <ul>
                        {results.sameSide.map((point, index) => (
                            <li key={index}>({point.x}, {point.y})</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <Typography variant='h6'>Points on the Another Side of the Line:</Typography>
                    <ul>
                        {results.oppositeSide.map((point, index) => (
                            <li key={index}>({point.x}, {point.y})</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3>Graph:</h3>
                    <Plotly
                        data={graphData}
                        layout={{ showlegend: true, legend: { x: 1, y: 1 } }}
                        style={{ width: '100%', height: '400px' }}
                    />
                </div>
            </Container>
        );
    }
}

export default MainPointsOnSameSideOfLineFinder;

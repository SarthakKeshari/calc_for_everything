import React, { useState, useRef, useEffect } from 'react';
import { Container, Typography, TextField, Button, Card, Box, Select, MenuItem } from '@mui/material';
import * as d3 from 'd3';

function MainStatisticalGraphCreator() {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [figure, setFigure] = useState('');

  const [selectedGraphType, setSelectedGraphType] = useState('bar');

  const handleGraphTypeChange = (event) => {
    setSelectedGraphType(event.target.value);
  };

  const chartRef = useRef(null);

  const addData = () => {
    const newData = { name, figure: parseFloat(figure) };
    setData([...data, newData]);
    setName('');
    setFigure('');
  };

  useEffect(() => {
    if (chartRef.current) {
      const svg = d3.select(chartRef.current);
      svg.selectAll('*').remove();

      if (selectedGraphType === 'bar') {
        const width = 600;
        const height = 400;
        const margin = { top: 20, right: 30, bottom: 40, left: 40 };

        const x = d3
          .scaleBand()
          .domain(data.map((d) => d.name))
          .range([margin.left, width - margin.right])
          .padding(0.1);

        const y = d3
          .scaleLinear()
          .domain([0, d3.max(data, (d) => d.figure)])
          .nice()
          .range([height - margin.bottom, margin.top]);

        svg
          .append('g')
          .selectAll('rect')
          .data(data)
          .enter()
          .append('rect')
          .attr('x', (d) => x(d.name))
          .attr('y', (d) => y(d.figure))
          .attr('height', (d) => y(0) - y(d.figure))
          .attr('width', x.bandwidth())
          .attr('fill', 'steelblue');

        svg
          .append('g')
          .attr('transform', `translate(0,${height - margin.bottom})`)
          .call(d3.axisBottom(x));

        svg
          .append('g')
          .attr('transform', `translate(${margin.left},0)`)
          .call(d3.axisLeft(y));

        svg.selectAll('.domain').remove();

      } 

      else if (selectedGraphType === 'pie') {
        const width = 600;
        const height = 400;
        const radius = Math.min(width, height) / 2;
        svg.selectAll('*').remove();
        const pie = d3.pie().value((d) => d.figure);
        const arc = d3.arc().innerRadius(0).outerRadius(radius);
        const color = d3.scaleOrdinal(d3.schemeCategory10);

        const arcs = svg
        .selectAll('g.arc')
        .data(pie(data))
        .enter()
        .append('g')
        .attr('class', 'arc')
        .attr('transform', `translate(${width / 2},${height / 2})`);

      arcs
        .append('path')
        .attr('d', arc)
        .attr('fill', (d, i) => color(i));

      arcs
        .append('text')
        .attr('transform', (d) => `translate(${arc.centroid(d)})`)
        .attr('text-anchor', 'middle')
        .text((d) => d.data.name);
      }
      else if (selectedGraphType === 'line'){
        const width = 600;
      const height = 400;
      const margin = { top: 20, right: 30, bottom: 40, left: 40 };

      svg.selectAll('*').remove();

      const x = d3
        .scaleBand()
        .domain(data.map((d) => d.name))
        .range([margin.left, width - margin.right])
        .padding(0.1);

      const y = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.figure)])
        .nice()
        .range([height - margin.bottom, margin.top]);

      const line = d3
        .line()
        .x((d) => x(d.name) + x.bandwidth() / 2)
        .y((d) => y(d.figure));

      svg
        .append('g')
        .append('path')
        .datum(data)
        .attr('d', line)
        .attr('fill', 'none')
        .attr('stroke', 'steelblue')
        .attr('stroke-width', 2);

      svg
        .append('g')
        .selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
        .attr('cx', (d) => x(d.name) + x.bandwidth() / 2)
        .attr('cy', (d) => y(d.figure))
        .attr('r', 4)
        .attr('fill', 'steelblue');

      svg
        .append('g')
        .attr('transform', `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x));

      svg
        .append('g')
        .attr('transform', `translate(${margin.left},0)`)
        .call(d3.axisLeft(y));

      svg.selectAll('.domain').remove();
      }
    }
  }, [data, selectedGraphType]);

  return (
    <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: '10' }}>
      <Typography pt={1} variant="h5" sx={{ textAlign: 'center' }}>
        Statistical Graph Creator
      </Typography>
      <hr />
      <br />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h3>Add data one-by-one!</h3>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Select
            value={selectedGraphType}
            onChange={handleGraphTypeChange}
            inputProps={{ 'aria-label': 'Select Graph Type' }}
          >
            <MenuItem value="bar">Bar Graph</MenuItem>
            <MenuItem value="pie">Pie Chart</MenuItem>
            <MenuItem value="line">Line Graph</MenuItem>
          </Select>
          <TextField
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ marginRight: '10px', marginLeft: '10px' }}
          />
          <TextField
            type="number"
            placeholder="Figure"
            value={figure}
            onChange={(e) => setFigure(e.target.value)}
            sx={{ marginRight: '10px' }}
            inputProps={{
              step: 'any', // Prevent upshift and downshift arrows
            }}
          />
        </Box>
        <Button
          color='primary'
          variant='contained'
          size='small' // Set the size to small
          onClick={addData}
          sx={{ marginTop: '10px' }}
        >
          Add Data
        </Button>
      </Box>
      <Card sx={{ maxWidth: 600, margin: 'auto', marginTop: 5, padding: 2 }}><svg ref={chartRef} width="100%" height="400"></svg></Card>
    </Container>
  );
}

export default MainStatisticalGraphCreator;
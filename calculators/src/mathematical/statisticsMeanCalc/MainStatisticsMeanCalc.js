import React ,{useState, useEffect} from 'react';
import { Container, Typography, TextField, Table, TableHead, TableBody, TableRow, TableCell, Button  } from '@mui/material';

function MainStatisticsMeanCalc(){
    const [tableData, setTableData] = useState([
        { range: '10-20', count: 10 },
        { range: '21-30', count: 20 },
      ]);

      const [numberOfRows, setNumberOfRows] = useState(2);

      const [ans, setAns] = useState();
    
      const calculateMean = (tableData) => {
        let totalSum = 0;
        let totalItemCount = 0;
    
        tableData.forEach((row) => {
          const range = row.range.split('-');
          const start = parseInt(range[0]);
          const end = parseInt(range[1]);
    
          // Calculate the sum as the mean of the range * count.
          const sum = ((start + end) / 2) * row.count;
          totalSum += sum;
          totalItemCount += parseInt(row.count);
        });
    
        const mean = totalSum / totalItemCount;
        setAns(mean);
        return mean;
      };

      const generateRows = () => {
        const newTableData = [];
        for (let i = 0; i < numberOfRows; i++) {
          newTableData.push({range: '21-30', count: 20});
        }
    
        setTableData(newTableData);
      };
    
    return(
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY:"10" }}>
            <Typography pt={1} variant='h5' sx = {{textAlign: "center"}}>Mean Calculator</Typography>
            <hr/>
            <br/>
            <div>
            <TextField
                type="number"
                label = "Number of Classes"
                value={numberOfRows}
                onChange={(event) => setNumberOfRows(event.target.value)}
            />
            <br></br>
            <br></br>
            <Button variant="contained" color="primary" onClick={generateRows}>Number of Groups/Classes </Button>
            <Table>
                <TableHead>
                <TableRow>
                    <TableCell>Range</TableCell>
                    <TableCell>Count</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {tableData.map((row, index) => (
                    <TableRow key={index}>
                    <TableCell key={index}>
                        <TextField
                        type="text"
                        value = {row.range}
                        onChange={(event) => {
                        const newTableData = [...tableData];
                        newTableData[index].range = event.target.value;
                        setTableData(newTableData);
                        }}
                    />
                    </TableCell>
                    <TableCell key={index}>
                        <TextField
                            type="number"
                            value = {row.count}
                            onChange={(event) => {
                            const newTableData = [...tableData];
                            newTableData[index].count = event.target.value;
                            setTableData(newTableData);
                            }}
                        />
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            <br />
            <Button variant="contained" color="primary" onClick={() => (calculateMean(tableData))}>Calculate Mean</Button>
            <br/>
            <br></br>
            <p>Mean: {ans}</p>
            </div>
        </Container>
    );
}

export default MainStatisticsMeanCalc;
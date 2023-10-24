import React, {useEffect, useState} from 'react';
import { Container, Typography, Table, TableBody, Paper, TableContainer, TableRow, TableHead, TextField, Button, Box} from '@mui/material';
import TableCell from "@mui/material/TableCell";
import AddCircleIcon from '@mui/icons-material/AddCircle';

function MainUniversityGPACalc(){
    

    const [grades ,setGrades] = useState(["S", "A", "B", "C", "D",null,null,null,null,null,null,null,null,null,null])
    const [points, setPoints] = useState([10,9,8,7,6,null,null,null,null,null,null,null,null,null,null])
    const [pointErrors, setPointErrors] = useState([false,false,false,false,false,null,null,null,null,null,null,null,null,null,null])

    
    /* Setting this up to show error state in case someone types a letter instead of a Number */
    useEffect(()=>{
        let newPointErrors = points.map((point,i)=>{
            if(point !== null && isNaN(parseFloat(point))) {
                return true;
            }
            else {
                return null;
            }
        })

        setPointErrors(newPointErrors)

    },[points])

    /* function to handle the change in input for the grade-point table */
    const handleChange = (i,newValOrg,choice) => {
           // Ensure newVal is a number or null
        let newVal = parseFloat(newValOrg);
        console.log(newValOrg,newVal);

        if(choice==="point") {
            const newPoints = points.map((point, index) => {
                if(index!==i){
                    return point
                }    
                else if(!isNaN(newVal)) {
                    return newVal
                }
                else{
                    return ""
                }
            });
            setPoints(newPoints)
        }
        else if(choice==="grade") {
            const newGrades = grades.map((grade, index) => {
                if(index!==i){
                    return grade
                }    
                else {
                    return newValOrg;
                }
            });
            setGrades(newGrades)
        }
    }

    /* function to handle adding a new row in the grade-point table */
    const addRow = () =>{
        /*  1. find the first index that is null in either of the state arrays: points or grades
            2. Turn that index into a default value
            3. Re-render
        */

        let nullIndex = -1;
        for(let i=0;i<15;i++) {
            if(grades[i]===null) {
                nullIndex = i;
                break
            }
        }

        if (nullIndex === -1) {
            console.log("Run out of space, display error");
            return;
        }
        
        let newGrades = grades.map((grade,i)=>{
            if(i===nullIndex) {
                return "Grade"
            }
            else {
                return grade;
            }
        })


        let newPoints = points.map((point,i)=>{
            if(i===nullIndex) {
                return 0;
            }
            else {
                return point;
            }

        })

        setGrades(newGrades);
        setPoints(newPoints);
    }

    /*  Create the grade-point table-body */
    let gradePointRow = []
    grades.forEach((grade,i)=>{
        if(grade!=null) {
            gradePointRow.push(
            <TableRow key={i}>
                <TableCell>
                    <TextField variant='standard' value={grade} onChange={(e)=> handleChange(i, e.target.value, "grade")}/>    
                </TableCell>

                <TableCell>
                    <TextField variant='standard' value={points[i]} onChange={(e)=> handleChange(i, e.target.value, "point")} error={pointErrors[i]}/>
                </TableCell>
            </TableRow>)
        }
    })

    let mainTableBody = []
    

    return(
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY:"10" }}>
            <Typography pt={1} variant='h5' sx = {{textAlign: "center"}}>University GPA Calculator</Typography>
            <hr/>
            <br/>
            <Container maxWidth="md">
                {/* <TableContainer component={Paper}> */}
                    <Table sx={{maxWidth:"200px", backgroundColor:"#fff", marginBottom:"1rem"}} size='small'>
                        <TableHead sx={{backgroundColor:"#1976D2"}}>
                            <TableRow>
                                <TableCell sx={{color:"white"}}><strong>Grade</strong></TableCell>
                                <TableCell sx={{color:"white"}} align='right'><strong>Point</strong></TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody >
                            {gradePointRow}
                        </TableBody>
                    </Table>
                {/* </TableContainer> */}
                
                <Box sx={{textAlign:"center"}}>
                    <Button variant='contained' onClick={addRow}><AddCircleIcon/></Button>
                </Box>


            </Container>
        </Container>
    )
}

export default MainUniversityGPACalc;
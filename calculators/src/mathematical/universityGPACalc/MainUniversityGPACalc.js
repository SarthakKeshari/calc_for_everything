import React, {useEffect, useState} from 'react';
import { Container, Typography, Table, TableBody, TableRow, TableHead, TextField, Button, Box, Grid} from '@mui/material';
import TableCell from "@mui/material/TableCell";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CalculateIcon from '@mui/icons-material/Calculate';

function MainUniversityGPACalc(){
    

    const [grades ,setGrades] = useState(["S", "A", "B", "C", "D",null,null,null,null,null,null,null,null,null,null])
    const [points, setPoints] = useState([10,9,8,7,6,null,null,null,null,null,null,null,null,null,null])
    const [pointErrors, setPointErrors] = useState([false,false,false,false,false,null,null,null,null,null,null,null,null,null,null])

    const [gradesAchieved, setGradesAchieved] = useState([])
    const [courseCredits, setCourseCredits] = useState([])

    const [GPA, setGPA] = useState(0);

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
                    return newValOrg
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
    const addRowTable1 = () =>{
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


    const handleChangeTable2 = (i, newVal,choice) => {
        if (choice==="grade") {
            const newGradesAchieved = gradesAchieved.map((gradeAchieved,index)=>{
                if (i===index) {
                    return newVal;
                }
                else {
                    return gradeAchieved;
                }
            })

            setGradesAchieved(newGradesAchieved)
        }
        else if (choice==="credit") {
            const newCourseCredits = courseCredits.map((credit,index)=>{
                if (i===index) {
                    return newVal;
                }
                else {
                    return credit;
                }
            })

            setCourseCredits(newCourseCredits)
        }
    }

    const addRowTable2 = () =>{
        let newGradesAchieved = gradesAchieved.slice() // copy by value
        let newCourseCredits = courseCredits.slice()

        newGradesAchieved.push("A");
        newCourseCredits.push(4);

        // console.log(newGradesAchieved, newCourseCredits);
        setGradesAchieved(newGradesAchieved);
        setCourseCredits(newCourseCredits);
    }

    const calcGPA = () => {
        /*  1. Go through every grade achieved and find its corresponding point, if there is no corresponding point throw error
            2. Accumulate the product of point and credits. divide by total number of credits and display
        */
        let gpa = 0;
        let totalCredits = 0;
        let hasError = false;
        gradesAchieved.forEach((grade,i)=>{

            totalCredits += parseInt(courseCredits[i]);
            let index = grades.indexOf(grade);
            if (index === -1) {
            console.log("Error");
            setGPA("⚠️ You have included a grade that is not present in the grade-point table")
            hasError= true;
            
        }
        else {
            gpa += points[index] * parseInt(courseCredits[i]); // note these are two different indexes, "index" and "i"
            console.log(`${points[index]} * ${courseCredits[i]}`);
        }
        })

        if(!hasError) {
            gpa = gpa / totalCredits;
            setGPA(`${gpa} 🎉`);
        }
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
    gradesAchieved.forEach((gradeAchieved, i)=> {
        mainTableBody.push(
            <TableRow key={i}>
                <TableCell sx={{textAlign:"center"}}>{`Course ${i+1}`}</TableCell>

                <TableCell sx={{textAlign:"center"}}>
                    <TextField variant="standard" value={courseCredits[i]} sx={{width:"50%"}}
                        onChange={(e)=> handleChangeTable2(i,e.target.value, "credit")}
                    />
                </TableCell>

                <TableCell sx={{textAlign:"center"}}>
                    <TextField variant="standard" value={gradeAchieved} sx={{width:"50%"}}
                        onChange={(e)=> handleChangeTable2(i,e.target.value, "grade")}
                    />
                </TableCell>
            </TableRow>
        )
    })

    return(
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY:"10" }}>
            <Typography pt={1} variant='h5' sx = {{textAlign: "center"}}>University GPA Calculator</Typography>
            <hr/>
            <br/>
            <Container maxWidth="md">

                <Grid container spacing={4} sx={{marginTop:"40px"}}>
                    <Grid item xs={4}>
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
                            <Button variant='contained' onClick={addRowTable1}><AddCircleIcon/></Button>
                        </Box>
                    </Grid>

                    <Grid item xs={8}>
                    <Table sx={{maxWidth:"500px", backgroundColor:"#fff", marginBottom:"1rem"}} size='small'>
                            <TableHead sx={{backgroundColor:"#1976D2"}}>
                                <TableRow>
                                    <TableCell sx={{color:"white", width:"40%"}} align='center'><strong>Course</strong></TableCell>
                                    <TableCell sx={{color:"white", width:"25%"}} align='center'><strong>No. of Credits</strong></TableCell>
                                    <TableCell sx={{color:"white", width:"31%"}} align="center"><strong>Grade Achieved</strong></TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody >
                                {mainTableBody}
                                    {/* <TableCell sx={{textAlign:"center"}}>Subject1</TableCell>
                                    <TableCell sx={{textAlign:"center"}}><TextField variant="standard" sx={{width:"75%"}}/></TableCell>
                                    <TableCell sx={{textAlign:"center"}}><TextField variant="standard" sx={{width:"65%"}}/></TableCell> */}
                            </TableBody>
                        </Table>

                    <Box sx={{textAlign:"center"}}>
                        <Button variant='contained' onClick={addRowTable2}><AddCircleIcon/></Button>
                    </Box>

                    <Box sx={{textAlign:"center"}}>
                        <Button variant='contained'  sx={{marginTop:"30px"}} onClick={calcGPA}>
                            Calculate  <CalculateIcon sx={{marginLeft:"5px"}}/>
                        </Button>
                    </Box>
                    </Grid>
                </Grid>

                <Typography variant="h6" sx={{ textAlign: "center", marginTop: "1.5rem" }}>
                    GPA: {GPA}
                </Typography>

            </Container>
        </Container>
    )
}

export default MainUniversityGPACalc;
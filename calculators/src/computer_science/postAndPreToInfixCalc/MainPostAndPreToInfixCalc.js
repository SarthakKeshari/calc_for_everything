import React, { useState } from 'react';
import { Container, Typography, Input,Button ,TextField } from '@mui/material';


function isOperand(token) {
  return /^[a-zA-Z0-9]+$/.test(token);
}


function MainPostAndPreToInfixCalc(){

    
  const [inp1,setinp1]=useState("");
  const [inp2,setinp2]=useState("");
  const [out,setout]=useState("");

  const prefix=(event)=>{
    setinp2(event.target.value);
  }
  const postfix=(event)=>{
    setinp1(event.target.value);
  }

const calculate=()=>{
  
    if(inp1!=""){
      let expression=inp1;
      const stack = [];

      for (const token of expression) {
        if (isOperand(token)) {
        stack.push(token);
        } else {
          const operand2 = stack.pop();
          const operand1 = stack.pop();
          const infixExpression = `(${operand1}${token}${operand2})`;
          stack.push(infixExpression);
        }
      }
      if(stack.length!=1)setout("invalid input")
      else setout(stack.pop())

    }else{
      let expression=inp2;
      const stack = [];
      const operators = "+-*/^";

      for (let i = expression.length - 1; i >= 0; i--) {
        const token = expression[i];
        if (isOperand(token)) {
          stack.push(token);
        } else if (operators.includes(token)) {
          const operand1 = stack.pop();
          const operand2 = stack.pop();
          const infixExpression = `(${operand1}${token}${operand2})`;
          stack.push(infixExpression);
        }
      }
      if(stack.length!=1)setout("invalid input")
      else setout(stack.pop())
      //return stack.pop();
    }
}


    return(
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY:"10" }}>
            <Typography pt={1} variant='h5' sx = {{textAlign: "center"}}>Postfix And Prefix To Infix Calculator</Typography>
            <hr/>
            <br/>
            <div style={{marginLeft:"50px"}}>
        
        <h3>Input</h3>
        <TextField id="input1" value={inp1} onChange={postfix} label="Postfix"></TextField>
        <br></br>
        <br></br>
        <TextField id="input2" value ={inp2} onChange={prefix} label="Prefix"></TextField>
        <br></br>
        <br></br>
        <h3>Output</h3>
        <TextField id="input3" value ={out} label="Infix"></TextField>
        <br></br>
        <br></br>
        <Button style={{background:'#FAF9F6'}} onClick={calculate}>calculate</Button>
        </div>
        
        <div style={{marginLeft:"50px"}}>
          <h3>How to use:</h3>
          <ol>
            <li>Either prefix or postfix conversion to infix can be performed at a time</li>
            <li> when one converter is in use the corresponding textfield of the other converter is to be kept empty</li>
            <li> + , - ,* , / , ^ are the allowed operators</li>
            <li ><b>Input valid postfix or prefix expressions only</b></li>
          </ol>
        </div>
        </Container>
    )
}

export default MainPostAndPreToInfixCalc;
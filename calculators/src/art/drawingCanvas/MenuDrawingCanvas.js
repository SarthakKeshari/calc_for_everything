import React from "react"; 
import "./DrawingCanvas.css"; 
import { Button } from "@mui/material";
  
const Menu = ({ setLineColor, setLineWidth, 
    setLineOpacity, setClearCanvas }) => { 
    return ( 
        <div className="Menu"> 
            <label>Brush Color </label> 
            <input 
                type="color"
                onChange={(e) => { 
                    setLineColor(e.target.value); 
                }} 
            /> 
            <label>Brush Width </label> 
            <input 
                type="range"
                min="3"
                max="20"
                onChange={(e) => { 
                    setLineWidth(e.target.value); 
                }} 
            /> 
            <label>Brush Opacity</label> 
            <input 
                type="range"
                min="1"
                max="100"
                onChange={(e) => { 
                    setLineOpacity(e.target.value / 100); 
                }} 
            /> 
            <Button
                variant="contained"
                color="primary"
                onClick={setClearCanvas}
                sx={{ height: 30 }}
            >
                Clear
            </Button>
        </div> 
    ); 
}; 
  
export default Menu;
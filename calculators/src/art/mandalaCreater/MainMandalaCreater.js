import React, { useState, useEffect } from 'react';
import { Container, Typography, Button } from '@mui/material';
import './MainMandala.css';

function MainMandalaCreater() {
  const numCanvases = 4; // Updated to 4 canvases (2 above, 2 below)
  const canvasesPerRow = 2;
  const numRows = numCanvases / canvasesPerRow;

  const [contexts, setContexts] = useState(Array(numCanvases).fill(null));
  const [drawing, setDrawing] = useState(false);

  useEffect(() => {
    const newContexts = Array(numCanvases)
      .fill(null)
      .map((_, index) => {
        const canvas = document.getElementById(`canvas-${index}`);
        if (canvas) {
          return canvas.getContext('2d');
        }
        return null;
      });
    setContexts(newContexts);
  }, []);

  const startDrawing = (e, rowIndex, colIndex) => {
    if (contexts[0]) {
      contexts[0].beginPath();
      setDrawing(true);

      for (let i = 1; i < contexts.length; i++) {
        if (contexts[i]) {
          contexts[i].beginPath();
        }
      }

      const { offsetX, offsetY } = e.nativeEvent;
      const canvasWidth = contexts[0].canvas.width;
      const canvasHeight = contexts[0].canvas.height;
      const rowHeight = canvasHeight / numRows;
      const rowOffset = rowIndex * rowHeight;
      const colCanvasOffset = colIndex * canvasWidth / canvasesPerRow;

      contexts[0].moveTo(offsetX - colCanvasOffset, offsetY - rowOffset);

      for (let i = 1; i < contexts.length; i++) {
        if (contexts[i]) {
          contexts[i].moveTo(canvasWidth - (offsetX - colCanvasOffset), offsetY - rowOffset); // Mirror the drawing
        }
      }
    }
  };

  const endDrawing = () => {
    if (contexts[0]) {
      contexts[0].closePath();
      setDrawing(false);

      for (let i = 1; i < contexts.length; i++) {
        if (contexts[i]) {
          contexts[i].closePath();
        }
      }
    }
  };

  const draw = (e, rowIndex, colIndex) => {
    if (!drawing) return;
    if (contexts[0]) {
      const { offsetX, offsetY } = e.nativeEvent;
      const canvasWidth = contexts[0].canvas.width;
      const canvasHeight = contexts[0].canvas.height;
      const rowHeight = canvasHeight / numRows;
      const rowOffset = rowIndex * rowHeight;
      const colCanvasOffset = colIndex * canvasWidth / canvasesPerRow;
      contexts[0].lineTo(offsetX - colCanvasOffset, offsetY - rowOffset);
      contexts[0].stroke();

      for (let i = 1; i < contexts.length; i++) {
        if (contexts[i]) {
          contexts[i].lineTo(canvasWidth - (offsetX - colCanvasOffset), offsetY - rowOffset); // Mirror the drawing
          contexts[i].stroke();
        }
      }
    }
  };

  const clearCanvas = () => {
    for (let i = 0; i < contexts.length; i++) {
      if (contexts[i]) {
        contexts[i].clearRect(0, 0, contexts[i].canvas.width, contexts[i].canvas.height);
      }
    }
  };

  return (
    <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: '10' }}>
      <Typography pt={1} variant="h5" sx={{ textAlign: 'center' }}>
        Mandala Creator
      </Typography>
      <hr />
      <p style={{ fontSize: '0.8rem', marginLeft: '275px' }}>
        Draw in the top-left section to make mandala art. The other sections will mirror your drawing.
      </p>
      <br />
      <div className='mandala-container'>
        <div className='mandala-canvas'>
        {[...Array(numRows)].map((_, row) => (
          <div key={row} style={{ display: 'flex' }}>
            {[...Array(canvasesPerRow)].map((_, col) => (
              <canvas
                key={col + row * canvasesPerRow}
                id={`canvas-${col + row * canvasesPerRow}`}
                width={250}
                height={500 / numRows} 
                style={{ border: '1px solid #000' }}
                onMouseDown={(e) => startDrawing(e, row, col)}
                onMouseUp={endDrawing}
                onMouseOut={endDrawing}
                onMouseMove={(e) => draw(e, row, col)}
              />
            ))}
          </div>
        ))}
      </div>
      <Button variant="contained" onClick={clearCanvas} style={{ marginTop: '1rem' }}>
        Clear
    </Button>
      </div>
    </Container>
  );
}

export default MainMandalaCreater;




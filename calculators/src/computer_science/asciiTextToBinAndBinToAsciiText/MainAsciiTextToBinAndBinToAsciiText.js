import React, { useState } from 'react'
import { Container, Typography, TextField, Button, Grid } from '@mui/material'

function MainAsciiTextToBinAndBinToAsciiText () {
  const [asciiText, setAsciiText] = useState('')
  const [binaryText, setBinaryText] = useState('')

  const handleAsciiToBinary = () => {
    const binaryResult = asciiToBinary(asciiText)
    setBinaryText(binaryResult)
  }

  const handleBinaryToAscii = () => {
    const asciiResult = binaryToAscii(binaryText)
    setAsciiText(asciiResult)
  }

  const asciiToBinary = input => {
    let binaryString = ''
    for (let i = 0; i < input.length; i++) {
      let binaryChar = input[i].charCodeAt(0).toString(2)
      while (binaryChar.length < 8) {
        binaryChar = '0' + binaryChar // Ensure each character is 8 bits long
      }
      binaryString += binaryChar
    }
    return binaryString
  }
  const binaryToAscii = input => {
    let asciiString = ''
    for (let i = 0; i < input.length; i += 8) {
      const binaryChar = input.substr(i, 8)
      const decimalValue = parseInt(binaryChar, 2)
      asciiString += String.fromCharCode(decimalValue)
    }
    return asciiString
  }

  return (
    <Container
      maxWidth='lg'
      sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: '10' }}
    >
      <Typography pt={1} variant='h5' sx={{ textAlign: 'center' }}>
        ASCII Text To Binary And Binary to ASCII Text Converter
      </Typography>
      <hr />
      <br />
      <Grid container spacing={2} justifyContent='center'>
        <Grid item xs={12} sm={6}>
          <TextField
            label='ASCII Text'
            variant='outlined'
            fullWidth
            value={asciiText}
            onChange={e => setAsciiText(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label='Binary Text'
            variant='outlined'
            fullWidth
            value={binaryText}
            onChange={e => setBinaryText(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            variant='contained'
            color='primary'
            fullWidth
            onClick={handleAsciiToBinary}
          >
            Convert to Binary
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            variant='contained'
            color='primary'
            fullWidth
            onClick={handleBinaryToAscii}
          >
            Convert to ASCII
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default MainAsciiTextToBinAndBinToAsciiText

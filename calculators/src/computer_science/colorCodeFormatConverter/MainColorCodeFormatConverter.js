import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function MainColorCodeFormatConverter() {
  const [colorInput, setColorInput] = useState('');
  const [conversionType, setConversionType] = useState('rgbToHex'); // Default to RGB to HEX
  const [output, setOutput] = useState('');

  const handleConversion = () => {
    if (conversionType === 'rgbToHex') {
      // Implement RGB to HEX conversion logic
      const rgbValues = colorInput.split(',').map((value) => parseInt(value.trim(), 10));
      const isValidRgb = rgbValues.every((value) => !isNaN(value) && value >= 0 && value <= 255);

      if (isValidRgb) {
        const hexCode = `#${rgbValues.map((value) => value.toString(16).padStart(2, '0')).join('')}`;
        setOutput(hexCode);
      } else {
        setOutput('Invalid RGB input');
      }
    } else if (conversionType === 'hexToRgb') {
      // Implement HEX to RGB conversion logic
      const hexCode = colorInput.replace('#', '');
      if (/^[0-9A-Fa-f]{6}$/.test(hexCode)) {
        const r = parseInt(hexCode.slice(0, 2), 16);
        const g = parseInt(hexCode.slice(2, 4), 16);
        const b = parseInt(hexCode.slice(4, 6), 16);
        setOutput(`${r}, ${g}, ${b}`);
      } else {
        setOutput('Invalid HEX input');
      }
    } else if (conversionType === 'rgbToHsl') {
      // Implement RGB to HSL conversion logic
      const rgbValues = colorInput.split(',').map((value) => parseInt(value.trim(), 10));
      const isValidRgb = rgbValues.every((value) => !isNaN(value) && value >= 0 && value <= 255);

      if (isValidRgb) {
        const [r, g, b] = rgbValues.map((value) => value / 255);
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;

        if (max === min) {
          h = s = 0; // achromatic
        } else {
          const d = max - min;
          s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
          switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
            default: break;
          }
          h /= 6;
        }

        h = Math.round(h * 360);
        s = Math.round(s * 100);
        l = Math.round(l * 100);

        setOutput(`HSL: ${h}, ${s}%, ${l}%`);
      } else {
        setOutput('Invalid RGB input');
      }
    } else if (conversionType === 'hslToRgb') {
      // Implement HSL to RGB conversion logic
      const hslValues = colorInput.split(',').map((value) => parseInt(value.trim(), 10));
      const [h, s, l] = hslValues;

      if (!isNaN(h) && !isNaN(s) && !isNaN(l) && h >= 0 && h <= 360 && s >= 0 && s <= 100 && l >= 0 && l <= 100) {
        const hNormalized = h / 360;
        const sNormalized = s / 100;
        const lNormalized = l / 100;

        let r, g, b;
        if (s === 0) {
          r = g = b = lNormalized;
        } else {
          const hue2rgb = (p, q, t) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
          };

          const q = lNormalized < 0.5 ? lNormalized * (1 + sNormalized) : lNormalized + sNormalized - lNormalized * sNormalized;
          const p = 2 * lNormalized - q;

          r = hue2rgb(p, q, hNormalized + 1 / 3);
          g = hue2rgb(p, q, hNormalized);
          b = hue2rgb(p, q, hNormalized - 1 / 3);
        }

        const rValue = Math.round(r * 255);
        const gValue = Math.round(g * 255);
        const bValue = Math.round(b * 255);

        setOutput(`RGB: ${rValue}, ${gValue}, ${bValue}`);
      } else {
        setOutput('Invalid HSL input');
      }
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '40px' }}>
      <Typography variant="h4" gutterBottom>
        Color Code Converter
      </Typography>
      <TextField
        label="Enter Color Code"
        variant="outlined"
        fullWidth
        value={colorInput}
        onChange={(e) => setColorInput(e.target.value)}
      />

      <div style={{ marginTop: '0.2cm' }}>
        <FormControlLabel
          control={<Checkbox checked={conversionType === 'rgbToHex'} onChange={() => setConversionType('rgbToHex')} />}
          label="RGB to HEX"
        />
        <FormControlLabel
          control={<Checkbox checked={conversionType === 'hexToRgb'} onChange={() => setConversionType('hexToRgb')} />}
          label="HEX to RGB"
        />
        <FormControlLabel
          control={<Checkbox checked={conversionType === 'rgbToHsl'} onChange={() => setConversionType('rgbToHsl')} />}
          label="RGB to HSL"
        />
        <FormControlLabel
          control={<Checkbox checked={conversionType === 'hslToRgb'} onChange={() => setConversionType('hslToRgb')} />}
          label="HSL to RGB"
        />
      </div>
 <div style={{ marginTop: '0.3cm' }}
>  
    <Button variant="contained" color="primary" onClick={handleConversion}>
        Convert
      </Button>
      </div>
      
    <Typography variant="h5" gutterBottom style={{ marginTop: '0.2em' }}>
        Result: {output}
      </Typography>

    </Container>
  );
}



export default MainColorCodeFormatConverter;
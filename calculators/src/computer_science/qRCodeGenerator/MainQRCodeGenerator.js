import React, { useState, useRef } from 'react';
import { Container, Typography, Button } from '@mui/material';
import QRCode from 'qrcode.react';

function MainQRCodeGenerator() {
    const [url, setUrl] = useState('https://www.google.com');
    const [qrCodeImage, setQRCodeImage] = useState(null);
    const qrCodeRef = useRef(null);

    const generateQRCode = () => {
        const qrCodeDataUrl = qrCodeRef.current.toDataURL('image/png');
        setQRCodeImage(qrCodeDataUrl);

    }
    function saveCanvasAsImage() {
        const canvas = document.getElementById('QRCodeCanvas');
        const image = new Image();
        image.src = canvas.toDataURL('image/png');
        const a = document.createElement('a');
        a.href = image.src;
        a.download = "QRCode.png";
        a.click();
    }
    return (
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: '10' }}>
            <Typography pt={1} variant='h5' sx={{ textAlign: "center" }}>QR Code Generator</Typography>
            <hr />
            <br />
            <div className='mainContainer' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <input
                    style={{ display: 'block', width: '100%', textAlign: 'center', marginBottom: '20px' }}
                    type="text"
                    placeholder="Enter URL"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    onClick={(e) => e.target.select()}
                />
                <div ref={qrCodeRef}>
                    <QRCode id='QRCodeCanvas' value={url} size={256} />
                </div>
                <br />
                <Button variant="contained" onClick={saveCanvasAsImage}>Download QR Code</Button>
            </div>
        </Container>
    );
}

export default MainQRCodeGenerator;

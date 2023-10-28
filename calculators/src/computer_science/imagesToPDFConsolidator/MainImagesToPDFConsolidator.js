import React, { useState } from 'react';
import { Button, Typography, Paper, Link, Chip } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { jsPDF } from "jspdf";

function MainImagesToPDFConsolidator() {
    const [image, setImage] = useState(null);
    const [download, setDownload] = useState(null);
    const [view, setView] = useState(null);
    const [isComplete, setIsComplete] = useState(false);

    const handleImage = (e) => {
        const files = e.target.files;
        const images = [];

        for (let i = 0; i < files.length; i++) {
            images.push(URL.createObjectURL(files[i]));
        }

        setImage(images);
    };

    const handleConvert = () => {
        const doc = new jsPDF("p", "mm", "a4");

        const defaultWidth = 210;
        const defaultHeight = 297;

        image.forEach((img, index) => {
            const imgWidth = doc.getImageProperties(img).width;
            const imgHeight = doc.getImageProperties(img).height;
            const ratio = imgWidth / imgHeight;
            const width = defaultWidth;
            const height = width / ratio;

            doc.addImage(img, "JPEG", 0, 0, width, height);

            if (index < image.length - 1) doc.addPage();
        });

        const pdf = doc.output("dataurlstring");
        setDownload(pdf);
        setView(doc.output("bloburl"));
        setIsComplete(true);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Typography variant="h3" gutterBottom>
                Image To Pdf
            </Typography>
            <Typography variant="overline" align="center">
                Convert multiple images into a single pdf.
            </Typography>
            
            <Paper style={{ padding: '40px 100px', margin: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <label
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '20px',
                        backgroundColor: 'white',
                        color: 'blue',
                        borderRadius: '8px',
                        border: '1px solid blue',
                        cursor: 'pointer',
                        marginRight: '0px',
                    }}
                >
                    <CloudUploadIcon style={{ width: '40px', height: '40px' }} />
                    <span style={{ marginTop: '10px', fontSize: '16px' }}>Select Images</span>
                    <input id="file" type="file" style={{ display: 'none' }} multiple onChange={handleImage} accept="image/png, image/jpeg" />
                </label>
                {image ? (
                    <Button
                        variant="contained"
                        color="primary"
                        style={{ marginTop: '30px' }}
                        onClick={handleConvert}
                    >
                        Convert
                    </Button>
                ) : null}
            </Paper>
            {isComplete && (
                <Chip label="PDF Created Successfully!" />
            )}
            {isComplete && (
                <div id="pdfViewAndDl" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: '10px' }}>

                        <Link href={view} target="_blank">
                            <Button variant="contained" color="success" >
                                View Pdf
                            </Button>
                        </Link>
                        <Button
                            variant="outlined"
                            color="success"
                            href={download}
                            style={{ margin: '10px' }}
                            download="imageToPdf.pdf"
                        >
                            Download
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MainImagesToPDFConsolidator;

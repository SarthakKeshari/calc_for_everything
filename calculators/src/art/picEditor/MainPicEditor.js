import React, { useState } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { ReactPhotoEditor } from 'react-photo-editor';
import 'react-photo-editor/dist/style.css';

function MainPicEditor() {
    // State to hold the selected file
    const [file, setFile] = useState(null);
    // State to control the visibility of the modal/photo editor
    const [showModal, setShowModal] = useState(false);

    // Function to show the modal if a file is selected
    const showModalHandler = () => {
        if (file) {
            setShowModal(true);
        } else {
            alert("Please select a file to edit.");
        }
    };

    // Function to hide the modal
    const hideModal = () => {
        setShowModal(false);
    };

    // Function to handle the save action from the photo editor
    const handleSaveImage = (editedFile) => {
        // Create a URL for the edited file
        const url = URL.createObjectURL(editedFile);

        // Create a temporary link element for downloading the file
        const link = document.createElement('a');
        link.href = url;
        link.download = editedFile.name; // Name of the file for download

        // Programmatically click the link to trigger the download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Revoke the created URL to free up memory
        URL.revokeObjectURL(url);

        hideModal(); // Close the modal after saving
    };

    // Function to update the file state when a new file is selected
    const setFileData = (e) => {
        if (e?.target?.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    };

    // Render the component
    return (
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: 4, textAlign: "center" }}>
            <Typography variant="h5" sx={{ mb: 3 }}>Pic Editor</Typography>
            <Box sx={{ mb: 2 }}>
                {/* File upload button */}
                <Button
                    variant="contained"
                    component="label"
                    sx={{ marginRight: 2 }}
                >
                    Upload File
                    <input
                        type="file"
                        hidden
                        onChange={setFileData}
                        multiple={false}
                    />
                </Button>
                {/* Button to open the photo editor */}
                <Button variant="contained" onClick={showModalHandler} disabled={!file}>
                    Edit
                </Button>
            </Box>
            {/* React Photo Editor Modal */}
            {showModal && (
                <ReactPhotoEditor
                    open={showModal}
                    onClose={hideModal}
                    file={file}
                    onSaveImage={handleSaveImage}
                />
            )}
        </Container>
    );
}

export default MainPicEditor;

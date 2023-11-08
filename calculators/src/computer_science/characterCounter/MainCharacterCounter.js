import React, { useState } from 'react';
import { Container, Typography,TextField } from '@mui/material';


function MainCharacterCounter() {
    const [text, setText] = useState('');
    const [characterCount, setCharacterCount] = useState(0);
    const [wordCount, setWordCount] = useState(0);
    const [spaceCount, setSpaceCount] = useState(0);
    const [tabCount, setTabCount] = useState(0);
    const [lineBreakCount, setLineBreakCount] = useState(0);
    const [characterFrequency, setCharacterFrequency] = useState({});

    const handleTextChange = (event) => {
        const newText = event.target.value;
        setText(newText);
        countCharacters(newText);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Tab') {
            event.preventDefault();
            const { selectionStart, selectionEnd, value } = event.target;
            const newValue =
                value.substring(0, selectionStart) +
                '\t' +
                value.substring(selectionEnd);
            setText(newValue);
            setTabCount(tabCount + 1); 
            event.target.setSelectionRange(selectionStart + 1, selectionStart + 1);
        }
    };


    const countCharacters = (text) => {
        const characters = text.split('');
        const words = text.trim().split(/[\s]+/);

        const uniqueCharacters = [...new Set(text.replace(/\s/g, ""))];

        setCharacterCount(text.replace(/\s/g, "").length);
        setWordCount(words.length);
        setSpaceCount(characters.filter((char) => char === ' ').length);
        setTabCount(characters.filter((char) => char === '\t').length);
        setLineBreakCount(characters.filter((char) => char === '\n').length);

        const frequency = {};
        uniqueCharacters.forEach((char) => {
            frequency[char] = characters.filter((c) => c === char).length;
        });
        setCharacterFrequency(frequency);
    };

    return (
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: '10' }}>
            <Typography pt={1} variant="h5" sx={{ textAlign: 'center' }}>
                Character Counter
            </Typography>
            <hr />
            <br />
            <TextField
                label="Enter text"
                multiline
                rows={4}
                value={text}
                onChange={handleTextChange}
                fullWidth
                inputProps={{
                    style: { whiteSpace: 'pre' },
                    onKeyDown: handleKeyDown,
                }}
            />
            <br />
            <br />
            <Typography variant="body1">Character Count: {characterCount}</Typography>
            <Typography variant="body1">Word Count: {wordCount}</Typography>
            <Typography variant="body1">Space Count: {spaceCount}</Typography>
            <Typography variant="body1">Tab Count: {tabCount}</Typography>
            <Typography variant="body1">Line Break Count: {lineBreakCount}</Typography>
            <br />
            <Typography variant="h6">Character Frequency:</Typography>
            {Object.entries(characterFrequency).map(([char, count]) => (
                <Typography key={char} variant="body1">
                    {char}: {count}
                </Typography>
            ))}
        </Container>

            
    );
}

export default MainCharacterCounter;

import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';

function DataComparator() {
  const [file1Content, setFile1Content] = useState('');
  const [file2Content, setFile2Content] = useState('');
  const [differences, setDifferences] = useState([]);

  const handleCompare = () => {
    const lines1 = file1Content.split('\n');
    const lines2 = file2Content.split('\n');
    const diff = [];

    lines1.forEach((line, index) => {
      const words1 = line.split(' ');
      const words2 = lines2[index].split(' ');

      const differingWords = [];

      words1.forEach((word, i) => {
        if (word !== words2[i]) {
          differingWords.push({ index: i, word1: word, word2: words2[i] });
        }
      });

      if (differingWords.length > 0) {
        diff.push({
          line: index + 1,
          differingWords,
        });
      }
    });

    setDifferences(diff);
  };


  return (
    <div
      style={{
        maxWidth: '600px',
        margin: '0 auto',
        textAlign: 'center',
        padding: '20px',
        border: '2px solid #ccc',
        borderRadius: '10px',
        backgroundColor: '#f8f8f8',
      }}
    >
      <h1>File/Data Comparator</h1>
      <div style={{ marginBottom: '20px', textAlign: 'left' }}>
        <label style={{ fontWeight: 'bold', marginBottom: '5px', display: 'block', marginRight: '17rem' }}>File 1:</label>
        <textarea
          value={file1Content}
          onChange={(e) => setFile1Content(e.target.value)}
          style={{
            width: '100%',
            height: '150px',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            resize: 'none',
          }}
        />
      </div>
      <div style={{ marginBottom: '20px', textAlign: 'left' }}>
        <label style={{ fontWeight: 'bold', marginBottom: '5px', display: 'block', marginRight: '17rem' }}>File 2:</label>
        <textarea
          value={file2Content}
          onChange={(e) => setFile2Content(e.target.value)}
          style={{
            width: '100%',
            height: '150px',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            resize: 'none',
          }}
        />
      </div>
      <button
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={handleCompare}
      >
        Compare
      </button>
      {differences.length > 0 ? (
        <div style={{ textAlign: 'left' }}>
          <h2 style={{ fontSize: '1.2em' }}>Differences:</h2>
          <ul style={{ listStyle: 'none', padding: '0' }}>
            {differences.map((diff, index) => (
              <li key={index} style={{ margin: '5px 0' }}>
                Para {diff.line}:{' '}
                {diff.differingWords.map((word, i) => (
                  <span key={i} style={{ borderBottom: '1px solid red' }}>
                    {i > 0 && ', '}
                    {word.word1}
                  </span>
                ))}{' '}
                <b>VS</b>{' '}
                {diff.differingWords.map((word, i) => (
                  <span key={i} style={{ borderBottom: '1px solid red' }}>
                    {i > 0 && ', '}
                    {word.word2}
                  </span>
                ))}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div style={{ textAlign: 'left' }}>
          <h2 style={{ fontSize: '1.2em' }}>No Differences</h2>
        </div>
      )}


    </div>
  );
}

function MainFileDataComparator() {
  return (
    <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: 10 }}>
      <Typography pt={1} variant='h5' sx={{ textAlign: "center" }}>File/Data Comparator</Typography>
      <hr />
      <br />
      <DataComparator />
    </Container>
  )
}

export default MainFileDataComparator;

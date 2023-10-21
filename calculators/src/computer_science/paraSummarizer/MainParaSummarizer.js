import React, { useState } from "react";
import Button from '@mui/material/Button';
import stoplist from './Summary'
import "./MainParaSummarizer.css";

function MainParaSummarizer() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const summarizeText = () => {
    setIsLoading(true);

    const sents = text
    .replace(/\.+/g, ".|")
      .replace(/\?/g, "?|")
      .replace(/\!/g, "!|")
      .split("|");
    sents.pop();
    const document = sents.map((sentencz) => {
      const wordz = sentencz.split(" ").filter((n) => !stoplist.includes(n));
      const count = wordz.reduce((count, word) => {
        const match = word;
        wordz.forEach((word2) => {
          if (word2 === match) count++;
        });
        return count;
      }, 0);
      const frequency = count / wordz.length;
      return {
          sentence: sentencz,
        words: wordz,
        score: 0,
        frequency,
      };
    });

    document.sort((a, b) => b.frequency - a.frequency);

    if (document.length >= 5) {
      const summaryText = `${sents[0]} - ${document[1].sentence} - ${document[2].sentence} - ${document[3].sentence} - ${document[4].sentence}`;
      setSummary(summaryText);
    } else {
      alert("Please enter at least 5 sentences");
    }

    setIsLoading(false);
  };

  return (
    <>
      <div className="summarizer_body">
        <h1 className="text-center">Paragraph Summarizer</h1>
        <div className="col md-8 summarizer_container">
          <textarea
            className="summarizer_textarea"
            placeholder="Enter your paragraph here..."
            rows="6"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <div className="container-fluid">
            <Button variant="contained" sx={{margin:'20px'}} onClick={summarizeText}>Summarize</Button>
          </div>

          {isLoading && <p className="loading-message">Summarizing...</p>}
          {summary && (
            <div className="summary">
              <h2 style={{ textAlign: "center" }}>Summary:</h2>
              <p style={{ fontSize: "15px", color: "black" }}>{summary}</p>
            </div>
          )}
          <div>5 Sentence Summary</div>
          <span></span>
        </div>
      </div>
    </>
  );
}

export default MainParaSummarizer;
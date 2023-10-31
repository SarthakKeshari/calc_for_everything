import React, { useState, useRef } from 'react';
import { Container, Typography } from '@mui/material';

function MainStopwatch() {
    const [time, setTime] = useState(0);
    const [laps, setLaps] = useState([]);
    const [running, setRunning] = useState(false);
    const [lapTime, setLapTime] = useState(0); // 单圈时间
    const timerRef = useRef(null);

    const startTimer = () => {
        if (!running) {
            timerRef.current = setInterval(() => {
                setTime(prevTime => prevTime + 10);
            }, 10);
            setRunning(true);
        }
    };

    const pauseTimer = () => {
        if (running) {
            clearInterval(timerRef.current);
            setRunning(false);
        }
    };

    const resumeTimer = () => {
        if (!running) {
            timerRef.current = setInterval(() => {
                setTime(prevTime => prevTime + 10);
            }, 10);
            setRunning(true);
        }
    };

    const resetTimer = () => {
        clearInterval(timerRef.current);
        setTime(0);
        setLaps([]);
        setRunning(false);
        setLapTime(0);
    };

    const addLap = () => {
        setLaps(prevLaps => [...prevLaps, time]);
    };

    const handleLapTimeChange = e => {
        const inputLapTime = parseInt(e.target.value);

        if (!isNaN(inputLapTime) && inputLapTime > 0) {
            setLapTime(inputLapTime);
        } else {
            setLapTime(0);
        }
    };

    const lapCount = laps.length > 0 ? Math.floor(time / lapTime) : 0;

    return (
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: '10' }}>
            <Typography pt={1} variant="h5" sx={{ textAlign: 'center' }}>
                Stopwatch
            </Typography>
            <hr />
            <br />
            <div style={{ textAlign: 'center' }}>
                <Typography variant="h4">{(time / 1000).toFixed(2)} s</Typography>
                {lapTime > 0 && (
                    <div>
                        <Typography variant="h6">Laps: {lapCount}</Typography>
                    </div>
                )}
                <br />

                <br />
                <button onClick={startTimer}>Start</button>
                <button onClick={pauseTimer}>Pause</button>
                <button onClick={resumeTimer}>Resume</button>
                <button onClick={resetTimer}>Reset</button>
                <button onClick={addLap}>Add Lap</button>
            </div>
            {laps.length > 0 && (
                <div style={{ marginTop: '20px' }}>
                    <Typography variant="h6">Laps:</Typography>
                    <ol>
                        {laps.map((lap, index) => (
                            <li key={index}>{`Lap ${index + 1}: ${(lap / 1000).toFixed(2)} s`}</li>
                        ))}
                    </ol>
                </div>
            )}
        </Container>
    );
}

export default MainStopwatch;
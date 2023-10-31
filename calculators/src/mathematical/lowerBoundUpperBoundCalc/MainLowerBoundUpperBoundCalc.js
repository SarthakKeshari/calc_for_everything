import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';

function MainLowerBoundUpperBoundCalc() {
    const [setX, setSetX] = useState([]);
    const [setY, setSetY] = useState([]);
    const [setZLowerBound, setSetZLowerBound] = useState(null);
    const [setZUpperBound, setSetZUpperBound] = useState(null);
    const [isIntersection, setIsIntersection] = useState(true);

    const calculateBounds = () => {
        // 根据用户选择的关系进行计算
        let result;
        if (isIntersection) {
            result = setX.filter(value => setY.includes(value));
        } else {
            result = Array.from(new Set([...setX, ...setY]));
        }
        const lowerBound = Math.min(...result);
        const upperBound = Math.max(...result);
        setSetZLowerBound(lowerBound);
        setSetZUpperBound(upperBound);
    };

    return (
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: "10" }}>
            <Typography pt={1} variant='h5' sx={{ textAlign: "center" }}>Lower Bound - Upper Bound Calculator</Typography>
            <hr />
            <br />

            <div>
                <label>Set X:</label>
                <input type="text" value={setX} onChange={e => setSetX(e.target.value.split(','))} />
            </div>
            <div>
                <label>Set Y:</label>
                <input type="text" value={setY} onChange={e => setSetY(e.target.value.split(','))} />
            </div>

            <label>
                <input
                    type="radio"
                    value="intersection"
                    checked={isIntersection}
                    onChange={() => setIsIntersection(true)}
                />
                Intersection
            </label>
            <label>
                <input
                    type="radio"
                    value="union"
                    checked={!isIntersection}
                    onChange={() => setIsIntersection(false)}
                />
                Union
            </label>

            <button onClick={calculateBounds}>Calculate Bounds</button>

            {setZLowerBound !== null && setZUpperBound !== null && (
                <div>
                    <p>Lower Bound: {setZLowerBound}</p>
                    <p>Upper Bound: {setZUpperBound}</p>
                </div>
            )}
        </Container>
    );
}

export default MainLowerBoundUpperBoundCalc;
import React, { useState } from 'react';

const AngleClassifier = ({ angle }) => {
  let classification = '';
  let textColorClass = 'green';

  if (angle === 0) {
    classification = 'Zero Angle';
  } else if (angle > 0 && angle < 90) {
    classification = 'Acute Angle';
  } else if (angle === 90) {
    classification = 'Right Angle';
  } else if (angle > 90 && angle < 180) {
    classification = 'Obtuse Angle';
  } else if (angle === 180) {
    classification = 'Straight Angle';
  } else if (angle > 180 && angle < 360) {
    classification = 'Reflex Angle';
  } else if (angle === 360) {
    classification = 'Complete Angle';
  } else if (angle < 0 || angle > 360) {
    classification = 'Provide angle between 0 and 360 degrees only';
    textColorClass = 'red'; 
  }

  const textStyle = {
    fontSize: '18px',
    marginTop: '10px',
    color: textColorClass,
    fontWeight: 'bold',
  };

  const textClass = `result-text ${textColorClass}`;

  return (
    <div className="result-display">
      <h2>Angle Classification:</h2>
      <p style={textStyle} className={textClass}>
        {classification}
      </p>
    </div>
  );
};

const MainAngleTypeClassifier = () => {
  const [inputAngle, setInputAngle] = useState('');
  const [angleResult, setAngleResult] = useState(null);

  const handleAngleInputChange = (event) => {
    setInputAngle(event.target.value);
  };

  const handleAngleClassification = () => {
    const angleValue = parseFloat(inputAngle);
    if (!isNaN(angleValue)) {
      setAngleResult(angleValue);
    } else {
      setAngleResult(null);
    }
  };

  return (
    <div className="container">
      <h1>Angle Type Classifier</h1>
      <div className="input-form">
        <input
          className="input-field"
          type="text"
          placeholder="Enter an angle in degrees"
          value={inputAngle}
          onChange={handleAngleInputChange}
        />
        <button className="submit-button" onClick={handleAngleClassification}>
          Result
        </button>
      </div>
      {angleResult !== null && <AngleClassifier angle={angleResult} />}
    </div>
  );
};

export default MainAngleTypeClassifier;

import React, { Component } from 'react';
import './MainBmi.css';

class BMICalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: '',
      height: '',
      unit: 'metric', 
      bmi: null,
    };
  }
  calculateBMI = () => {
    const { weight, height, unit } = this.state;
    const weightKg = unit === 'imperial' ? weight * 0.453592 : weight;
    const heightM = unit === 'imperial' ? height * 0.0254 : height;
    const bmi = (weightKg / (heightM * heightM)).toFixed(2);
    this.setState({ bmi });
  };

  handleUnitChange = (e) => {
    this.setState({ unit: e.target.value });
  };

  getBMICategory = (bmi) => {
    if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return 'Normal';
    } else if (bmi >= 24.9 && bmi < 29.9) {
      return 'Overweight';
    } else {
      return 'Obese';
    }
  };

  render() {
    const { weight, height, unit, bmi } = this.state;

    const pointerPosition =
      bmi < 18.5
        ? (bmi / 18.5) * 10
        : bmi >= 18.5 && bmi < 24.9
        ? 38 + ((bmi - 18.5) / 6.4) * 10
        : bmi >= 24.9 && bmi < 29.9
        ? 50 + ((bmi - 24.9) / 5) * 10
        : 90;

    return (
      <div className="bmi-container">
        <h1>BMI Calculator</h1>
        <div className="cred-container">
          <label>
            Weight ({unit === 'metric' ? 'kg' : 'lbs'}):
            <input
              type="number"
              value={weight}
              onChange={(e) => this.setState({ weight: e.target.value })}
            />
          </label>
        </div>
        <div>
          <label>
            Height ({unit === 'metric' ? 'm' : 'in'}):
            <input
              type="number"
              value={height}
              onChange={(e) => this.setState({ height: e.target.value })}
            />
          </label>
        </div>
        <div>
          <label>
            Unit:
            <select value={unit} onChange={this.handleUnitChange}>
              <option value="metric">Metric (kg/m)</option>
              <option value="imperial">Imperial (lbs/in)</option>
            </select>
          </label>
        </div>
        <button
          onClick={this.calculateBMI}
          style={{ margin: '10px 5px', fontSize: '15px' }}
        >
          Calculate BMI
        </button>
        {bmi && (
          <div className="bmi-result">
            <h2>Your BMI: {bmi}</h2>
            <div className="bmi-scale">
              <div
                className="pointer"
                style={{ left: `${pointerPosition}%` }}
              ></div>
              <div className="scale">
                <div>Underweight</div>
                <div>Normal</div>
                <div>Overweight</div>
                <div>Obese</div>
              </div>
            </div>
            <p className="bmi-category">
              You are in the{' '}
              <strong>{this.getBMICategory(parseFloat(bmi))}</strong> category.
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default BMICalculator;

import React, { Component } from 'react';
import './mainLCMCalc.css';
import InfoLCMCalc from './InfoLCMCalc';

class MainLCMCalc extends Component {
  constructor() {
    super();
    this.state = {
      numberOfInputs: 2,
      numbers: ['', ''],
      result: null,
    };
  }

  handleInputChange = (e, index) => {
    const { value } = e.target;
    const numbers = [...this.state.numbers];

    if (value > 1000) {
      alert('Please enter a value less than or equal to 1000');
      return;
    }

    numbers[index] = value;
    this.setState({ numbers });
  };

  handleNumberOfInputsChange = (e) => {
    const numberOfInputs = parseInt(e.target.value, 10);
    this.setState({ numberOfInputs, numbers: Array(numberOfInputs).fill('') });
  };

  calculateLCM = () => {
    const numbers = this.state.numbers.filter(num => num !== '').map(num => parseInt(num, 10));
    if (numbers.length < 2) {
      alert('Please enter at least two numbers.');
      return;
    }

    // Calculate the LCM using a helper function (e.g., from a library)
    const lcm = this.calculateLCMForArray(numbers);
    this.setState({ result: lcm });
  };

  calculateLCMForArray = (arr) => {
    // Implement your LCM calculation logic here
    let lcm = arr[0];
    for (let i = 1; i < arr.length; i++) {
      lcm = (lcm * arr[i]) / this.findGCD(lcm, arr[i]);
    }
    return lcm;
  };

  findGCD = (a, b) => {
    while (b) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  };

  render() {
    return (
      <div className="lcm-generator-container" style={{marginTop:'50px'}}>
        <h2 className='my-3'><strong><i>LCM Generator</i> <InfoLCMCalc/> </strong></h2>
        <label className='my-5'>Select the number of inputs : </label>
        <select className='m-2'
  value={this.state.numberOfInputs}
  onChange={this.handleNumberOfInputsChange}
>
  <option value={2}>2</option>
  <option value={3}>3</option>
  <option value={4}>4</option>
  <option value={5}>5</option>
  <option value={6}>6</option>
</select>

        <form>
          {this.state.numbers.map((num, index) => (
            <input
              key={index}
              type="number"
              value={num}
              onChange={(e) => this.handleInputChange(e, index)}
              placeholder={`Number ${index + 1}`}
              min="1"
              max="1000"
              className="small-input"
            />
          ))}
        </form>
        <button className='my-2' onClick={this.calculateLCM}>Calculate LCM</button>
        {this.state.result && (
          <p className="my-2 result" style={{ color: "green" }}>
            LCM : {this.state.result}
          </p>
        )}
      </div>
    );
  }
}

export default MainLCMCalc;

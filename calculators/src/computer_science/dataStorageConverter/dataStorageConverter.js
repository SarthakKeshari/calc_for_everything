import React, { Component } from 'react';

class Converter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputUnit: 'bits',
      outputUnit: 'bits',
      inputValue: 0,
      result: 0,
    };
  }

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value }, this.convert);
  };

  handleInputUnitChange = (event) => {
    this.setState({ inputUnit: event.target.value }, this.convert);
  };

  handleOutputUnitChange = (event) => {
    this.setState({ outputUnit: event.target.value }, this.convert);
  };

  convert = () => {
    const { inputValue, inputUnit, outputUnit } = this.state;
    let result = parseFloat(inputValue);

    // Convert the input to bits
    if (inputUnit === 'bytes') {
      result *= 8;
    } else if (inputUnit === 'KB') {
      result *= 8 * 1024;
    } else if (inputUnit === 'MB') {
      result *= 8 * 1024 * 1024;
    } else if (inputUnit === 'GB') {
      result *= 8 * 1024 * 1024 * 1024;
    } else if (inputUnit === 'TB') {
      result *= 8 * 1024 * 1024 * 1024 * 1024;
    }

    // Convert the result to the desired output unit
    if (outputUnit === 'bytes') {
      result /= 8;
    } else if (outputUnit === 'KB') {
      result /= 8 * 1024;
    } else if (outputUnit === 'MB') {
      result /= 8 * 1024 * 1024;
    } else if (outputUnit === 'GB') {
      result /= 8 * 1024 * 1024 * 1024;
    } else if (outputUnit === 'TB') {
      result /= 8 * 1024 * 1024 * 1024 * 1024;
    }

    this.setState({ result });
  };

  render() {
    return (
      <div>
        <h1>Unit Converter</h1>
        <div>
          <input
            type="number"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <select value={this.state.inputUnit} onChange={this.handleInputUnitChange}>
            <option value="bits">Bits</option>
            <option value="bytes">Bytes</option>
            <option value="KB">Kilobytes</option>
            <option value="MB">Megabytes</option>
            <option value="GB">Gigabytes</option>
            <option value="TB">Terabytes</option>
          </select>
          <span> = </span>
          <span>{this.state.result} {this.state.outputUnit}</span>
          <select value={this.state.outputUnit} onChange={this.handleOutputUnitChange}>
            <option value="bits">Bits</option>
            <option value="bytes">Bytes</option>
            <option value="KB">Kilobytes</option>
            <option value="MB">Megabytes</option>
            <option value="GB">Gigabytes</option>
            <option value="TB">Terabytes</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Converter;

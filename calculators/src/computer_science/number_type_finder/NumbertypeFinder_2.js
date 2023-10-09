import React, { useState } from 'react';

function App() {
  const [selectedOption, setSelectedOption] = useState('taxicab');
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  const options = [
    { label: 'Taxicab Number Finder', value: 'taxicab' },
    { label: 'Zeisel Number Checker', value: 'zeisel' },
    { label: 'Pancake Number Calculator', value: 'pancake' },
    { label: 'Zuckerman Number Finder', value: 'zuckerman' },
  ];

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    setInputValue('');
    setResult('');
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputSubmit = () => {
    // Depending on the selected option, perform the corresponding action
    if (selectedOption === 'taxicab') {
      // Handle taxicab logic here
      
        const limit = parseInt(inputValue);
        const number = limit.toString();
        const taxicabNumbers = findTaxicabNumbers(number);
        setResult(`${number} is ${taxicabNumbers ? 'a taxicab' : 'not a taxicab'} number.`);
      
      // ...
    } else if (selectedOption === 'zeisel') {
      // Handle zeisel logic here
      const number = parseInt(inputValue);
      const isZeisel = isZeiselNumber(number);
      setResult(`${number} is ${isZeisel ? 'a Zeisel' : 'not a Zeisel'} number.`);
      // ...
    } else if (selectedOption === 'pancake') {
      // Handle pancake logic here
      const number = parseInt(inputValue);
      const pancakeNum = calculatePancakeNumber(number);
      setResult(`${number} is ${pancakeNum ? 'a pancake' : 'not a pancake'} number.`);
      // ...
    } else if (selectedOption === 'zuckerman') {
      // Handle zuckerman logic here
      const limit = parseInt(inputValue);
      const zuckermanNumbers = findZuckermanNumbers(limit);
      setResult(`${limit} is ${zuckermanNumbers ? 'a zuckerman' : 'not a Zuckerman'} number.`);
      // ...
    }
  };

  return (
    <div className="App">
      <h1>Number Tools</h1>
      <select value={selectedOption} onChange={handleOptionChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={`Enter ${selectedOption === 'pancake' ? 'the number of pancakes' : 'a number'}`}
      />
      <button onClick={handleInputSubmit}>Submit</button>
      <p>{result}</p>
    </div>
  );
}

export default App;


function isZeiselNumber(num) {
  if (Math.sqrt(num) == Math.floor(Math.sqrt(num)))
          return false;
  var count = 0, str = num, i=0,a=1 ,b=0;
  var fac = 2;
      while (num != 1) {
          // code block to be executed
          if(num % fac == 0) {
              count++;
              num /= fac;
          }
          else 
              fac++;
        }
        num = str;
      fac = 2;
      // storing factors in array
      var fact = [count];
      while (num != 1) {
          if(num % fac == 0) { 
              fact[i] = fac;
              i+=1;
              num /= fac;
          } else
              fac+=1;
      }
      if(i < 3)
          return false;
  
      while(a < fact[1]) {
          b = fact[0] - a;
              for(i = 1; i < count; i++) {
                  if(fact[i] != a*fact[i -1] + b) {
                      break;
                  }
              }
              if(i == count) {
                  return true;
              }
              a++;
          }
          return false;
}

// Function to calculate the factorial of a number


// Function to find Taxicab Numbers
function findTaxicabNumbers(limit) {
  const taxicabNumbers = ["2", "1729", "87539319", "6963472309248", "48988659276962496", "24153319581254312065344"];
  const numberString = limit.toString();
  for (let i = 0; i < taxicabNumbers.length; i++) {
    if (numberString === taxicabNumbers[i]) {
      return true;
    }
  }
  
  return false;
}

// Function to calculate the Pancake Number
function calculatePancakeNumber(number) {
  let i = 0, temp = 0;
  while( temp < number ){
    temp = ((i*i)+i+2)/2;
    if(temp === number)
      return true;
    i++
  }
  return false;
}

// Function to get product of digits
function getProduct( limit) {
  let product = 1;

  while (limit !== 0) {
      product = product * (limit % 10);
      limit = parseInt(limit / 10);
  }
  return product;
}
// Function to find Zuckerman Numbers (Placeholder)
function findZuckermanNumbers(limit) {
  
  // Add your code for finding Zuckerman Numbers here (if applicable)
  if(limit % getProduct(limit) === 0){
    return 1;
  }else{
    return 0;
  }
} 
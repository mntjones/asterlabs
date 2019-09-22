import React, { Component } from 'react';
import './style/Calculator.css';


// inital investment + annual investment, with annual rate calculated yearly
function displayFutureValue() {

	// Get user input from the text field that has the id.
	var principal = parseFloat(document.getElementById('principal').value);
	var annualRate = parseFloat(document.getElementById('annualRate').value);
	var annualInvestment = parseFloat(document.getElementById('annualInvestment').value);
	var years = parseFloat(document.getElementById('years').value);
	
	// Call the function computeFutureValue(principal, annualRate, years)
	// and store the value returned by function in a variable
	var futureValue = computeFutureValue(principal, annualInvestment, annualRate, years);
	
	// Display the result
	document.getElementById('outputDiv').innerHTML = 'Future Value is $ ' + futureValue;
}
 

function computeFutureValue(principal, annualInvestment, annualRate, years) {

	let f = 0;
	let hold
	let jan = principal * annualRate;
	// Compute and return the future value of an investment.
	for (let i=0; i<years; i++){

		// my math is wrong, but the idea is ok
		hold = jan + annualInvestment;

		f = (f + hold) * (1 + annualRate);
		
	}
	
 
 	console.log(f)
	return f.toFixed(2);
 
}



class Calculator extends Component {
  
  reset = event => {
  	event.preventDefault()
		document.getElementById("investment").reset();
		document.getElementById("outputDiv").innerHTML = "Future Investment: ";
	}

	handleOnSubmit = event => {
    event.preventDefault()
    displayFutureValue()
  }


  render () {

    return (
      <div className="Calculator">
      	<h1>529 Investment Calculator</h1><br/>

      	<div className="form-div">
				<form id="investment" onSubmit={this.handleOnSubmit}>
					<label>Initial Investment (principal)</label> 
					<input type="text" id="principal"/><br/> <br/>
					<label>Annual Investment (yearly payments)</label> 
					<input type="text" id="annualInvestment"/><br/> <br/>
					<label>Annual rate (example: .065)</label> 
					<input type="text" id="annualRate" /> <br/><br/>
					<label>Number of years</label>
					<input type="text" id="years"/><br/> <br/>
					<br/>

					<button type="submit">Compute future value</button> 
					<button type="reset" value="Reset form" onClick={this.reset}>Reset</button>
		
				</form>
				<br/><br/>
				<p id="outputDiv"></p>
				</div>
				
        
      </div>
    );
  } 
}

export default Calculator;
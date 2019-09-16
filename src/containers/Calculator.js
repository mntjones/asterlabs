import React, { Component } from 'react';
import './Calculator.css';


function displayFutureValue() {

	// Get user input from the text field that has the id.
	var principal = parseFloat(document.getElementById('principal').value);
	var annualRate = parseFloat(document.getElementById('annualRate').value);
	var years = parseFloat(document.getElementById('years').value);
	
	// Call the function computeFutureValue(principal, annualRate, years)
	// and store the value returned by function in a variable
	var futureValue = computeFutureValue(principal, annualRate, years);
	
	// Display the result
	document.getElementById('outputDiv').innerHTML = 'Future Value is $ ' + futureValue;
}
 

function computeFutureValue(principal, annualRate, years) {

	// Compute and return the future value of an investment.
	var f = principal * Math.pow(1 + annualRate, years);
 
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

				<form id="investment" onSubmit={this.handleOnSubmit}>
					<label>Initial Investment (principal)</label> 
					<input type="text" id="principal"/><br/> <br/>
					<label>Annual rate (example: .065)</label> 
					<input type="text" id="annualRate" /> <br/><br/>
					<label>Number of years</label>
					<input type="text" id="years"/><br/> <br/>
					<br/>

					<button type="submit">Compute future value</button> 
					<br/><br/>
					<button type="reset" value="Reset form" onClick={this.reset}>Reset</button>
					<br/><br/><br/><br/>
				</form>

				<h2 id="outputDiv"></h2>
        
      </div>
    );
  } 
}

export default Calculator;
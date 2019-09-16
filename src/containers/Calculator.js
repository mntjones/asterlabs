import React, { Component } from 'react';
import './Calculator.css';


function doFV() {

	// Get user input from the text field that has the id.
	var principal = parseFloat(document.getElementById('principal').value);
	var annualRate = parseFloat(document.getElementById('annualRate').value);
	var years = parseFloat(document.getElementById('years').value);

	
	// Call the function computeFutureValue(principal, annualRate, years, periodsPerYear)
	// and store the value returned by function in a variable
	var f = computeFutureValue(principal, annualRate, years);
	
	// Display the result
	document.getElementById('outputDiv').innerHTML = 'Future Value is $ ' + f;
}
 

 function computeFutureValue(principal, annualRate, years, periodsPerYear) {

	// Compute and return the future value of an investment.
	var f = principal * Math.pow(1 + annualRate, (years * periodsPerYear));
 
	return f.toFixed(2);
 
}

	// Reset the form


class Calculator extends Component {
  
  
  
  reset = event => {
  	event.preventDefault()
		document.getElementById("Calculator").reset();
	}

	handleOnSubmit = event => {
    event.preventDefault()
    doFV()
  }


  render () {

    return (
      <div className="Calculator">
      	<h1>529 Investment Calculator</h1><br/>

				<form onSubmit={this.handleOnSubmit}>
					<label>Initial Investment (principal)</label> 
					<input type="text" id="principal" size=10><br/> <br/>
					<label>Annual rate (example: .065)</label> 
					<input type="text" id="annualRate" size=10 style="float: left;"> <br/><br/>
					<label>Number of years</label>
					<input type="text" id="years" size=10><br/> <br/>
					<br/>

					<button type="submit">Compute future value</button> 
					<br/><br/>
					<button type="reset" value="Reset form" 
					onClick=e=>{this.reset(e)}>Reset</button>
					<br/><br/><br/><br/>
				</form>
        
      </div>
    );
  } 
}

export default Calculator;
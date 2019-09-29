import React from 'react';
import ReactDOM from 'react-dom';
import * as V from 'victory';
import Calculator from './Calculator.js'
import { VictoryBar, VictoryChart, VictoryAxis,
        VictoryTheme, VictoryStack } from 'victory';

const earnings = [
  {year: 1, earnings: 1000},
  {year: 2, earnings: 2100},
  {year: 3, earnings: 3200},
  {year: 4, earnings: 4300},
  {year: 5, earnings: 5400},
  {year: 6, earnings: 6500},
  {year: 7, earnings: 7600},
  {year: 8, earnings: 8700},
  {year: 9, earnings: 9800},
  {year: 10, earnings: 11500}
];

const investment = [
  {year: 1, investment: 1000},
  {year: 2, investment: 2100},
  {year: 3, investment: 3200},
  {year: 4, investment: 4300},
  {year: 5, investment: 5400},
  {year: 6, investment: 6500},
  {year: 7, investment: 7600},
  {year: 8, investment: 8700},
  {year: 9, investment: 9800},
  {year: 10, investment: 11500}
];

class ROIgraph extends React.Component {
  render() {
    return (
    	<VictoryChart>
	    	<VictoryBar
	        data={earnings}
	        // data accessor for x values
	        x="year"
	        // data accessor for y values
	        y="earnings"
	      />
	    </VictoryChart>
		)
	}
}

export default ROIgraph;



import React, { Component } from 'react';
import TabbedPane from './TabbedPane';
import Calculator from './Calculator';
import ROIgraph from './ROIgraph';
import './style/App.css';

class App extends Component {
  
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Should I open a 529?
          </h1>
        </header>

        <body>
          < TabbedPane />
          < Calculator />
          < ROIgraph />
        </body>
      </div>
    );
  } 
}

export default App;

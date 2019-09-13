import React, { Component } from 'react';
import TabbedCardContainer from './TabbedCardContainer';
import './App.css';

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
          < TabbedCardContainer />
        </body>
      </div>
    );
  } 
}

export default App;

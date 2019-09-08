import React from 'react';
import TabbedCardContainer from './TabbedCardContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Should I open a 529?
        </p>
      </header>

      <body>
        < TabbedCardContainer />
      </body>
    </div>
  );
}

export default App;

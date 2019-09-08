import React from 'react';
import TabbedCard from './TabbedCard';
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
      
      <TabbedArea>
        <TabPane display="What?">
            <div>
              <p>A 529 Plan is a tax-advantaged investment vehicle in the US designed 
              or encouraging saving for the future highter aducation expenses of a 
              designated benficiary. 
              </p>
              <p> You can use it for the costs of K-12 public, private and religious 
              school tuition. Also, for post-secondary school costs, such as tuition,
              books, supplies, equipment, room and board.
              </p>

              <p>Each state may have different rules for approved expenses, so please check local rules.</p>
            </div>
        </TabPane>
          <TabPane display="Why?">
            <div>With the Economic</div>
        </TabPane>
          <TabPane display="Concerns?">
            <div>Tab 3 Contents.</div>
          </TabPane>
        <TabPane display="Calculate">
            <div>Put in your initial investment and your monthly investment to see what your savings are in 5, 10, and 20 yrs.</div>
    
        </TabPane>
      </TabbedArea>

      </body>
    </div>
  );
}

export default App;

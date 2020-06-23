import React from 'react';
import componentJSON from './components';

function App() {
  return (
    <div className="App">
      <div>
        {
          componentJSON.map((type) => (
            <ol>
              {
                <div key={type.id}>
                  <h4>{type.name}</h4>
                  <ol>
                    {
                      type.items.map((item) =>
                        <li key={item.id}>
                          {item.name}
                          {<item.component />}
                        </li>
                      )
                    }
                  </ol>
                </div>
              }
            </ol>
          ))}
      </div>
    </div>
  );
}

export default App;

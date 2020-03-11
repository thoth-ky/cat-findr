import React from 'react';
import { NavigationBar } from './components/NavBar';
import './App.css';

function App() {
  return (
    <div className="App" >
      <header className="App-header">
        <NavigationBar/>
      </header>
      {/* <NavigationBar/> */}
      <div className="App-Body">
        BODY HERE
      </div>
    </div>
    // <div>
    //   <NavigationBar/>
    // </div>
  );
}

export default App;

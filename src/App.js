import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

// Local Imports
import { SearchComponent } from './components/SearchComponent';
import { FavsComponent } from './components/FavsComponent';
import { NavigationBar } from './components/NavBarComponent';
import { HomeComponent } from './components/HomeComponent'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App" >
        <header className="App-header">
          <NavigationBar/>
        </header>
        <div className="App-Body">
          <Switch>
            <Route exact path='/' component={HomeComponent}/>
            <Route path='/home' component={HomeComponent}/>
            <Route path='/favs' component={FavsComponent}/>
            <Route path='/search' component={SearchComponent}/>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Import CSS
import './App.css';

// Import components
import Main from './components/Main';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Main>
            <Route exact path="/" component={PhotoGrid}/>
            <Route path="/s/:id" component={Single}/>
          </Main>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

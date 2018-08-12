import React from 'react';
import { Link } from 'react-router-dom'

class Main extends React.Component {

  render () {
    return (
      <div className="main-container">
        <header className="App-header">
          <h1 className="App-title">
            <Link to="/">
              Reduxgram
            </Link>
          </h1>
        </header>
      
        <div className="main-content">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Main;
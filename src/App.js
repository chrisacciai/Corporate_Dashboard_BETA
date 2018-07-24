import React, { Component } from 'react';
import './App.css';
import {Button} from 'react-bootstrap';
import ControlledTabs from './ControlledTabs';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">[BETA] Dash</h1>
          <Button className="Button1" bsStyle="primary">Export as PDF</Button>
        </header>
        <ControlledTabs/>
      </div>
    );
  }
}

export default App;
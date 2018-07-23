import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap';
import ControlledTabs from './ControlledTabs';
import Export from './Export';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">[BETA] Dash</h1>
          <Button className="Button1" onClick={new Export().printDocument()} bsStyle="primary">Export as PDF</Button>
        </header>
        <ControlledTabs/>
      </div>
    );
  }
}

export default App;
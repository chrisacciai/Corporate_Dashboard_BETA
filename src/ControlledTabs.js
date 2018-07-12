import React, { Component } from 'react';
import {Tab, Tabs} from 'react-bootstrap';
import Chart1 from './Chart1.js';
import Chart2 from './Chart2.js';
import Chart3 from './Chart3.js';
import Chart4 from './Chart4.js';
import Chart5 from './Chart5.js';
import Chart6 from './Chart6.js';

export default class ControlledTabs extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        key: 1
      };
    }
  
    handleSelect(key) {
      this.setState({ key });
    }
  
    render() {
      return (
        <Tabs
          activeKey={this.state.key}
          onSelect={this.handleSelect}
          id="controlled-tab-example">

          <Tab eventKey={1} title="Operations">
            <div class = "row">
              <div class = "column">
                <Chart1/>
                <Chart3/>
                <Chart5/>
              </div>
              <div class = "column">
                <Chart2/>
                <Chart4/>
                <Chart6/>
              </div>
            </div>
          </Tab>
          <Tab eventKey={2} title="Business Development">
            Tab 2 content
          </Tab>
          <Tab eventKey={3} title="Finance">
            Tab 3 content
          </Tab>
          <Tab eventKey={4} title="Research &amp; Development">
            Tab 2 content
          </Tab>
          <Tab eventKey={5} title="Safety">
            Tab 3 content
          </Tab>
          <Tab eventKey={6} title="PMO">
            Tab 2 content
          </Tab>
          <Tab eventKey={7} title="Human Resources">
            Tab 3 content
          </Tab>
        </Tabs>
      );
    }
}
import React, { Component } from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, LabelList, ResponsiveContainer} from 'recharts';
import {Panel} from 'react-bootstrap';
import firebase from '../Firebase.js';

export default class MChart1 extends Component {
    constructor() {
        super();
        this.state = {
          items: null,
          noteText: "",
        };
      }	

      componentDidMount() {
        const dataRef = firebase.database().ref('chartOneData');
        dataRef.on('value', (snapshot) => {
          let items = snapshot.val();
          let newState = [];
          newState.push({
            month: items.month1,
            pv: items.value1,
          });
          newState.push({
            month: items.month2,
            pv: items.value2,
          });
          newState.push({
            month: items.month3,
            pv: items.value3,
          });
          newState.push({
            month: items.month4,
            pv: items.value4,
          });
          newState.push({
            month: items.month5,
            pv: items.value5,
          });
          newState.push({
            month: items.month6,
            pv: items.value6,
          });

          this.setState({
            items: newState,
            noteText: items.noteText,
          });
        });
      }

      showNote() {
        if (this.state.noteText != "" && this.state.noteText != null)
          return <Panel bsStyle="primary" id="Mnote"><span>{this.state.noteText}</span></Panel>
    }

      render() {
        return (
          <div>
            <br/>
            <div>
              <p class="aligncenter">Example Metric</p>
            </div>
            <div id="masterContainer">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={this.state.items}
                  margin={{top: 10, right: 30, left: -18, bottom: 5}}>
                  <XAxis dataKey='month' tick={{fontSize: 12}} interval={0} padding={{left: 15}}/>
                  <YAxis tick={{fontSize: 12}}/>
                  <CartesianGrid strokeDasharray="3 3"/>
                  <Line type="monotone" dataKey="pv" stroke="#00C49F" activeDot={{r: 8}}>
                    <LabelList dataKey='pv' position='bottom' fontSize='12' />
                  </Line>
                </LineChart>
              </ResponsiveContainer>
            </div>
            {this.showNote()}
          </div>
        );
    }
}
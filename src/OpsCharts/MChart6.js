import React, { Component } from 'react';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, LabelList} from 'recharts';
import {Panel} from 'react-bootstrap';
import firebase from '../Firebase.js';

const toPercent = (decimal, fixed = 2) => {
    return `${(decimal * 100).toFixed(fixed)}%`;
  }
  
  const toPercentAxis = (decimal, fixed = 1) => {
    return `${(decimal * 100).toFixed(fixed)}%`;
  }

export default class MChart6 extends Component {
    constructor() {
        super();
        this.state = {
          items: null,
          noteText: "",
        };
      }	

      componentDidMount() {
        const dataRef = firebase.database().ref('chartSixData');
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
          newState.push({
            month: items.month7,
            pv: items.value7,
          });
          newState.push({
            month: items.month8,
            pv: items.value8,
          });
          newState.push({
            month: items.month9,
            pv: items.value9,
          });
          newState.push({
            month: items.month10,
            pv: items.value10,
          });
          newState.push({
            month: items.month11,
            pv: items.value11,
          });
          newState.push({
            month: items.month12,
            pv: items.value12,
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
            <div>
                <AreaChart data ={this.state.items} width={375} height={200}
                margin={{top: 10, right: 30, left: -18, bottom: 5}}>
                <XAxis dataKey='month' tick={{fontSize: 11}} interval={0} padding={{left: 20}}/>
                <YAxis tick={{fontSize: 11}} tickFormatter={toPercentAxis}/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Area type="monotone" dataKey="pv" dot stroke="#00C49F" fill="#00C49F">
                  <LabelList dataKey='pv' position='top' formatter={toPercent} fontSize='11' />
                </Area>
                </AreaChart>
            </div>
            {this.showNote()}
          </div>
        );
    }
}
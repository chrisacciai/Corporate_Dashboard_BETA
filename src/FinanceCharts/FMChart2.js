import React, { Component } from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, LabelList, Legend} from 'recharts';
import {Panel} from 'react-bootstrap';
import firebase from '../Firebase.js';
  
  const toMil = (integer) => {
    return "$" + integer.toString()[0] + " M";
  }

  const toDollars = (integer) => {
    return "$" + (integer/1000000).toFixed(2) + "M";
  }

export default class FMChart2 extends Component {
    constructor() {
        super();
        this.state = {
          items: null,
          noteText: "",
        };
      }	

      componentDidMount() {
        const dataRef = firebase.database().ref('FChartTwoData');
        dataRef.on('value', (snapshot) => {
          let items = snapshot.val();
          let newState = [];
          newState.push({
            month: items.month1,
            pv: items.lineOneValue1,
            uv: items.lineOneValue2,
          });
          newState.push({
            month: items.month2,
            pv: items.lineTwoValue1,
            uv: items.lineTwoValue2,
          });
          newState.push({
            month: items.month3,
            pv: items.lineThreeValue1,
            uv: items.lineThreeValue2,
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
              <BarChart data={this.state.items} width={375} height={200}
                margin={{top: 10, right: 30, left: -18, bottom: 5}}>
                <XAxis dataKey='month' tick={{fontSize: 11}} interval={0}/>
                <YAxis tick={{fontSize: 11}} tickFormatter={toMil}/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Bar dataKey="pv" fill="#00C49F">
                  <LabelList dataKey='pv' position='top' formatter={toDollars} fontSize='11'/>
                </Bar>
                <Bar dataKey="uv" fill="#0088FE">
                  <LabelList dataKey='uv' position='top' formatter={toDollars} fontSize='11'/>
                </Bar>
                <Legend align="center" layout="horizontal" verticalAlign="bottom" iconSize='11'/>
              </BarChart>
            </div>
            {this.showNote()}
          </div>
        );
    }
}
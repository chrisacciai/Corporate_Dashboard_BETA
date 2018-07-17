import React, { Component } from 'react';
import {ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, LabelList} from 'recharts';
import {Button} from 'react-bootstrap';
import {ButtonGroup} from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import firebase from './firebase.js';

const toPercent = (decimal, fixed = 2) => {
  return `${(decimal * 100).toFixed(fixed)}%`;
}

const toPercentAxis = (decimal, fixed = 1) => {
  return `${(decimal * 100).toFixed(fixed)}%`;
}

export default class Chart6 extends Component {
    constructor() {
        super();
        this.state = {
          shown: true,
          lineOneMonth: null,
          lineOneData: null,
          lineTwoMonth: null,
          lineTwoData: null,
          lineThreeMonth: null,
          lineThreeData: null,
          lineFourMonth: null,
          lineFourData: null,
          lineFiveMonth: null,
          lineFiveData: null,
          lineSixMonth: null,
          lineSixData: null,
          lineSevenMonth: null,
          lineSevenData: null,
          lineEightMonth: null,
          lineEightData: null,
          lineNineMonth: null,
          lineNineData: null,
          lineTenMonth: null,
          lineTenData: null,
          lineElevenMonth: null,
          lineElevenData: null,
          lineTwelveMonth: null,
          lineTwelveData: null,
          items: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }	
      
      hide() {
        this.setState({
          shown: false
        });
      }
      show() {
        this.setState({
          shown: true
        })
      }

      handleChange(event) {
        this.setState({ [event.target.name] : event.target.value });
      }

      handleSubmit(e) {
        e.preventDefault();
        const dataRef = firebase.database().ref('chartSixData');
        const monthDataPair = {
          month1: this.state.lineOneMonth,
          value1: parseFloat(this.state.lineOneData),
          month2: this.state.lineTwoMonth,
          value2: parseFloat(this.state.lineTwoData),
          month3: this.state.lineThreeMonth,
          value3: parseFloat(this.state.lineThreeData),
          month4: this.state.lineFourMonth,
          value4: parseFloat(this.state.lineFourData),
          month5: this.state.lineFiveMonth,
          value5: parseFloat(this.state.lineFiveData),
          month6: this.state.lineSixMonth,
          value6: parseFloat(this.state.lineSixData),
          month7: this.state.lineSevenMonth,
          value7: parseFloat(this.state.lineSevenData),
          month8: this.state.lineEightMonth,
          value8: parseFloat(this.state.lineEightData),
          month9: this.state.lineNineMonth,
          value9: parseFloat(this.state.lineNineData),
          month10: this.state.lineTenMonth,
          value10: parseFloat(this.state.lineTenData),
          month11: this.state.lineElevenMonth,
          value11: parseFloat(this.state.lineElevenData),
          month12: this.state.lineTwelveMonth,
          value12: parseFloat(this.state.lineTwelveData),
          
        }
        dataRef.set(monthDataPair);
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
            lineOneMonth: items.month1,
            lineOneData: items.value1,
            lineTwoMonth: items.month2,
            lineTwoData: items.value2,
            lineThreeMonth: items.month3,
            lineThreeData: items.value3,
            lineFourMonth: items.month4,
            lineFourData: items.value4,
            lineFiveMonth: items.month5,
            lineFiveData: items.value5,
            lineSixMonth: items.month6,
            lineSixData: items.value6,
            lineSevenMonth: items.month7,
            lineSevenData: items.value7,
            lineEightMonth: items.month8,
            lineEightData: items.value8,
            lineNineMonth: items.month9,
            lineNineData: items.value9,
            lineTenMonth: items.month10,
            lineTenData: items.value10,
            lineElevenMonth: items.month11,
            lineElevenData: items.value11,
            lineTwelveMonth: items.month12,
            lineTwelveData: items.value12,
          });
        });
      }

      render() {
        
        var shown = {
          display: this.state.shown ? "block" : "none"
        };
        
        var hidden = {
          display: this.state.shown ? "none" : "block"
        }

        return (
          <div>
            <br/>
            <div>
              <p class="alignleft">Healthcare Aliquot % Rework</p>
              <p class="alignright">
                <ButtonGroup bsSize="xs">
                  <Button onClick={this.show.bind(this)}>Chart View</Button>
                  <Button onClick={this.hide.bind(this)}>Edit Data</Button>
                  <Button type="submit" bsStyle="primary" form="form6">Submit Data</Button> 
                </ButtonGroup>
              </p>
            </div>
            <br/>
            <p style={ shown }>
            <div id="container">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data ={this.state.items}
                margin={{top: 0, right: 50, left: 15, bottom: 5}}>
                <XAxis dataKey='month'/>
                <YAxis tickFormatter={toPercentAxis}/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Area type="monotone" dataKey="pv" stroke="#8884d8" fill="#8884d8">
                  <LabelList dataKey='pv' position='top' formatter={toPercent} />
                </Area>
                </AreaChart>
              </ResponsiveContainer>
            </div>
            </p>
            <p style={ hidden }>
              <div id="table3">
                <form id="form6" onSubmit={this.handleSubmit}>
                <Table striped bordered condensed hover>
                <thead>
                  <tr>
                    <th>Month</th>
                    <th>Aliquot % Rework</th>
                  </tr>
                </thead>
                  <tbody>
                    <tr>
                        <td>
                            <label>
                              <input type="text" name="lineOneMonth" onChange={this.handleChange} value={this.state.lineOneMonth} />
                            </label>
                        </td>
                        <td>
                            <label>
                              <input type="text"name="lineOneData" onChange={this.handleChange} value={this.state.lineOneData} />
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                              <input type="text" name="lineTwoMonth" onChange={this.handleChange} value={this.state.lineTwoMonth} />
                            </label>
                        </td>
                        <td>
                            <label>
                              <input type="text" name="lineTwoData" onChange={this.handleChange} value={this.state.lineTwoData} />
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                              <input type="text" name="lineThreeMonth" onChange={this.handleChange} value={this.state.lineThreeMonth} />
                            </label>
                        </td>
                        <td>
                            <label>
                              <input type="text" name="lineThreeData" onChange={this.handleChange} value={this.state.lineThreeData} />
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                              <input type="text" name="lineFourMonth" onChange={this.handleChange} value={this.state.lineFourMonth} />
                            </label>
                        </td>
                        <td>
                            <label>
                              <input type="text" name="lineFourData" onChange={this.handleChange} value={this.state.lineFourData} />
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                              <input type="text" name="lineFiveMonth" onChange={this.handleChange} value={this.state.lineFiveMonth} />
                            </label>
                        </td>
                        <td>
                            <label>
                              <input type="text" name="lineFiveData" onChange={this.handleChange} value={this.state.lineFiveData} />
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                              <input type="text" name="lineSixMonth" onChange={this.handleChange} value={this.state.lineSixMonth} />
                            </label>
                        </td>
                        <td>
                            <label>
                              <input type="text" name="lineSixData" onChange={this.handleChange} value={this.state.lineSixData} />
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                              <input type="text" name="lineSevenMonth" onChange={this.handleChange} value={this.state.lineSevenMonth} />
                            </label>
                        </td>
                        <td>
                            <label>
                              <input type="text" name="lineSevenData" onChange={this.handleChange} value={this.state.lineSevenData} />
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                              <input type="text" name="lineEightMonth" onChange={this.handleChange} value={this.state.lineEightMonth} />
                            </label>
                        </td>
                        <td>
                            <label>
                              <input type="text" name="lineEightData" onChange={this.handleChange} value={this.state.lineEightData} />
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                              <input type="text" name="lineNineMonth" onChange={this.handleChange} value={this.state.lineNineMonth} />
                            </label>
                        </td>
                        <td>
                            <label>
                              <input type="text" name="lineNineData" onChange={this.handleChange} value={this.state.lineNineData} />
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                              <input type="text" name="lineTenMonth" onChange={this.handleChange} value={this.state.lineTenMonth} />
                            </label>
                        </td>
                        <td>
                            <label>
                              <input type="text" name="lineTenData" onChange={this.handleChange} value={this.state.lineTenData} />
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                              <input type="text" name="lineElevenMonth" onChange={this.handleChange} value={this.state.lineElevenMonth} />
                            </label>
                        </td>
                        <td>
                            <label>
                              <input type="text" name="lineElevenData" onChange={this.handleChange} value={this.state.lineElevenData} />
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                              <input type="text" name="lineTwelveMonth" onChange={this.handleChange} value={this.state.lineTwelveMonth} />
                            </label>
                        </td>
                        <td>
                            <label>
                              <input type="text" name="lineTwelveData" onChange={this.handleChange} value={this.state.lineTwelveData} />
                            </label>
                        </td>
                    </tr>
                  </tbody>
                </Table>
                </form>
                </div>
              </p>
          </div>
        );
    }
}
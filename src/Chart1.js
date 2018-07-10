import React, { Component } from 'react';
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine} from 'recharts';
import {Button} from 'react-bootstrap';
import {ButtonGroup} from 'react-bootstrap';
import {Table} from 'react-bootstrap';

function stringifyFormData(fd) {
  const data = {};
  for (let key of fd.keys()) {
    data[key] = fd.get(key);
  }
  return JSON.stringify(data, null, 2);
}

export default class Chart1 extends Component {
    constructor() {
        super();
        this.state = {
          shown: true,
          chartData: [{month1: 'Jan-18', pv1: 74},{month2: 'Feb-18', pv2: 87},{month3: 'Mar-18', pv3: 92},{month4: 'Apr-18', pv4: 112},{month5: 'May-18', pv5: 160},{month6: 'MTD 6/18/18', pv6: 136}],
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

      handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        this.setState({
          res: stringifyFormData(data),
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
              <p class="alignleft">Healthcare Average TAT</p>
              <p class="alignright">
                <ButtonGroup bsSize="xs">
                  <Button onClick={this.show.bind(this)}>Chart View</Button>
                  <Button onClick={this.hide.bind(this)}>Edit Data</Button>
                  <Button type="submit" bsStyle="primary" form="form1">Refresh</Button> 
                </ButtonGroup>
              </p>
            </div>
            <br/>
            <p style={ shown }>
            <div id="container">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data ={this.state.chartData}
                margin={{top: 0, right: 30, left: 15, bottom: 5}}>
                <XAxis/>
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <ReferenceLine y={96} stroke="blue" strokeDasharray="3 3" />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
                </LineChart>
              </ResponsiveContainer>
            </div>
            </p>
            <p style={ hidden }>
              <div id="table">
                <form id="form1" onSubmit={this.handleSubmit}>
                <Table striped bordered condensed hover>
                <thead>
                  <tr>
                    <th>Month</th>
                    <th>Average TAT</th>
                  </tr>
                </thead>
                  <tbody>
                    <tr>
                        <td>
                            <label>
                              <input type="text" name="month1" onChange={this.handleChange} />
                            </label>
                        </td>
                        <td>
                            <label>
                              <input type="text" name="pv1" onChange={this.handleChange} />
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                              <input type="text" name="month2" onChange={this.handleChange} />
                            </label>
                        </td>
                        <td>
                            <label>
                              <input type="text" name="pv2" onChange={this.handleChange} />
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                              <input type="text" name="month3" onChange={this.handleChange} />
                            </label>
                        </td>
                        <td>
                            <label>
                              <input type="text" name="pv3" onChange={this.handleChange} />
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                              <input type="text" name="month4" onChange={this.handleChange} />
                            </label>
                        </td>
                        <td>
                            <label>
                              <input type="text" name="pv4" onChange={this.handleChange} />
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                              <input type="text" name="month5" onChange={this.handleChange} />
                            </label>
                        </td>
                        <td>
                            <label>
                              <input type="text" name="pv5" onChange={this.handleChange} />
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                              <input type="text" name="month6" onChange={this.handleChange} />
                            </label>
                        </td>
                        <td>
                            <label>
                              <input type="text" name="pv6" onChange={this.handleChange} />
                            </label>
                        </td>
                    </tr>
                  </tbody>
                </Table>
                </form>
                </div>
              </p>

              {this.state.res && (
                <div className="res-block">
                  <h1>Data to be sent:</h1>
                  <p>FormData {this.state.res}</p>
                </div>
              )}

          </div>
        );
    }
}
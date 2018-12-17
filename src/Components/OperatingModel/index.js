import React, { Component } from 'react'
import './index.css'
import Contianer from '../Container'

class OperatingModel extends Component {
  render () {
    return (
      <div name={this.props.name} id={this.props.name} className='operating-model'>
        <Contianer>
            {this.props.children}
          </Contianer>
        <div className='divider'>
          &#x25cf; &#x25cf; &#x25cf;
        </div>
      </div>
    )
  }
}

OperatingModel.Title = ({ children, workInProgress }) => (
  <h2>
    {children}
    {workInProgress && (
      (<span>
        <br /><span className='work-in-progress'>Work In Progress</span>
      </span>)
    )}
  </h2>
)

OperatingModel.Content = ({ children }) => (
  <div>
    <h3>Model</h3>
    {children}
  </div>
)

export default OperatingModel;

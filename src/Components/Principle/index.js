import React, { Component } from 'react'
import './index.css'
import Contianer from '../Container'

class Principle extends Component {
  render () {
    return (
      <div name={this.props.name} id={this.props.name} className='principle'>
        <Contianer>
            {this.props.children}
        </Contianer>
      </div>
    )
  }
}

Principle.Title = ({ children, workInProgress }) => (
  <h2>
    {children}
    {workInProgress && (
      (<span>
        <br /><span className='work-in-progress'>Work In Progress</span>
      </span>)
    )}
  </h2>
)

Principle.Content = ({ children }) => (
  <div>
    <h3>Principle</h3>
    {children}
  </div>
)

export default Principle;

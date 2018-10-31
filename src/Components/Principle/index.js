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

Principle.Title = ({ children }) => (
  <h2>{children}</h2>
)

Principle.Content = ({ children }) => (
  <div>
    <h3>Principle</h3>
    {children}
  </div>
)

export default Principle;

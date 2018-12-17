import React, { Component } from 'react'
import './index.css'
import Contianer from '../Container'

class Principle extends Component {
  render () {
    return (
      <div name={`principle-${this.props.number}`} id={`principle-${this.props.number}`} className='principle'>
        <Contianer>
            <h1 className='number'>{this.props.number}.</h1>
            <div className='content'>{this.props.children}</div>
        </Contianer>
      </div>
    )
  }
}

export default Principle;

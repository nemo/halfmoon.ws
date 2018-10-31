import React from 'react'
import Header from './Header'
import { Route } from 'react-router-dom'

export default (props) => (
  <div>
    <Header />
    <Route {...props} />
  </div>
)

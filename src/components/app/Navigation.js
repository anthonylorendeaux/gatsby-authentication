import React from 'react'
import { Link } from 'gatsby'

export default () => (
  <ul>
    <li><Link to="/app">Dashboard</Link></li>
    <li><Link to="/app/account">Account</Link></li>
  </ul>
)
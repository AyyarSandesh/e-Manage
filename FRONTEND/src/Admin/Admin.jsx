import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Navbar from '../components/Navbar'

export class Admin extends Component {
  static propTypes = {}

  render() {
    return (
      <>
        <Navbar/>
        <div>Admin Panel</div>
      </>
    )
  }
}

export default Admin
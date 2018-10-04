// Imports
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class PageNotFound extends Component {
  render() {
    return (
      <div className="page-not-found-component">
        <div className="jumbotron">
          <h2 className="big-title big-title-error">Sorry</h2>
          <h3><i className="glyphicon glyphicon-exclamation-sign"></i> The page you are looking for doesnt exist</h3>
          <h6>Click the button to start a new game</h6>
          <br/>
          <NavLink to="/start-game" className="btn btn-primary btn-lg"><i className="glyphicon glyphicon-play"></i> New game</NavLink>
        </div>
      </div>
    )
  }
}
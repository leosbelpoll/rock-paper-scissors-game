// Modules
import React, { Component } from 'react'

// Styles
import './Configuration.css'
import MoveList from './MoveList';
import MoveForm from './MoveForm';

export default class Configuration extends Component {

  render() {
    return (
      <div className="configuration-component">
        <div className="jumbotron">
          <h2 className="big-title big-title-primary">Rules configuration</h2>
          <div className="row">
            <div className="col-sm-4 col-xs-12">
              <br/>
              <MoveForm />
            </div>
            <div className="col-sm-8 col-xs-12">
              <MoveList />
            </div>
          </div>
          <br/>
        </div>
      </div>
    )
  }
}
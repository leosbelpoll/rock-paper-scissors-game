// Modules
import React, { Component } from 'react'

// Redux
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createMove } from '../../../actions/configurationAction'

// Styles
import './MoveForm.css'

class MoveForm extends Component {

  constructor(props){
    super(props)

    this.state = {
      move: '',
      kills: '',
      error:''
    }

    this.createMove = this.createMove.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  componentWillReceiveProps(props){
    if(props.error.message){
      this.setState({error: props.error.message})
    }
  }

  createMove(event){
    event.preventDefault()
    
    if(!this.state.move || !this.state.kills){
      this.setState({error: 'Insert "move" and "kills"'})
      return
    }

    const move = {
      move: this.state.move, 
      kills: this.state.kills
    }
    this.props.createMove(move)

    this.setState({
      move: '',
      kills: ''
    })
  }

  onChange(event){
    this.setState({[event.target.name]: event.target.value})
    this.setState({error: ''})
}

  render() {

    const errorState = this.state.error ? (
      <li><i className="glyphicon glyphicon-remove"></i>  {this.state.error}</li>
    ) : ''

    return (
      <div className="moveform-component">
        <ul className="error">
          {errorState}
        </ul>
        <form onSubmit={this.createMove}>
          <input type="text"
            name="move"
            value={this.state.move}
            className="form-control"
            placeholder="Enter move"
            onChange={this.onChange}
          />
          <br/>
          <br/>
          <input type="text"
            name="kills"
            value={this.state.kills}
            className="form-control"
            placeholder="Enter killed"
            onChange={this.onChange}
          />
          <br/>
          <br/>
          <button type="submit" className="btn btn-primary btn-full"><i className="glyphicon glyphicon-plus-sign"></i> Add</button>
        </form>
      </div>
    )
  }
}


MoveForm.propTypes = {
  createMove: PropTypes.func.isRequired,
  error: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  error: state.configuration.error
})

export default connect(mapStateToProps, {createMove})(MoveForm)
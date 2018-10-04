// Modules
import React, { Component } from 'react'

// Redux
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { startGame, restartGame } from '../../actions/gameAction'

// Styles
import './StartGame.css'

class StartGame extends Component {

  constructor(props){
    super(props)

    this.state = {
        player1: '',
        player2: '',
        error: ''
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(event){
    event.preventDefault()

    if(!this.state.player1 || !this.state.player2){
      this.setState({error: 'Insert 2 names'})
      return
    }
    this.props.startGame(this.state.player1, this.state.player2)
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value, error: ''})
  }

  componentWillMount(){
    this.props.restartGame()
  }

  componentWillReceiveProps(props){
    if(props.player1._id && props.player2._id){
      this.props.history.push('/game')
      return
    }
    
    if(props.error.message){
      this.setState({error: props.error.message})
    }
  }

  render() {

    const errorState = this.state.error ? (
      <li><i className="glyphicon glyphicon-remove"></i>  {this.state.error}</li>
    ) : ''

    return (
      <div className="startgame-component">
        <div className="jumbotron">
          <h2 className="big-title big-title-primary">Enter players name:</h2>
          <ul className="error">
            {errorState}
          </ul>
          <form onSubmit={this.onSubmit}>
            <div className="row">
              <div className="col-sm-3 col-md-4"></div>
              <div className="col-xs-12 col-sm-6 col-md-4">
                <input type="text"
                  id="player1"
                  name="player1"
                  placeholder="Player1's name"
                  className="form-control"
                  onChange={this.onChange}
                  autoFocus
                />
              </div>
              <div className="col-sm-3 col-md-4"></div>
            </div>
            <br/>
            <div className="row">
              <div className="col-sm-3 col-md-4"></div>
              <div className="col-xs-12 col-sm-6 col-md-4">
                <input type="text"
                  id="player2"
                  name="player2"
                  placeholder="Player2's name"
                  className="form-control"
                  onChange={this.onChange}
                />
              </div>
              <div className="col-sm-3 col-md-4"></div>
            </div>
            <br/>
            <div className="row">
              <div className="col-sm-3 col-md-4"></div>
              <div className="col-xs-12 col-sm-6 col-md-4">
                <button type="submit" className="btn btn-primary btn-lg btn-full"><i className="glyphicon glyphicon-ok"></i> Start</button>
              </div>
              <div className="col-sm-3 col-md-4"></div>
            </div>
          </form>
          <br/>
        </div>
      </div>
    )
  }
}

StartGame.propTypes = {
  startGame: PropTypes.func.isRequired,
  restartGame: PropTypes.func.isRequired,
  player1: PropTypes.object.isRequired,
  player2: PropTypes.object.isRequired,
  error: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  player1: state.game.player1,
  player2: state.game.player2,
  error: state.game.error,
})

export default connect(mapStateToProps, {startGame, restartGame})(StartGame)
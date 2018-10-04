// Modules
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

// Redux
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { rematchGame, getEmperor } from '../../actions/gameAction'

// Styles
import './Winner.css'

class Winner extends Component {

  constructor(props){
    super(props)

    this.rematchGame = this.rematchGame.bind(this)
  }

  rematchGame(){
    this.props.rematchGame(this.props.player1, this.props.player2)
  }

  componentWillMount(){
    if(!this.props.winner._id){
      this.props.history.push('/')
      return
    }

    this.props.getEmperor()
  }

  componentWillReceiveProps(props){
    if(!props.winner._id){
      this.props.history.push('/game')
      return
    }
  }

  render() {

    const winner = this.props.emperor._id === this.props.winner._id ? (
      <h3 className="middle-title big-title-primary"><i className="glyphicon glyphicon-king"></i> {this.props.winner.name} is the Emperor.</h3>
    ) : (
      <h3 className="middle-title big-title-primary"><i className="glyphicon glyphicon-pawn"></i> {this.props.winner.name} has won.</h3>
    )

    return (
      <div className="winner-component">
        <div className="jumbotron">
          <h2 className="big-title big-title-secondary">We have a Winner!!!</h2>
          {winner}
          <br/>
          <br/>
          <a onClick={this.rematchGame} className="btn btn-danger btn-lg"><i className="glyphicon glyphicon-resize-small"></i> Rematch game</a>
          &nbsp;&nbsp;&nbsp;
          <NavLink to="/start-game" className="btn btn-success btn-lg"><i className="glyphicon glyphicon-refresh"></i> New game</NavLink>
        </div>
      </div>
    )
  }
}

Winner.propTypes = {
  rematchGame: PropTypes.func.isRequired,
  getEmperor: PropTypes.func.isRequired,
  player1: PropTypes.object.isRequired,
  player2: PropTypes.object.isRequired,
  winner: PropTypes.object.isRequired,
  emperor: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  player1: state.game.player1,
  player2: state.game.player2,
  winner: state.game.winner,
  emperor: state.game.emperor,
})

export default connect(mapStateToProps, { rematchGame, getEmperor})(Winner)
// Modules
import React, { Component } from 'react'

// Redux
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { startRound, finishRound, finishGame } from '../../actions/gameAction'
import { getMoves } from '../../actions/configurationAction'

// Styles
import './PlayGame.css'
import config from '../../config';

class PlayGame extends Component {

  constructor(props){
    super(props)

    this.state = {
      move: '',
      error: ''
    }

    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onSubmit(event){
    event.preventDefault()

    if(this.state.move){
      if(this.props.currentPlayer === 1){
        this.props.startRound(this.state.move)
      }else{
        this.props.finishRound(this.props.move, this.state.move)
      }
      this.setState({move: ''})
    }else{
      this.setState({error: 'Select a move'})
    }
  }

  onChange(event){
    this.setState({
      move: event.target.value,
      error: ''
    })
  }

  componentWillMount(){
    // Redirect to /start-game if there are not players
    if(!this.props.player1._id || !this.props.player2._id){
      this.props.history.push('/start-game')
    }

    this.props.getMoves()
  }

  componentWillReceiveProps(props){
    
    if(props.winner._id){
      this.props.history.push('/winner')
      return
    }

    var countPlayer1 = 0;
    var countPlayer2 = 0;
    props.roundsWon.forEach((move) => (move === 'move1' && countPlayer1++))
    props.roundsWon.forEach((move) => (move === 'move2' && countPlayer2++))
    if(countPlayer1 === config.won_round_to_win_game){
      this.props.finishGame(this.props.player1.name)
    }else if(countPlayer2 === config.won_round_to_win_game){
      this.props.finishGame(this.props.player2.name)
    }

    
  }

  render() {
    
    let moves= []

    // Save all single posible "move" or "kill" in var "moves"
    this.props.moves.map(move => {
      if(moves.indexOf(move.move) === -1){
        moves.push(move.move)
      }
      if(moves.indexOf(move.kills) === -1){
        moves.push(move.kills)
      }

      return moves
    })

    // Order the array alphabetically to prevent any pattern
    moves.sort()

    const errorState = this.state.error ? (
      <li><i className="glyphicon glyphicon-remove"></i>  {this.state.error}</li>
    ) : ''

    const optionsMovements = moves.map(move => (
      <option value={move} key={move}>{move}</option>
    ))

    const scoreTuples = this.props.roundsWon.map((round, index) => (
      <tr key={index+1}>
        <td>{index+1}</td>
        <td>{round === 'move1' ? this.props.player1.name : round === 'move2' ? this.props.player2.name : '-'}</td>
      </tr>
    ))

    return (
      <div className="playgame-component">
        <div className="jumbotron">
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <h2 className="big-title big-title-secondary">Round #{this.props.roundsWon.length + 1}</h2>
              <h3>{this.props.currentPlayer === 1  ? this.props.player1.name : this.props.player2.name}'s turn</h3>
              <ul className="error">
                {errorState}
              </ul>
              <form onSubmit={this.onSubmit}>
                <div className="row">
                  <div className="col-sm-1 col-xs-3"></div>
                  <div className="col-sm-10 col-xs-6">
                    <select type="text"
                      id="move"
                      name="move"
                      value={this.state.move}
                      onChange={this.onChange}
                      className="form-control"
                    >
                      <option value=""> - Select - </option>
                      {optionsMovements}
                    </select>
                  </div>
                  <div className="col-sm-1 col-xs-3"></div>
                </div>
                <br/>
                <div className="row">
                <div className="col-sm-1 col-xs-3"></div>
                  <div className="col-sm-10 col-xs-6">
                    <button type="submit" className="btn btn-success btn-lg btn-full"><i className="glyphicon glyphicon-send"></i> OK</button>
                  </div>
                  <div className="col-sm-1 col-xs-3"></div>
                </div>
              </form>
            </div>
            <div className="col-xs-12 col-sm-6">
              <h3 className="visible-sm">Score</h3>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Round</th>
                    <th>Player</th>
                  </tr>
                </thead>
                <tbody>
                  {scoreTuples}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

PlayGame.propTypes = {
  startRound: PropTypes.func.isRequired,
  finishRound: PropTypes.func.isRequired,
  finishGame: PropTypes.func.isRequired,
  player1: PropTypes.object.isRequired,
  player2: PropTypes.object.isRequired,
  move: PropTypes.string.isRequired,
  currentPlayer: PropTypes.number.isRequired,
  roundsWon: PropTypes.array.isRequired,
  moves: PropTypes.array.isRequired,
  winner: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  player1: state.game.player1,
  player2: state.game.player2,
  move: state.game.move,
  currentPlayer: state.game.currentPlayer,
  winner: state.game.winner,
  roundsWon: state.game.roundsWon,
  moves: state.configuration.moves,
})

export default connect(mapStateToProps, {startRound, finishRound, finishGame, getMoves})(PlayGame)
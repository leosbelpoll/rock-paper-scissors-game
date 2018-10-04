// Modules
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

// Redux
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getEmperor, getStatistics } from '../../../actions/gameAction'

// Styles
import './Home.css'

class Home extends Component {

  componentWillMount(){
    this.props.getStatistics()
    this.props.getEmperor()
  }

  render() {

    const playerStatistics = this.props.statistics.map(player => (
      <tr key={player._id}>
        <td>
          { player._id === this.props.emperor._id ? (
            <i className="glyphicon glyphicon-king"></i>
          ) : (
            <i className="glyphicon glyphicon-pawn"></i>
          ) }
        </td>
        <td>{player.name}</td>
        <td>{player.totalWon}</td>
      </tr>
    ))

    const tablePlayerStatistics = this.props.statistics.length ? (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Status</th>
            <th>Name</th>
            <th>Games won</th>
          </tr>
        </thead>
        <tbody>
          {playerStatistics}
        </tbody>
      </table>
    ) : ''

    return (
      <div className="home-component">
        <div className="jumbotron">
          <div className="row">
            <div className={this.props.statistics.length ? 'col-xs-12 col-sm-7' : 'col-xs-12'}>
              <h2 className="big-title big-title-primary">Welcome to the Game</h2>
              <h6>Click the button to start a new game</h6>
              <br/>
              <NavLink to="/start-game" className="btn btn-primary btn-lg"><i className="glyphicon glyphicon-refresh"></i> New game</NavLink>
            </div>
            <div className="col-xs-12 col-sm-5">
              <br className="visible-xs"/>
              <br className="visible-xs"/>
              {tablePlayerStatistics}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Home.propTypes = {
  getEmperor: PropTypes.func.isRequired,
  getStatistics: PropTypes.func.isRequired,
  statistics: PropTypes.array.isRequired,
  emperor: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  statistics: state.game.statistics,
  emperor: state.game.emperor
})

export default connect(mapStateToProps, {getStatistics, getEmperor})(Home)
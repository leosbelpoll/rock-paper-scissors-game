// Modules
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

// Redux
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Styles
import './Header.css'

class Header extends Component {
  render() {

    const linkCurrentGame = this.props.player1._id && this.props.player2._id && !this.props.winner._id ? (
      <NavLink to="/game"><i className="glyphicon glyphicon-play"></i> Current game</NavLink>
    ) : ''

    return (
      <div className="header-component">
        <nav>
          <span className="title"><NavLink to="/">Game Test</NavLink></span>
          <br className="visible-xs"/>
          <NavLink to="/start-game"><i className="glyphicon glyphicon-refresh"></i> New game</NavLink>
          {linkCurrentGame}
          <NavLink to="/configuration"><i className="glyphicon glyphicon-cog"></i> Configuration</NavLink>
        </nav>
      </div>
    )
  }
}

Header.propTypes = {
  player1: PropTypes.object.isRequired,
  player2: PropTypes.object.isRequired,
  winner: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  player1: state.game.player1,
  player2: state.game.player2,
  winner: state.game.winner,
})

export default connect(mapStateToProps, {})(Header)
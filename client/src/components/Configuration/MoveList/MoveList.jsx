// Modules
import React, { Component } from 'react'

// Redux
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getMoves, removeMove } from '../../../actions/configurationAction'

// Styles
import './MoveList.css'

class MoveList extends Component {

  constructor(props){
    super(props)

    this.removeMove = this.removeMove.bind(this)
  }

  removeMove(event){
    event.preventDefault()
    
    let id = event.currentTarget.getAttribute("href")
    this.props.removeMove(id)
  }

  componentWillMount(){
    this.props.getMoves()
  }


  render() {

    const moveTuples = this.props.moves.map(move => (
      <tr key={move._id}>
        <td>{move.move}</td>
        <td>{move.kills}</td>
        <td><a href={move._id} onClick={this.removeMove}><i className="glyphicon glyphicon-remove"></i></a></td>
      </tr>
    ))

    return (
      <div className="movelist-component">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Move</th>
              <th>Kills</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {moveTuples}
          </tbody>
        </table>
      </div>
    )
  }
}


MoveList.propTypes = {
  getMoves: PropTypes.func.isRequired,
  removeMove: PropTypes.func.isRequired,
  moves: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  moves: state.configuration.moves,
})

export default connect(mapStateToProps, {getMoves, removeMove})(MoveList)
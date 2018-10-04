import React from 'react'
import ReactDOM from 'react-dom'

import {expect} from 'chai'
import {shallow} from 'enzyme'

// Component
import Configuration from './Configuration'
import MoveForm from './MoveForm'
import MoveList from './MoveList'

// Redux
import { Provider } from 'react-redux'
import store from '../../store'

describe('<Configuration />', () => {
  it('should render without crash', () => {
    shallow(<Configuration />)
  })

  it('contains <MoveForm />', () => {
    const wrapper = shallow(<Configuration />)
    expect(wrapper.find(MoveForm)).to.have.lengthOf(1)
  })

  it('contains <MoveList />', () => {
    const wrapper = shallow(<Configuration />)
    expect(wrapper.find(MoveList)).to.have.lengthOf(1)
  })

})
import React from 'react'
import ReactDOM from 'react-dom'

import {shallow} from 'enzyme'

// Component
import MoveForm from './MoveForm'

// Redux
import { Provider } from 'react-redux'
import store from '../../../store'

describe('<MoveForm />', () => {
  it('should render without crash', () => {
    shallow(<Provider store={store}><MoveForm /></Provider>)
  })
})
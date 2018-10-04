import React from 'react'
import ReactDOM from 'react-dom'

import {shallow} from 'enzyme'

import { createBrowserHistory } from 'history'

// Component
import MoveList from './MoveList'

// Redux
import { Provider } from 'react-redux'
import store from '../../../store'

describe('<MoveList />', () => {
  it('should render without crash', () => {
    shallow(<Provider store={store}><MoveList /></Provider>)
  })
})
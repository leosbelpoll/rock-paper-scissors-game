import React from 'react'
import ReactDOM from 'react-dom'

import {shallow} from 'enzyme'

// Component
import Home from './Home'

// Router
import { BrowserRouter as Router } from 'react-router-dom'

// Redux
import { Provider } from 'react-redux'
import store from '../../../store'

describe('<Home />', () => {
  it('should render without crash', () => {
    shallow(<Provider store={store}><Router><Home /></Router></Provider>)
  })
})
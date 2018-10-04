import React from 'react'
import ReactDOM from 'react-dom'

import {shallow} from 'enzyme'

// Component
import Header from './Header'

// Router
import { BrowserRouter as Router, NavLink } from 'react-router-dom'

// Redux
import { Provider } from 'react-redux'
import store from '../../../store'

describe('<Header />', () => {
  it('should render without crash', () => {
    shallow(<Provider store={store}><Router><Header /></Router></Provider>)
  })
})
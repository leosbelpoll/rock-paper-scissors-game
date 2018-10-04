import React from 'react'
import ReactDOM from 'react-dom'

import {shallow} from 'enzyme'

// Router
import { BrowserRouter as Router } from 'react-router-dom'

// Component
import PageNotFound from './PageNotFound'

describe('<PageNotFound />', () => {
  it('should render without crash', () => {
    shallow(<Router><PageNotFound /></Router>)
  })
})
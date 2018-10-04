import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'

import {expect} from 'chai'
import {shallow, mount} from 'enzyme'

// Router
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Component
import Winner from './Winner'

// Redux
import { Provider } from 'react-redux'
import store from '../../store'

describe('<Winner />', () => {
  it('should render without crash', () => {
    shallow(<Provider store={store}><Router><Winner history={createBrowserHistory()}/></Router></Provider>)
  })
})
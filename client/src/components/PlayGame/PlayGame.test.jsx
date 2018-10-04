import React from 'react'
import ReactDOM from 'react-dom'

import {shallow} from 'enzyme'

import { createBrowserHistory } from 'history'

// Component
import PlayGame from './PlayGame'

// Redux
import { Provider } from 'react-redux'
import store from '../../store'

describe('<PlayGame />', () => {
  it('should render without crash', () => {
    shallow(<Provider store={store}><PlayGame history={createBrowserHistory()} /></Provider>)
  })
})
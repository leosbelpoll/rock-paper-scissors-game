import React from 'react'
import ReactDOM from 'react-dom'

import {shallow} from 'enzyme'

import { createBrowserHistory } from 'history'

// Component
import StartGame from './StartGame'

// Redux
import { Provider } from 'react-redux'
import store from '../../store'

describe('<StartGame />', () => {
    it('should render without crash', () => {
        shallow(<StartGame store={store} history={createBrowserHistory()} />)
    })
})
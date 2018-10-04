import React from 'react'
import ReactDOM from 'react-dom'

// Components
import App from './App'
import Header from './components/presentation/Header';

import {expect} from 'chai'
import {shallow} from 'enzyme'

describe('<App />', () => {
  it('should render without crash', () => {
    shallow(<App />)
  })

  it('contains <Header />', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(Header)).to.have.lengthOf(1)
  })
})

// Modules
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Styles
import './App.css';


// Redux
import { Provider } from 'react-redux';
import store from './store'

// Components
import StartGame from './components/StartGame';
import PlayGame from './components/PlayGame';
import Winner from './components/Winner';
import Configuration from './components/Configuration';
import Header from './components/presentation/Header';
import Home from './components/presentation/Home';
import PageNotFound from './components/presentation/PageNotFound';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="app-component">
            <Header />
            <div className="container">
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/start-game" component={StartGame} exact />
                <Route path="/game" component={PlayGame} exact />
                <Route path="/winner" component={Winner} exact />
                <Route path="/configuration" component={Configuration} exact />
                <Route component={PageNotFound} />
              </Switch>
            </div>
          </div>
        </Router>
     </Provider>
    );
  }
}

export default App;

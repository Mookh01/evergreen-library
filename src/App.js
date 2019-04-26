import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router } from 'react-router-dom'
import { Route} from 'react-router-dom'
//import containers
import LayOut from './Layout'
import Buttons from './Buttons'
import LoadSummary from './LoadSummary'
import LoadSummaryContainer from './LoadSummaryContainer'

//import components
import BasicPageWithHeader from './BasicPageWithHeader'
import styles from './styles.module.scss'
import './assets/styles/base.module.scss'


class App extends Component {

  render() {

    return (
      <div className={styles.container}>
      <div className="App">
        <header className="App-header">
          <BasicPageWithHeader
          >
          </BasicPageWithHeader>
          </header>
          <Router>
            <Route path='/layout' component={LayOut}/>
            <Route path='/buttons' component={Buttons} />
            <Route path='/login'  />
            <Route path='/loadsummary' component={LoadSummary} />
            <Route path='/search' />
            <Route path='/groups'  />
            <Route path='/' component={LoadSummaryContainer} />
          </Router>
      </div>
      </div>
    );
  }
}

export default App;

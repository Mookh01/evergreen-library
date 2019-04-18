import React, { Component } from 'react';
// import logo from './logo.svg';
import  { Pane, Button} from 'evergreen-ui'
import './App.css';
import {Link,  BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes/index'
import './assets/styles/base.module.scss'
import styles from './styles.module.scss'

class App extends Component {
  state={
    options: [
      { label: 'Height 24', value: 24 },
      { label: 'Height 32', value: 32 },
      { label: 'Height 40', value: 40 }
    ],
    value: 32
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            Evergreen Test
          </p>
          <Pane  marginBottom={52}>
          <Button
          linkComponent={Link}
          is="a"
          href={`/`}
          appearance="primary"
          className={styles.button} 
        >HOME</Button>
      <Button
          linkComponent={Link}
          is="a"
          href={`/layout`}
          className={styles.button} 
        >LAYOUT</Button>
      <Button
          linkComponent={Link}
          is="a"
          href={`/buttons`}
          className={styles.submitButton}
        >BUTTONS</Button>

      <Button
          linkComponent={Link}
          is="a"
          href={`/login`}
          className={styles.submitButton}
        >LOGIN</Button>
              <Button
          linkComponent={Link}
          is="a"
          href={`/loadsummary`}
          className={styles.submitButton}
        >LOADSUMMARY</Button>
        </Pane>
          <Router>
          <Routes></Routes>
          </Router>
        </header>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Buttons from './Buttons'
import styles from './styles.module.scss'
import './assets/styles/base.module.scss'


class App extends Component {
  render() {
    return (
      <div className={styles.container}>
          <Buttons></Buttons>
      </div>
    );
  }
}

export default App;

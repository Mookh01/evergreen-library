import React, { Component } from 'react';
import{ Button } from 'evergreen-ui'
import styles from './styles.module.scss'

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
         <Button appearance="primary" className={styles.button} >Button</Button>
      </div>
    );
  }
}

export default App;

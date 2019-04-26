import React, { Component } from 'react'

import styles from './styles.module.scss'
import LoadLineButton from '../LoadLineButton'
export default class LoadLine extends Component {


  render() {
    return (
      <div className={styles.container}>
        <h3>LoadLine Component</h3>
        <LoadLineButton></LoadLineButton>
      </div>
    )
  }
}

import React, { Component } from 'react'
import LoadSummary from '../LoadSummary'
import styles from './styles.module.scss'

export default class LoadSummaryContainer extends Component {

  render() {
    return (
      <div className={styles.container}>
        <h1>Load Summary Container</h1>
        <LoadSummary></LoadSummary>      
      </div>
    )
  }
}

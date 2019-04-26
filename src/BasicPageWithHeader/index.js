import React, { Component } from 'react'
import styles from './styles.module.scss'
import Header from '../Header'
export default class BasicPageWithHeader extends Component {

  render() {
    return (
      <div className={styles.container}>
      <Header
      ></Header>
    </div>
    )
  }
}

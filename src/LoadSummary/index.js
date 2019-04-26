import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import LoadSummaryNav from '../LoadSummaryNav'
import styles from './styles.module.scss'
import  { Pane } from 'evergreen-ui'

//import containers


export default class LoadSummary extends Component {

  render() {
    return (
      <div  className={styles.container}>
      <h1 className={styles.heading}>Load Summary</h1>

        <div>
      <Pane>
        <LoadSummaryNav>
        </LoadSummaryNav>
      </Pane>
      <Switch>
        <Route path='/search'  />
        <Route path='/'  />
      </Switch>

        </div>
        
    </div>

    )
  }
}

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import LoadGroupsContainer from '../LoadGroupsContainer'
import LoadSearchContainer from '../LoadSearchContainer'
import LoadSummaryNav from '../LoadSummaryNav'
import { Route, Switch} from 'react-router-dom'


export default class LoadSummary extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div className={styles.container}>
      <h1 className={styles.heading}>Load Summary</h1>
      <LoadSummaryNav
 
      ></LoadSummaryNav>
      <Switch>
        <Route path='/search' component={LoadSearchContainer} />
        <Route path='/groups' component={LoadGroupsContainer} />
      </Switch>
    </div>
    )
  }
}

import React, { Component } from 'react'
import { Route, Switch} from 'react-router-dom'

import LayOut from '../Layout'
import Buttons from '../Buttons'
import Login from '../Login'
import LoadSummary from '../LoadSummary'
import LoadGroupsContainer from '../LoadGroupsContainer'
import styles from './styles.module.scss'
export default class Routes extends Component {


  render() {
    return (
      <div className={styles.container}>
      <Switch>
        <Route path='/layout' component={LayOut}/>
        <Route path='/buttons' component={Buttons} />
        <Route path='/login' component={Login} />
        <Route path='/loadsummary' component={LoadSummary} />
        <Route path='/groups' component={LoadGroupsContainer} />
      </Switch>

    </div>
    )
  }
}

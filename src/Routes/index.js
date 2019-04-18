import React, { Component } from 'react'
import { Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import LayOut from '../Layout'
import Buttons from '../Buttons'
import Login from '../Login'
import LoadSummary from '../LoadSummary'
import styles from './styles.module.scss'
export default class Routes extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div className={styles.container}>
      <Switch>
        <Route path='/layout' component={LayOut}/>
        <Route path='/buttons' component={Buttons} />
        <Route path='/login' component={Login} />
        <Route path='/loadsummary' component={LoadSummary} />
      </Switch>

    </div>
    )
  }
}

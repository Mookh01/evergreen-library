import React, { Component } from 'react'
import PropTypes from 'prop-types'
import  { Tab,TabNavigation} from 'evergreen-ui'
import styles from './styles.module.scss'
export default class LoadSummaryNav extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div className={styles.button} >
        <TabNavigation >
          {[ `PO #`,`Pickup Date`,`Pickup City`,`Pickup State`,`Delivery Date`,`Delivery City`,`Delivery State`
   ].map((tab, index) => (
     <Tab key={tab} is="a" href="#" id={tab} isSelected={index === 0}>{tab}</Tab>
   ))}
        </TabNavigation>
      </div>
    )
  }
}

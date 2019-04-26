import React, { Component } from 'react'
import  { Button} from 'evergreen-ui'
import styles from './styles.module.scss'

//component
import LoadLine from '../LoadLine'
export default class LoadSummaryNav extends Component {

  render() {
    return (
      <div className={styles.container} >

          <div>    
        <Button
          className={styles.tab}
          marginRight={16}
            key={1}
            id={1}
            is="a"
            href={`/groups`}
          >
          Groups
          </Button>
          <Button
          className={styles.tab}
            key={2}
            id={2}
            is="a"
            href={`/search`}
          >
          Search
          </Button>       
        </div>
        <div >
          <h2>Load Summary Nav Component</h2>
          <LoadLine></LoadLine>
        </div>

      </div>
    )
  }
}

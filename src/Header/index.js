import React, { Component } from 'react'
import  {Pane, Button, Link, Heading} from 'evergreen-ui'
import styles from './styles.module.scss'



export default class Header extends Component {

  render() {

    return (
      <div className={styles.container}>
      <div className={styles.innerWrapper}>
        <Pane  display="flex" >
          <Heading >        
            <Link to={`/`}>
            </Link>
          </Heading>
        </Pane>
      
        <p className={styles.title}>
          Evergreen Test
        </p>      
        <Pane>
          <Button
            appearance="minimal"
            marginRight={106}
            height={40}
            width={80}
            className={styles.logoutButton}
          >Logout</Button>      
        </Pane>
      </div>
      </div>
    )
  }
}

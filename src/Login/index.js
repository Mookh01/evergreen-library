import React, { Component } from 'react'
import PropTypes from 'prop-types'
import  { TextInputField , Button} from 'evergreen-ui'
import styles from './styles.module.scss'

export default class Login extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div className={styles.container}>
      <form>
        <TextInputField
          label="Email Address"
          placeholder="Email..."
          isInvalid
        />       
        <TextInputField
          label="Password"
          placeholder="Password..."
          isInvalid
        />
        <div  className={styles.submitButton}>
        <Button  margin={16} width={320} appearance="primary">Login</Button>
        </div>
        </form>
      </div>
    )
  }
}

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import  { Button } from 'evergreen-ui'

export default class Buttons extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        <div>
          <Button marginRight={16} intent="none">None</Button>
          <Button marginRight={16} intent="success">Success</Button>
          <Button marginRight={16} intent="warning">Warning</Button>
          <Button marginRight={16} intent="danger">Danger</Button>
        </div>
        <div>
          <Button marginRight={16} appearance="primary" intent="none">None</Button>
          <Button marginRight={16} appearance="primary" intent="success">Success</Button>
          <Button marginRight={16} appearance="primary" intent="warning">Warning</Button>
          <Button marginRight={16} appearance="primary" intent="danger">Danger</Button>
        </div>
      </div>
    )
  }
}

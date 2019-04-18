import React, { Component } from 'react'
import PropTypes from 'prop-types'
import  { ThemeConsumer, Text } from 'evergreen-ui'
import { Pane } from 'evergreen-ui/commonjs/layers';

export default class LayOut extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    
    return (
      <div>
        <p>Layout Primitives</p>

<Pane   
    clearfix 
    elevation={4}
    float="center"
    // width={1000}
    // height={120}
    // margin={24}
    // display="flex"
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
    >
</Pane>
<ThemeConsumer>
  {theme => (
    <Pane clearfix>
      {Object.keys(theme.colors.background).map(background => (
        <Pane
          key={background}
          background={background}
          float="left"
          width={120}
          height={120}
          margin={24}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text color="default">{background}</Text>
        </Pane>
      ))}
    </Pane>
  )}
</ThemeConsumer>
      </div>
    )
  }
}

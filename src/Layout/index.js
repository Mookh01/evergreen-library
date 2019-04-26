import React, { Component } from 'react'
import  { ThemeConsumer, Text } from 'evergreen-ui'
import { Pane } from 'evergreen-ui/commonjs/layers';

export default class LayOut extends Component {

  render() {
    
    return (
      <div>
        <p>Layout Primitives</p>

<Pane   
    clearfix 
    elevation={4}
    float="center"
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

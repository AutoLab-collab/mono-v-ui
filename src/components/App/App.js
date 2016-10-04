import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { css } from 'aphrodite'
import { styles } from './styles.css'
import { viewportToPixel } from '../../util'

import Input from '../Input/Input'
import Conversation from '../Conversation/Conversation'


@observer
class App extends React.Component {
  render() {
    const {store} = this.props.store
    let mapWidth = styles.contextWrapper._definition.flexBasis.replace('%','')
    return <div>
      <div className={css(styles.car)}/>
      <div className={css(styles.main)}>
        <div className={css(styles.hSpace)}/>
        <div style={{display:'flex',flex:'1 1 auto'}}>
          <div className={css(styles.hSpace)}/>
          <div className={css(styles.conversationWrapper)}>
            <div className={css(styles.componentTitle)}>Conversation</div>
            <Conversation store={this.props.store} />
            <Input store={this.props.store} />
          </div>
          <div className={css(styles.hSpace)}/>
          {/*<div className={css(styles.contextWrapper)}>
            <ReactMapboxGl
              style={stylePrep(guideStyle,'route')}
              zoom={guideConfig.zoom}
              accessToken={'pk.eyJ1IjoidnVsZGluIiwiYSI6ImNpbmhxZWl3bTB3YWR0cWtqeHIycjV5em0ifQ.JOJc-IhViIB1NTZ4H33Z6g'}
              containerStyle={{width:viewportToPixel(`${mapWidth}vw`),height:viewportToPixel('100vh')-20}}
              onStyleLoad={store.guide}
            >
            </ReactMapboxGl>
         </div>  */}
          <div className={css(styles.hSpace)}/>
        </div>
        <div className={css(styles.hSpace)}/>
      </div>
    </div>
  }
}



export default App

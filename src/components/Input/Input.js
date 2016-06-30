import React from 'react'
import {observer} from 'mobx-react'
import {css} from 'aphrodite'
import {styles} from './styles.css'
import AudioRecorder from '../audio/AudioRecorder'

const Input = ({store}) => {
  return <div className={css(styles.inputWrapper)}>
    <div className={css(styles.audioWrapper)}>
      <AudioRecorder store={store} onChange={store.audioSubmit} />
    </div>
    <form className={css(styles.form)} onSubmit={store.inputSubmit}>
      <input id='input' className={css(styles.input)} placeholder='Enter Chat to Analyze' type='text'/>
    </form>
  </div>
}

Input.propTypes = {
  store: React.PropTypes.object
}

export default observer(Input)

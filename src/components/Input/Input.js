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
     <div className={css(styles.seatWrapper)}>
       <div>please select your seat</div>
       <div className={css(styles.noWrapper)}>
      <button className={css(styles.button)} onClick={()=>store.changeSpeakMode()} style={store.SpeakMode? {backgroundColor: '#ff0000'}:{backgroundColor:'#00ff00'}}>{store.TypeOrSpeak}</button>
       <button className={css(styles.button)} onClick={()=>store.changeSeat(1)} style={store.seatState1? {backgroundColor: '#ffff00'}:{backgroundColor:'#4CAF50'}}>1</button>
       <button className={css(styles.button)} onClick={()=>store.changeSeat(2)} style={store.seatState2? {backgroundColor: '#ffff00'}:{backgroundColor:'#4CAF50'}}>2</button>
       <button className={css(styles.button)} onClick={()=>store.changeSeat(3)} style={store.seatState3? {backgroundColor: '#ffff00'}:{backgroundColor:'#4CAF50'}}>3</button>
       <button className={css(styles.button)} onClick={()=>store.changeSeat(4)} style={store.seatState4? {backgroundColor: '#ffff00'}:{backgroundColor:'#4CAF50'}}>4</button>
       </div>
    </div>
  </div>
}

Input.propTypes = {
  store: React.PropTypes.object
}

export default observer(Input)

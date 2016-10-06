import React, { Component, PropTypes } from 'react';
import {observer} from 'mobx-react'
import {css} from 'aphrodite'
import {styles} from './styles.css'
import WatsonSpeech from 'watson-speech'

@observer
class AudioRecorder extends Component {
  startRecording = () => {
    this.props.store.audioRecording()
    let stream = WatsonSpeech.SpeechToText.recognizeMicrophone({
      token: this.props.store.sttToken,
      continuous: false, // stop transcription on first pause
      keepMic:true,
      outputElement: '#input' // CSS selector or DOM Element
    })
    var that = this;
    setTimeout(function(){
    	that.props.store.changeState();
    },9000)
    stream.on('error', (err) => {
    	console.log(err)
    	this.props.store.audioState = 'ready'
    	})
    /*stream.on('close', (reasoncode,description)=> {
    	console.log('microphone closed')
    	this.props.store.audioState = 'ready'
    })	*/
    stream.on('data', (d) => {
  
      if(d.final) {
        this.props.store.audioReady()
        this.props.store.dialogSTT = d.alternatives[0].transcript;
        

       /* let audio = WatsonSpeech.TextToSpeech.synthesize({
        text: d.alternatives[0].transcript,
        token: this.props.store.ttsToken,
        autoPlay: true
        }) */
      }
    })
  }
  render() {
    return <div className={`${css(styles.audio)} ${this.props.store.audioState == 'recording' ? css(styles.recording) : css(styles.ready)}`} onClick={this.startRecording} >
      <i className={`${this.props.store.audioState == 'processing' ? 'fa fa-fw fa-spinner fa-pulse fa-fw margin-bottom' : 'fa fa-fw fa-microphone'}`} style={{fontSize: '1.5em'}} />
    </div>
  }
}

AudioRecorder.propTypes = {
  store: PropTypes.object
}

export default AudioRecorder

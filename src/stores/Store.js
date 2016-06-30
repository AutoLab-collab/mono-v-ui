import { observable } from 'mobx'

// speech
import sttService from '../services/speechToText'
import ttsService from '../services/textToSpeech'

class Store {
  @observable question = ''
  @observable answer = 'Waiting on response from server...'
  @observable history = []
  userName = 'Tae'
  projectName = 'Cognitive Driver Profile'
  clientId = ''
  conversationId = ''
  server = {server: 'gsc-ind-cdp-api.mybluemix.net', port: ''}

  constructor() {
    sttService(this.sttTokenCallback,this.server)
    ttsService(this.ttsTokenCallback,this.server)
  }

  // speech start
  @observable audioState = 'ready'
  sttToken = {}
  ttsToken = {}
  inputSubmit = (e) => {
    e.preventDefault()
    this.questionUpdate()
  }
  questionUpdate = () => {
    let input = document.querySelector('#input')
    this.question = input.value
    this.history.push({
      source: 'me',
      value: input.value
    })
    input.value = ''
  }
  sttTokenCallback = (token) => {
    this.sttToken = token
  }
  ttsTokenCallback = (token) => {
    this.ttsToken = token
  }
  audioRecording = () => {
    this.audioState = 'recording'
  }
  audioReady = () => {
    this.questionUpdate()
    this.audioState = 'ready'
  }
  // speech end
}

export default Store

import { observable } from 'mobx'
import dialogService from '../services/dialog'
// speech
import sttService from '../services/speechToText'
import ttsService from '../services/textToSpeech'
import selectGasStation from '../services/stationSelection'
import direction from '../services/direction'
// map
import guidanceSim,{simulate,setSpeed} from 'guidance-sim'

import WatsonSpeech from 'watson-speech'
import AudioRecorder from '../components/audio/AudioRecorder'
class Store {
  @observable question = ''
  seatNumber = 1
  @observable seatState1 = true
  @observable seatState2 = false
  @observable seatState3 = false
  @observable seatState4 = false
  @observable answer = 'Waiting on response from server...'
  @observable history = []
  @observable dialogSTT=''
  userName = 'Tae'
  projectName = 'Cognitive Driver Profile'
  clientId = ''
  //conversationId = ''
  @observable audioState = 'ready'
  server = {server: 'gsc-ind-cdp-api-lm.mybluemix.net', port: ''}
  serveraskwatson={server:'mono-v-staging.mybluemix.net',port:''}
  //server = {server: 'localhost', port: '6003'}
  sttToken = {}
  ttsToken = {}
  constructor() {
    //updateProfileService(this.userName,this.updateProfileCallback,this.server)
    sttService(this.sttTokenCallback,this.server)
    ttsService(this.ttsTokenCallback,this.server)
  }
  updateProfileCallback = (d) => {
    this.clientId = d.client_id
    //autorun(() => this.dialog)
  }
  
  
  dialogCallback = (answer) => {
   
    var answerstring=''
   // for(var i=0;i<answer.output.text.length;i++)
    //this.answer = answer.text
   /*{ answerstring=answerstring+answer.output.text[i]
   }
   */
    answerstring=answer.transcription
    this.history.push({
      source: 'you',
      value: answerstring
    })
    
    this.dialogTTS=answerstring
    this.audioDialog()
  }
  inputSubmit = (e) => {
    e.preventDefault()
    this.questionUpdate()
  }
  questionUpdate = () => {
    let input = document.querySelector('#input')

    var questionValue=input.value
  
    this.history.push({
      source: 'me',
      value: input.value
    })
    input.value = ''
    dialogService(questionValue, this.seatNumber.toString(), this.dialogCallback,this.serveraskwatson)
   
    
  }
  sttTokenCallback = (token) => {
    //console.log('sttTokenCallback',token)
    this.sttToken = token
  }
  ttsTokenCallback = (token) => {
    this.ttsToken = token
  }
  /*
  audioSubmit = (obj) => {
    if(obj != undefined){
      console.log('audioSubmit',obj)
    }
  }
  */
  audioRecording = () => {
    //console.log('audioRecording')
    this.audioState = 'recording'
  }
 
  audioReady = () => {
    //console.log('audioReady')
    this.questionUpdate()
    this.audioState = 'ready'
  }
  changeState =()=>{
  	 
  	 this.audioState = 'ready'
  }
  guide = (mapboxgl,map) => {
    //console.log(map,e)
    styleRoute(mapboxgl, map, guideConfig.route)
    guidanceSim(map, guideConfig)
  }
   audioDialog=() => {
    let audio = WatsonSpeech.TextToSpeech.synthesize({
      text: this.dialogTTS,
      token: this.ttsToken,
      autoPlay: true,
      voice: "en-US_LisaVoice"
    })
   }
   changeSeat=(seat_number) => {
   	this.seatNumber=seat_number
   	if (seat_number ==1)
      {	
      	this.seatState1= true
      	this.seatState2 = false
      	this.seatState3=false
      	this.seatState4=false
      }
     else if (seat_number ==2)
      {	
      	this.seatState1= false
      	this.seatState2 = true
      	this.seatState3=false
      	this.seatState4=false
      } 
      else if (seat_number==3)
      {	
      	this.seatState1= false
      	this.seatState2 = false
      	this.seatState3=true
      	this.seatState4=false
      } 
      else if (seat_number ==4)
      {	
      	this.seatState1= false
      	this.seatState2 = false
      	this.seatState3=false
      	this.seatState4=true
      } 
   }
}

export default Store

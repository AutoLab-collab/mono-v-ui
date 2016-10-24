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
  @observable seatState=[true,false,false,false]
 
  @observable SpeakMode = false
  @observable TypeOrSpeak = 'Type'
  @observable answer = 'Waiting on response from server...'
  @observable history = []
  @observable dialogSTT=''

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
    answerstring=answer.text
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
    if(input.value!='')
    {
    var questionValue=input.value
  
    this.history.push({
      source: 'me',
      value: input.value
    })
    input.value = ''
    dialogService(questionValue, this.seatNumber.toString(), this.dialogCallback,this.serveraskwatson)
    }
    else
     {
        alert("You may click the microhpone if I missed what you have said.")
    }
    
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
  changeSpeakMode = ()=>{
  	this.SpeakMode=!this.SpeakMode
  	if(this.TypeOrSpeak=="Speak")
  	this.TypeOrSpeak="Type"
  	else
  	this.TypeOrSpeak="Speak"
  	
  }
  guide = (mapboxgl,map) => {
    //console.log(map,e)
    styleRoute(mapboxgl, map, guideConfig.route)
    guidanceSim(map, guideConfig)
  }
   audioDialog=() => {
    var audio = WatsonSpeech.TextToSpeech.synthesize({
      text: this.dialogTTS,
      token: this.ttsToken,
      autoPlay: true,
      voice: "en-US_LisaVoice"
    })
    //console.log("audio",audio)
    var self=this
    audio.addEventListener("ended", function() {
    	//console.log("Finished playing audio");
    	if(self.SpeakMode==true){
    		self.startRecording();
    	}    	        		
    })
  }
  startRecording = () => {
    this.audioRecording()
    var self=this
    let stream = WatsonSpeech.SpeechToText.recognizeMicrophone({
      token: this.sttToken,
      continuous: false, // stop transcription on first pause
      keepMic:true,
      outputElement: '#input' // CSS selector or DOM Element
    }).promise().then(function() {
    	self.audioReady()
        self.dialogSTT=text
    	})
    	
      .then(function(){
      	console.log('no input')
    	self.changeState()}
    	)
      .catch(function(){
      	console.log('no response')
    	self.changeState()}
    	)	
         
   } 
   changeSeat=(seat_number) => {  
   	this.seatNumber = seat_number; 	   	
   	for(var i = 1; i <= 4; i++){
   		if (seat_number == i){
   			this.seatState[i-1]=true
   		}
   		else{
   		    this.seatState[i-1]=false	
   		}
   		
   	}
   }
}

export default Store

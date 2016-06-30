import { observable } from 'mobx'

// speech
import sttService from '../services/speechToText'
import ttsService from '../services/textToSpeech'

// map
import guidanceSim,{simulate} from 'guidance-sim'
import guideConfig from '../../config/newguideConfiguration.json'
import newDirections from '../../config/newDirections.json'
import guidanceGeoJSON,{styleRoute} from 'guidance-geojson'
import YelpService from '../services/yelp'
import {Locator} from 'guidance-replay'
import point from 'turf-point'

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
  
  // map
  @observable mapPoints = []
  pointBuffer = .0005
  // map start
  getYelpBoundingBox = (data) => {
    let bounds = [], thisBound, coords, point, lat, lng
    console.log('data for yelp', data)
    data.routes.forEach(route => {
      route.legs.forEach(leg => {
        leg.steps.forEach(step => {
          step.geometry.coordinates.forEach(coord => {
            /*
            thisBound = bounds[bounds.push({})-1]
            lng = coord[0]
            lat = coord[1]
            thisBound.xMin = thisBound.xMin < lng ? thisBound.xMin : lng - this.pointBuffer
            thisBound.xMax = thisBound.xMax > lng ? thisBound.xMax : lng + this.pointBuffer
            thisBound.yMin = thisBound.yMin < lat ? thisBound.yMin : lat - this.pointBuffer
            thisBound.yMax = thisBound.yMax > lat ? thisBound.yMax : lat + this.pointBuffer
            */
          })
        })
      })
    })
    return bounds
  }
  guide = (mapboxgl,map) => {
    //this.mapPointer=map
    styleRoute(mapboxgl, map, guideConfig.route)
    //var res= guidanceSim(map, guideConfig)
    var res = simulate(map,guideConfig)
    var prevStep =0
    var self=this
    res.on('update', function(data) {
      var locator=new Locator(guideConfig.route)
      var userStep = locator.step(data.stepTime)
      var userLocation = point(data.stepCoords)
      self.currentLocation = data.stepCoords
      if (prevStep !=userStep) {
       	console.log('user location',data.stepCoords)
        console.log('user Step',userStep)
        prevStep = userStep
        //self.navigationTime = self.navigationTime-1
        //todo: display instruction for the next step
      }
    })
  }
}

export default Store

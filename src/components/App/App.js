import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { css } from 'aphrodite'
import { styles } from './styles.css'
import { viewportToPixel } from '../../util'

import Input from '../Input/Input'
import Conversation from '../Conversation/Conversation'

import ReactMapboxGl,{ Layer, Feature}  from '../../react-mapbox-gl/index'
import MapboxCSS from '../../react-mapbox-gl/mapbox-css/mapbox-gl.css'
import { stylePrep } from 'guidance-geojson'
import guideConfig from '../../../config/guideConfiguration.json'
import guideStyle from '../../../config/guideStyle.json'

import TopBar from '../TopBar/TopBar'
import FuelDialog from '../CarDialog/FuelDialog'
import RatingDialog from '../CarDialog/RatingDialog'
import DestDialog from '../CarDialog/DestDialog'
import RecomDialog from '../Recommendation/RecomDialog'
import RouteDialog from '../CarDialog/RouteDialog'
import ShowRoute from '../events/ShowRoute'

@observer
class App extends Component {
  render() {
    /*
    return <div className={css(styles.grey)}>
        <button onClick={this.onReset} className={css(styles.orange,styles.hover)}>
          <span className={'fa fa-first-order'}></span><span>Seconds passed: {this.props.store.timer}</span>
        </button>
      </div>
  }

  onReset = () => {
    this.props.store.resetTimer()
    */
    const {store} = this.props.store
    /*
    let mapWidth = styles.contextWrapper._definition.flexBasis.replace('%','')
    let layer = null
    let features = store.mapPoints.map((point,index) => {
      return <Feature key={`key${index}`} coordinates={[point[0],point[1]]}/>
    })
    let featuresRoute=store.mappedRoute
    */
    return <div>
      <div className={css(styles.car)}/>
      <div className={css(styles.main)}>
        <div className={css(styles.hSpace)}/>
        <div style={{display:'flex',flex:'1 1 auto'}}>
          <div className={css(styles.hSpace)}/>
           <div style={{display:'flex',flex:'1 1 auto', flexDirection: 'column' }}>
           
             <div className={css(styles.conversationWrapper)}>
                <div className={css(styles.componentTitle)}>Conversation</div>
                   <Conversation store={this.props.store} />
                   <Input store={this.props.store} />
              </div>
              <div className={css(styles.hSpace)}/>
              <div className={css(styles.conversationWrapper)}>
             <div className={css(styles.componentTitle)}>Events</div>
                    
              <ShowRoute store={this.props.store}/>
             </div>
             
           </div>
          <div className={css(styles.hSpace)}/>
          <div className={css(styles.contextWrapper)}>
          </div>
          <div className={css(styles.hSpace)}/>
        </div>
        <div className={css(styles.hSpace)}/>
      </div>
      {/*
      <div className={css(styles.car)} style={{left:viewportToPixel(`${100-mapWidth}vw`) + viewportToPixel(`${mapWidth}vw`)*.5,top:viewportToPixel('100vh')*.9}}><img src="./media/car.png" alt="car" /></div>
      <TopBar store={store}/>
      <FuelDialog store={store}/>
      <RatingDialog store={store}/>  
      <DestDialog store={store}/>     
      <RecomDialog store={store}/>
      <RouteDialog store={store}/>
      */}
    </div>
  }
}

export default App

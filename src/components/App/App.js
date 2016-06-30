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
    let mapWidth = styles.contextWrapper._definition.flexBasis.replace('%','')
    let layer = null
    let features = this.props.store.mapPoints.map((point,index) => {
      return <Feature key={`key${index}`} coordinates={[point[0],point[1]]}/>
    })
    let featuresRoute=this.props.store.mappedRoute
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
            <ReactMapboxGl
              style={stylePrep(guideStyle)}                
              zoom={guideConfig.zoom}
              accessToken={'pk.eyJ1IjoidnVsZGluIiwiYSI6ImNpbmhxZWl3bTB3YWR0cWtqeHIycjV5em0ifQ.JOJc-IhViIB1NTZ4H33Z6g'}
              containerStyle={{width:viewportToPixel(`${mapWidth}vw`),height:viewportToPixel('100vh')-20}}
              onStyleLoad={this.props.store.guide}
             >
              <Layer
                type='symbol'
                layout={{ 'icon-image': 'marker-15' }}>
                {features}
              </Layer>
            </ReactMapboxGl>
          </div>
          <div className={css(styles.hSpace)}/>
        </div>
        <div className={css(styles.hSpace)}/>
      </div>
      <div className={css(styles.car)} style={{left:viewportToPixel(`${100-mapWidth}vw`) + viewportToPixel(`${mapWidth}vw`)*.5,top:viewportToPixel('100vh')*.9}}><img src="./media/car.png" alt="car" /></div>
      <TopBar store={this.props.store}/>
      <FuelDialog store={this.props.store}/>
      <RatingDialog store={this.props.store}/>  
      <DestDialog store={this.props.store}/>     
      <RecomDialog store={this.props.store}/>
      <RouteDialog store={this.props.store}/>
    </div>
  }
}

export default App

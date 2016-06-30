import React, { Component, PropTypes } from 'react';
import {observer} from 'mobx-react'
import {css} from 'aphrodite'
import {styles} from './styles.css'

import RouteDialog from '../CarDialog/RouteDialog'

/*const ShowRoute = ({store}) => {
  return <div className={css(styles.inputWrapper)}>
    <div className={css(styles.audioWrapper)}>
      <AudioRecorder store={store} onChange={store.audioSubmit} />
    </div>
    
  </div>
}*/
var ShowRoute = React.createClass({
    
    render: function() {
        return (
            <div>
             <input type="submit" value="Recommendation" onClick={this.props.store.showRecomm}/>
                
               <input type="submit" value="Destination" onClick={this.props.store.showDest}/>
                <input type="submit" value="Fuel" onClick={this.props.store.showFuel}/>              
                
              
              <input type="submit" value="Rating" onClick={this.props.store.showRating}/> 
             <input type="submit" value="Route" onClick={this.props.store.showRoute} /> 
            </div>
        );
    }
});


ShowRoute.propTypes = {
  store: React.PropTypes.object
}
export default observer(ShowRoute)

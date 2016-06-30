import React from 'react'
import {observer} from 'mobx-react'
import {css} from 'aphrodite'
import {styles} from './styles.css'
//import AudioRecorder from '../audio/AudioRecorder'


const RouteDialog =({store})=>{
  
	return <div className= {css(styles.DestDialog)} id="RouteDialog" style={store.routeDialogState? {display:'inherit'}:{display:'none'}} > 
     	<table width="100%" height="100%">
     		<tbody>
      	    	<tr><td>	
      	    		<div className={css(styles.locationIcon)}>
      	    			<img className={css(styles.titleIcon)} src="./auto_imgs/pins.png" alt="your location" />
      	    		</div>
      	    	</td></tr>
      	    	<tr><td>
      	    		<div className= {css(styles.dialogText)} id="routeText">Route through Option {store.recommChoice=='A'? 'A':'B'}?</div>
      	    	</td></tr>
      	    	<tr><td>
      	    		<button className={css(styles.DialogButton)} onClick={store.closeRoute} id="RouteBtnYes">Yes</button>
      	    		<button className={css(styles.DialogButton)} onClick={store.closeRoute} id="RouteBtnNo">No</button>
      	    	</td></tr>
      	    	
      	    	</tbody>
      		</table>
      	</div>
}

RouteDialog.propTypes = {
  store: React.PropTypes.object
}
export default observer(RouteDialog)

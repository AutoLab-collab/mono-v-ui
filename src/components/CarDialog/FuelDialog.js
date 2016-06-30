import React from 'react'
import {observer} from 'mobx-react'
import {css} from 'aphrodite'
import {styles} from './styles.css'
//import AudioRecorder from '../audio/AudioRecorder'


const FuelDialog =({store})=>{
	return <div className={css(styles.FuelDialog)} id="FuelDialog" style={store.fuelDialogState? {display:'inherit'}:{display:'none'}} >
     	<table width="100%" height="100%">
      	    	<tbody>
      	    	<tr><td>
      	    		<div className={css(styles.locationIcon)}>
      	    			<img className={css(styles.titleIcon)} src="./auto_imgs/gas station.png" alt="gas" height="100" width="72"/>
      	    		</div>
      	    	</td></tr>
      	    	<tr><td>
      	    		<div className={css(styles.dialogText)} id="refillText">Car will need fuel before arrival Should I get options</div>
      	    	</td></tr>
      	    	<tr><td>
      	    		<button className={css(styles.DialogButton)} onClick={store.closeFuel} id="FuelBtnYes">Yes</button>
      	    		<button className={css(styles.DialogButton)} onClick= {store.closeFuel} id="FuelBtnNo">No</button>
      	    	</td></tr>
      	    	
      	    	</tbody>
      		</table> 
      	</div>
}
FuelDialog.propTypes = {
  store: React.PropTypes.object
}
export default observer(FuelDialog)

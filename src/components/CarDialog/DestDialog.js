import React from 'react'
import {observer} from 'mobx-react'
import {css} from 'aphrodite'
import {styles} from './styles.css'

const DestDialog =({store})=>{
	
	
return <div className={css(styles.DestDialog)} id="DestDialog" style={store.destDialogState?{display:'inherit'}:{display:'none'}}> 
     	<table width="100%" height="100%">
     		<tbody>
      	    	<tr><td>
      	    		<div className={css(styles.locationIcon)}>
      	    			<img className={css(styles.titleIcon)} src="./auto_imgs/your location.png" alt="your location" height="97" width="88"/>
      	    		</div>
      	    	</td></tr>
      	    	<tr><td>
      	    		<div className={css(styles.dialogText)} id="locationText">Is {store.navigationText} your destination? </div>
      	    	</td></tr>
      	    	<tr><td>
      	    		<button className={css(styles.DialogButton)} onClick={()=>store.closeDest("yes")} id="BtnYes">Yes</button>
      	    		<button className={css(styles.DialogButton)} onClick={()=>store.closeDest("no")} id="BtnNo">No</button>
      	    	</td></tr>
      	    	
      	    	</tbody>
      		</table>
      	</div>
 }     	
DestDialog.propTypes = {
  store: React.PropTypes.object
}
export default observer(DestDialog)

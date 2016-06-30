import React from 'react'
import {observer} from 'mobx-react'
import {css} from 'aphrodite'
import {styles} from './styles.css'
//import AudioRecorder from '../audio/AudioRecorder'


const RecomDialog =({store})=>{
	return <div> <div className={css(styles.OptionDialogA)} id="OptionA" onClick={()=>store.closeRecomm('A')}  style={store.recommDialogState? {display:'inherit'}:{display:'none'}}>
      	    <table width="100%" height="100%">
      	    	<tbody><tr>
      	    		<td><div className={css(styles.choiceIcons)}>
      	    			<img src="./auto_imgs/coffee.png" alt="coffee" height="80" width="80"/>
      	    			<img src="./auto_imgs/gas.png" alt="gas" height="80" width="80"/>
      	    		</div></td>
      	    	</tr>
      	    	<tr><td>
      	    		<div className={css(styles.choicePrice)} id="totalpriceA">Option A $45</div>
      	    	</td></tr>
      	    	<tr><td>
      	    		<div className={css(styles.choiceUnit)} id="gaspriceA">Gas $1.8/G</div>
      	    	</td></tr>
      	    	<tr><td>
      	    		<div className={css(styles.choiceList)} id="choiceTextA">Chai Latte</div>
      	    	</td></tr>
      	    	</tbody>
      		</table>
      	</div> 
      	<div className={css(styles.OptionDialogB)} id="OptionB" onClick={()=>store.closeRecomm('B')}

 style={store.recommDialogState? {display:'inherit'}:{display:'none'}}>
      	 <table width="100%" height="100%">
      	    	<tbody><tr><td>
      	    		<div className={css(styles.choiceIcons)}>
      	    			<img src="./auto_imgs/coffee.png" alt="coffee" />
      	    			<img src="./auto_imgs/gas.png" alt="gas" height="80" width="80"/>
      	    			<img src="./auto_imgs/carwash.png" alt="gas" height="80" width="80"/>
      	    			
      	    		</div>
      	    	</td></tr>
      	    	<tr><td>
      	    		<div className={css(styles.choicePrice)} id="totalpriceB">Option B $35</div>
      	    	</td></tr>
      	    	<tr><td>
      	    		<div className={css(styles.choiceUnit)} id="gaspriceB">Gas $1.8/G</div>
      	    	</td></tr>
      	    	<tr><td>
      	    		<div className= {css(styles.choiceList)} id="choiceTextB">Chai Latte, Car Wash</div>
      	    	</td></tr>
      	    	</tbody>
      		</table>
      	</div> 	  
      </div>	
}
RecomDialog.propTypes = {
  store: React.PropTypes.object
}
export default observer(RecomDialog)

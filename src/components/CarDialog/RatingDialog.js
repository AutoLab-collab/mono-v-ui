import React from 'react'
import {observer} from 'mobx-react'
import {css} from 'aphrodite'
import {styles} from './styles.css'

const RatingDialog =({store}) => {
return <div className= {css(styles.RatingDialog)} id="RatingDialog" style={store.ratingDialogState? {display:'inherit'}:{display:'none'}}> 
     	<table width="100%" height="100%">
     		<tbody>
      	    	<tr>
      	    		<td>
      	    		<div className={css(styles.RatingTitle)}>
      	    			Rate your experience
      	    		</div>
      	    		 
      	    		<hr className={css(styles.RatingHr)}/>
      	    		</td>
      	    	</tr>
      	    	<tr></tr>
      	    	<tr><td>
      	    		<div className= {css(styles.ratingIcons1)} id="ratingone" onClick={()=>store.closeRating('one')} >
      	    			<img  src="./auto_imgs/rating.png" alt="gas" height="42" width="42"/>
      	    	    </div>
      	    	</td></tr>
      	    	<tr><td>
      	    		<div className={css(styles.ratingIcons1)} id="ratingtwo" onClick={()=>store.closeRating('two')} >
      	    		<img  src="./auto_imgs/rating.png" alt="gas" height="42" width="42"/>
      	    	    <img src="./auto_imgs/rating.png" alt="gas" height="42" width="42"/>
      	    	   </div> 
      	    	</td></tr>
      	    	<tr><td>
      	    		<div className={css(styles.ratingIcons1)} id="ratingthree" onClick = {()=>store.closeRating('three')} >
      	    		<img  src="./auto_imgs/rating.png" alt="gas" height="42" width="42"/>
      	    	    <img  src="./auto_imgs/rating.png" alt="gas" height="42" width="42"/>
      	    	    <img  src="./auto_imgs/rating.png" alt="gas" height="42" width="42"/>
      	    	   </div>
      	    	</td></tr>
      	    	<tr><td>
      	    		<div className={css(styles.ratingIcons1)} id="ratingfour" onClick = {()=>store.closeRating('four')}>
      	    		<img  src="./auto_imgs/rating.png" alt="gas" height="42" width="42"/>
      	    	    <img  src="./auto_imgs/rating.png" alt="gas" height="42" width="42"/>
      	    	    <img  src="./auto_imgs/rating.png" alt="gas" height="42" width="42"/>
      	    	    <img  src="./auto_imgs/rating.png" alt="gas" height="42" width="42"/>
      	    	    </div>
      	    	</td></tr>
      	    	<tr><td>
      	    		<div className={css(styles.ratingIcons1)} id="ratingfive" onClick = {()=>store.closeRating('five')}>
      	    		<img  src="./auto_imgs/rating.png" alt="gas" height="42" width="42"/>
      	    	    <img  src="./auto_imgs/rating.png" alt="gas" height="42" width="42"/>
      	    	    <img  src="./auto_imgs/rating.png" alt="gas" height="42" width="42"/>
      	    	    <img  src="./auto_imgs/rating.png" alt="gas" height="42" width="42"/>
      	    	    <img  src="./auto_imgs/rating.png" alt="gas" height="42" width="42"/>
      	    	</div>
      	    	</td></tr>
      	    	<tr><td>
      	    		<button className={css(styles.DialogButton)} onClick={store.closeRating} id="BtnSkip">Skip</button>
      	    		
      	    	</td></tr>
      	    	
      	    	</tbody>
      		</table>
      	</div>
      }
      	
RatingDialog.propTypes = {
  store: React.PropTypes.object
}
export default observer(RatingDialog)
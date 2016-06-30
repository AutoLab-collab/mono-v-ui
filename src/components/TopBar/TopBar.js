import React from 'react'
import {observer} from 'mobx-react'
import {css} from 'aphrodite'
import {styles} from './styles.css'
//import AudioRecorder from '../audio/AudioRecorder'



const TopBar =({store})=>{
	return <div className={css(styles.topbar)} > 
     	 <table style={{width:'100%', height:'100%'}}>
     	 	<colgroup>
     	 	
     	 	 <col style={{width:'40%'}}/>
       		 <col style={{width:'30%'}}/>
        	 <col style={{width:'20%'}}/>
        	 </colgroup>  
        	 <tbody>
     	 	<tr>
	     	<td>
	     		<h1 className={css(styles.NavText)}>  Destination to {store.navigationText}
	     		
	     	</h1>
	     	</td>
	     	<td><h1 className={css(styles.NavTime)}> Arrive in {store.navigationTime} mins
	     		
	     	</h1>
	     	</td>
	 	    <td>
	 	    	<button className={css(styles.NavBtn)}><h2>Guidance</h2></button>
	 	    	
	 	    </td>  
	 	    </tr>
	 	    </tbody>
         </table>   
         </div>
}
TopBar.propTypes = {
  store: React.PropTypes.object
}
export default observer(TopBar)
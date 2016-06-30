import {StyleSheet} from 'aphrodite'
//import titleIcon from '../../../media/gas station.png'

export const styles = StyleSheet.create({
topbar:{
 backgroundColor:'#404041',
 position: 'absolute',
 width: '100%',
 height: '100px',
 opacity: '0.7',
 top: '0px',
 left: '0px', 
 display: 'block',
 margin: '0'
},
NavText:{
	marginLeft: '20px',
	color: 'white',
	fontWeight: 'bold'
},
 NavTime:{
	color: 'white',
	fontWeight: 'bold'
	
},
NavBtn:{
	
	backgroundColor:'#404041',
    border: '2px solid #3071A9',
    borderRadius: '15px',
    color: '#ffffff',
    cursor: 'pointer',
    display: 'inline-block',
    fontFamily: 'Arial',
   
    padding: '0px 31px',
    textDecoration: 'none',
    textShadow: '0 1px 0 #5b8a3c',
    ':hover': 
    {
	backgroundColor: '#929399'
	}
}


})
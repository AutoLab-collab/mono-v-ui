import {StyleSheet} from 'aphrodite'
//import titleIcon from '../../../media/gas station.png'

export const styles = StyleSheet.create({
OptionDialogA:{
 background: '#404041',
 position: 'absolute',
 width: '40%',
 height: '250px',
 top: '50px',
 left: '220px', 

 margin: '0',
 border: '2px solid #3071A9',
 ':hover': {
	backgroundColor:'#929399'
 }
},
OptionDialogB:{
 background: '#404041',
 position: 'absolute',
 width: '40%',
 height: '250px',
 top: '300px',
 left: '220px', 
 
 margin: '0',
 border: '2px solid #3071A9',
  ':hover': {
	backgroundColor:'#929399'
 }
},
 choiceIcons:{
	marginTop:'30px',
	marginLeft: '20px'
},
choicePrice:{
	marginLeft: '20px',
	fontWeight: 'bold',
	color: 'white',
	fontSize: '200%',
	textAlign:'left',
	fontFamily: 'Arial',
	padding: '10px'
},
choiceUnit:{
	fontWeight: 'bold',
	color: 'white',
	marginLeft: '30px',
	fontSize: '150%',
	textAlign:'left',
	fontFamily: 'Arial'
},
choiceList:{
	fontWeight: 'bold',
	color: 'white',
	marginLeft: '30px',
	fontSize: '150%',
	textAlign:'left',
	fontFamily: 'Arial'
	
}

})
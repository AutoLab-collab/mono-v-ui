import {StyleSheet} from 'aphrodite'
//import titleIcon from '../../../media/gas station.png'

export const styles = StyleSheet.create({
FuelDialog:{
 backgroundColor: '#404041',
 position: 'absolute',
 width: '40%',
 height: '450px',
 
 top: '50px',
 left: '220px',

 margin: '0',
 border: '2px solid #3071A9',
 borderRadius: '25px' 
 
 
},

DialogButton: {
    display: 'block',
    width: '100%',
    color:'white',
    backgroundColor: '#404041',
    border:'none',
    height: '50px',
    fontWeight: 'bold',
    fontSize: '200%',
    ':hover': {
      backgroundColor: '#3071A9'
    }
    
},

locationIcon:{
	//background: `url(${titleIcon})`,
	marginTop:  '10px'
},
titleIcon:{
	display: 'block',
	margin:'30px auto auto'
	

},
dialogText:{
	marginLeft: '20px',
	color: 'white',
	fontSize: '200%',
	textAlign:'center',
	fontFamily: 'Arial',
	padding: '10px'
},
RatingDialog: {
 backgroundColor: '#404041',
 position: 'absolute',
 width: '40%', 
 top: '50px',
 left: '220px',
 

 margin: '0',
 border: '2px solid #3071A9',
 borderRadius: '25px' ,
 height: '450px'
},
 RatingTitle:{
	marginLeft: '20px',
	color: 'white',
	fontSize: '150%',
	textAlign:'center',
	fontFamily: 'Arial',
	padding: '10px'
	
},
 ratingIcons1:{
	marginLeft: '20px',
	':hover':{
	/*background: #3071A9; */
	 border: '2px solid #3071A9'
	}
 },
 RatingHr: {
 	 width:'100%',
 	 color:'white',
 	 noshade:'true'
   },
  DestDialog:{
	 backgroundColor: '#404041',
	 position: 'absolute',
	 width: '40%',
	 height: '350px',
	 
	 top: '50px',
	 left: '120px',
	
	 margin: '0',
	 border: '2px solid #3071A9',
	 borderRadius: '25px' 
	 
 
},
 RouteDialog:{
	 backgroundColor: '#404041',
	 position: 'absolute',
	 width: '40%',
	 height: '650px',
	 
	 top: '50px',
	 left: '220px',
	
	 margin: '0',
	 border: '2px solid #3071A9',
	 borderRadius: '25px' 
	 
 
}

})
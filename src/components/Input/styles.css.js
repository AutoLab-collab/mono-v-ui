import {StyleSheet} from 'aphrodite'

export const styles = StyleSheet.create({
  audioWrapper: {
    flex: '0 0 30px',
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    flex: '1 auto',
    //flex: '0 0 55%',
    display: 'flex'
  },
  inputWrapper: {
    flex: '0 0 10%',
    //borderTop: '1px solid',
    //borderColor: '#CFCFCF',
    display: 'flex'
  },
  input: {
    margin: '5px',
    padding: '5px',
    border: '0px solid',
    background: '#D4D5D7',
    borderRadius: '9.5pt',
    fontSize: '1.2em',
    flex: '1 1 auto'
  },
   button: {
  	
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    borderRadius: '25px',
    display: 'inline-block',
    fontSize: '16px'
  }
})

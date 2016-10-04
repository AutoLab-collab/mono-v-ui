import {StyleSheet} from 'aphrodite'
import background from '../../../media/bg.png'
import ibmLogo from '../../../media/ibm_logo.png'
import carImg from '../../../media/car.png'

export const styles = StyleSheet.create({
  grey: {
    backgroundColor: 'grey'
  },
  orange: {
    backgroundColor: 'orange'
  },
  hover: {
    ':hover': {
      backgroundColor: 'black',
      color: 'white'
    }
  },
  small: {
    '@media (max-width: 600px)': {
      backgroundColor: 'red'
    }
  },
  /*
  form: {
    width: '100%',
    display: 'flex'
  },
  inputWrapper: {
    flex: '0 0 30px',
    borderTop: '1px solid',
    borderColor: '#CFCFCF'
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
  */
  header: {
    color: 'white',
    background: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '30vh',
    display: 'flex',
    flexFlow: 'column'
  },
  topbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingTop: '5px'
  },
  spanPadding: {
    padding: '0px 30px'
  },
  ibmLogo: {
    height: '50px',
    background: `url(${ibmLogo})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain'
  },
  title: {
    paddingLeft: '20px',
    fontSize: '1.2rem',
    fontWeight: 'bold'
  },
  main: {
    backgroundColor: '#EFF0F1',
    //height: '70vh',
    height: '100vh',
    display: 'flex',
    flexFlow: 'column'
  },
  hSpace: {
    flex: '0 0 10px'
  },
  componentTitle: {
    flex: '0 0 10px',
    backgroundColor: '#2C303D',
    color: 'white',
    padding: '5px',
    fontWeight: 'bold'
  },
  
  conversationWrapper: {
    flex: '1 1 auto',
    backgroundColor: 'white',
    boxShadow: '0 0 1pt 1pt #cccccc',
    borderRadius: '4.5pt',
    overflow: 'hidden',
    display: 'flex',
    flexFlow: 'column'
  },
  contextWrapper: {
    //flex: '0 0 75%', // replacing with individual props to easily pull out basis
    flexGrow: '0',
    flexShrink: '0',
    flexBasis: '100%',
    display: 'flex',
    flexFlow: 'column nowrap'
  },
  car: {
    background: `url(${carImg})`,
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    /*
    left: '620px',
    top: '345px', 
    */
    display: 'block'
  }
  /*
  conversation: {
    padding: '0px 10px',
    overflowY: 'auto',
    overflowX: 'hidden',
    flex:`1 1 ${contentHeight}px`
  },
  */
})

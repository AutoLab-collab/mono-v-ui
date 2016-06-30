import {StyleSheet} from 'aphrodite'

let viewportToPixel = (val) => {
  let percent = val.match(/[\d.]+/)[0] / 100
  let unit = val.match(/[vwh]+/)[0]
  return (unit == 'vh' ? window.innerHeight : window.innerWidth) * percent
}
let contentHeight = window.innerHeight-(viewportToPixel('30vh')+10+30+44+10+1)

export const styles = StyleSheet.create({
  conversation: {
    padding: '0px 10px',
    overflowY: 'auto',
    overflowX: 'hidden',
    flex:`1 1 ${contentHeight}px`,
    display: 'flex',
    flexFlow: 'column'
  },
  largeFont: {fontSize:'larger'},
  bubbleMe: {order:'2',float:'right',backgroundColor:'#CEECEF',borderRadius:'4.5pt 0 4.5pt 4.5pt',padding:'10px',opacity:'0.7'},
  bubbleYou: {order:'2',backgroundColor:'#F0F1F2',borderRadius:'0 4.5pt 4.5pt 4.5pt',padding:'10px',opacity:'0.7'},
  spacerMe: {order:'1',flex:'1 1 auto'},
  spacerYou: {order:'3',flex:'1 1 auto'},
  arrowMe: {order:'3',width:0,height:0,borderTop:'10px solid transparent',borderLeft:'20px solid #CEECEF',borderBottom:'10px solid transparent',opacity:'0.7'},
  arrowYou: {order:'1',width:0,height:0,borderTop:'10px solid transparent',borderRight:'20px solid #F0F1F2',borderBottom:'10px solid transparent',opacity:'0.7'},
})

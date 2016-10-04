import React from 'react'
import {observer} from 'mobx-react'
import {css} from 'aphrodite'
import {styles} from './styles.css'
import marked from 'marked'
const Conversation = ({store}) => {
  return <div className={css(styles.conversation)}>
    {store.history.map((node,index) => <Entry key={`conversation${index}`} node={node} /> )}
  </div>
}

const Entry = ({node}) => {
  return <div style={{display:'flex',margin:'5px 0px'}}>
    <div
      className={node.source == 'me' ? css(styles.bubbleMe) : css(styles.bubbleYou)}
      dangerouslySetInnerHTML={rawMarkup(node.value)}
    />
    <div className={node.source == 'me' ? css(styles.arrowMe) : css(styles.arrowYou)} />
    <div className={node.source == 'me' ? css(styles.spacerMe) : css(styles.spacerYou)} />
  </div>
}

function rawMarkup(content){
  return {__html: marked(content,{sanitize:true})}
}

Conversation.propTypes = {
  store: React.PropTypes.object
}

export default observer(Conversation)
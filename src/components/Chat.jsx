import React from 'react'
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
        <i class="fa-solid fa-phone fa-lg"></i>
        <i class="fa-regular fa-address-book fa-lg"></i>
        <i class="fa-solid fa-minus fa-lg"></i>
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat
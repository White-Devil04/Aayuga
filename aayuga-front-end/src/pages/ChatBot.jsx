import React, { useState } from 'react'
import QnA from '../Components/QnA'
import History from '../Components/History'

const ChatBot = () => {
  const [isChange, setIsChange] = useState(false);
  return (
    <div className='main-container mt-20'>
      <div className='middle-container flex justify-between mx-[4vw] my-[2vw] h-[620px]'>
        <QnA isChange={isChange} setIsChange={setIsChange} />
        <History isChange={isChange} />
      </div>
    </div>
  )
}

export default ChatBot

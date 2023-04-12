import React, { useEffect, useRef } from 'react'
import './Chat.css'
function Chat({question, currentIndex}) {
  const ref = useRef()
  useEffect(() =>{
    
    ref.current?.scrollIntoView({behavior:'smooth', block:'start'})
  }, [question])
  return (
    <div ref={ref} className='chatContainer'>
        <div className="chatQuestion">{question.question} </div>
{   question.answer &&     <div className="chatAnswer">{question.answer}</div>}
      
    </div>
  )
}

export default Chat

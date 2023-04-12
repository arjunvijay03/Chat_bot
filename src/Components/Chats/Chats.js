import React, { useContext } from 'react'
import './Chats.css'
import Chat from './ChatsComponent/Chat'
import { questionContext } from '../../Context/QuestionContext'
function Chats({currentIndex}) {
  const {questions} = useContext(questionContext)
  return (
    <div className='chatsContainer'>
      {questions.map((question, index)=>{
        if(currentIndex<index)return;
        return (<Chat question={question} currentIndex={currentIndex} key={index}></Chat>)
      })
      }
    </div>
  )
}

export default Chats

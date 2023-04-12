import React, { useContext, useEffect, useState } from 'react'
import './InputField.css'
import { questionContext } from '../../Context/QuestionContext'
function InputField({setCurrentIndex, currentIndex,setShowResult}) {
  const {questions, setQuestions, setAnswers, answers} = useContext(questionContext)
  const [currentInput, setCourrentInput] = useState()
  useEffect(()=>{
    setCourrentInput(questions[currentIndex].input)
  },[currentIndex, questions])
  const handleChange = (event)=>{
      let {name, value} = event.target
    name && setAnswers(prev=>({...prev, 
    [name]:value
    }))
  }
  const handleSubmit = (event)=>{
    event.preventDefault()
    if(!answers[currentInput]){
      
      return
    }else{
      
      setQuestions(prev=>(
        prev.map((element)=>(
          element?.input == currentInput ? {...element, answer:answers[currentInput]}:element)
        ))
      )
      setTimeout(()=>{
      setCurrentIndex(prev=> prev < questions.length-1 ? prev+1:prev)
  
      }, 300)
      questions.length-1 == currentIndex && setShowResult(true)
      
    }
  }
  return (
    <div className='inputFieldContainer'>
        <form className='inputForm' action="" onSubmit={handleSubmit}>
            <input onChange={handleChange} value={answers[currentInput]}  type="text" name={currentInput} id="" />
            <button className='sendBtn' type="submit"><i className="fa-solid fa-paper-plane"></i></button>
        </form>
    </div>
  )
}

export default InputField

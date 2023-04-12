import { createContext, useEffect, useState } from "react"

export const questionContext = createContext(null)
export default function QuestionContext({children}) {
  const [answers, setAnswers] = useState({
    name:'',
    course:'',
    duration:'',
    finalProject:''
  })
    const [questions, setQuestions] = useState([{
        question : 'Hi, call me Alexa. I am here to assist you',
        input:''
      },
      {
        question : 'What is your name? ',
        answer:"",
        input:'name'
      },
      {
        question : 'Which course are you looking for? ',
        answer:"",
        input:'course'
      },
      {
        question : 'Duration of the course? ',
        answer:"",
        input:'duration'
      },
      {
        question : 'what is your plan for your final project? ',
        answer:"",
        input:'finalProject'
      }
      
    ])
  return (
    <questionContext.Provider value={({questions, setQuestions, answers, setAnswers})}>
         {children}
    </questionContext.Provider>
      
   
  )
}


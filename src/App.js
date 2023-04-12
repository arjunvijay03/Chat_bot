
import { useContext, useEffect, useState } from 'react';
import './App.css';
import Chats from './Components/Chats/Chats';
import InputField from './Components/InputField/InputField';
import NavBar from './Components/Nav-bar/NavBar';
import { questionContext } from './Context/QuestionContext';

function App() {
  const {questions,answers} = useContext(questionContext)
  const [showResult, setShowResult] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  useEffect(()=>{
    setTimeout(()=>{
      setCurrentIndex(1)
    },500)
  }, []) 
  return (
    <div className="App">
      <div className="container">
        <NavBar></NavBar>
        <Chats currentIndex={currentIndex}></Chats>
        <InputField setCurrentIndex={setCurrentIndex} currentIndex={currentIndex} setShowResult={setShowResult} ></InputField>
      </div>

      {showResult && <div className="displayDataContainer">
        <div className="displayData">

       <span>Name  :{answers.name}</span>
       <span>Course : {answers.course}</span>
       <span>Duration : {answers.duration}</span>
       <span>Final project : {answers.finalProject}</span>
        </div>
      </div>}
    
    </div>
  );
}

export default App;

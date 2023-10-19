import React, { useEffect, useState } from "react";
import styles from "./FormBuilder.module.css";
import TitleBar from "../../Compoments/TitleBar";
import Questions from "../Questions";
import Button from "@mui/material/Button";
const FormBuilder = () => {
  const [questions,setQuestions]=useState([])
  const [questionWithOption,setQuestionWithOption]=useState([])
  const handleAddQuestion=()=>{
    setQuestions([...questions,<Questions key={questions.length} handleQuestionWithOption={handleQuestionWithOption} />])
  }

  const handleQuestionWithOption=(data)=>{
    setQuestionWithOption([...questionWithOption,data])
  }

  useEffect(()=>{

  },[questionWithOption])
  console.log(questionWithOption) 
  return (
    <div className={styles.MainContainer}>
      <div className={styles.Container}>
        <TitleBar />
        {questions.map((item, index) => (
        <div style={{width:"100%",display:"flex",justifyContent:"center"}} key={index}>{item}</div>
         ))}

        <div style={{width:"100%"}}>
          <div style={{display:"flex",justifyContent:"flex-end",marginRight:"16%"}}>
          <Button onClick={handleAddQuestion} variant="outlined">+</Button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FormBuilder;

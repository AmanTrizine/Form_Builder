import React, { useState } from "react";
import styles from "./TitleBar.module.css";
import Input from '@mui/material/Input';
const TitleBar = () => {
    const [title,setTitle]=useState("Untitled Form") 
    const [description,setDescription]=useState("")
    
  return (
    <div className={styles.Container}>
      <div className={styles.Title}>
      <Input sx={{fontSize:"2rem"}} onChange={(event)=>setTitle(event.target.value)} placeholder="Title" fullWidth />
      </div>
      <div className={styles.Description}>
      <Input onChange={(event)=>setDescription(event.target.value)} placeholder="Description" fullWidth />
      </div>
    </div>
  );
};

export default TitleBar;

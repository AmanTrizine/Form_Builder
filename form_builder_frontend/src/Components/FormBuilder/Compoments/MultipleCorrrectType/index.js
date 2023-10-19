import React, { useEffect, useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Input from "@mui/material/Input";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import styles from "./MultipleCorrrectType.module.css"

let keyCount=0;
const MultipleCorrrectType = ({handleOptionData}) => {
  const [labels, setlabels] = useState("");
  const [checkBoxes, setCheckBoxes] = useState([]);
  const [labels1, setlabels1] = useState("");

  const handleAddOption = () => {
    setCheckBoxes(()=>[...checkBoxes,{labels:labels,keyCount}]);
    keyCount++
    setlabels("")
  };
  const handleCancel=(index)=>{
    setCheckBoxes(checkBoxes.filter((item) => item.keyCount != index))
  }

  const sendMultipleOptionData=()=>{
    handleOptionData(checkBoxes)
  }

  useEffect(() => {
    sendMultipleOptionData()
  }, [checkBoxes]);


  // useEffect(()=>{
  //      console.log(checkBoxes) 
  // },[checkBoxes,labels])
  return (

    <div className={styles.MainContainer}>
        <div >
        {checkBoxes.length>0 && checkBoxes.map((item)=>(
            <div style={{ display: "flex", flexDirection: "row" }}>
          <div>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label={
                <Input
                  placeholder="Add Text"
                  value={item.labels}
                  onChange={(event)=>setlabels1(event.target.value)}
                />
              }
            />
          </FormGroup>
        </div>  
        <div>
        <IconButton
          aria-label="delete"
          onClick={() => handleCancel(item.keyCount)}
        >
          <CloseIcon />
        </IconButton>
      </div>
      </div>
        ))}
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
      <div>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            label={
              <Input
                placeholder="Add Text"
                value={labels}
                onChange={(event)=>setlabels(event.target.value)}
              />
            }
          />
        </FormGroup>
      </div>
      <div>
        <IconButton aria-label="add" onClick={handleAddOption}>
          <AddIcon />
        </IconButton>
      </div>
      </div>
    </div>
  );
};

export default MultipleCorrrectType;

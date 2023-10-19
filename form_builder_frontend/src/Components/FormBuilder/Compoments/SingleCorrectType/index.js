import React, { useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Input from "@mui/material/Input";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";

let keycount = 0;
const SingleCorrectType = ({handleOptionData}) => {
  const [labels, setLabels] = useState("");
  const [radioButton, setRadioButton] = useState([]);
  const [nb, setnb] = useState("");
  const [isFieldActive, setIsFieldActive] = useState(false);

  const handleClick1 = (key, val) => {
    const newLabel = radioButton.map((item) => {
      if (item.keycount == key) {
        return { ...item, labels: val.target.value, isFieldActive: false };
      }
      return item;
    });
    setRadioButton(newLabel);
    setLabels("");
    
  };

  const handleClick = (e) => {
    setLabels(e.target.value);
  };

  const handleClick2 = (e) => {
    setnb(e.target.value);
  };

  const handleActive = (key) => {
    const newLabel1 = radioButton.map((item) => {
      if (item.keycount == key) {
        setLabels(item.labels);
        return { ...item, isFieldActive: true };
      }
      return item;
    });
    setRadioButton(newLabel1);
  };

  const handleCancel = (index) => {
    setRadioButton(radioButton.filter((item) => item.keycount != index));
  };

  const handleAddOption = () => {
    setRadioButton([...radioButton, { labels: nb, keycount, isFieldActive}]);
    keycount = keycount + 1;
    setnb("");
  };

  const sendSingleOptionData=()=>{
    handleOptionData(radioButton)
  }
  
  useEffect(() => {
    sendSingleOptionData()
  }, [radioButton]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        
          {radioButton.length > 0 &&
            radioButton.map((item) => (
              <div style={{ display: "flex", flexDirection: "row" }}>
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label={
                    <Input
                      placeholder="Add Text"
                      value={item.isFieldActive ? labels : item.labels}
                      onChange={handleClick}
                      onFocus={() => handleActive(item.keycount)}
                      onBlur={(e) => handleClick1(item.keycount, e)}
                    />
                  }
                />
                <div>
                  <IconButton
                    aria-label="delete"
                    onClick={() => handleCancel(item.keycount)}
                  >
                    <CloseIcon />
                  </IconButton>
                </div>
              </div>
            ))}
        

        <div style={{ display: "flex", flexDirection: "row" }}>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue=""
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label={
                <Input
                  placeholder="Add Text"
                  value={nb}
                  onChange={handleClick2}
                />
              }
            />
          </RadioGroup>
          <div>
            <IconButton aria-label="delete" onClick={handleAddOption}>
              <AddIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCorrectType;

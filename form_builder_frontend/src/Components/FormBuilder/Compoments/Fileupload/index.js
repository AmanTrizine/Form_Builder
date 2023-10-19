import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const FileUpload = () => {
    const [fileSize, setFileSize] = React.useState('');

  const handleFileSizeChange = (event) => {
    setFileSize(event.target.value);
  };
  const SIZES=["1MB","10MB","100MB","1GB","10GB"]
  return (
    <div style={{width:"100%"}}>
        <div style={{ display: "flex",width:"50%",alignItems:"center", flexDirection: "row" ,justifyContent:"space-evenly" }}>
      <div>Maximum File Size</div>
      <div>
        <FormControl fullWidth>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={fileSize}
            label=""
            onChange={handleFileSizeChange}
          >
            {SIZES.map((item)=>(<MenuItem value={item}>{item}</MenuItem>))}
          </Select>
        </FormControl>
      </div>
      </div>
    </div>
  );
};

export default FileUpload;

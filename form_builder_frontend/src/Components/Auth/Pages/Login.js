import React from "react";
import "./Login.css";
import { TextField,Button } from "@mui/material";

const Login = () => {
  return (
    <div className="MainContainer">
      <div className="Container">
        <div className="box">
          <div className="leftBox"></div>
          <div className="rightBox">

            <div className="heading" >Login Here...!</div>
            <div>
              <TextField id="filled-basic" label="E-mail" variant="standard" />
            </div>

            <div>
            <TextField id="filled-basic" label="Password" variant="standard" />
            </div>

            <div>
            <Button variant="outlined">SIGN-IN</Button>
            </div>
            <div className="signuptext">Don't have an account?Create one</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

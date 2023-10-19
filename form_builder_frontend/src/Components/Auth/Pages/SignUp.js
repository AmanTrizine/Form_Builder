import React from "react";
import styles from "./SignUp.module.css"
import { TextField,Button } from "@mui/material";

const SignUp = () => {
  return (
    <div className={styles.MainContainer}>
      <div className={styles.Container}>
        <div className={styles.box}>
          <div className={styles.leftBox}>
          <div className={styles.heading}>Create Account</div>
          <div>
              <TextField id="filled-basic" label="Username" variant="standard" />
            </div>
            <div>
              <TextField id="filled-basic" label="E-mail" variant="standard" />
            </div>

            <div>
            <TextField id="filled-basic" label="Password" variant="standard" />
            </div>

            <div>
            <Button variant="outlined">CREATE-ACCOUNT</Button>
            </div>
            <div className={styles.signuptext}>Already have an account?SignIn</div>
          </div>
          <div className={styles.rightBox}>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

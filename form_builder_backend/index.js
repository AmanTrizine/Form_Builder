const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const PORT = process.env.PORT || 5001;
const app = express();
app.use(cors());
app.use(express.json());
 
const authRouter = require("./routes/authRoutes");

app.use("/auth", authRouter);
   
mongoose.connect(
    "mongodb+srv://amangupta88150:Aman9999@form-builder.mbpg5hc.mongodb.net/"
).then(()=>{
    console.log("CONNECTED TO DB")
    app.listen(PORT,()=>{
        console.log(`SERVER STARTED ON PORT ${PORT}`)
    })
}).catch((err) => {
         console.log("Server not started. Connection Failed With database");
        console.log(err);
      });
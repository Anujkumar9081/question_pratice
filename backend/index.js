const express = require("express")
const app = express();
app.use(express.json())
const cors = require("cors");
app.use(cors());
app.post("/data" ,(req , res)=>{
  let{name , email} = req.body;

  console.log(name);
  console.log(email);
  res.send("user data recived succesfully");
})


app.listen(3000 ,()=>{
console.log("server is running");
})
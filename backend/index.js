const express = require("express")
const app = express();
app.use(express.json())
const cors = require("cors");
app.use(cors());

let data = [];
app.post("/data" ,(req , res)=>{
  let{name , email} = req.body;
  console.log(name);
  console.log(email);
  res.send("user data recived succesfully");
})

app.post("/getdata" , (req , res)=>{
  let{name , email , password} = req.body;

  let check_email = data.find((e) => e.email == email);
  if(check_email){
    return res.send("email is already present")
  }
  else{
    let new_data = {"name":name,
      "email":email,
      "password":password
    }
    data.push(new_data);
    res.send("user added")
  }

})

app.listen(3000 ,()=>{
console.log("server is running");
})
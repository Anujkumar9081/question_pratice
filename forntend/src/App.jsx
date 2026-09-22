import React, { useState } from 'react'

const App = () => {
 const[name ,setname]  = useState("")
 const[email , setemail] =useState("");
const[finalname , SetFinalName] = useState("")
const[FinalEmail , SetFinalSetEmail]  = useState("")
 async function showData(){
  const data = await fetch("http://localhost:3000/data" , {
    method:"post" , 
    headers:{
      "content-type":"application/json"
    },
    body: JSON.stringify({
      name,
      email
    })
  });
  const ans= await data.text();
  SetFinalName(name);
  SetFinalSetEmail(email);
alert(ans);
  
}
  return (
    <div>
      <input placeholder='enter your name' value={name} onChange={(e)=>setname(e.target.value)} />
      <input placeholder='enter your email' value={email} onChange={(e)=>setemail(e.target.value)}/>
      <button onClick={showData}>Click here</button>

    <br/>
    <br/>
    <hr/>
    <p>name := {finalname}</p>
    <p>email := {FinalEmail}</p>

    </div>
  )
}

export default App
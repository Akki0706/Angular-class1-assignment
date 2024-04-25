const express = require('express');
const routes = require('./routes/myroutes2')

let users=[];
const doesExist=(username)=>{
    let userWithUsername = users.filter(user=> user.username === username);//this is for register

    if(userWithUsername.length>0){
        return true;
    }
    else{
        return false;
    }
}

const authenticatedUser=(username,password)=>{//this is for login and logout
let validUser=user.filter(user=>(user.username===username && user.password===password));
if(validUser.length>0){
    return true;
}
else{
    return false;
}
}


const app = express();

app.post("/register",(req,res)=>{
    let username=req.body.username;
    let password=req.body.password;
    if(username && password){

    }
    res.status(404).json({message:"Unable to register.."});
})
const PORT = 4000;
app.use(express.json());
app.use("/members",routes)
app.listen(PORT , ()=>{
    console.log("Server is running at port "+PORT)
})
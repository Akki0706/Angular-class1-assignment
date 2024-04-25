const express = require('express');
const router = express.Router();
let members={
    "vansh1@gmail.com" : {
        firstname:"Vansh",
        lastname:"Misra",
        age:23,

    },
    "vansh1@gmail.com" : {
        firstname:"Vansh",
        lastname:"Misra",
        age:23,

    },
    "vansh1@gmail.com" : {
        firstname:"Vansh",
        lastname:"Misra",
        age:23,

    }
}

router.get("/" ,(req,res)=>{
    
    res.send(members);
})

router.get(":/email",(req,res)=>{
    const email=req.params.email;
    res.send(members[email]);
})


router.post("/" , (req,res)=>{
  if(req.body.email){
    members[req.body.email]={
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        age:req.body.age
    }
  }
     

    res.send(`Member ${req.body.firstname} has been added.....`);
})

router.put("/email" ,(req,res)=>{
    const email=req.params.email;
    let member=members[email];
    if(member){
        let firstname=req.body.firstname;
        let lastname=req.body.lastname;
        let age=req.body.age;

        if(firstname){
            member["firstname"]=firstname;
        }
        if(lastname){
            member["lastname"]=lastname;
        }
        if(age){
            member["age"]=age;
        }
        members[email]=email;
        res.send(`Memeber with email ${email } updated....`)

    }
    else{
        res.send("Unable to find...")
    }

})

router.delete("/email" , (req,res)=>{
    const email =req.params.email;
    if(email){
        delete members[email];
    }
    res.email(`Member with email ${email} deleted....`)
})

module.exports = router;

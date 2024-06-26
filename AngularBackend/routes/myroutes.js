
const express = require('express');
const router = express.Router();
//const express=require('express);
//const router=express.Router();
//let members=[{}]
let members = [
    {
        firstname : "Vansh",
        lastname : "Misra",
        email : "vansh1@gmail.com",
        age : 23
    },
    {
        firstname : "Nitanshi",
        lastname : "Agarwal",
        email : "nitanshi2@gmail.com",
        age : 22
    },
    {
        firstname : "Ankit",
        lastname : "Gupta",
        email : "ankit3@gmail.com",
        age : 23
    },
    {
        firstname : "Disha",
        lastname : "Sachdeva",
        email : "disha4@gmail.com",
        age : 22
    }
]

router.get("/" , (req,res)=>{
    res.send(members);
})
//router.get("/",(req,res)=>{
    // res.send(members);
//})
//router.get("/":email",(req,res)=>{
//const email=req.params.email;
//let filtered_email=members.filter(member=>member.email===email);
//})
//
router.get("/:email" , (req,res)=>{
    const email = req.params.email;
    let filtered_members = members.filter(member => member.email === email);
    res.send(filtered_members);
})

router.delete("/:email" , (req,res)=>{
    const email = req.params.email;
    members = members.filter(member => member.email != email);
    res.send(`Member with email ${email} deleted ........`);
})

router.post("/" , (req,res)=>{
    members.push({
        "firstname": req.query.firstname,
        "lastname": req.query.lastname,
        "email": req.query.email,
        "age": req.query.age
    });

    res.send(`Member ${req.query.firstname} has been Created.....`);
})

router.put("/:email", (req,res)=>{
    const email = req.params.email;
    let filtered_members = members.filter(member => member.email === email);
    if(filtered_members.length>0){
        let filter_member = filtered_members[0];
        let age = req.query.age;
        let firstname = req.query.firstname;
        let lastname = req.query.lastname;
        if(age){
            filter_member.age = age;
        }
        if(firstname){
            filter_member.firstname = firstname;
        }
        if(lastname){
            filter_member.lastname = lastname;
        }
       
        members = members.filter(member => member.email != email);
        members.push(filter_member);
        res.send(`Member with email ${email} updated.......`);
    }else{
        res.send("Unable to find the Member.....")
    }
})



module.exports = router;
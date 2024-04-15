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




module.exports = router;

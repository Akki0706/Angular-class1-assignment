const express=require('express');
const router=express.Router();
const Mem=require('../models/members');


router.get("/", async (req, res) => {
    try {

      const members = await Mem.find();
      res.send(members);
    } catch (err) {
      res.status(500).send(err);
    }
  });


  router.get('/searchMembers',async(req,res)=>{
    try{

        const users = await Mem.find({'name':{$regex:req.query.term,$options:'i'}})

        res.send(users);

    }catch(err){

        res.status(500).send(err);

    }
})
  
  router.get("/:id", async (req, res) => {
    try {
      const member = await Mem.findOne({ member_id: req.params.id });
      if (!member) {
        return res.status(404).send("Member not found");
      }
      res.send(member);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  
  router.post("/", async (req, res) => {
    try {
     
      const maxMemberId = await Mem.findOne({}, {}, { sort: { member_id: -1 } });
      const newMemberId = maxMemberId ? maxMemberId.member_id + 1 : 1;
     req.body.member_id=newMemberId;
     const member = new Mem(req.body);
        console.log(req.body);
        console.log(member);
      await member.save();
      res.send(member);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  
  router.put("/:id", async (req, res) => {
    try {
      const updatedMember = await Mem.findOneAndUpdate(
        { member_id: req.params.id },req.body, {new:true});
        
      if (!updatedMember) {
        return res.status(404).send("Member not found");
      }
      res.send(updatedMember);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  
  router.delete("/:id", async (req, res) => {
    try {
      const deletedMember = await Mem.findOneAndDelete({
        member_id: req.params.id,
      });
      if (!deletedMember) {
        return res.status(404).send("Member not found");
      }
      res.send(deletedMember);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  module.exports=router
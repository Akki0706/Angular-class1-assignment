const express=require('express');
const router=express.Router();
let gadgets=[
    {name:"Anywhere Door",
     id:1,
     work:"Go to anyplace on user demand"},

    {name:"Take-copter" ,
     id:2, 
     work:" Fly from one place to another"},

    {name:"Time-Machine" ,
     id:3, 
     work:"Travel in past and future"},

    {name:"Big Light",
     id:4,
     work:"Increase tthe size of object"},
]
router.get("/",(req,res)=>{
    res.send(gadgets);
})
router.get("/:id" , (req,res)=>{
    const id = req.params.id;
    let filtered_gadget = gadgets.filter(gad => gad.id == id);
    res.send(filtered_gadget);
})
router.post("/" , (req,res)=>{
    gadgets.push({
        "id": req.query.id,
        "name": req.query.name,
        "work": req.query.work,
});

    res.send(`Gadget ${req.query.id} has been Created.....`);
})
router.delete("/:id" , (req,res)=>{
    const id = req.params.id;
    gadgets = gadgets.filter(gad => gad.id != id);
    res.send(`Gadget with id ${id} deleted ........`);
})
router.put("/:id", (req,res)=>{
    const id = req.params.id;
    let filtered_gadget = gadgets.filter(gad => gad.id == id);
    if(filtered_gadget.length>0){
        let filter_gadget = filtered_gadget[0];
        let id = req.query.id;
        let name = req.query.name;
        let work = req.query.work;
        if(id){
            filter_gadget.id = id;
        }
        if(name){
            filter_gadget.name = name;
        }
        if(Talent){
            filter_gadget.work = work;
        }
       
       gadgets = gadgets.filter(gad => gad.id != id);
        gadgets.push(filter_gadget);
        res.send(`gadget with id ${id} updated.......`);
    }else{
        res.send("Unable to find the gadget.....")
    }
})
module.exports = router;

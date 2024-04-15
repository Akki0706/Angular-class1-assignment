const express=require('express');
const router=express.Router();
let characters=[
      {name:"Doraemon",
       id:1,
       Talent:"Gadget giver and eat a lot of dorayaki"},

      {name:"Nobita" , 
      id:2,
       Talent:"Sleeping"},

      {name:"Shizuka" ,
       id:3,
        Talent:"Dancing"},

      {name:"Sunio",
       id:4,
       Talent:"Playing"},

      {name:"Geeyan" 
      ,id:5,
      Talent:"Singer"}
]

router.get("/",(req,res)=>{
    res.send(characters);
})
router.get("/:id" , (req,res)=>{
    const id = req.params.id;
    let filtered_character = characters.filter(charac => charac.id == id);
    res.send(filtered_character);
})
router.post("/" , (req,res)=>{
    characters.push({
        "id": req.query.id,
        "name": req.query.name,
        "Talent": req.query.Talent,
});

    res.send(`Character ${req.query.name} has been Created.....`);
})
router.delete("/:id" , (req,res)=>{
    const id = req.params.id;
    characters = characters.filter(charac => charac.id != id);
    res.send(`Character with id ${id} deleted ........`);
})
router.put("/:id", (req,res)=>{
    const id = req.params.id;
    let filtered_character = characters.filter(charac => charac.id === id);
    if(filtered_character.length>0){
        let filter_character = filtered_character[0];
        let id = req.query.id;
        let name = req.query.name;
        let Talent = req.query.Talent;
        if(id){
            filter_character.id = id;
        }
        if(name){
            filter_character.name = name;
        }
        if(Talent){
            filter_character.Talent = Talent;
        }
       
       characters = characters.filter(charac => charac.id != id);
        characters.push(filter_character);
        res.send(`character with id ${id} updated.......`);
    }else{
        res.send("Unable to find the character.....")
    }
})
module.exports = router;
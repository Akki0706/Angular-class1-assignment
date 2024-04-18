const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
  "mongodb+srv://akkirauniyar0201:Ankit54329@cluster0.uwanlm4.mongodb.net/my_characters"
);

const db = mongoose.connection;

db.on("error", () => {
  console.log("MongoDb connection error.....");
});

const characterSchema = new mongoose.Schema({
  character_id: Number,
  name: String,
});

const GadgetSchema = new mongoose.Schema({
    gadget_id: Number,
    name: String,
  });

  

const Char = mongoose.model("Char", characterSchema);
const Gadg = mongoose.model("Gadg", GadgetSchema);

app.use(express.json());

app.get("/character", async (req, res) => {
  try {
    const characters = await Char.find();
    res.send(characters);
  } catch (err) {
    res.status(500).send(err);
  }
});


app.get("/gadget", async (req, res) => {
    try {
      const gadgets = await Gadg.find();
      res.send(gadgets);
    } catch (err) {
      res.status(500).send(err);
    }
  });



app.get("/character/:character_id", async (req, res) => {
  try {
    const character = await Char.findOne({ character_id: req.params.character_id });
    if (!character) {
      return res.status(404).send("Chracter not found");
    }
    res.send(character);
  } catch (err) {
    res.status(500).send(err);
  }
});




app.get("/gadget/:gadget_id", async (req, res) => {
    try {
      const gadget = await Gadg.findOne({ gadget_id: req.params.gadget_id});
      if (!gadget) {
        return res.status(404).send("Gadget not found");
      }
      res.send(gadget);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  

app.post("/character", async (req, res) => {
  try {
    const newCharacter = new Char(req.body);
    const maxCharacterId = await Char.findOne({}, {}, { sort: { character_id: -1 } });
    const newCharacterId = maxCharacterId ? maxCharacterId.character_id + 1 : 1;
    newCharacter.character_id = newCharacterId;
    await newCharacter.save();
    res.status(201).send(newCharacter);
  } catch (err) {
    res.status(500).send(err);
  }
});



app.post("/gadget", async (req, res) => {
    try {
      const newGadget = new Gadg(req.body);
      const maxGadgetId = await Gadg.findOne({}, {}, { sort: { gadget_id: -1 } });
      const newGadgetId = maxGadgetId ? maxGadgetId.gadget_id + 1 : 1;
      newGadget.gadget_id = newGadgetId;
      await newGadget.save();
      res.status(201).send(newGadget);
    } catch (err) {
      res.status(500).send(err);
    }
  });

app.put("/character/:character_id", async (req, res) => {
  try {
    const updatedCharacter = await Char.findOneAndUpdate(
      { character_id: req.params.character_id },
      req.body,
      { new: true }
    );
    if (!updatedCharacter) {
      return res.status(404).send("Character not found");
    }
    res.send(updatedCharacter);
  } catch (err) {
    res.status(500).send(err);
  }
});



app.put("/gadget/:gadget_id", async (req, res) => {
    try {
      const updatedGadget = await Gadg.findOneAndUpdate(
        { gadget_id: req.params.gadget_id },
        req.body,
        { new: true }
      );
      if (!updatedGadget) {
        return res.status(404).send("Gadget not found");
      }
      res.send(updatedGadget);
    } catch (err) {
      res.status(500).send(err);
    }
  });

app.delete("/character/:character_id", async (req, res) => {
  try {
    const deleted = await Char.findOneAndDelete({
      character_id: req.params.character_id,
    });
    if (!deletedCharacter) {
      return res.status(404).send("Character not found");
    }
    res.send(deletedCharacter);
  } catch (err) {
    res.status(500).send(err);
  }
});





app.delete("/gadget/:gadget_id", async (req, res) => {
    try {
      const deleted = await Gadg.findOneAndDelete({
        character_id: req.params.gadget_id,
      });
      if (!deletedGadget) {
        return res.status(404).send("Gadget not found");
      }
      res.send(deletedGadget);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  

const PORT = 2000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
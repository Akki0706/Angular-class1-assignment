const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
  "mongodb+srv://akkirauniyar0201:Ankit54329@cluster0.uwanlm4.mongodb.net/my_members"
);

const db = mongoose.connection;

db.on("error", () => {
  console.log("MongoDb connection error.....");
});

const memberSchema = new mongoose.Schema({
  member_id: Number,
  name: String,
});

const Mem = mongoose.model("Mem", memberSchema);

app.use(express.json());

app.get("/member", async (req, res) => {
  try {
    const members = await Mem.find();
    res.send(members);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/member/:member_id", async (req, res) => {
  try {
    const member = await Mem.findOne({ member_id: req.params.member_id });
    if (!member) {
      return res.status(404).send("Member not found");
    }
    res.send(member);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post("/member", async (req, res) => {
  try {
    const newMember = new Mem(req.body);
    const maxMemberId = await Mem.findOne({}, {}, { sort: { member_id: -1 } });
    const newMemberId = maxMemberId ? maxMemberId.member_id + 1 : 1;
    newMember.member_id = newMemberId;
    await newMember.save();
    res.status(201).send(newMember);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.put("/member/:member_id", async (req, res) => {
  try {
    const updatedMember = await Mem.findOneAndUpdate(
      { member_id: req.params.member_id },
      req.body,
      { new: true }
    );
    if (!updatedMember) {
      return res.status(404).send("Member not found");
    }
    res.send(updatedMember);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.delete("/member/:member_id", async (req, res) => {
  try {
    const deletedMember = await Mem.findOneAndDelete({
      member_id: req.params.member_id,
    });
    if (!deletedMember) {
      return res.status(404).send("Member not found");
    }
    res.send(deletedMember);
  } catch (err) {
    res.status(500).send(err);
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
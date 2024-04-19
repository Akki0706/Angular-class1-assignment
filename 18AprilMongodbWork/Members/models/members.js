const mongoose = require('mongoose');
const memberSchema = new mongoose.Schema({
    name: String,
    member_id:Number
})
module.exports = mongoose.model('Member',memberSchema);
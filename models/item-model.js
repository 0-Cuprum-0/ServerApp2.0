const { Schema, model } = require('mongoose');

const itemSchema = new Schema({
    name: {type: String, required: true},
    userName:{type:String,required:false},
    UserPassword:{type:String,required:false},
    eMail:{type:String,required:false},
    description:{type:String,required:false}
});

module.exports = model("Item", itemSchema);
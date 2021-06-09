const { Schema, model } = require('mongoose');

const taskSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true
    },
    receptor: {
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now,
    },
    user:{
        type: String
    }
});
module.exports = model('Task', taskSchema);

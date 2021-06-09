const {Schema, model } = require('mongoose');

const videopubSchema = new Schema({
    title_v:{
        type: String,
    
    },
    address_v: {
        type: String,
        
    },
    filename : {type: String},
    originalname: {type: String},
    path: {type: String},
    mimetype: {type: String},
    size: {type: String},
    user: {type: String},
    created_at: {type : Date, default: Date.now() },
    
    description_v:{
        type: String,
        
    },
    hours_v: {
        type: String,
    },
    username_v: {
        type: String,
        
    },
    contact_v: {
        type: String,
    
    },
    

},{
    timestamps: true
        
});
module.exports = model('VideoPub', videopubSchema)

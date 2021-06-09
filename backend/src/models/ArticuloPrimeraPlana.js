const {Schema, model } = require('mongoose');

const articuloprimeraplanaSchema = new Schema({
    title_app:{
        type: String,
        required: true
    },
    subtitle_app: {
        type: String,
        required: true
    },
    filenameapp : {type: String},
    originalnameapp: {type: String},
    pathapp: {type: String},
    mimetypeapp: {type: String},
    sizeapp: {type: String},
    user: {type: String},
    created_at: {type : Date, default: Date.now() },
    
    description_app:{
        type: String,
        required: true
    },
    prioridad_app: {
        type: String,
        required: true
    },
    usernameapp: {
        type: String,
        required: true
    },
    noticeFont: {
        type: String,
        required: true
    },


},{
    timestamps: true
        
});
module.exports = model('ArticuloPrimeraPlana', articuloprimeraplanaSchema)

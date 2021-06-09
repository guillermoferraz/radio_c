const {Schema, model } = require('mongoose');

const articuloprioridadstandardSchema = new Schema({
    title_ps:{
        type: String,
        required: true
    },
    subtitle_ps: {
        type: String,
        required: true
    },
    filenameps : {type: String},
    originalnameps: {type: String},
    pathps: {type: String},
    mimetypeps: {type: String},
    sizeps: {type: String},
    user: {type: String},
    created_at: {type : Date, default: Date.now() },
    
    description_ps:{
        type: String,
        required: true
    },
    prioridad_ps: {
        type: String,
        required: true
    },
    usernameps: {
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
module.exports = model('ArticuloPrioridadStandard', articuloprioridadstandardSchema)

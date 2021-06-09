const {Schema, model } = require('mongoose');

const articuloaltaprioridadSchema = new Schema({
    title_ap:{
        type: String,
        required: true
    },
    subtitle_ap: {
        type: String,
        required: true
    },
    filenameap : {type: String},
    originalnameap: {type: String},
    pathap: {type: String},
    mimetypeap: {type: String},
    sizeap: {type: String},
    user: {type: String},
    created_at: {type : Date, default: Date.now() },
    
    description_ap:{
        type: String,
        required: true
    },
    prioridad_ap: {
        type: String,
        required: true
    },
    usernameap: {
        type: String,
        required: true
    },
    noticeFont: {
        type: String,
        required: true
    },
    filename_audio_ap: {type: String},
    originalname_audio_ap: {type: String},
    path_audio_ap: {type: String},
    miemetype_audio_ap: {type: String},
    size_audio_ap: {type: String},


},{
    timestamps: true
        
});
module.exports = model('ArticuloAltaPrioridad', articuloaltaprioridadSchema)

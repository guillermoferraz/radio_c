const  {Schema, model} = require('mongoose');

const aap_audioSchema = new Schema({
    filename_audio_ap: {type: String},
    originalname_audio_ap: {type: String},
    path_audio_ap: {type: String},
    mimetype_audio_ap: {type: String},
    size_audio_ap: {type: Number},
    id: {type: String},
    user: {type: String},
    username: {type: String},
    created_at: {type: Date, default: Date.now() },
},{
    timestamps: true
});
module.exports = model('Aap_audio', aap_audioSchema)

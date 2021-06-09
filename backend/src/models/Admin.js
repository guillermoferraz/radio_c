const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');

const adminSchema = new Schema({
    user: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
//cifrate hash
adminSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = bcrypt.hash(password, salt);
    return hash;
};
//compare hash
adminSchema.methods.matchPassword  = async function (password) {
    return await bcrypt.compare(password, this.password);
} 
module.exports = model('Admin', adminSchema);

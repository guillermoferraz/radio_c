const { Schema, model } = require('mongoose');

const priceSchema = new Schema({
    dolar_com:{
            type: Number,
            required: true,
        },
    dolar_ven:{
            type: Number,
            required: true
        },
    arg_ven: {
            type: Number,
            required: true
        },
    arg_com: {
        type: Number,
        required: true
    },
    real_ven: {
        type: Number,
        required: true
    },
    real_com: {
        type: Number,
        required: true
    },
    eur_ven: {
        type: Number,
        required: true
    },
    eur_com: {
        type: Number,
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
}, {
    timestamps: true
});
module.exports = model('Price', priceSchema);

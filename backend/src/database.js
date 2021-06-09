const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/RadioCristal', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(db => console.log('Data base RadioCristal is connected'))
    .catch(err => console.log('err'));

const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');
const {uuid} = require('uuidv4');
const v4 = require('uuidv4')
const multer = require('multer');
const videoPub = require('multer');

const app = express();
require('./database');
require('./config/passport');

//settings
app.set('port', process.env.PORT || 4100);

//middlewares

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(session({
    secret: 'cristalApp',
    resave: true,
    saveUninitialized: true
}))


app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers','Content-Type');

    next();
})

app.use(passport.initialize());
app.use(passport.session());

//global variables

app.use((req, res, next) => {
    res.locals.user = req.user || null;
    res.locals.email = req.email || null;

    next();

});
 const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/img/avatar'),
    filename: (req, file, cb, filename) => {
        cb(null, uuid() + path.extname(file.originalname));
    }
});
const newAPP = multer.diskStorage({
    destination: path.join(__dirname, 'public/img/app'),
    filename: (req, file, cb, filename) => {
        cb(null, v4() + path.extname(file.originalname));
    }
});
const newAP = multer.diskStorage({
    destination: path.join(__dirname, 'public/img/ap'),
    filenameap: (req, file, cb, filename) => {
        cb(null, v4() + path.extname(file.originalname));
    }
});
const newPS = multer.diskStorage({
    destination: path.join(__dirname, 'public/img/ps'),
    filenameps: (req, file, cb, filename) => {
        cb(null, v4() + path.extname(file.originalname));
    }
});



app.use(multer({
    storage: storage,
    newAPP: newAPP,
    newAP: newAP,
    newPS: newPS,
}).single('image'));

 const videoP = multer.diskStorage({
    destination: path.join(__dirname, 'public/publicity/video'),
    filename: (req, file, cb, filename) => {
        cb(null, uuid() + path.extname(file.originalname));
    }
});
app.use(videoPub({
    videoP: videoP
}).single('video'));



app.use(express.static(path.join(__dirname, 'public')));

app.use('/' ,require('./routes/admin'));
app.use('/tasks', require('./routes/tasks'));
app.use('/tasks/user', require('./routes/userTask'));
app.use('/avatar', require('./routes/avatar'));
app.use('/new_app', require('./routes/articulo_primera_plana'));
app.use('/new_ap', require('./routes/articulo_alta_prioridad'));
app.use('/new_ps', require('./routes/articulo_prioridad_standard'));
app.use('/new_img/img', require('./routes/api_img'));
app.use('/price', require('./routes/userPrice'));
app.use('/publicity' ,require('./routes/Publicity'));

module.exports = app;


const {Router} = require('express');
const router = Router();
const ArticuloPrimeraPlana = require('../models/ArticuloPrimeraPlana');
const {isAuthenticated} = require('../helpers/auth');


router.post('/app', isAuthenticated, async (req, res) => {
    const newAPP = new ArticuloPrimeraPlana();
    newAPP.title_app = req.body.title_app;
    newAPP.subtitle_app = req.body.subtitle_app;
    newAPP.description_app = req.body.description_app;
    newAPP.filename = req.body.filename;
    newAPP.pathapp = '/img/avatar/' + req.file.filename;
    newAPP.originalnameapp = req.file.originalname;
    newAPP.mimetypeapp = req.file.mimetype;
    newAPP.sizeapp = req.file.size;
    newAPP.user = req.user.id;
    newAPP.prioridad_app = req.body.prioridad_app;
    newAPP.usernameapp = req.body.username;
    newAPP.noticeFont = req.body.noticeFont;

    await newAPP.save();
    //console.log(newAPP);
    res.redirect('http://10.42.0.23:3200/Create_publication')

})
router.get('/app' ,async (req, res) => {
    const newAPP = await ArticuloPrimeraPlana.find();
    //console.log(newAPP);
    res.send(newAPP);
})

module.exports = router;

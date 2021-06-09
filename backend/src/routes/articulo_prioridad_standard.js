const {Router} = require('express');
const router = Router();
const ArticuloPrioridadStandard = require('../models/ArticuloPrioridadStandard');
const {isAuthenticated} = require('../helpers/auth');


router.post('/ps', isAuthenticated, async (req, res) => {
    const newPS = new ArticuloPrioridadStandard();
    newPS.title_ps = req.body.title_ps;
    newPS.subtitle_ps = req.body.subtitle_ps;
    newPS.description_ps = req.body.description_ps;
    newPS.filenameps = req.body.filename;
    newPS.pathps = '/img/avatar/' + req.file.filename;
    newPS.originalnameps = req.file.originalname;
    newPS.mimetypeps = req.file.mimetype;
    newPS.sizeps = req.file.size;
    newPS.user = req.user.id;
    newPS.prioridad_ps = req.body.prioridad_ps;
    newPS.usernameps = req.body.username;
    newPS.noticeFont = req.body.noticeFont;

    await newPS.save();
    console.log(newPS);
    res.redirect('http://10.42.0.23:3200/Create_publication')

})
router.get('/ps' ,async (req, res) => {
    const newPS = await ArticuloPrioridadStandard.find().sort({createdAt: 'desc'});
    //console.log(newAPP);
    res.send(newPS);
})

module.exports = router;

const {Router} = require('express');
const router = Router();
const ArticuloAltaPrioridad = require('../models/ArticuloAltaPrioridad');
const {isAuthenticated} = require('../helpers/auth');




router.post('/ap', isAuthenticated, async (req, res) => {
    const newAP = new ArticuloAltaPrioridad();
    newAP.title_ap = req.body.title_ap;
    newAP.subtitle_ap = req.body.subtitle_ap;
    newAP.description_ap = req.body.description_ap;
    newAP.filenameap = req.body.filename;
    newAP.pathap = '/img/avatar/' + req.file.filename;
    newAP.originalnameap = req.file.originalname;
    newAP.mimetypeap = req.file.mimetype;
    newAP.sizeap = req.file.size;
    newAP.user = req.user.id;
    newAP.prioridad_ap = req.body.prioridad_ap;
    newAP.usernameap = req.body.username;
    newAP.noticeFont = req.body.noticeFont;
    
    await newAP.save(); 
    //console.log(newAP);
    res.redirect('http://10.42.0.23:3200/Create_publication')

})
router.get('/ap' ,async (req, res) => {
    const newAP = await ArticuloAltaPrioridad.find().sort({created_at: 'desc'});
    //console.log(newAP);
    res.send(newAP);
})

module.exports = router;

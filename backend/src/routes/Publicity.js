const {Router} = require('express');
const router = Router();
const VideoPub = require('../models/VideoPub');
const {isAuthenticated} = require('../helpers/auth');




router.post('/video', isAuthenticated, async (req, res) => {
    const newVp = new VideoPub();
    newVp.title_v = req.body.title_v;
    newVp.address_v = req.body.address_v;
    newVp.description_v = req.body.description_v;
    newVp.filename = req.body.filename;
    newVp.path = '/video/' + req.file.filename;
    newVp.originalname = req.file.originalname;
    newVp.mimetype = req.file.mimetype;
    newVp.size = req.file.size;
    newVp.user = req.user.id;
    newVp.hours_v = req.body.hours_v;
    newVp.username_v = req.body.username_v;
    newVp.contact_v = req.body.contact_v;
    
    await newVp.save(); 
    console.log(newVp);
    console.log(req.body);
    res.redirect('http://10.42.0.23:3200/Publicity')

})
router.get('/video' ,async (req, res) => {
    const newVp = await VideoPub.find().sort({created_at: 'desc'});
    console.log(newVp);
    res.send(newVp);
})

module.exports = router;

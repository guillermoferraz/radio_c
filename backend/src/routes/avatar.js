const {Router}  = require('express');
const router = Router();
const Avatar = require('../models/Avatar');
const {isAuthenticated} = require('../helpers/auth');
const multer = require('multer');



router.post('/img',  isAuthenticated, async (req, res) => {
    const image = new Avatar();
    image.filename = req.body.filename;
    image.path = '/img/avatar/' + req.file.filename;
    image.originalname = req.file.originalname;
    image.mimetype = req.file.mimetype;
    image.size = req.file.size;
    image.user = req.user.id;
    image.username = req.body.username;

    await image.save();
    console.log(image);
    res.redirect('http://10.42.0.23:3200/home');
});
router.get('/img', isAuthenticated, async (req, res) => {
    const avatar = await Avatar.find({user: req.user.id}).sort({created_at:'desc'});
    res.send(avatar);
})
router.get('/img/list', isAuthenticated, async (req, res) => {
    const avatar = await Avatar.find();
    res.send(avatar);
})
router.delete('/img/:id', async (req, res) => {
    await Avatar.findByIdAndRemove(req.params.id);
})

module.exports = router;

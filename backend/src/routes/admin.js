const router = require('express').Router();
const Admin = require('../models/Admin');
const passport =  require('passport');
const { isAuthenticated } = require('../helpers/auth');

router.get('/admin', isAuthenticated, async (req, res, next) => {
    const admin = await Admin.findById(req.user.id);
    res.setHeader('Access-Control-Allow-Origin','*' );
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
    res.json(admin);
    next();
});

router.post('/admin', async (req, res) => {
    const {user, email ,password, confirm_password} = req.body;
    const newAdmin = new Admin({user, email, password});
    newAdmin.password = await newAdmin.encryptPassword(password);
    await newAdmin.save();
    console.log(newAdmin);
    res.send({user, email, password});
})

router.post('/admin/signIn', passport.authenticate('local', {
    successRedirect: 'http://10.42.0.23:3200/home',
    failureRedirect: 'http://10.42.0.23:3200/admin/signIn/fail',
}));

router.get('/logOut' ,(req, res) => {
    req.logout();
    res.redirect('http://10.42.0.23:3200');
});

module.exports = router; 

const helpers = {};

helpers.isAuthenticated = (req, res, next) => {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect('http:10.42.0.23:3200');
}
module.exports = helpers;

const {Router} = require('express');
const router = Router();
const Price = require('../models/Price');
const {isAuthenticated} = require('../helpers/auth');

router.post('/newPrice', isAuthenticated, async (req, res) => {
    const {dolar_com, dolar_ven, arg_com, arg_ven, real_com, real_ven, eur_com, eur_ven, username} = req.body;
    const newPrice = new Price({dolar_com, dolar_ven, arg_com, arg_ven, real_com, real_ven, eur_com, eur_ven, username})
    newPrice.user = req.user.id;
    await newPrice.save();
    console.log(newPrice);
    res.send({dolar_com, dolar_ven, arg_com, arg_ven, real_com, real_ven, eur_com, eur_ven, username});
});
router.get('/newPrice', isAuthenticated ,async (req, res) => {
    const price = await Price.find();
    res.send(price)
});
router.get('/newPrice/client' ,async (req, res) => {
    const price = await Price.find();
    res.send(price)
});

router.get('/newPrice/:id', isAuthenticated, async (req, res) => {
    const price = await Price.findById(req.params.id);
    res.json(price);
});
router.put('/newPrice/:id', isAuthenticated, async (req, res) => {
    const {dolar_com, dolar_ven, arg_com, arg_ven, real_com, real_ven, eur_com, eur_ven, username} = req.body;
    await Price.findByIdAndUpdate(req.params.id, {
        dolar_com, dolar_ven, arg_com, arg_ven, real_com, real_ven, eur_com, eur_ven, username
    });
    res.json('Cotizacion del Dia Actualizada con Exito')
})
module.exports = router;

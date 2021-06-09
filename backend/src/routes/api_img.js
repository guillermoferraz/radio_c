const {Router} = require('express');
const router = Router();
const ArticuloPrimeraPlana = require('../models/ArticuloPrimeraPlana');
const ArticuloAltaPrioridad = require('../models/ArticuloAltaPrioridad');
const ArticuloPrioridadStandard = require('../models/ArticuloPrioridadStandard');
const {isAuthenticated} = require('../helpers/auth');

router.get('/app' ,async (req, res) => {
    const newAPP = await ArticuloPrimeraPlana.find({user: req.user.id}).sort({created_at: 'desc'});
    //console.log(newAPP);
    res.send( newAPP);
});

router.get('/app/:id' ,isAuthenticated, async (req, res) => {
    const newAPP = await ArticuloPrimeraPlana.findById(req.params.id);
    res.json(newAPP);
})

router.delete('/app/:id', async (req, res) => {
    await ArticuloPrimeraPlana.findByIdAndRemove(req.params.id);
})
router.get('/ap' ,async (req, res) => {
    const newAP = await ArticuloAltaPrioridad.find({user: req.user.id}).sort({created_at: 'desc'});
    //console.log(newAPP);
    res.send( newAP);
});

router.get('/ap/:id' ,isAuthenticated, async (req, res) => {
    const newAP = await ArticuloAltaPrioridad.findById(req.params.id);
    res.json(newAP);
})

router.delete('/ap/:id', async (req, res) => {
    await ArticuloAltaPrioridad.findByIdAndRemove(req.params.id);
});
router.get('/ps' ,async (req, res) => {
    const newPS = await ArticuloPrioridadStandard.find({user: req.user.id}).sort({createdAt: 'desc'});
    //console.log(newAPP);
    res.send( newPS);
});

router.get('/ps/:id' ,isAuthenticated, async (req, res) => {
    const newPS = await ArticuloPrioridadStandard.findById(req.params.id);
    res.json(newPS);
})

router.delete('/ps/:id', async (req, res) => {
    await ArticuloPrioridadStandard.findByIdAndRemove(req.params.id);
})



module.exports = router;

const {Router} = require ('express');
const router  = Router();
const Task = require('../models/Tasks');
const {isAuthenticated} = require('../helpers/auth');

router.post('/', isAuthenticated, async (req, res) => {
    const {title, description, receptor, username} = req.body;
    const newTask = new Task({title, description, receptor, username});
    newTask.user = req.user.id;
    await newTask.save();
    console.log(newTask);
    res.send({title, description, receptor, username})
})
router.get('/', isAuthenticated, async (req, res) => {
    //const tasks = await Task.find({user: req.user.id}).sort({date: 'desc'});
    const tasks = await Task.find().sort({date:'desc'});
    res.send(tasks);
})
router.get('/:id' ,isAuthenticated, async (req, res) => {
    const task = await Task.findById(req.params.id);
    res.json(task);
})
router.put('/:id', isAuthenticated, async (req, res) => {
    const {title, description, receptor, username} = req.body;
    await Task.findByIdAndUpdate(req.params.id, {
        title, description, receptor, username
    });
    res.json('Task Updated')
})
router.delete('/:id', async (req, res) => {
    await Task.findByIdAndRemove(req.params.id);
})
module.exports = router;

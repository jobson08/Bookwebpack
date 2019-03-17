const express = require('express');
const router = express.Router();

const Task = require('../models/task');
//verifica todos conteudo
router.get('/', async (req, res) => {
    const tasks = await Task.find() ;
       res.json(tasks);
});

//Verificar um conteudo
router.get('/:id', async (req, res) => {
    const tasks = await Task.findById(req, params.id);
       res.json(tasks);
});

//Adicionar um conteudo
router.post('/', async (req, res) =>{
    const { titulo, descricao } = req.body;
    const task = new Task({titulo, descricao});
    await task.save();
    res.json({status: 'dados Recebido'}); 
})

//Editar um conteudo
router.put('/:id', async (req, res) =>{
    const { titulo, descricao } = req.body;
    const newTask = {titulo, descricao};
    await Task.findByIdAndUpdate(req.params.id, newTask);
    res.json('Recebido');
});

//Deletar um conteudo
router.delete('/:id', async(req, res) =>{
   await Task.findByIdAndDelete(req.params.id);
   res.json({status: 'Task Deletado'});
});

module.exports = router;
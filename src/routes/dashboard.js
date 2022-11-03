const express = require('express');
const router = express.Router();

router.get('/dashboard', async (req, res) => {
    //const allNotes = await Note.find();
    res.render('dashboard/index'/*, { allNotes }*/);
});

router.get('/dashboard/prospecto', (req, res) => {
    res.render('dashboard/prospecto');
}); 

router.get('/dashboard/prospecto-contactado', (req, res) => {
    res.render('dashboard/prospecto-contactado');
});

router.get('/dashboard/cliente', (req, res) => {
    res.render('dashboard/cliente');
});

router.get('/dashboard/cliente-recurrente', (req, res) => {
    res.render('dashboard/cliente-recurrente');
});

module.exports = router;
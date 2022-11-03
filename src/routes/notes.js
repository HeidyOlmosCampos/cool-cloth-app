const express = require('express');
const router = express.Router();

const Note = require('../models/Note');


router.get('/notes/add', (req,res) => {
    res.render('notes/new-note'); //aa la vista new-note
});

router.post('/notes/new-note', async (req, res) => {
    const { titulo, descripcion } = req.body;
    const errors = [];
    if(!titulo){
        errors.push({text: 'Por favor escriba un titulo'});
    }
    if(!descripcion){
        errors.push({text: 'Por favor escriba una descripcion'});
    }
    if(errors.length > 0){
        res.render('notes/new-note', {
            errors,
            titulo,
            descripcion
        });
    }else{
        const newNote = new Note({ 
            title: titulo,
            description: descripcion
        });
        await newNote.save();
        res.redirect('/notes');
    }

});

router.get('/notes', async (req, res) => {
    const allNotes = await Note.find();
    res.render('notes/all-notes', { allNotes });
});




module.exports = router;
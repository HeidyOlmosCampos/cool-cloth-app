const { Schema, model } = require('mongoose');

const NoteSchema = Schema(
    {
        title: {
            type: String, 
            required: true//, default: 'a'
        },
        description: {
            type: String, 
            required: true//, default: 'aa'
        },
        date: {
            type: Date, 
            default: Date.now
        }
    }, { timestamps: true }
);

module.exports = model('Note', NoteSchema);
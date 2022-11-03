const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://montanodb:chatbot123@cluster0.mnwshv1.mongodb.net/chatbotDB')
    .then(db => console.log('DB is connceted'))
    .catch(err => console.error(err));


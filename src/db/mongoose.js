const mongoose = require('mongoose')

const db = mongoose.connection

mongoose.connect('mongodb://localhost:27017/chatdb', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true  
})


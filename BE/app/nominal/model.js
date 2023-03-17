const mongoose = require('mongoose')

let nominalSchema = mongoose.Schema({
    coinQuantity : {
        type: String,
        default: 0
    },
    coinName : {
        type: String,
        require: [true, 'Nama koin harus diisi']
    },
    price : {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('Category', nominalSchema)
const mongoose = require('mongoose');

let playerSchema = mongoose.Schema ({
    tax : {
        type: String,
        require: [true, "email harus diisi"]
    },
    name : {
        type: String,
        require: [true, "nama harus diisi"],
        maxLength: [225, "panjang nama harus antara 3 - 225 karakter"],
        minLength: [3, "panjang nama harus antara 3 - 225 karakter"]
    },
    username : {
        type: String,
        require: [true, "nama harus diisi"],
        maxLength: [225, "panjang username harus antara 3 - 225 karakter"],
        minLength: [3, "panjang username harus antara 3 - 225 karakter"]
    },
    password : {
        type: String,
        require: [true, "kata sandi harus diisi"],
        maxLength: [225, "panjang username harus antara 3 - 225 karakter"]
    },
    role : {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    status : {
        type: String,
        enum: ['Y', 'N'],
        default: 'Y'
    },
    avatar : { 
        type : String 
    },
    fileName : { 
        type : String 
    },
    phoneNumber: { 
        type: String,
        require: [true, "nomor telepon harus diisi"],
        maxLength: [13, "panjang nomor telepon harus antara 9 - 13 karakter"],
        minLength: [9, "panjang nomor telepon harus antara 9 - 13 karakter"]        
    },
    favourite : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
}, { timestamps: true })

module.exports = mongoose.model('Player', playerSchema);
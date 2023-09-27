const mongoose = require("mongoose")
const Schema = mongoose.Schema;

var d = new Date();

const Musica = new Schema({
    id:{
        type: Number,
        required: true
    },
    titulo:{
        type:String,
        required:true
    },
    autoria:{
        type: String,
        required:true
    },
    data: {
        type: String, 
        default: d.toLocaleDateString()
    }
})

const musica = mongoose.model("musica", Musica)


const mongoose = require("mongoose")
const Schema = mongoose.Schema;


const Artista = new Schema({
    id_artista:{
        type: Number,
        required: true
    },
    nome:{
        type:String,
        required:true
    },
    genero:{
        type:Boolean,
        required:true
    },
    seguidores:{
        type: Schema,
        required: true
    },
    sobre:{
        type: String,
        required:true
    },
  
})

const artista = mongoose.model("artista", Artista)


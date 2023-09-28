const mongoose = require("mongoose")
const Schema = mongoose.Schema;


const Artista = new Schema({
    nome:{
        type:String,
        required:true
    },
    genero:{
        type:Boolean,
        required:true
    },
    seguidores:[{
        seguidor: {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        },
        done: Boolean
    }],
    sobre:{
        type: String,
        required:true
    },
  
})

export const artista = mongoose.model("artista", Artista)


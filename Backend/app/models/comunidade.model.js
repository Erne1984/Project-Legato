const mongoose = require("mongoose")
const Schema = mongoose.Schema;


const Comunidade = new Schema({
    id_comunidade:{
        type: Number,
        required: true
    },
    nome:{
        type:String,
        required:true
    },
    descricao:{
        type:String,
        required:true
    },
    topico:{
        type: String,
        required: true
    },
    regras:{
        type: String,
        required:true
    },
  
})

const comunidade = mongoose.model("comunidade", Comunidade)


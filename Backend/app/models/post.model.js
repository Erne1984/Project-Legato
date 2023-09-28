const mongoose = require("mongoose")
const Schema = mongoose.Schema;


const Comunidade = new Schema({

    data_criacao: {
        type: Date, 
        required: true,
    },
    titulo:{
        type:String,
        required:true
    },
    data:{
        type:String,
        required:true
    },
    conteudo:{
        type:String,
        required:true
    },
    autor:{
        type: String,
        required: true
    },
    comentarios:{
        type: String,
        required:true
    },
    curtidas:{
        type: Number,
        required:true
    },
  
})

const comunidade = mongoose.model("comunidade", Comunidade)


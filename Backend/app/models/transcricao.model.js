const mongoose = require("mongoose")
const Schema = mongoose.Schema;

var d = new Date();

const Transcricao = new Schema({

    nome_musica: {
        type: String, 
        required: true,
    },
    nome_versao:{
        type:String,
        required:true
    },
    data_criacao:{
        type: String,
        default: d.toLocaleDateString()
    },
    genero:{
        type: String,
        required: true
    },
    arquivo_pdf:{
        id: Number,
        nome:String,
        extensao: String,
        required: true
    },
    tipo:{
        type: String,
        required: true
    },
    dificuldade:{
        type: String,
        required: true
    },
    instrumento:{
        type: String,
        required: true
    }
})

const transcricao = mongoose.model("transcricao", Transcricao)


const mongoose = require("mongoose")
const Schema = mongoose.Schema;


const Comentarios = new Schema({
   
    autor: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    conteudo:{
        type:String,
        required:true
    },
    data_criacao:{
        type: Date,
        required:true
    },
  
})

const comentarios = mongoose.model("comentarios", Comentarios)

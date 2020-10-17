const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* Definição do esquema da base de dados */
const AlunoSchema = new Schema({
    name: String,
    number: Number,
});

/* Cria e exporta o modelo com base no schema */
module.exports = mongoose.model("Aluno", AlunoSchema);
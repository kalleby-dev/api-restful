const AlunoModel = require('../models/alunos');

const getAll = async () => await AlunoModel.find({});

const find = async id => await AlunoModel.findById(id);
    
const remove = async id => await AlunoModel.findOneAndDelete({ _id: id });


const save = async (payload) => {
    const {name, number} = payload; 
    
    const aluno = new AlunoModel; 
    aluno.name = name;
    aluno.number = number;
    await aluno.save();


    return aluno;
};


const update = async (id, payload) => {
    const {name, number} = payload;

    const aluno = await AlunoModel.findByIdAndUpdate(id);
    aluno.name = name;
    aluno.number = number;
    aluno.save();

    return aluno;
};




module.exports = {
    getAll,
    find,
    remove,
    save,
    update,
}


const alunos = require('../models/alunos');
const AlunoModel = require('../models/alunos');

const enconder = aluno => ({
    type: 'alunos',
    id: aluno.id,
    attributes: {
        name: aluno.name,
        number: aluno.number
    },
    links: {
        self: `/api/v1/alunos/${aluno.id}`
    }
});

const getAll = async (req, res) => {
    const alunos = await AlunoModel.find({});
    return {data: alunos.map(enconder)};
};


const save = async (req, res) => {
    const {name, number} = req.payload; 
    
    const aluno = new AlunoModel; 
    aluno.name = name;
    aluno.number = number;
    await aluno.save();

    return res.response(strResponse).code(201);
};


const remove = async (req, res) => {
    await AlunoModel.findOneAndDelete({ _id: req.params.id });
    return res.response().code(204);
};

module.exports = {
    getAll,
    save,
    remove
}
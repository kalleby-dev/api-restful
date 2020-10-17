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
    let msg = {data: alunos.map(enconder)};
    return res.response(msg).code(200);
};

const get = async (req, res) => {
    const aluno = await AlunoModel.findById(req.params.id);
    let msg = {data: enconder(aluno)};
    return res.response(msg).code(200);
};


const save = async (req, res) => {
    const {name, number} = req.payload; 
    
    const aluno = new AlunoModel; 
    aluno.name = name;
    aluno.number = number;
    await aluno.save();

    let msg = {data: enconder(aluno)};
    return res.response(msg).code(201);
};


const update = async (req, res) => {
    const {name, number} = req.payload;
    let data = {
        name: name,
        number: number 
    }

    const aluno = await AlunoModel.findByIdAndUpdate(req.params.id, data);
    let msg = {data: enconder(aluno)};
    return res.response(msg).code(200);
}


const remove = async (req, res) => {
    await AlunoModel.findOneAndDelete({ _id: req.params.id });
    return res.response().code(204);
};

module.exports = {
    getAll,
    get,
    save,
    update,
    remove
}
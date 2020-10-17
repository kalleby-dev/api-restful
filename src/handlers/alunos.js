const AlunoModel = require('../models/alunos');

const getAll = (req, res) => {
    return {"data": "Get test"};
};

const save = async (req, res) => {
    //Getting request
    const {name, number} = req.payload; 

    //Writing data
    const aluno = new AlunoModel; 
    aluno.name = name;
    aluno.number = number;
    await aluno.save();

    //Writing response
    const strResponse = {
        type: 'alunos',
        id: aluno.id,
        attributes: {
            name: aluno.name,
            number: aluno.number
        },
        links: {
            self: `/api/v1/alunos/${aluno.id}`
        }
    };

    //Sending response
    return res.response(strResponse).code(201);
};

module.exports = {
    getAll,
    save
}
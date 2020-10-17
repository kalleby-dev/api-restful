const AlunoRepository = require('../repositories/alunos');

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


const getAll = async () => {
    const alunos = await AlunoRepository.getAll();
    return { data: alunos.map(enconder) };
};


const find = async (req) => {
    const aluno = await AlunoRepository.find(req.params.id);
    return { data: enconder(aluno) };
};


const save = async (req, res) => {
    const aluno = await AlunoRepository.save(req.payload);
    return res.response({ data: enconder(aluno) }).code(201);
};


const update = async (req) => {
    const aluno = await AlunoRepository.update(req.params.id, req.payload);
    return { data: enconder(aluno) }
};


const remove = async (req, res) => {
    await AlunoRepository.remove(req.params.id);
    return res.response().code(204);
};

module.exports = {
    getAll,
    find,
    save,
    update,
    remove
}
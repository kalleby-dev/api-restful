const alunosHandler = require("./handlers/alunos")

module.exports = [
    {
        method: 'GET',
        path: '/api/v1/alunos',
        handler: alunosHandler.getAll

    },
    {
        method: 'POST',
        path: '/api/v1/alunos',
        handler: alunosHandler.save

    }
]


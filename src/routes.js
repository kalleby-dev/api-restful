const alunosHandler = require("./handlers/alunos")

module.exports = [
    {
        method: 'GET',
        path: '/api/v1/alunos',
        handler: alunosHandler.getAll

    },
    {
        method: 'GET',
        path: '/api/v1/alunos/{id}',
        handler: alunosHandler.get

    },
    {
        method: 'POST',
        path: '/api/v1/alunos',
        handler: alunosHandler.save

    },
    {
        method: 'PUT',
        path: '/api/v1/alunos/{id}',
        handler: alunosHandler.update

    },
    {
        method: 'DELETE',
        path: '/api/v1/alunos/{id}',
        handler: alunosHandler.remove

    }
]


import http from 'node:http';

// - Criar um usuário
// - Listagem de usuários
// - Edição de usuários
// - Remoção de usuários

// - HTTP
//  - Método http
//  - URL

// GET - Buscar um recurso
// POST - Criar um recurso
// PUT - Atualizar um recurso (muitos campos ao mesmo tempo)
// PATCH - Atualizar uma informação específica de um recurso
// DELETE - Remover um recurso

// Podemos ter duas urls iguais com métodos diferentes

const server = http.createServer((req, res) => {

    const { method, url } = req;

    if(method === 'GET' && url === '/users') {
        return res.end('Listagem de usuários');
    }

    if(method === 'POST' && url === '/users') {
        return res.end('Criação de usuários');
    }

    return res.end('hello world!');
    
})

//localhost:8080
server.listen(8080);
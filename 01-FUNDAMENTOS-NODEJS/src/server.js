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

// statefull - depende das infos em memória para funcionamento
// stateless - geralmente salva os dados externamente ou em arquivos

// JSON - JAvascript Object Notation

// Headers = Cabeçalhos - Requisição e Resposta -> Metadados

// HTTP status code

const users = [];

const server = http.createServer((req, res) => {

    const { method, url } = req;

    if(method === 'GET' && url === '/users') {
        return res
            .setHeader('Content-type', 'application/json')
            .end(JSON.stringify(users));
    }

    if(method === 'POST' && url === '/users') {
        
        users.push({
            id: 1,
            name: 'John Doe',
            email: 'johndoe@email.com'
        })

        return res.writeHead(201).end('Criação de usuário');

    }

    return res.writeHead(404).end('NOT FOUND');
    
})

//localhost:8080
server.listen(8080);
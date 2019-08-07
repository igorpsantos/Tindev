// imporatando o express

const express = require('express');

// importa dependencia mongose para utilização de javascript
// no banco de dados

const mongoose = require('mongoose');

const cors = require('cors');

const routes = require('./routes'); // chama o arquivo de rotas

// agora tenho acesso a biblioteca express, a express também é uma
// função, toda vez que ela é chamada ela criar um servidor

const server = express(); // chama a função express / servidor

// inicia a coneção com o mongoose e passa a url
// de conexão de importação do mongodb da aws
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-fcvm3.mongodb.net/omnistack8?retryWrites=true&w=majority', 
{useNewUrlParser: true});

server.use(cors());
server.use(express.json()); // mostra para o express que vamos utilizar json no post
server.use(routes); // add modulo/puglin

// definir o localhost
server.listen(3333);



// imporatando o express

const express = require('express');

// importa dependencia mongose para utilização de javascript
// no banco de dados

const mongoose = require('mongoose');



const cors = require('cors');

const routes = require('./routes'); // chama o arquivo de rotas

// agora tenho acesso a biblioteca express, a express também é uma
// função, toda vez que ela é chamada ela criar um servidor

const app = express(); // chama a função express / servidor

const server = require('http').Server(app);

const io = require('socket.io');

// inicia a coneção com o mongoose e passa a url
// de conexão de importação do mongodb da aws
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-fcvm3.mongodb.net/omnistack8?retryWrites=true&w=majority', 
{useNewUrlParser: true});

app.use(cors());
app.use(express.json()); // mostra para o express que vamos utilizar json no post
app.use(routes); // add modulo/puglin

// definir o localhost
server.listen(3333);



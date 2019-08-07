const express = require('express'); // define a express
// importar o DevController
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');

const routes = express.Router(); // cria uma instancia de rotas

routes.get('/devs', DevController.index);
// cria a rota devs e chama a função no DevController...
routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);

// agora precisamos exportar as informações das rotas para o servidor

module.exports = routes;
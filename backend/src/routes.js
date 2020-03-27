const express = require('express');
// importando o express (framework node)

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileCOntroller = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router();
// desacoplando o método router para a variável routes

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index); //listagem de ongs
routes.post('/ongs', OngController.create); //cadastro de ongs

routes.get('/incidents', IncidentController.index); //listagem casos
routes.post('/incidents', IncidentController.create); //cadastro de casos
routes.delete('/incidents/:id', IncidentController.delete); //deletar caso pelo id

routes.get('/profile', ProfileCOntroller.index) //listagem casos de um perfil espec. de ong


module.exports = routes;
// para exportar variável de um arquivo (no caso, routes.js) 
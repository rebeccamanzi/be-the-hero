const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development);
//estabelecendo conexão com o banco de dados

module.exports = connection;
// exportar a conexão para outros arquivos que precisem se conectar ao banco de dados

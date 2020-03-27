// para IMPORTAR algo para o node:
// a variável vai conter todas as funcionalidades disponíveis

const express = require('express'); 
const cors = require('cors'); //modulo de segurança
const routes = require('./routes');

const app = express(); //criando uma aplicação

app.use(cors(/*{
    quando tiver hospedado, coloca o dominio. ex:
    origin: 'http://meuapp.com' 
}*/));
app.use(express.json()); //converter json em objeto do javascript
app.use(routes);

app.listen(3333);
// ouvir a porta 3333 -> quando quiser abrir no navegador digita "localhost:3333"



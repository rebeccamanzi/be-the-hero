// ONGS -> LISTAGEM E CADASTRO

const crypto = require('crypto');
// importado crypto (pacote que vem no node) p/ gerar uma string aleatória
const connection = require('../database/connection');

module.exports = {
    
    async index (request, response) {        
        const ongs = await connection('ongs').select('*'); //selec tds os campos        
        return response.json(ongs); //retorna array
    },
    
    async create(request, response) {
        const {name, email, whatsapp, city, uf} = request.body;
        const id = crypto.randomBytes(4).toString('HEX');
        // gerar id aleatório com 4 bytes

        //método p criação de uma ong:
        await connection('ongs').insert({ //aguarda comando finalizar p/ poder continuar
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })   
    return response.json({ id });
    }
};
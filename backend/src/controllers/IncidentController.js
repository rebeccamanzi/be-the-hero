// INCIDENTS (CASOS) -> LISTAR, CRIAR E DELETAR 

const connection = require('../database/connection');

module.exports = {

    //listagem
    async index (request, response) {
        const { page = 1} = request.query; //paginacao com query params

        const [count] = await connection('incidents').count(); // conta quantos casos tem no total        
        
        const incidents = await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id') //acesso aos dados da ong deste caso
        .limit(5) //limite de 5 casos por página
        .offset((page - 1) * 5) //mostra os próximos 5 casos
        .select([
            'incidents.*', //todos os dados dos casos
            'ongs.name', //nome da ong 
            'ongs.email', //email da ong
            'ongs.whatsapp', //whatsapp da ong
            'ongs.city', //cidade da ong
            'ongs.uf' //uf da ong
        ]);

        response.header('X-Total-Count', count['count(*)']);
        //envia p o header de resposta a contagem de casos

        return response.json(incidents);
    },

    //criação
    async create (request, response) {
        const { title, description, value } = request.body;
        // o id é gerado automatico 
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
        title,
        description,
        value,
        ong_id,
        });

        return response.json({ id });        
    },
 
    //deletar
    async delete(request, response) {
        const { id } = request.params; 
        const ong_id = request.headers.authorization;
        
        const incident = await connection('incidents')
        .where('id', id)
        .select('ong_id')
        .first(); 
        //o primeiro q aparecer (já q o id n se repete)
            
        if (incident.ong_id != ong_id) {
            return response.status(401).json({ error: 'Operation not permitted.' });
            //401-> http code para não autorizado
        }        

        await connection('incidents').where('id', id).delete();

        return response.status(204).send();
        //204-> resposta que deu sucesso mas n retorna conteudo
        }
};






exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) {
        table.increments(); // irá numerar incrementando automaticamente para gerar id

        table.string('title').notNullable(); 
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable();
        //dado relacional: id da ong respectiva ao caso (incident) criado

        table.foreign('ong_id').references('id').inTable('ongs');
        //o ong_id referencia o 'id' da tabela estrangeira 'ongs'        
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents'); //deletar tabela 'incidents'
};

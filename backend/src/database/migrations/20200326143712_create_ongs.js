
// método UP -> responsável pela criação da tabela
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function (table) {
      table.string('id').primary(); //o id será chave primária da tabela
      table.string('name').notNullable(); //n poderá ser nulo
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable(); //2 caracteres
  })
};

// método DOWN -> caso dê erro ao criar a tabela, o que preciso fazer
exports.down = function(knex) {
  return knex.schema.dropTable('ongs'); //deletar tabela 'ongs'
};

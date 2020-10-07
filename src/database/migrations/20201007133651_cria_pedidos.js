
exports.up = function(knex) {
  return knex.schema.createTable('pedidos', table => {
    table.string('id_pedido').notNullable();
    table.string('produto_pedido').notNullable();
    table.timestamp('data_pedido').notNullable().defaultTo(knex.fn.now());
    table.timestamp('data_entrega').notNullable();
    table.boolean('entregue').notNullable().defaultTo(false);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('pedidos');
};


exports.up = function(knex, Promise) {
  return knex.schema.createTable('visitors', (table) => {
    table.increments('id').unsigned().primary().index();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
 return knex.schema.dropTable('visitors'); 
};

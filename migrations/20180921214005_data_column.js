
exports.up = function(knex, Promise) {
  return knex.schema.table('visitors', (table) => {
    table.jsonb('data');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('visitors', (table) => {
    table.dropColumn('data');
  });
};

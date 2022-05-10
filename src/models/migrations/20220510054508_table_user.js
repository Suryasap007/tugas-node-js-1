
exports.up = function(knex) {
 return knex.schema
 .createTable('user', (table)=> {
     table.increments ('id')
     table.string ('name', 255)
     table.string ('alamat_rumah', 255)
     table.string ('email', 255)
     table.integer ('umur')
     table.timestamps()
 })  
};

exports.down = function(knex) {
  return knex.schema
  .dropTable ('users')
};

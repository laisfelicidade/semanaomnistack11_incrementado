
exports.up = function(knex) {

    return knex.schema.createTable('animais', function (table) {

        table.string('cod').primary();
        table.string('name').notNullable();
        table.string('dogbreed').notNullable();
        table.decimal('age').notNullable();
    });
};
exports.down = function(knex) {
    return knex.schema.dropTable('animais');

};

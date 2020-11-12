
exports.up = knex => {
    return knex.schema.createTable( 'insults', (table) => {

        table.increments( 'id' )
        table.string( 'insultString' )
    })
}

exports.down = knex => {
    return knex.schema.dropTable( 'insults' )
}

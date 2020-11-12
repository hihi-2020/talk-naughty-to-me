const knex = require( 'knex' )
const config = require( '../../knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex( config[env] )

function getInsults( db = connection ) {
    
    return db( 'insults' )
      .select()
}

function addInsults( insult, db = connection ) {

    return db( 'insults' )
    .insert( insult )
}

module.exports = {
    getInsults,
    addInsults
}
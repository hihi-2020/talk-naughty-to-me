const knex = require( 'knex' )
const config = require( '../../knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex( config[env] )

function getInsults( db = connection ) {
    return db( 'insults' )
      .select()
      .orderBy('id', 'desc')
      .limit(10)
}

function addInsult( insult, db = connection ) {
    return db( 'insults' )
    .insert({insultString: insult})
}


module.exports = {
    getInsults,
    addInsult
}
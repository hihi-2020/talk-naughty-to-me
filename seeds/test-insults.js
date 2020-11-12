
exports.seed = knex => {

  // Deletes ALL existing entries
  return knex( 'insults' ).del()
    .then( () => {

      // Inserts seed entries
      return knex( 'insults' ).insert([
        { id: 1, insultString: 'a funny insult string 1' },
        { id: 2, insultString: 'a funny insult string 2' },
        { id: 3, insultString: 'a funny insult string 3' }
      ]);
    });
};

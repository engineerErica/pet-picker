// A "seed" file is how we can pre-populate our database with data.
// This is useful for testing and development purposes.

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
    // Deletes ALL existing entries (you can just use knex and delete everything)
    await knex('pets').del();
    // Now run your logic to create your resources with your models
    await knex('pets').insert([
      {id: 1, name: 'hello', url: 'hi', species: 'dog', is_friendly: true},
      {id: 2, name: 'efdwqefeqwefqw', url: 'hello', species: 'dog', is_friendly: true},
      {id: 3, name: 'efdwqefeqwefqw', url: 'bye', species: 'dog', is_friendly: true}
    ]);
  };
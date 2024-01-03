const knex = require('./knex');

class Pets {

  static async list() {
    try {
      const query = `SELECT * FROM pets;`;
      const { rows } = await knex.raw(query);
      return rows;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async create(name, url, species, isFriendly) {
    try {
      const query = `INSERT INTO pets (name, url, species, is_friendly) VALUES (?, ?, ?, ?) RETURNING *`;
      const res = await knex.raw(query, [name, url, species, isFriendly]);
      console.log('res', res);
      return res.rows[0];
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async delete(id) {
    try {
      const query = `DELETE FROM pets WHERE id = ?;`;
      const { rows } = await knex.raw(query, [id]);
      return null;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}

module.exports = Pets;
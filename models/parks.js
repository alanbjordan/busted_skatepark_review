const db = require('./conn.js');

class Parks {
  constructor(id, name, address, picture) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.picture = picture;
  }

  static async getAll() {
    try {
      const response = await db.any(`SELECT * FROM parks;`);
      return response;
    } catch (error) {
      console.error("ERROR: ", error);
      return error.message;
    }
  }

  static async getById(p_id) {
    try {
      const response = await db.one(`select * from parks where id = ${p_id}:`);
      return response;
    } catch (err) {
      return err.message;
    }
  }

  static async getReviewsById(p_id) {
    try {
      const response = await db.any(
        `select * from reviews where park_id = ${p_id}:`
      );
      return response;
    } catch (err) {
      return err.message;
    }
  }
}

module.exports = Parks;

// models/Item.js
const pool = require('../db');

class Item {
    static async get(id) {
        const query = 'SELECT * FROM items WHERE id = $1';
        const values = [id];
        const { rows } = await pool.query(query, values);
        return rows[0];
    }
}

const DB = require("./db");
const DateHelper = require("../helper/date_helper");

module.exports = class ModelUsers {
	/**
	 * Insert log to table websocket_log
	 * @param {string} token
	 * @param {string} message
	 * @returns
	 */
	static async isVerified(token) {
		const query = `SELECT username FROM tb_users WHERE username='${token}'`;
		console.log(query);
		const result = (await DB.query(query)).rows;
		console.log(result);
		return result.length > 0;
	}
};

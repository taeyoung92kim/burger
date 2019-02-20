var connection = require('../config/connection.js')

var orm =
{
	selectAll: function (tableInput, cb) {
		var queryString = "SELECT * FROM " + tableInput + ";";
		connection.query(queryString, function (err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},

	insertOne: function (table, burgername, cb) {
		var queryString = "INSERT INTO " + table + " SET ?";
		connection.query(queryString, {
			burgername: burgername,
			devoured: false,
		}, function (err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},

	updateOne: function (table, burger_id, cb) {
		var queryString = "UPDATE " + table + " SET ? WHERE ?";
		connection.query(queryString, [{ devoured: true }, { id: burger_id }], function (err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	}
};

module.exports = orm;
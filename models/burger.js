var orm = require('../config/orm.js');

var burger = 
{
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },

  insertOne: function(burgername, cb) {
    orm.insertOne("burgers", burgername, function(res) {
      cb(res);
    });
  },

  updateOne: function(burger_id, cb) {
    orm.updateOne("burgers", burger_id, function(res) {
      cb(res);
    });
  }

};

module.exports = burger;
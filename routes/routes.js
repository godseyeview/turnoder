'use strict';

module.exports = function(app) {
  var todoList = require('../controllers/controllers');

  // todoList Routes
  app.route('/titles')
    .get(todoList.list_all_title);

  app.route('/titles/:search')
    .get(todoList.find_titles);
};

'use strict';
var mongoose = require('mongoose'),
  Title = mongoose.model('Title');

function find (name, query, cb) {
  mongoose.connection.db.collection(name, function (err, collection) {
      collection.find(query).toArray(cb);
  });
}

exports.list_all_title = function(req, res) {
  find('Titles', {}, function (err, docs) {
    if (err)
      res.send(err);        
    res.json(docs);
  })  
};

exports.find_titles = function(req, res) {
  find ('Titles', {'TitleName' : new RegExp(req.params.search, 'i')}, function (err, docs) {
    if (err)
      res.send(err);        
    res.json(docs);
  }) 
};

'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TitleSchema = new Schema({}, {strict: false});

module.exports = mongoose.model('Title', TitleSchema, 'titles');
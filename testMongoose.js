const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testTerra2024');

var Structure = require('./models/structure.js').Structure;

var structure = new Structure({
  title: "Святая Терра",
  nick: "terra"
});

structure.save();
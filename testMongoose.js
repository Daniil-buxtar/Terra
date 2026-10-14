const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testTerra2024');

var schema = mongoose.Schema({ name: String });

schema.methods.say = function() {
  console.log(this.name + " говорит: Слава Императору!");
};

const Unit = mongoose.model('Unit', schema);

const unit = new Unit({ name: 'Кустодес' });
unit.save().then(() => unit.say());
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testTerra2024');

const Unit = mongoose.model('Unit', { name: String });

const unit = new Unit({ name: 'Кустодес' });

unit.save().then(() => console.log('Слава Императору!'));
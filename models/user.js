var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  hashedPassword: {
    type: String,
    required: true
  },
  salt: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  }
});

// Метод для шифрования пароля
userSchema.methods.encryptPassword = function(password) {
  return require('crypto').createHmac('sha1', this.salt).update(password).digest('hex');
};

// Метод для проверки пароля
userSchema.methods.checkPassword = function(password) {
  return this.encryptPassword(password) === this.hashedPassword;
};

// Виртуальное поле для установки пароля
userSchema.virtual('password')
  .set(function(password) {
    this._plainPassword = password;
    this.salt = Math.random() + '';
    this.hashedPassword = this.encryptPassword(password);
  })
  .get(function() {
    return this._plainPassword;
  });

module.exports.User = mongoose.model("User", userSchema);
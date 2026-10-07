var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница Хоруса Луперкаля */
router.get('/primarchs/horus', function(req, res, next) {
  res.send("<h1>Хорус Луперкаль — Воитель</h1>")
});

/* Страница Робаута Жиллимана */
router.get('/primarchs/guilliman', function(req, res, next) {
  res.send("<h1>Робаут Жиллиман — Аватар Империума</h1>")
});

/* Страница Лемана Русса */
router.get('/primarchs/russ', function(req, res, next) {
  res.send("<h1>Леман Русс — Коготь Императора</h1>")
});

module.exports = router;
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница Святой Терры */
router.get('/terra/terra', function(req, res, next) {
  res.render('terra', {
    title: "Святая Терра",
    picture: "/images/terra.png",
    desc: "Тронный мир Человечества, колыбель Империума..."
  });
});

/* Страница Адептус Кустодес */
router.get('/terra/custodes', function(req, res, next) {
  res.render('terra', {
    title: "Адептус Кустодес",
    picture: "/images/custodes.png",
    desc: "Легион Кустодес — личные телохранители Императора..."
  });
});

/* Страница Адептум Администратум */
router.get('/terra/administratum', function(req, res, next) {
  res.render('terra', {
    title: "Адептум Администратум",
    picture: "/images/administratum.png",
    desc: "Бюрократическое сердце Империума..."
  });
});

module.exports = router;
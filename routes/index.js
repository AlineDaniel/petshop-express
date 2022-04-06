var express = require('express');
var router = express.Router();
const ControllerPets = require('../controllers/ControllerPets')
const ControllerServicos = require('../controllers/ControllerServicos')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/pets', ControllerPets.index)
router.get('/servicos', ControllerServicos.index)

module.exports = router;

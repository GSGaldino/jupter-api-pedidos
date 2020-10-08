const express = require('express');
const router = express.Router();
const controllers = require('./controllers');

router.get('/', controllers.index);
router.get('/:id_pedido', controllers.single);
router.post('/', controllers.create);

module.exports = router;

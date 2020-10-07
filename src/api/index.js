const express = require('express');

const pedidos = require('./pedidos');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - Connected'
  });
});

router.use('/pedidos', pedidos);

module.exports = router;

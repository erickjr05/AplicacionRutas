const express = require('express');
const router = express.Router();
const logger = require('../middlewares/logger');

router.get('/route2', logger('Entraste a la ruta 2'), (req, res) => {
    res.send('Ruta 2');
});

module.exports = router;

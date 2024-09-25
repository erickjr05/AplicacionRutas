const express = require('express');
const router = express.Router();
const logger = require('../middlewares/logger');

router.get('/route1', logger('Entraste a la ruta 1'), (req, res) => {
    res.send('Ruta 1');
});

module.exports = router;

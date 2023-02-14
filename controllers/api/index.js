const router = require('express').Router();
const login = require('./login');
const trips = require('./tripRoutes');
const profile = require('./profile');

router.use('/profile', profile);
router.use('/login', login);
router.use('/trips', trips);

module.exports = router;
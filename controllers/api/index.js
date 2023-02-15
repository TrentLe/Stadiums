const router = require('express').Router();
const login = require('./login');
const trips = require('./tripRoutes');
const profile = require('./profile');
const location = require('./locationRoutes');

router.use('/profile', profile);
router.use('/login', login);
router.use('/trips', trips);
router.use('/location', location);

module.exports = router;
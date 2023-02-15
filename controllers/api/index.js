const router = require('express').Router();
const login = require('./login');
const trips = require('./tripRoutes');
const profile = require('./profile');
const location = require('./locationRoutes');
const userRoutes = require('./userRoutes');


router.use('/profile', profile);
router.use('/login', login);
router.use('/trips', trips);
router.use('/location', location);
router.use('/users', userRoutes);


module.exports = router;
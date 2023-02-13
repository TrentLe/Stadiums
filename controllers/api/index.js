const router = require('express').Router();
const userRoutes = require('./login');
const tripRoutes = require('./tripRoutes');


router.use('/userRoutes', userRoutes);
router.use('/trips', tripRoutes);

module.exports = router;
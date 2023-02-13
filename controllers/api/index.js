const router = require('express').Router();
const locationRoutes = require('./L');

const tripRoutes = require('./tripRoutes');


router.use('/locations', locationRoutes);
router.use('/trips', tripRoutes);

module.exports = router;
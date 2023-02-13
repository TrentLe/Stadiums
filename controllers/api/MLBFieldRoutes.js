const router = require('express').Router();
const MLB = require('./MLBFields');

// GET all locations
router.get('/', async (req, res) => {
  try {
    const locationData = await MLB.findAll();
    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single location
router.get('/:id', async (req, res) => {
  try {
    const locationData = await MLB.findByPk(req.params.id)
    res.json(locationData)

    if (!locationData) {
      res.status(404).json({ message: 'No location found with this id!' });
      return;
    }

    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

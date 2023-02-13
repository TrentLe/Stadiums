const router = require('express').Router();
const NBA = require('./NBAArenas');

// GET all locations
router.get('/', async (req, res) => {
  try {
    const locationData = await NBA.findAll();
    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single location
router.get('/:id', async (req, res) => {
  try {
    const locationData = await NBA.findByPk(req.params.id)
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

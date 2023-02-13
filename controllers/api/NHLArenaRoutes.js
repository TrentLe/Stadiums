const router = require('express').Router();
const NHL = require('./NHLArenas');

// GET all locations
router.get('/', async (req, res) => {
  try {
    const locationData = await NHL.findAll();
    res.status(200).json(locationData);
    res.render('index', { locationData })
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single location
router.get('/:id', async (req, res) => {
  try {
    const locationData = await NHL.findByPk(req.params.id)
    res.json(locationData)
    res.render('index', { locationData })

    if (!locationData) {
      res.status(404).json({ message: 'No location found with this id!' });
      return;
    }

    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});


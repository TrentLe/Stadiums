const routes = require('express').Router();
const { Location } = require('../models');

routes.get('/', async (req, res) => {
    try {
        const locationData = await Location.findAll();
        res.status(200).json(locationData);
    } catch (err) {
        res.status(500).json(err);
        console.log(err)
    }
    });

routes.get('/:id', async (req, res) => {
    try {
        const locationData = await Location.findByPk(req.params.id);
        res.status(200).json(locationData);
    } catch (err) {
        res.status(500).json(err);
        console.log(err)
    }
    });

    
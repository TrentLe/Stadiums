const routes = require('express').Router();
const { Location } = require('../../models');

routes.get('/', async (req, res) => {
    try {
        const locationData = await Location.findAll();
        res.status(200).json(locationData);
    } catch (err) {
        res.status(500).json(err);
        console.log(err)
    }
    });
    

    routes.get('/:sport', async (req, res) => {
        try {
            const locationData = await Location.findAll({
                where: {
                    sport: req.params.sport
                }
            });

            const locations = locationData.map((location) => location.get({ plain: true }))

            if (req.params.sport === 'MLB') {  
                res.render('MLB', { locations });
            } else if (req.params.sport === 'NFL') {
                res.render('NFL', { locations });
            } else if (req.params.sport === 'NBA') {
                res.render('NBA', { locations });
            } else if (req.params.sport === 'NHL') {
                res.render('NHL', { locations });
            } else  {
                res.status(404).json({ message: 'No location with this sport!' });
            }
        } catch (err) {
            res.status(500).json(err);
            console.log(err)
        }
        });



module.exports = routes;

    
const router = require('express').Router();
const userVisits = require('./locationModels');

// GET all visits
router.get('/', async (req, res) => {
    try {
        const visitData = await userVisits.findAll();
        res.status(200).json(visitData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET a single visit
router.get('/:id', async (req, res) => {
    try {
        const visitData = await userVisits.findByPk(req.params.id)
        res.json(visitData)

        if (!visitData) {
            res.status(404).json({ message: 'No visit found with this id!' });
            return;
        }

        res.status(200).json(visitData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// POST a new visit
router.post('/', async (req, res) => {
    try {
        const visitData = await userVisits.create(req.body);
        res.status(200).json(visitData);
    } catch (err) {
        res.status(400).json(err);
    }
}
);

// PUT a new visit
router.put('/:id', async (req, res) => {
    try {
        const visitData = await userVisits.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        if (!visitData) {
            res.status(404).json({ message: 'No visit found with this id!' });
            return;
        }
        res.status(200).json(visitData);
    } catch (err) {
        res.status(500).json(err);
    }
}
);

// DELETE a visit
router.delete('/:id', async (req, res) => {
    try {
        const visitData = await userVisits.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!visitData) {
            res.status(404).json({ message: 'No visit found with this id!' });
            return;
        }

        res.status(200).json(visitData);
    } catch (err) {
        res.status(500).json(err);
    }
}
);

module.exports = router;   // Export the router to be used in the server.js file
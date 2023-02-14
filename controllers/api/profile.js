const router = require('express').Router();
const { User, Location, Trip } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
        res.send(`Welcome back, ${req.session.user_id}!`);
        
    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/profile', withAuth, async (req, res) => {
    try {
        res.send(`This is your profile, ${req.session.user_id}!`);
        res.render('profile', {
            ...User,
            logged_in: true
            })
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
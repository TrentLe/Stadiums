const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');




router.get('/', async (req, res) => {
  try {
//     // Get all projects and JOIN with user data
//     const projectData = await locations.findAll({
//       include: [
//         {
//           model: User,
//           attributes: ['stadium_name'],
//         },
//       ],
//     });

//     // Serialize data so the template can read it
//     const projects = projectData.map((locations) => locations.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage')
  } catch (err) {
    res.status(500).json('Am i even working?');
    console.log(err)
  }
});


// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] }
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  // If the user is already logged in, redirect the request to another route
  try {
    
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
  
    res.render('login');
  } catch (err) {
    res.status(500).json(err);
    console.log(err)
  }
});

module.exports = router;

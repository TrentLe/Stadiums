const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');

// Import Express Handlebars
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers })
const path = require('path')

// Sets up the express app
const app = express();
const PORT = process.env.PORT || 3001;

//Setting handlebars.js as default engine
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))
app.use(require('./controllers/index'))

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening on: http://localhost:' + PORT));
});

// Add a session

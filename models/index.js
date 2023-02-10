const User = require('./User');
const NFL = require('./NFLStadiums');
const NBA = require('./NBAArenas');
const MLB = require('./MLBFields');
const NHL = require('./NHLArenas');
const Visits = require('./Visits');

User.belongsToMany(Location, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Visits,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'planned_trips'
});

Location.belongsToMany(User, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Visits,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'location_travellers'
});

module.exports = { NFL, NBA, MLB, NHL };


const sequelize = require("../config/connection");
const { NFL, NBA, MLB, NHL } = require("../models");

const NFLData = require("./NFLNames.json");
const NBAData = require("./NBANames.json");
const MLBData = require("./MLBNames.json");
const NHLData = require("./NHLNames.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await NFL.bulkCreate(NFLData);

  await NBA.bulkCreate(NBAData);

  await MLB.bulkCreate(MLBData);

  await NHL.bulkCreate(NHLData);

  process.exit(0);
};

seedDatabase();

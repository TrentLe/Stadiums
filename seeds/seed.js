const sequelize = require("../config/connection");
const { NFLStadiums, NBAArenas, MLBFields, NHLArenas } = require("../models");

const NFLData = require("./NFLNames.json");
const NBAData = require("./NBANames.json");
const MLBData = require("./MLBNames.json");
const NHLData = require("./NHLNames.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await NFLStadiums.bulkCreate(NFLData);

  await NBAArenas.bulkCreate(NBAData);

  await MLBFields.bulkCreate(MLBData);

  await NHLArenas.bulkCreate(NHLData);

  process.exit(0);
};

seedDatabase();

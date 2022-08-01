const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

const config = require('./index');

dotenv.config();

console.log("5555555555");
console.log(dotenv.config());
console.log("6666666666:",config.DB.USER);
console.log(process.env);

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD,
  {
    dialect: 'mysql',
    host: process.env.HOST,
    define: {
      timestamps: false,
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  });

(async () => await sequelize.sync())();

module.exports = sequelize;

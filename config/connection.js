require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = new Sequelize("heroku_1501c8a8796c005", "bd5b0ef25f72c3", "681759e1", {
      host: "us-cdbr-east-04.cleardb.com",
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;

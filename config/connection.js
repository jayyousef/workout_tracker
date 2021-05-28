
const Sequelize = require('sequelize');

let sequelize;

  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    },
  );

const databaseUrl = 'mongodb://[[USERNAME]]:[[PASSWORD]]@[[URL_1]],[[URL_2]],[[URL_3]]/[[COLLECTION_NAME]]?'+
    'replicaSet=[[REPLICA_SET_NAME]]&'+
    'ssl=true&authSource=admin';
const collections = ["zoo"];

module.exports = sequelize;


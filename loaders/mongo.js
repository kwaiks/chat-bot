const Mongoose = require('mongoose');
require('dotenv').config();

// Use native ES6 promises
Mongoose.Promise = global.Promise;
Mongoose.connect(process.env.MONGO_URL, { useMongoClient: true });

const db = Mongoose.connection;

db.on('error', (err) => {
    console.log(err)
  console.log(`MongoDB connection error \nPlease make sure MongoDB is running.`);
  process.exit();
});

db.once('open', () => {
    console.log('MongoDB connection with database succeeded.');
});

process.on('SIGINT', () => {
  db.close(() => {
    console.log('MongoDB connection disconnected through app termination.');
    process.exit();
  });
});

module.exports = db;
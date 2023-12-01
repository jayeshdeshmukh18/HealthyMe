const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
require('dotenv').config();
// console.log(process.env.mongoURL,'url')
// Set connection options
// const connectionOptions = {
//   poolSize: 10,
//   useNewUrlParser: true, // Use the new MongoDB driver's parser
//   useUnifiedTopology: true, // Use the new MongoDB driver's connection engine
// };

// Connect to the database and handle errors
const connection = mongoose.connect(process.env.mongoURL);


module.exports = {connection}
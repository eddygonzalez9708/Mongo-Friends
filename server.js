const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose')
const friendsController = require('./friends/friendsController'); 
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.get('/', (req, res) => {
  res.status(200).json({ api: 'running' });
});
server.use('/api/friends', friendsController); 

const port = process.env.PORT || 5000;

mongoose.Promise = global.Promise; 
mongoose.connect('mongodb://localhost/dbFriends', {}, (err) => {
  if (err) console.log('Database connection failed.'); 
  console.log('Successfully connected to MongoDB.'); 
}); 

server.listen(port, () => console.log(`\n=== API up on port: ${port} ===\n`));


/* * * * * * * * * * * * * * * * * * *
build the DB
* * * * * * * * * * * * * * * * * * */
/* (2019-11-15, Kate Ko) */


const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

// for the add posts
const posts = require('./fixtures/posts');



// const bcrypt = require('bcrypt');
// Improvement point: the password encryption

const uri = process.env.DB_CONNECTION;
MongoClient.connect(uri,{ useUnifiedTopology: true,useNewUrlParser: true }, function(err, client) {
   if(err) {
      console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }
   console.log('Connected...');
   // perform actions on the collection object

   // Define DB
   const db = client.db("final-project");

   // Add posts
   const colPost= db.collection('posts');
   colPost.drop();
   colPost.insertMany(posts, function(err, cursor) {
    if (err) {
      console.log('There was a problem');
    }
    console.log(cursor.insertedCount);
  });

  client.close();

});
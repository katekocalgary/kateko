/* * * * * * * * * * * * * * * * * * *
Set for DB , index page, module use, PORT 
* * * * * * * * * * * * * * * * * * */
/* (2019-11-15, Kate Ko) */


const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const favicon = require('serve-favicon');

const PostRouter = require('./routes/posts');
const DeleteRouter = require('./routes/delete');
const dotenv = require('dotenv').config();
const app = express();


// Message display using express-flash, cookie-parser, express-session middleware
// http://www.coding4developers.com/node-js/send-message-on-redirect-in-node-js-redirect-with-message-node-js-flash-message-in-node-js/
// https://gist.github.com/brianmacarthur/a4e3e0093d368aa8e423

const cookieParser = require('cookie-parser')
const flash = require('express-flash');
const session = require('express-session');

// To display message and sign in
app.use(session({
  secret: 'super-secret-key',
  key: 'super-secret-cookie',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));

// To display message
app.use(flash());
app.use(cookieParser());

//favicon
app.use(favicon(path.join(__dirname, '/assets/img', 'favicon.ico')));


// Set view engine 'ejs'
app.set('view engine','ejs'); 

// GET "/" hompage
app.get('/', function(request, response){
  response.render('index', {title: "Home", page:"index"} );
})

app.get('/project', function(request, response){
  response.render('project', {title: "Project", page:"project"} );
  
})

app.get('/about', function(request, response){
  response.render('about', {title: "About Kate", page:"about"} );
})

app.get('/contact', function(request, response){
  response.render('contact', {title:"Contact", page:"contact"} );
})


// Middleware for reading http post data
app.use(express.urlencoded({extended : false}));


// Create set connection.
mongoose.set('debug', true);
mongoose.connect(process.env.DB_CONNECTION, {useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
  console.log('DB Connected');
});


// Add route middleware
app.use('/posts', PostRouter);
app.use('/delete', DeleteRouter);



// Serve static assets
app.use(express.static(path.join(__dirname, 'assets')));

// Catch 404 error
app.use(function(req, res, next) {
  res.status(404);
  res.send('404: File Not Found');
});

// Set PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});


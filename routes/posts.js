/* * * * * * * * * * * * * * * * * * *
Router middleware for post
* * * * * * * * * * * * * * * * * * */
/* (2019-11-15, Kate Ko) */
// Update: 2019-12-10
// Note : modify for deleting post

const express = require('express');
const PostRouter = express.Router();
const Posts = require('../models/posts.js');
const moment = require('moment'); // Module to fix date format



// Get:/ - diplay posts page
PostRouter.get("/", async function(req, res, next){
    try{
        const posts = await Posts.find({}); 
        res.render('post', {posts: posts, title: "Guest Book", page : "posts"});
    } catch(err) {
        return res.status(500).send(err);
    }
})

// Get : posts/post-form - form page
PostRouter.get('/post-form', function(req, res){
    res.render('post-form',{title: "Guest Book - Write", page : "posts"});
  });


// Post : posts/post-form - form data insert to db
PostRouter.post('/', function(req, res){
    const posts = new Posts();
    posts.name = req.body.name ;
    posts.password = req.body.password ;
    posts.email = req.body.email;
    posts.summary = req.body.summary;
    posts.date = moment().format('MM/DD/YYYY') // using moment module for date format
 

    posts.save(function(err){
        if(err) {
            console.log(err);
            // display fail message and stay same page
            req.flash('postFailMsg', 'Sorry, please fill up both message and nick name');
            res.redirect('/posts/post-form');
        }
        else{
            // display thank you message and page
            req.flash('postSuccessMsg',`Thank you for your message!`);
            res.redirect('/posts');
        }
    });
});


// delete post get
PostRouter.get('/', function(req, res){
    Posts.findOne({id : req.params.id}, function (err, posts){
        res.render('../delete', {title: "Delete the message"});
    })
});


module.exports = PostRouter;



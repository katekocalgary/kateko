/* * * * * * * * * * * * * * * * * * *
Router middleware for deleting post
* * * * * * * * * * * * * * * * * * */
/* (2019-12-10, Kate Ko) */

const express = require('express');
const DeleteRouter = express.Router();
const Posts = require('../models/posts.js');


// Get:/ - diplay Delete page
DeleteRouter.get('/:id', function(req, res){
    console.log("hi delet page");
    const id = req.params.id
    res.render('delete',{ id: id, title: "Guest Book- Delete", page : "posts" });
  });


// Delete Post from DB

DeleteRouter.post('/', function(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const id = req.body.id;

    Posts.findOneAndDelete({_id: id , email: email , password: password}, function(err, output){
        if(err) console.error(err);
        if(!output) {
            req.flash('deleteFailMsg',`Please check email and password!`);
            res.redirect('/posts');
        }
        else {
            req.flash('deleteSuccessMsg',`Success to delete!`);
            res.redirect('/posts');
        }
    })
})




module.exports = DeleteRouter;



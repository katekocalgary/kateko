/* * * * * * * * * * * * * * * * * * *
DB Schema for data collection 'posts'
* * * * * * * * * * * * * * * * * * */
/* (2019-11-15, Kate Ko) */

const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
    {       
        name : {
            type: String,
            required: true
        },
        password : {
            type: String,
            required: true
        },
        email : {
            type: String,
            required: true
        },
        summary : {
            type: String,
            required: true
        },
        date : {
            type : String,
            required: true
        }
    }
);

const Posts = mongoose.model('Posts', postSchema);

module.exports = Posts;
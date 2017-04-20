/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var mongoose = require('mongoose');

var commentSchema = mongoose.Schema({

    date: Date,
    message: String
});

var Comment = mongoose.model('comment',commentSchema);

module.exports = Comment;       // exporttaa moduulin jotta moduulia voidaan käyttää
                                // require() avulla

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

    // EI TOIMI 
    
var omaPath = require('mongoose');
//var asd =       ("sivusto/models/comment.js")
var Comment = require("/../../models/comment.js");

switch (app.get('env')) {
  case 'development':
      mongoose.connect("mongodb://Joonas:Joonas@ds155150.mlab.com:55150/joonasaaltonen", opts);
      break;

  default:
    throw new Error('Unknown execution environment:' + app.get('env'));

}

// get all the users
Comment.find({}, function(err, users) {
  if (err) throw err;

  // object of all the users
  console.log("Comments.js:");
  console.log(users);
});


// http://stackoverflow.com/questions/9230932/file-structure-of-mongoose-nodejs-project
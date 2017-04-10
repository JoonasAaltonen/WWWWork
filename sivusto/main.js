var express = require("express");

var app = express();

var exphbs = require("express-handlebars");

var mongoose = require('mongoose');

var User = require('./models/user.js');

var opts = {
    server: {
      socketOptions: {keepAlive: 120}
    }
};


switch (app.get('env')) {
  case 'development':
      mongoose.connect('mongodb://USER:PASSU@ds155150.mlab.com:55150/lomasivu', opts);
      break;

  default:
    throw new Error('Unkwon execution environment:'+app.get('env'));

}

User.find(function(err,users){

    if(err){
      console.err(err);
    }

    if(users.length){
      return;
    }

new User({

     username: 'admin',
     password: 'admin'

   }).save();


});


// get all the users
User.find({}, function(err, users) {
  if (err) throw err;

  // object of all the users
  console.log(users);
});


app.engine(".hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine",".hbs");


var helpers = require('handlebars-helpers');

app.set("port", process.env.PORT || 3000);

app.get("/", function(req, res)
{
    res.render("home");
});

app.get("/admin", function(req, res)
{
    res.render("adminPanel");
});

app.get("/login", function(req, res)
{
    User.find({ available:true },function(err,user){
      var context = {
        user: user.map(function(user){
          return{
            username: user.username,
            password: user.password
          };
        })
      };
    res.render("login",context);
  });
});

app.get("/thread", function(req, res)
{
    res.render("thread");
});

app.get("/about", function(req, res)
{
    res.render("about");
});

app.use(function(req, res)
{
    res.type("text/html");
    res.status(404);
    res.send("<h1>404 - Resurssia ei löytynyt</h1>");
});

app.use(function(err, req, res, next)
{
    res.type("text/html");
    res.status(500);
    res.send("<h1>Error 500 - Virhe palvelinpuolella</h1>");
    console.log(err.stack);
});

app.listen(app.get("port"), function()
{
   console.log("Keskustelulauta käynnissä http://localhost:" + app.get("port") +
           " sammuta ctrl+c");

});

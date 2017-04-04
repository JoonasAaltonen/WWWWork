var express = require("express");

var app = express();

var exphbs = require("express-handlebars");

app.engine(".hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine",".hbs");

app.set("port", process.env.PORT || 3000);

app.get("", function(req, res)
{
    res.render("home");
});

app.get("/admin", function(req, res)
{
    res.render("adminPanel");
});

app.get("/login", function(req, res)
{
    res.render("login");
});

app.get("/thread", function(req, res)
{
    res.render("thread");
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
   console.log("Web-palvelin käynnissä http://localhost:" + app.get("port") + 
           " sammuta ctrl+c"); 
});

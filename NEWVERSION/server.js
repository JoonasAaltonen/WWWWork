const express = require('express');
const bodyParser= require('body-parser')
const app = express();

app.use(express.static(__dirname + "/public"));
const MongoClient = require('mongodb').MongoClient

var db

MongoClient.connect('mongodb://admin:mgjapt11mgj@ds155150.mlab.com:55150/lomasivu', (err, database) => {

  if (err) return console.log(err)
  db = database
  app.listen(3000, () => {
    console.log('Kuunnellaan porttia:3000')
  })

})

app.set('view engine','ejs')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/',function(req,res){

    res.render('startpage.ejs' )
  })

app.get('/login',function(req,res){

    res.render('login.ejs' )
  })

app.get('/admin',function(req,res){

    res.render('adminpanel.ejs' )
  })

app.get('/thread',function(req,res){

  db.collection('viestit').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.render('thread.ejs', {viestit: result})
  })

})


app.post('/viestit', (req, res) => {

  db.collection('viestit').save(req.body, (err, result) => {
   if (err) return console.log(err)
   console.log('Tallennettu tietokantaan')
   res.redirect('/thread')
 })

})


app.post('/addnewuser', (req, res) => {
  db.collection('adminit').save(req.body, (err, result) => {
   if (err) return console.log(err)
   console.log('Tallennettu tietokantaan')
   res.redirect('/admin')
 })

})

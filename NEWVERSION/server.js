const express = require('express');
const bodyParser= require('body-parser')
const app = express();


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

  db.collection('viestit').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.render('index.ejs', {viestit: result})
  })

});

app.post('/viestit', (req, res) => {

  db.collection('viestit').save(req.body, (err, result) => {
   if (err) return console.log(err)
   console.log('Tallennettu tietokantaan')
   res.redirect('/')
 })

})

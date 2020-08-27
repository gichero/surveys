const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })

const app = express();

app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app)

const PORT = process.env.PORT || 5000
app.listen(PORT);

//PROD
//mongoDB
//mongodb+srv://agichero:<password>@cluster0.1vjrq.mongodb.net/<dbname>?retryWrites=true&w=majority
//oauth
//clientID
//496808892081-21nmk3p9bu2ho5dl6voaoao518t26g6c.apps.googleusercontent.com
//clientSecret
//sH7ZjTSSeu2G00Eclxeo003b


//DEV
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://soma:<password>@cluster0.oi8ga.mongodb.net/<dbname>?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

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
//mongodb+srv://agichero:gath8ng8@cluster0.cr9tt.mongodb.net/barua-prod?retryWrites=true&w=majority
//oauth
//clientID
//496808892081-36sncbl7rlnevp90mijaq633hotabtdo.apps.googleusercontent.com
//clientSecret
//oI6T-5Z3DuwUVrRN08w7nwzT




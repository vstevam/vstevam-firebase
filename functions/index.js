const functions = require('firebase-functions');
const express = require("express");
const router = require('./router');
const path = require('path');
const app = express();


// set view engine to ejs
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// mount harp into express
app.use(express.static(path.join(__dirname, './views')));
// app.use(harp.mount("./views"));
app.use('/', router);

// Errors
app.use( (req, res) => {
    res.status(404);

    res.format({
        html: () => {
            res.render('404', { url: req.url })
        },
        json: () => {
            res.json({ error: 'Not found' })
        },
        default: () => {
            res.type('txt').send('Not found')
        }
    })
});


// app.listen(8080, () => console.log(`server online!`));

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.app = functions.https.onRequest(app);


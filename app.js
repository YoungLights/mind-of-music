const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'assets')));

app.engine('hbs', hbs({
    extname: 'hbs',
    partialsDir: __dirname + '/views/inc'
}));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/impressum', (req, res) => {
    res.render('impressum');
});

app.get('/datenschutz', (req, res) => {
    res.render('datenschutz');
});

app.listen(process.env.PORT || 3000, () => {
    console.log('App is running on port 3000....');
});

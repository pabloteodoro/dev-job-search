const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const path = require('path');
const db = require('./db/connection');
const bodyParser = require('body-parser');


const port = process.env.PORT || 4002;

app.listen(port,() => {
    console.log(`Server is running on http://localhost:${port}`);
});

// body parser
app.use(bodyParser.urlencoded({ extended: false }));

// handlebars
app.set('views', path.join(_dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


// db connection

db
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

// routes
app.get('/', (req, res) => {
    res.send('Server OKAY');
});


app.use('/jobs', require('./routes/jobs'));



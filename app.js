const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const Job = require('./models/Job');
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
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs.engine({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');

// static folder
app.use(express.static(path.join(__dirname, 'public')));


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

    let search = req.query.job;
    if(!search) {
        Job.findAll({order: [
            ['createdAt', 'DESC']
        ]})
       .then(jobs => {
    
        res.render('index', { 
            jobs 
        });
    
    });
    }

});


app.use('/jobs', require('./routes/jobs'));



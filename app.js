const express = require('express');
const app = express();
const db = require('./db/connection');


const port = process.env.PORT || 4002;

app.listen(port,() => {
    console.log(`Server is running on http://localhost:${port}`);
});

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



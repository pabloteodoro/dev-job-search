const express = require('express');
const app = express();
const db = require('./db/connection');


const PORT = 3002;

app.listen(PORT, function() {
    console.log(`Server is running on http://localhost:${PORT}`);
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



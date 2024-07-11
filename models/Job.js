//  this file is responsible for creating the Job model
const Sequelize = require('sequelize');

// db connection
const db = require('../db/connection');

// Job model
// create a new table in the database
const Job = db.define('job', {
    title: {
        type: Sequelize.STRING,
    },
    description: {
        type: Sequelize.STRING,
    },
    salary: {
        type: Sequelize.STRING,
    },
    company: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    },
    new_job: {
        type: Sequelize.INTEGER,
    }
});


module.exports = Job;  // export the Job model

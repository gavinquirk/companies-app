const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

const SELECT_ALL_COMPANIES_QUERY = 'SELECT * FROM companies';

// Create Connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'gq_assignment',
})

// Connect
connection.connect(err => {
    if(err) {
        return err;
    }
});

app.use(cors());

// Home Route  
app.get('/', (req, res) => {
    res.send('go to /companies to see companies')
});

// app.get('/companies/details', (req, res) => {

// })

// Companies Route
app.get('/companies', (req, res) => {
    connection.query(SELECT_ALL_COMPANIES_QUERY, (err, results) => {
        if(err) {
            return res.send(err)
        } else {
            return res.json({
                data: results
            })
        }
    })
})



// Listen
app.listen(4000, () => {
    console.log('Server listening on port 4000');
});
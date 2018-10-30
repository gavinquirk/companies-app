const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

// Create Connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'gq_assignment',
})

// Connection
connection.connect(err => {
    if(err) {
        return err;
    }
});

// Middleware
app.use(cors());

// Companies API Route
app.get('/api/companies', (req, res) => {
    connection.query('SELECT * FROM companies', (err, results) => {
        if(err) {
            return res.send(err)
        } else {
            return res.json({
                data: results
            })
        }
    })
})

// Properties API Route
app.get('/api/properties/:company_id', (req, res) => {
    connection.query('SELECT * FROM properties WHERE company_id=?', [req.params.company_id], (err, results) => {
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
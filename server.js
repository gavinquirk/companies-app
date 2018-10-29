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

// Companies Route
app.get('/companies', (req, res) => {
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

// Properties Route
app.get('/properties', (req, res) => {
    connection.query('SELECT * FROM properties', (err, results) => {
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
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

// Create connection to MySQL database
const db = mysql.createConnection({
    host: 'sql12.freesqldatabase.com',
    user: 'sql12724285',
    password: 'Yp15MwJYcm',
    database: 'sql12724285',
    port: 3306
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to the database.');
});

// Create a route to fetch data from the table
app.get('/api/data', (req, res) => {
    const query = 'SELECT * FROM requests';
    db.query(query, (err, results) => {
        if (err) {
            res.status(500).send('Error fetching data');
        } else {
            res.json(results);
        }
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

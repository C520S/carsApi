const mysql = require('mysql');
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'sqc12580',
    database: 'carsdb'
});
module.exports = connection;
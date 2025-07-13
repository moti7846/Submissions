import {config} from 'dotenv';
import mysql from 'mysql2/promise';
config();

const connection = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: '',
    database: 'classicmodels'
});

export default connection;
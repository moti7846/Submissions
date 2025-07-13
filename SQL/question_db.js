import pool from './db config.js'


export async function question1( req , res ){
    const [rows] = await pool.query("SELECT count(*) as 'customers in France' FROM customers WHERE country = 'France';");
    res.json(rows)
}

export async function question2( req , res ){
    const [rows] = await pool.query("SELECT `firstName`,`lastName` FROM employees where `reportsTo` = 1143;");
    res.json(rows)
}

export async function question3( req , res ){
    const [rows] = await pool.query("SELECT COUNT(*) as 'Classic Cars in products' FROM `products` WHERE `productLine` ='Classic Cars';");
    res.json(rows)
}
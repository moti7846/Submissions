import pool from './db.config.js'


export async function getCustomersFromFranceCount( req , res ){
    try {
        const [rows] = await pool.query("SELECT count(*) as 'customers in France' FROM customers WHERE country = 'France';");
        res.json(rows)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export async function getEmployeesReportingToManager1143( req , res ){
    try {
        const [rows] = await pool.query("SELECT `firstName`,`lastName` FROM employees where `reportsTo` = 1143;");
        res.json(rows)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export async function getEmployeesReportingToManager( req , res ){
    try {
        const id = req.params.id
        const [rows] = await pool.query("SELECT `firstName`,`lastName` FROM employees where `reportsTo` = ?;", id);
        res.json(rows)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export async function getClassicCarsProductCount( req , res ){
    try {
        const [rows] = await pool.query("SELECT COUNT(*) as 'Classic Cars in products' FROM `products` WHERE `productLine` ='Classic Cars';");
        res.json(rows)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}